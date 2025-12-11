from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv

# charge les variables d'environnement
load_dotenv() 


# URL de la bdd
SQLALCHEMY_DATABASE_URL=os.getenv("SQLALCHEMY_DATABASE_URL")

# création du moteur SQLAlchemy
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# session pour interagir avec la DB
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# base pour déclarer les modèles
Base = declarative_base()