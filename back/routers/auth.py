from database.connection import get_db
from models.user import User
from utils.hash_code import hash_code, verify_code
from fastapi import APIRouter, HTTPException, Depends, Request, BackgroundTasks
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import select
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os
from dotenv import load_dotenv
import random
from datetime import datetime, timedelta, timezone
import smtplib


load_dotenv()

router = APIRouter(
    prefix="/auth",
    tags=["Authentification"]
)


#-------------Envoi de mail---------------

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=465,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=False, 
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True
)


# Génération du code 
def generate_code():
    return str(random.randint(100000, 999999))

    
async def send_mail(email: str, code: str):
    fm = FastMail(conf)

    message = MessageSchema(
        subject=f"Code de connexion : {code}",
        recipients=[email],  
        body=f"Voici le code d'authentification, veuillez noter que ce code expire dans un délais de 10 minutes. \nVotre code : {code}",
        subtype="plain"
    )
    await fm.send_message(message)
    print("Mail envoyé ✅")

# ------------Routes-----------------------------
class LoginForm(BaseModel):
    email: str

@router.post("/login")
async def login(form: LoginForm, request: Request, db: Session= Depends(get_db)):
    user = db.query(User).filter(User.email == form.email).first()
    if not user:
        raise HTTPException(status_code=400, detail="Utilisateur introuvable")
    
    code = generate_code()
    user.code_hash = hash_code(code)
    user.code_expiration = datetime.now(timezone.utc) + timedelta(minutes=10)

    db.add(user)
    db.commit()
    db.refresh(user)

    await send_mail(user.email, code)


    return {"message": "Code envoyé par mail"}

class VerifyCodeForm(BaseModel):
    email: str
    code: str   

@router.post("/verif-code")
async def verify_code_endpoint(form: VerifyCodeForm, request: Request, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form.email).first()
    if not user:
        raise HTTPException(status_code=400, detail="Utilisateur introuvable")
    
    if not verify_code(form.code, user.code_hash):
        raise HTTPException(status_code=400, detail="Code incorrect")
    
    if  user.code_expiration <  datetime.now(timezone.utc):
        user.code_hash = None
        user.code_expiration = None
        db.commit()
        raise HTTPException(status_code=400, detail="Code expiré")
    
    # Code correct et non expiré
    user.code_hash = None
    user.code_expiration = None
    db.commit()

    request.session["user_id"]= user.id # Crée la session côté backend
    return {"message": "Connexion réussie", "user_id": user.id}


@router.post("/logout")
def logout(request: Request):
    request.session.clear() #supprime la session
    return {"mmessage": "Déconnecté"}