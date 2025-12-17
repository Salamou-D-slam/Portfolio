import asyncio
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os
from dotenv import load_dotenv


load_dotenv()

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

to_email = "islamderrouiche@gmail.com"
code="659235"

async def send_test_mail(to_email: str, code: str):

    message = MessageSchema(
        subject=code,
        recipients=[to_email],  
        body=f"Voici un test d'envoi de mail via FastAPI-Mail !\nVotre code : {code}",
        subtype="plain"
    )
    await fm.send_message(message)
    print("Mail envoyé ✅")




# Test
if __name__ == "__main__":
    asyncio.run(send_test_mail(to_email, code))