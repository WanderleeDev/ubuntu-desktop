"""
Input port for the logout use case.
"""
from abc import ABC, abstractmethod
from uuid import UUID

class LogoutIn(ABC):
    """
    Defines the contract for the Logout functionality.
    """
    
    @abstractmethod
    async def execute(self, jti: UUID) -> None:
        """
        Invalidates an active session.
        
        Args:
            jti: Unique token identifier (JWT ID) to invalidate.
        """
        pass
