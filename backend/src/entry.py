import asgi
from workers import WorkerEntrypoint
from fastapi import FastAPI

from modules.user import user_router
from shared.infrastructure.error_handlers import register_error_handlers

class Default(WorkerEntrypoint):
    async def fetch(self, request):
        return await asgi.fetch(app, request, self.env)

app = FastAPI()

# Register global error handlers
register_error_handlers(app)

app.include_router(user_router)