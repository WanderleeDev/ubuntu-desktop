"""
Shared Pydantic schemas for the infrastructure layer.
"""
from pydantic import BaseModel

class MessageResponse(BaseModel):
    """
    A simple response schema containing a message.
    """
    message: str
