from uuid import UUID
from shared import ResourceNotFoundException
from modules.user.application.ports.read_user_in import ReadUserIn, ReadAllUserIn
from modules.user.domain.repository_out import UserRepositoryOut
from modules.user.application.schemas import UserResponse

class ReadUser(ReadUserIn):
    """
    Use case for retrieving a user's details.
    """

    def __init__(self, repo: UserRepositoryOut):
        self.repo = repo

    async def execute(self, user_id: UUID) -> UserResponse:
        user = await self.repo.find_by_id(user_id)
        if not user:
            raise ResourceNotFoundException(f"User with ID {user_id} not found")
        return UserResponse.model_validate(user)

class ReadAllUser(ReadAllUserIn):
    """
    Use case for retrieving all users.
    """
    def __init__(self, repo: UserRepositoryOut):
        self.repo = repo

    async def execute(self) -> list[UserResponse]:
        users = await self.repo.find_all()
        return [UserResponse.model_validate(u) for u in users]
        