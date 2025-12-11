from fastapi import APIRouter
from sqlalchemy.orm import Session
from sqlalchemy import select
from database.connection import SessionLocal
from models.user import User
import os
from dotenv import load_dotenv


load_dotenv() # charge les variables d'environnement

router = APIRouter(
    prefix="/create_admin",
    tags=["Create Admin"]
)

@router.get("/")
def create_admin():
    db: Session = SessionLocal() # créer une session DB

    try:
        email_admin=os.getenv("email_admin")
        name_admin=os.getenv("name_admin")

        admin= User(email=email_admin, name=name_admin)

        # vérifier si l'utilisateur existe déjà
        stmt=select(User).where(User.email==email_admin)
        existing_user = db.execute(stmt).scalar_one_or_none()

        if existing_user:
            return {"mesage":"déja existant"}
        
        # créer l'admin
        db.add(admin)
        db.commit()
        db.refresh(admin)
        return {"mesage":"User crée avec succes","email": admin.email, "name":admin.name}
    
    finally:
        db.close()