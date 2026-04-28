"""
Domain module for authentication models.
"""
from pydantic import BaseModel, Field
from datetime import datetime
from uuid import UUID, uuid4

class UserSession(BaseModel):
    """
    Represents an active user session in the system.
    Used to manage the lifecycle of Refresh Tokens.
    """
    id: UUID = Field(default_factory=uuid4, description="Unique session ID")
    jti: UUID = Field(default_factory=uuid4, description="Unique token identifier (JWT ID) for fast revocation")
    user_id: UUID = Field(..., description="ID of the user who owns the session")
    refresh_token: str = Field(..., description="The refresh token associated with the session")
    is_revoked: bool = Field(default=False, description="Indicates if the session has been manually revoked")
    expires_at: datetime = Field(..., description="Session expiration date")
    created_at: datetime = Field(default_factory=datetime.now, description="Session creation date")
