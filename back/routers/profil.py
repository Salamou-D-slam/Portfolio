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


class ProfilUpdate(BaseModel):
    nom_section: str | None = None
    description_section: str | None = None
    
class ProfiResponse(ProfiCreate):
    id: int

    class Config:
        from_attributes = True

# Read toute les sections
@router.get("",response_model=list[ProfiResponse])
def read_section(db: Session = Depends(get_db)):
    profil = db.query(Profil).order_by(Profil.created_at.asc()).all()
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
async def update_section(profil_id: int, profil_update: ProfilUpdate, db: Session = Depends(get_db)):
    db_profil = db.query(Profil).filter(Profil.id == profil_id).first()

    if not db_profil:
        raise HTTPException(status_code=404, detail="Section non trouvée")
    
    # Mise à jour uniquement des champs envoyés
    for field, value in profil_update.model_dump(exclude_unset=True, exclude_none=True).items():
        setattr(db_profil, field, value)

    db.commit()
    db.refresh(db_profil)
    return db_profil

# Delete une section
@router.delete("/{profil_id}")
async def delete_section(profil_id: int, db: Session = Depends(get_db)):
    db_profil = db.query(Profil).filter(Profil.id == profil_id).first()
    if not db_profil:
        raise HTTPException(status_code=404, detail="Section non trouvée")
    db.delete(db_profil)
    db.commit()
    return {"message": "Section supprimée avec succès"}
