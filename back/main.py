from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, create_admin, admin, contact, profil, project
from database.connection import Base, engine
import os
from dotenv import load_dotenv


load_dotenv()

app = FastAPI()

app.add_middleware(
    SessionMiddleware, 
    secret_key=os.getenv("SECRET_KEY"),
    same_site="lax",        # protection CSRF
    max_age=60 * 60,        # 1 heure
    )
Base.metadata.create_all(bind=engine)


# CORS pour React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(create_admin.router)
app.include_router(admin.router)
app.include_router(contact.router)
app.include_router(profil.router)
app.include_router(project.router)

@app.get("/")
def home():
    return{"message": "backend FastAPI ok!"}