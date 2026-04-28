"""
Input port for the password recovery use case.
"""
from abc import ABC, abstractmethod

class RecoverPasswordIn(ABC):
    """
    Defines the contract for the account recovery functionality.
    """
    
    @abstractmethod
    async def execute(self, email: str) -> None:
        """
        Initiates the password recovery process by sending an email to the user.
        
        Args:
            email: Email address of the account to recover.
        """
        pass
