from modules.user.domain.repository_out import UserRepositoryOut
from shared import ResourceAlreadyExistsException
from shared.domain.password_hasher_out import PasswordHasher
from modules.user.domain.user import User
from modules.user.application.ports.create_user_in import CreateUserIn
from modules.user.application.schemas import CreateUserRequest

class CreateUser(CreateUserIn):
    def __init__(
        self,
        repo: UserRepositoryOut,
        hasher: PasswordHasher
    ):
        self.repo = repo
        self.hasher = hasher

    async def execute(self, request: CreateUserRequest) -> None:
        exists_user = await self.repo.find_by_email_or_username(request.email, request.username)
        if exists_user:
            raise ResourceAlreadyExistsException("User already exists")
        
        hashed_password = self.hasher.hash(request.password)
        user = User(username=request.username, email=request.email, password_hash=hashed_password)
        await self.repo.save(user)