from fastapi import APIRouter,Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database.connection import get_db
from models.profilTable import Profil

router = APIRouter(
    prefix="/profil",
    tags=["Profil"]
)

class ProfiCreate(BaseModel):
    nom_section: str
    description_section: str

class ProfiResponse(ProfiCreate):
    id: int

    class Config:
        from_attributes = True

# Read toute les sections
@router.get("",response_model=list[ProfiResponse])
def read_section(db: Session = Depends(get_db)):
    profil = db.query(Profil).all()
    return profil

# Create une section
@router.post("", response_model=ProfiResponse)
def create_section(profil: ProfiCreate, db: Session = Depends(get_db)):
    db_profil = Profil(**profil.dict())
    db.add(db_profil)
    db.commit()
    db.refresh(db_profil)
    return db_profil

# Update une section
@router.put("/{profil_id}", response_model=ProfiResponse)
async def update_item(profil_id: int, profil_update: ProfiCreate, db: Session = Depends(get_db)):
    db_profil = db.query(Profil).filter(Profil.id == profil_id).first()

    if not db_profil:
        raise HTTPException(status_code=404, detail="Section non trouvée")
    
    # Maj des champs
    db_profil.nom_section = profil_update.nom_section
    db_profil.description_section = profil_update.description_section

    db.commit()
    db.refresh(db_profil)
    return db_profil

# Delete une section
@router.delete("/{profil_id}")
async def delete_item(profil_id: int, db: Session = Depends(get_db)):
    db_profil = db.query(Profil).filter(Profil.id == profil_id).first()
    if not db_profil:
        raise HTTPException(status_code=404, detail="Section non trouvée")
    db.delete(db_profil)
    db.commit()
    return {"message": "Section supprimée avec succès"}
