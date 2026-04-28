"""
Implementation of the Login use case.
"""
from ..domain.ports.login_in import LoginIn
from ..domain.ports.repository_out import UserSessionRepositoryOut
from ...user.domain.ports.repository_out import UserRepositoryOut
from ..domain.model import UserSession

class Login(LoginIn):
    """
    Handles the user authentication process.
    """
    
    def __init__(
        self, 
        user_repo: UserRepositoryOut, 
        session_repo: UserSessionRepositoryOut
    ):
        self.user_repo = user_repo
        self.session_repo = session_repo

    async def execute(self, username: str, password: str):
        """
        Flow:
        1. Find the user by username/email using user_repo.
        2. Validate the provided password against the stored hash.
        3. If valid, create a new UserSession.
        4. Persist the session using session_repo.
        5. Return the created session.
        """
        # TODO: Implement logic
        raise NotImplementedError()
