"""
Native Python hashlib implementation of PasswordHasher.
Suitable for Cloudflare Workers / Pyodide environments.
"""
import base64
import hashlib
import hmac
import secrets

from shared.domain.password_hasher_out import PasswordHasher


class NativePasswordHasher(PasswordHasher):
    """
    Implements PasswordHasher using Python's native hashlib.scrypt.
    Generates hashes in the format: $scrypt$n=...,r=...,p=...$salt_b64$key_b64
    """
    
    def __init__(self, salt_length: int = 16):
        self.salt_length = salt_length
        # Standard baseline parameters for scrypt
        self.n = 16384
        self.r = 8
        self.p = 1

    def hash(self, password: str) -> str:
        """
        Hashes a plain text password using scrypt.
        """
        salt = secrets.token_bytes(self.salt_length)
        
        key = hashlib.scrypt(
            password.encode('utf-8'),
            salt=salt,
            n=self.n,
            r=self.r,
            p=self.p
        )
        
        salt_b64 = base64.b64encode(salt).decode('ascii')
        key_b64 = base64.b64encode(key).decode('ascii')
        
        return f"$scrypt$n={self.n},r={self.r},p={self.p}${salt_b64}${key_b64}"

    def verify(self, plain_password: str, hashed_password: str) -> bool:
        """
        Verifies a plain text password against a hashed password safely.
        """
        try:
            parts = hashed_password.split('$')
            if len(parts) != 5 or parts[1] != 'scrypt':
                return False
                
            params_str = parts[2]
            salt_b64 = parts[3]
            key_b64 = parts[4]
            
            params = {}
            for param in params_str.split(','):
                k, v = param.split('=')
                params[k] = int(v)
                
            salt = base64.b64decode(salt_b64)
            stored_key = base64.b64decode(key_b64)
            
            new_key = hashlib.scrypt(
                plain_password.encode('utf-8'),
                salt=salt,
                n=params['n'],
                r=params['r'],
                p=params['p']
            )
            
            return hmac.compare_digest(stored_key, new_key)
            
        except Exception:
            return False
