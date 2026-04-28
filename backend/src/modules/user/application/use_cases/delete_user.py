from uuid import UUID
from shared import ResourceNotFoundException
from modules.user.application.ports.delete_user_in import DeleteUserIn
from modules.user.domain.repository_out import UserRepositoryOut

class DeleteUser(DeleteUserIn):
    """
    Use case for deleting a user.
    """

    def __init__(self, repo: UserRepositoryOut):
        self.repo = repo

    async def execute(self, user_id: UUID) -> None:
        user = await self.repo.find_by_id(user_id)
        if not user:
            raise ResourceNotFoundException(f"User with ID {user_id} not found")
        
        await self.repo.delete(user_id)
