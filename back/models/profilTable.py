from sqlalchemy import Column, Integer, String, DateTime, Text
from database.connection import Base
from datetime import datetime, timedelta

class Profil(Base):
    __tablename__= "profil"

    id= Column (Integer, primary_key=True, index=True)
    nom_section = Column (String, unique=False, index=True, nullable=True)
    description_section = Column (Text, nullable=True)

