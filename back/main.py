from fastapi import FastAPI
from routers import auth, create_admin
from database.connection import Base, engine


app = FastAPI()
Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(create_admin.router)

@app.get("/")
def home():
    return{"message": "backend FastAPI ok!"}