import time
from typing import Optional
from uuid import uuid4
from fastapi import FastAPI, HTTPException
from mangum import Mangum
from pydantic import BaseModel
import boto3
from boto3.dynamodb.conditions import Key

description = "CRUD API for note taking app built with FastAPI."

app = FastAPI(
    title="Note Pal API",
    description=description,
    version="0.0.1",
)

handler = Mangum(app)


class Note(BaseModel):
    title: str
    body: str
    note_id: str
    user_id: Optional[str] = None
    created_time: int
    updated_time: int


@app.get("/")
def root():
    return {"message": "Welcome to Note Pal API!"}


@app.put("/create-note")
async def create_note(note: Note):
    # check if title is unique
    if not is_title_unique(note.title):
        raise HTTPException(
            status_code=400, detail=f"Note with title {note.title} already exists")

    # create a note
    created_time = int(time.time())
    item = {
        "user_id": note.user_id,
        "title": note.title,
        "body": note.body,
        "created_time": created_time,
        "updated_time": created_time,
        "note_id": f"note_{uuid4().hex}",
        "ttl": created_time + 86400
    }
    # put note in table
    table = _get_table()
    table.put_item(Item=item)
    return {"note": item}


@app.get("/get-note/{note_id}")
async def get_note(note_id: str):
    table = _get_table()
    response = table.get_item(Key={"note_id": note_id})
    item = response.get("Item")
    if not item:
        raise HTTPException(
            status_code=404, detail=f"note {note_id} not found")
    return {"note": item}


@app.get("/list-notes/{user_id}")
async def list_notes(user_id: str):
    table = _get_table()
    response = table.query(
        IndexName="user-index",
        KeyConditionExpression=Key("user_id").eq(user_id),
        ScanIndexForward=False,
        Limit=24,
    )
    notes = response.get("Items")
    return {"notes": notes}


@app.put("/update-note")
async def update_note(note: Note):
    updated_time = int(time.time())
    table = _get_table()
    table.update_item(
        Key={"note_id": note.note_id},
        UpdateExpression="SET title = :title, body = :body, updated_time = :updated_time",
        ExpressionAttributeValues={
            ":title": note.title,
            ":body": note.body,
            ":updated_time": updated_time,
        },
        ReturnValues="ALL_NEW",
    )
    return {"updated_note": note}


@app.delete("/delete-note/{note_id}")
async def delete_note(note_id: str):
    table = _get_table()
    table.delete_item(Key={"note_id": note_id})
    return {"deleted_note_id": note_id}


def is_title_unique(title: str) -> bool:
    table = _get_table()
    response = table.query(
        IndexName="title-index",
        KeyConditionExpression=Key("title").eq(title),
        ProjectionExpression="title"
    )
    return len(response.get("Items", [])) == 0


def _get_table():
    table_name = "TodoAppInfraStack-Notes5BB3582F-Z5DRS143CW9R"
    return boto3.resource("dynamodb").Table(table_name)
