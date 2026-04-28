"""
Input port for the login use case.
"""
from abc import ABC, abstractmethod
from ..model import UserSession

class LoginIn(ABC):
    """
    Defines the contract for the Login functionality.
    """
    
    @abstractmethod
    async def execute(self, username: str, password: str) -> UserSession:
        """
        Executes the login logic.
        
        Args:
            username: Username or email.
            password: Plain text password.
            
        Returns:
            UserSession: The session created after a successful login.
        """
        pass
