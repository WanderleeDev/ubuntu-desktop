"""
Implementation of the Logout use case.
"""
from uuid import UUID
from ..domain.ports.logout_in import LogoutIn
from ..domain.ports.repository_out import UserSessionRepositoryOut

class Logout(LogoutIn):
    """
    Handles the invalidation of user sessions.
    """
    
    def __init__(self, session_repo: UserSessionRepositoryOut):
        self.session_repo = session_repo

    async def execute(self, jti: UUID) -> None:
        """
        Flow:
        1. Find the session by JTI using session_repo.
        2. If found, mark the session as revoked (is_revoked = True).
        3. Save the updated session state.
        """
        # TODO: Implement logic
        raise NotImplementedError()
