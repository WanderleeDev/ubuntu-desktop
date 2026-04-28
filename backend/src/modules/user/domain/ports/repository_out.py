"""
Output port for user persistence.
"""
from abc import ABC, abstractmethod
from ..user import User

class UserRepositoryOut(ABC):
    """
    Abstract interface for user data operations.
    """
    
    @abstractmethod
    async def save(self, user: User) -> None:
        """
        Persists a new user or updates an existing one.
        """
        pass

    @abstractmethod
    async def find_by_email(self, email: str) -> User | None:
        """
        Retrieves a user by their email address.
        """
        pass

    @abstractmethod
    async def find_by_id(self, user_id: str) -> User | None:
        """
        Retrieves a user by their unique ID.
        """
        pass
