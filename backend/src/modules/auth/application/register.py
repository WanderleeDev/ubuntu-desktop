"""
Implementation of the User Registration use case.
"""
from modules.user.domain import UserRepositoryOut
from modules.auth.domain.ports.register_in import RegisterIn

class Register(RegisterIn):
    """
    Handles the registration of new users.
    """
    
    def __init__(self, user_repo: UserRepositoryOut):
        self.user_repo = user_repo

    async def execute(self, username: str, email: str, password: str) -> None:
        """
        Flow:
        1. Check if a user with the same email/username already exists.
        2. Hash the provided password.
        3. Create a new User domain entity.
        4. Persist the new user using user_repo.
        5. (Optional) Trigger a welcome email or verification flow.
        """
        # TODO: Implement logic
        raise NotImplementedError()
