"""
Output port for user session persistence.
"""
from abc import ABC, abstractmethod
from uuid import UUID
from ..model import UserSession

class UserSessionRepositoryOut(ABC):
    """
    Abstract interface defining allowed operations on the session repository.
    Must be implemented in the infrastructure layer.
    """
    
    @abstractmethod
    async def save(self, session: UserSession) -> None:
        """
        Persists a new session or updates an existing one.
        """
        pass

    @abstractmethod
    async def find_by_jti(self, jti: UUID) -> UserSession | None:
        """
        Retrieves a session by its unique identifier (JTI).
        """
        pass

    @abstractmethod
    async def revoke_by_jti(self, jti: UUID) -> None:
        """
        Marks a specific session as revoked.
        """
        pass

    @abstractmethod
    async def revoke_all_by_user_id(self, user_id: UUID) -> None:
        """
        Revokes all active sessions for a given user.
        """
        pass
