"""
D1 Implementation of the User Repository.
"""
from uuid import UUID
from typing import List
from modules.user.domain.user import User
from modules.user.domain.repository_out import UserRepositoryOut
from shared import D1Database
from shared.infrastructure.utils import js_proxy_to_py


class D1UserRepository(UserRepositoryOut):
    """
    Implementation of the UserRepositoryOut port using Cloudflare D1.
    """

    def __init__(self, db: D1Database) -> None:
        """
        Args:
            db: The Cloudflare D1 binding for the ubuntu_desktop_db database,
                as defined in wrangler.jsonc under ``d1_databases[].binding``.
        """
        self.db = db

    async def save(self, user: User) -> None:
        """
        Saves a user to the D1 database.
        """
        query = """
            INSERT INTO users (id, username, password_hash, email, is_active, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                username = excluded.username,
                password_hash = excluded.password_hash,
                email = excluded.email,
                is_active = excluded.is_active,
                updated_at = excluded.updated_at
        """
        await self.db.prepare(query).bind(
            str(user.id),
            user.username,
            user.password_hash,
            user.email,
            1 if user.is_active else 0,
            user.created_at.isoformat(),
            user.updated_at.isoformat()
        ).run()

    async def find_by_email_or_username(self, email: str, username: str) -> User | None:
        """
        Finds a user by email or username in the D1 database.
        """
        query = "SELECT * FROM users WHERE email = ? OR username = ?"
        row = await self.db.prepare(query).bind(email, username).first()
        if not row:
            return None
        
        return User(**js_proxy_to_py(row))

    async def find_by_username(self, username: str) -> User | None:
        """
        Finds a user by username in the D1 database.
        """
        query = "SELECT * FROM users WHERE username = ?"
        row = await self.db.prepare(query).bind(username).first()
        if not row:
            return None

        return User(**js_proxy_to_py(row))

    async def find_by_id(self, user_id: UUID) -> User | None:
        """
        Finds a user by ID in the D1 database.
        """
        query = "SELECT * FROM users WHERE id = ?"
        row = await self.db.prepare(query).bind(str(user_id)).first()
        if not row:
            return None
            
        return User(**js_proxy_to_py(row))

    async def find_all(self) -> List[User]:
        query = "SELECT * FROM users"
        rows = await self.db.prepare(query).all()
        if not rows.results:
            return []
        return [User(**js_proxy_to_py(row)) for row in rows.results]

    async def delete(self, user_id: UUID) -> None:
        """
        Deletes a user by ID in the D1 database.
        """
        query = "DELETE FROM users WHERE id = ?"
        await self.db.prepare(query).bind(str(user_id)).run()
        