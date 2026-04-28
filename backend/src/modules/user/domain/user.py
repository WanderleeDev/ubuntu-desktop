"""
Domain module for user entities.
"""
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field
from uuid import UUID, uuid4

class User(BaseModel):
    """
    Represents a user account in the system.
    """
    id: UUID = Field(default_factory=uuid4, description="Unique user ID")
    username: str = Field(..., description="Unique username")
    password_hash: str = Field(..., description="Hashed password")
    email: EmailStr = Field(..., description="User's validated email address")
    is_active: bool = Field(default=True, description="Whether the user account is active")
    
    created_at: datetime = Field(default_factory=datetime.now, description="When the user was created")
    updated_at: datetime = Field(default_factory=datetime.now, description="When the user was last updated")
