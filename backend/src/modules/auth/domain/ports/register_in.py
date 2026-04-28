"""
Input port for the user registration use case.
"""
from abc import ABC, abstractmethod

class RegisterIn(ABC):
    """
    Defines the contract for the Registration functionality.
    """
    
    @abstractmethod
    async def execute(self, username: str, email: str, password: str) -> None:
        """
        Registers a new user in the system.
        
        Args:
            username: Chosen username.
            email: User's email address.
            password: Plain text password (will be hashed in the implementation).
        """
        pass
