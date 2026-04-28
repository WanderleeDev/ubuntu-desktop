"""
Global Exception Handlers for FastAPI.
"""
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse

from shared.domain.exceptions import (
    AppBaseException,
    DomainException,
    ResourceNotFoundException,
    ResourceAlreadyExistsException,
)

def register_error_handlers(app: FastAPI) -> None:
    """
    Registers global exception handlers for the FastAPI application.
    """
    
    @app.exception_handler(ResourceAlreadyExistsException)
    async def resource_already_exists_handler(request: Request, exc: ResourceAlreadyExistsException):
        return JSONResponse(
            status_code=status.HTTP_409_CONFLICT,
            content={"detail": exc.message},
        )

    @app.exception_handler(ResourceNotFoundException)
    async def resource_not_found_handler(request: Request, exc: ResourceNotFoundException):
        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"detail": exc.message},
        )

    @app.exception_handler(DomainException)
    async def domain_exception_handler(request: Request, exc: DomainException):
        return JSONResponse(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, # Or 400 depending on preference
            content={"detail": exc.message},
        )

    @app.exception_handler(AppBaseException)
    async def app_base_exception_handler(request: Request, exc: AppBaseException):
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": exc.message},
        )
