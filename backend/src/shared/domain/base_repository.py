"""
Abstract Base Repository interface for Hexagonal Architecture.
"""
from abc import ABC, abstractmethod
from typing import Generic, TypeVar

# T is the Entity type
T = TypeVar('T')
# ID is the Entity's identifier type
ID = TypeVar('ID', bound=str | int)

class BaseRepository(ABC, Generic[T, ID]):
    """
    Abstract base repository providing standard CRUD operations.
    """

    @abstractmethod
    async def save(self, entity: T) -> None:
        """
        Persists a new entity or updates an existing one.
        """
        pass

    @abstractmethod
    async def find_by_id(self, id: ID) -> T | None:
        """
        Retrieves an entity by its unique identifier.
        """
        pass

    @abstractmethod
    async def find_all(self) -> list[T]:
        """
        Retrieves all entities.
        """
        pass

    @abstractmethod
    async def delete(self, id: ID) -> None:
        """
        Deletes an entity by its unique identifier.
        """
        pass
