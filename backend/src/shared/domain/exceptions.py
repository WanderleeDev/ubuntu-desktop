"""
Shared Base Exceptions for the Application.
"""

class AppBaseException(Exception):
    """
    Base exception for all application-specific errors.
    All custom domain or infrastructure exceptions should inherit from this.
    """
    def __init__(self, message: str):
        super().__init__(message)
        self.message = message


class DomainException(AppBaseException):
    """
    Exception raised for business logic or domain rules violations.
    """
    pass


class ResourceNotFoundException(AppBaseException):
    """
    Exception raised when a requested resource is not found.
    """
    pass


class ResourceAlreadyExistsException(AppBaseException):
    """
    Exception raised when attempting to create a resource that already exists.
    """
    pass
