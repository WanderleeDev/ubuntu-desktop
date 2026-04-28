"""
Port for Password Hasher.
"""
from abc import ABC, abstractmethod

class PasswordHasher(ABC):
    """
    Abstract interface for password hashing and verification.
    """

    @abstractmethod
    def hash(self, password: str) -> str:
        """
        Hashes a plain text password.
        """
        pass

    @abstractmethod
    def verify(self, plain_password: str, hashed_password: str) -> bool:
        """
        Verifies a plain text password against a hashed password.
        """
        pass
