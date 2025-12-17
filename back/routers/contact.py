from fastapi import APIRouter, HTTPException, Depends, Request
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import select
from database.connection import SessionLocal
from models.user import User
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(
    prefix="/contact",
    tags=["Contact"]
)

#-------------Envoi de mail---------------

class ContactForm(BaseModel):
    nom: str
    email: str
    title: str
    description: str
    
conf = ConnectionConfig(
    MAIL_USERNAME="apikey",
    MAIL_PASSWORD=os.getenv("SENDGRID_API_KEY"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=587,
    MAIL_SERVER="smtp.sendgrid.net",
    MAIL_STARTTLS = True,      # active le TLS (recommandé)
    MAIL_SSL_TLS = False,       # on n’utilise pas SSL direct sur le port 465
    USE_CREDENTIALS = True
)

fm = FastMail(conf)

    
async def send_mail_contact(nom, email, title, description):

    message = MessageSchema(
        subject=f"{nom} - {title}",
        recipients=[
            os.getenv("MAIL_RECEIVER"),  
            email                        
        ],  
        body=(
            f"Le nom de la personne: {nom}\n"
            f"Le mail de la personne: {email}\n"
            f"Le titre du mail: {title}\n\n"
            f"{description}"
        ),       
        subtype="plain",
        reply_to=[email]
    )
    await fm.send_message(message)
    print("Mail envoyé ✅")

@router.post("")
async def contact(form:ContactForm):
    await send_mail_contact( 
        nom=form.nom,
        email=form.email,
        title=form.title,
        description=form.description
    )

    return {"message": "Votre message a été envoyé !"}

        
