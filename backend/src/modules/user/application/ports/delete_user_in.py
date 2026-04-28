"""
Input port for deleting a user.
"""
from abc import ABC, abstractmethod
from uuid import UUID

class DeleteUserIn(ABC):
    """
    Abstract interface for the DeleteUser use case.
    """

    @abstractmethod
    async def execute(self, user_id: UUID) -> None:
        """
        Executes the user deletion process.
        """
        pass
