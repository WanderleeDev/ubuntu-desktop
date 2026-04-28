"""
Implementation of the Refresh Session use case.
"""
from ..domain.ports.refresh_session_in import RefreshSessionIn
from ..domain.ports.repository_out import UserSessionRepositoryOut
from ..domain.model import UserSession

class RefreshSession(RefreshSessionIn):
    """
    Handles the generation of new sessions using a refresh token.
    """
    
    def __init__(self, session_repo: UserSessionRepositoryOut):
        self.session_repo = session_repo

    async def execute(self, refresh_token: str) -> UserSession:
        """
        Flow:
        1. Search for a session with the matching refresh_token.
        2. Validate that the session is not revoked and not expired.
        3. Revoke the old session (optional: depends on security policy).
        4. Create a new UserSession with a new JTI and expiration.
        5. Persist the new session and return it.
        """
        # TODO: Implement logic
        raise NotImplementedError()
