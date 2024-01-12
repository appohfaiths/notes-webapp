from fastapi import FastAPI
from mangum import Mangum

description = "CRUD API for note taking app built with FastAPI."

app = FastAPI(
    title="Note Pal API",
    description=description,
    version="0.0.1",
)

handler = Mangum(app)


@app.get("/")
def root():
    return {"message": "Welcome to Note Pal API!"}
