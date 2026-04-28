from workers import Response, WorkerEntrypoint
from fastapi import FastAPI

class Default(WorkerEntrypoint):
    async def fetch(self, request):
        return Response("Hello World!")

app = FastAPI()