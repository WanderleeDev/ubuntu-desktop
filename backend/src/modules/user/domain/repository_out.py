"""
Output port for user persistence.
"""
from uuid import UUID
from typing import List
from abc import ABC, abstractmethod
from .user import User

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
    async def find_by_email_or_username(self, email: str, username: str) -> User | None:
        """
        Retrieves a user by their email address or username.
        """
        pass

    @abstractmethod
    async def find_by_username(self, username: str) -> User | None:
        """
        Retrieves a user by their username.
        """
        pass

    @abstractmethod
    async def find_by_id(self, user_id: UUID) -> User | None:
        """
        Retrieves a user by their unique ID.
        """
        pass

    @abstractmethod
    async def find_all(self) -> List[User]:
        """
        Retrieves all users.
        """
        pass

    @abstractmethod
    async def delete(self, user_id: UUID) -> None:
        """
        Deletes a user by their unique ID.
        """
        pass
