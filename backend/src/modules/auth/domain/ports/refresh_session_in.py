"""
Input port for the session refresh use case.
"""
from abc import ABC, abstractmethod
from ..model import UserSession

class RefreshSessionIn(ABC):
    """
    Defines the contract for the token refresh functionality.
    """
    
    @abstractmethod
    async def execute(self, refresh_token: str) -> UserSession:
        """
        Validates a refresh token and generates a new session (or new tokens).
        
        Args:
            refresh_token: The refresh token sent by the client.
            
        Returns:
            UserSession: The data of the newly generated session.
        """
        pass
