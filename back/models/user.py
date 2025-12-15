from sqlalchemy import Column, Integer, String, DateTime
from database.connection import Base
from datetime import datetime, timedelta

class User(Base):
    __tablename__= "user"

    id= Column (Integer, primary_key=True, index=True)
    email= Column (String, unique=True, index=True, nullable=False)
    name = Column (String, nullable=False)
    code_hash = Column (String, nullable=True)
    code_expiration = Column(DateTime(timezone=True), nullable=True)
