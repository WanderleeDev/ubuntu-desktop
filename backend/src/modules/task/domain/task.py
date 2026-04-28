"""
Domain module for task entities.
"""
from pydantic import BaseModel, Field
from enum import Enum
from uuid import UUID, uuid4

class TaskStatus(str, Enum):
    """
    Possible statuses for a task.
    """
    PENDING = "pending"
    COMPLETED = "completed"

class Task(BaseModel):
    """
    Represents a task/todo item in the system.
    """
    id: UUID = Field(default_factory=uuid4, description="Unique task ID")
    task: str = Field(..., description="The description of the task")
    status: TaskStatus = Field(default=TaskStatus.PENDING, description="Current status of the task")
    user_id: str = Field(..., description="ID of the user who owns this task")
