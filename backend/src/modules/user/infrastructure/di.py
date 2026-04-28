"""
Dependency Injection providers for the User module.
"""
from typing import Annotated
from fastapi import Depends
from shared.infrastructure.di import D1DatabaseDep, PasswordHasherDep
from modules.user.application.use_cases.delete_user import DeleteUser
from modules.user.application.ports.delete_user_in import DeleteUserIn
from modules.user.application.use_cases.read_user import ReadAllUser
from modules.user.application.ports.read_user_in import ReadAllUserIn
from modules.user.application.use_cases.read_user import ReadUser
from modules.user.application.ports.read_user_in import ReadUserIn
from modules.user.domain.repository_out import UserRepositoryOut
from modules.user.application.ports.create_user_in import CreateUserIn
from modules.user.application.use_cases.create_user import CreateUser
from modules.user.infrastructure.d1_user_repository import D1UserRepository


async def get_user_repository(db: D1DatabaseDep) -> UserRepositoryOut:
    """Provides the UserRepositoryOut implementation."""
    return D1UserRepository(db)


async def get_create_user_use_case(
    repo: Annotated[UserRepositoryOut, Depends(get_user_repository)],
    hasher: PasswordHasherDep
) -> CreateUserIn:
    """Provides the CreateUser use case."""
    return CreateUser(repo=repo, hasher=hasher)


async def get_read_user_use_case(
    repo: Annotated[UserRepositoryOut, Depends(get_user_repository)]
) -> ReadUserIn:
    """Provides the ReadUser use case."""
    return ReadUser(repo=repo)


async def get_read_all_user_use_case(
    repo: Annotated[UserRepositoryOut, Depends(get_user_repository)]
) -> ReadAllUserIn:
    """Provides the ReadAllUser use case."""
    return ReadAllUser(repo=repo)


async def get_delete_user_use_case(
    repo: Annotated[UserRepositoryOut, Depends(get_user_repository)]
) -> DeleteUserIn:
    """Provides the DeleteUser use case."""
    return DeleteUser(repo=repo)



# Annotated alias for route injection
CreateUserUseCaseDep = Annotated[CreateUserIn, Depends(get_create_user_use_case)]
ReadUserUseCaseDep = Annotated[ReadUserIn, Depends(get_read_user_use_case)]
ReadAllUserUseCaseDep = Annotated[ReadAllUserIn, Depends(get_read_all_user_use_case)]
DeleteUserUseCaseDep = Annotated[DeleteUserIn, Depends(get_delete_user_use_case)]
