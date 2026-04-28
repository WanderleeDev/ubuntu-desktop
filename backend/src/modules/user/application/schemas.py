"""
HTTP request / response schemas (DTOs) for the User module.

These models live in the infrastructure layer and represent the API contract.
They are deliberately separate from the domain ``User`` entity to:

- Avoid exposing internal fields (e.g. ``password_hash``) in responses.
- Accept raw user input (e.g. plain ``password``) without polluting the domain.
- Allow the API surface to evolve independently from the domain model.

Pattern
-------
``UserBase``          — shared validated fields.
``CreateUserRequest`` — body for POST /users  (client → server).
``UpdateUserRequest`` — body for PATCH /users (partial, all optional).
``UserResponse``      — shape returned to the client (server → client).
"""

from uuid import UUID
from datetime import datetime
from pydantic import BaseModel, EmailStr, ConfigDict, Field, field_validator


# ---------------------------------------------------------------------------
# Base  (shared fields, acts as the "Pick" of the domain entity)
# ---------------------------------------------------------------------------


class UserBase(BaseModel):
    """
    Fields shared across request and response schemas.

    Equivalent to TypeScript's:
        Pick<User, 'username' | 'email'>
    """
    username: str
    email: EmailStr


# ---------------------------------------------------------------------------
# Requests  (client → server)
# ---------------------------------------------------------------------------


class CreateUserRequest(UserBase):
    """
    Body for POST /users.

    Extends UserBase adding the raw password (plain text).
    The Use Case is responsible for hashing it before persisting.
    """
    password: str = Field(
        ..., 
        min_length=8, 
        max_length=20, 
        description="Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )

    @field_validator('password')
    @classmethod
    def validate_password_complexity(cls, v: str) -> str:
        import re
        if not re.match(r"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$", v):
            raise ValueError("Password must contain at least one uppercase letter, one lowercase letter, and one number")
        return v


class UpdateUserRequest(BaseModel):
    """
    Body for PATCH /users/{user_id}.

    All fields are optional — only the supplied fields will be updated.
    Equivalent to TypeScript's:
        Partial<Pick<User, 'username' | 'email'>>
    """
    username: str | None = None
    email: EmailStr | None = None


# ---------------------------------------------------------------------------
# Responses  (server → client)
# ---------------------------------------------------------------------------


class UserResponse(UserBase):
    """
    Returned by GET /users/{user_id} and POST /users.

    Sensitive fields (password_hash) are intentionally excluded.
    ``from_attributes=True`` allows building this directly from the domain
    ``User`` entity via ``UserResponse.model_validate(user)``.
    """
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    is_active: bool
    created_at: datetime
    updated_at: datetime
