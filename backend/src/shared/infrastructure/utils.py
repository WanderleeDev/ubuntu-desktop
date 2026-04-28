"""
Shared utility functions for the application.
"""
from typing import Any

def js_proxy_to_py(obj: Any) -> Any:
    """
    Converts a Pyodide JsProxy object (returned by Cloudflare Workers/D1) 
    to a native Python dictionary or list.
    Safely returns the object itself if it's not a JsProxy.
    """
    if hasattr(obj, 'to_py'):
        return obj.to_py()
    return obj
