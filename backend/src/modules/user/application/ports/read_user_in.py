"""
Input port for reading a user.
"""
from uuid import UUID
from typing import List
from abc import ABC, abstractmethod
from uuid import UUID
from ..schemas import UserResponse

class ReadUserIn(ABC):
    """
    Abstract interface for the ReadUser use case.
    """

    @abstractmethod
    async def execute(self, user_id: UUID) -> UserResponse:
        pass


class ReadAllUserIn(ABC):
    """
    Abstract interface for the ReadAllUser use case.
    """

    @abstractmethod
    async def execute(self) -> List[UserResponse]:
        pass
