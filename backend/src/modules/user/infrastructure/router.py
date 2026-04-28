"""
Infrastructure: FastAPI router for User module.
"""
from uuid import UUID
from typing import List
from modules.user.infrastructure.di import ReadUserUseCaseDep
from modules.user.infrastructure.di import ReadAllUserUseCaseDep
from shared import MessageResponse
from fastapi import APIRouter, status
from ..application.schemas import CreateUserRequest, UserResponse

from .di import CreateUserUseCaseDep

user_router = APIRouter(prefix="/users", tags=["users"])


@user_router.get("/{user_id}", response_model=UserResponse, status_code=status.HTTP_200_OK)
async def get_user_by_id(user_id: UUID, use_case: ReadUserUseCaseDep):
    """
    Returns a user's public profile by their ID.
    """
    return await use_case.execute(user_id)


@user_router.get("/", response_model=List[UserResponse], status_code=status.HTTP_200_OK)
async def get_all_users(use_case: ReadAllUserUseCaseDep):
    """
    Returns all users.
    """
    return await use_case.execute()



@user_router.post("/", response_model=MessageResponse, status_code=status.HTTP_201_CREATED)
async def create_user(body: CreateUserRequest, use_case: CreateUserUseCaseDep):
    """
    Creates a new user.
    """
    await use_case.execute(body)
    return MessageResponse(message="User created successfully")


from .di import DeleteUserUseCaseDep

@user_router.delete("/{user_id}", response_model=MessageResponse, status_code=status.HTTP_200_OK)
async def delete_user(user_id: UUID, use_case: DeleteUserUseCaseDep):
    """
    Deletes a user by their ID.
    """
    await use_case.execute(user_id)
    return MessageResponse(message="User deleted successfully")
