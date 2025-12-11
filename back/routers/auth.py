from fastapi import APIRouter, HTTPException, Depends, Request
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import select
from database.connection import SessionLocal
from models.user import User

router = APIRouter(
    prefix="/auth",
    tags=["Authentification"]
)

class LoginForm(BaseModel):
    email: str

def get_db():
    db = SessionLocal()   # Créer la session
    try:
        yield db          # Lancer la sessions
    finally:
        db.close()        # Fermer la sessions


@router.post("/login")
def login(form: LoginForm,request: Request, db: Session= Depends(get_db)):
    user = db.query(User).filter(User.email == form.email).first()
    if not user:
        raise HTTPException(status_code=400, detail="User introuvable")
    
    request.session["user_id"]= user.id # Crée la session côté backend
    return {"message": "Connexion réussite", "user_id": user.id}

@router.post("/logout")
def logout(request: Request):
    request.session.clear() #supprime la session
    return {"mmessage": "Déconnecté"}