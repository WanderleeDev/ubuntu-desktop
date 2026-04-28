"""
Shared FastAPI dependency providers.

Usage in a route::

    from shared.di import D1DatabaseDep

    @router.post("/")
    async def create_user(body: CreateUserRequest, db: D1DatabaseDep):
        ...
"""
from typing import Annotated

from fastapi import Depends, Request

from shared.infrastructure.cloudflare_types import D1Database
from shared.infrastructure.native_password_hasher import NativePasswordHasher
from shared.domain.password_hasher_out import PasswordHasher

async def get_db(req: Request) -> D1Database:
    """
    FastAPI dependency that extracts the D1 binding from the Workers env.
    """
    return req.scope["env"].ubuntu_desktop_db


async def get_password_hasher() -> PasswordHasher:
    """
    Provides the PasswordHasher implementation.
    """
    return NativePasswordHasher()


# Annotated aliases for route injection
D1DatabaseDep = Annotated[D1Database, Depends(get_db)]
PasswordHasherDep = Annotated[PasswordHasher, Depends(get_password_hasher)]