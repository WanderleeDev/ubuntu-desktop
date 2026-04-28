"""
Domain module for system settings entities.
"""
from pydantic import BaseModel, Field

class Settings(BaseModel):
    """
    Represents the system-wide desktop settings for a user.
    """
    user_id: str = Field(..., description="ID of the user these settings belong to")
    current_wallpaper: str = Field(
        default="https://images.unsplash.com/photo-1614850523296-d8c1af93d400",
        description="URL of the current desktop wallpaper"
    )
    accent_color: str = Field(
        default="#E95420", 
        description="System accent color (Ubuntu Orange default)"
    )
    do_not_disturb: bool = Field(default=False, description="Whether DND mode is enabled")
    lock_screen_notifications: bool = Field(default=True, description="Whether to show notifications on lock screen")
