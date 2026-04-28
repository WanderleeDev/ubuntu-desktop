"""
Input port for creating a user.
"""
from abc import ABC, abstractmethod
from ..schemas import CreateUserRequest

class CreateUserIn(ABC):
    """
    Abstract interface for the CreateUser use case.
    """

    @abstractmethod
    async def execute(self, request: CreateUserRequest) -> None:
        """
        Executes the user creation process.
        """
        pass
