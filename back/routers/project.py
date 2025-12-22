from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database.connection import get_db
from models.projectTable import Project
from datetime import datetime
from typing import Optional, Union
from datetime import date

router = APIRouter(
    prefix="/project",
    tags=["Project"]
)

class ProjectCreate(BaseModel):
    nom_projet: str
    techno: Optional[str] = None

    lien_url: Optional[str] = None
    lien_nom: Optional[str] = None
    lien_gh: Optional[str] = None
    lien_vdo: Optional[str] = None

    date_debut: Optional[datetime] = None
    date_fin: Optional[datetime] = None

    class Config:
        json_encoders = {
            date: lambda v: v.strftime("%d/%m/%Y") # Changer le format de la date
        }

    presentation_projet: Optional[str] = None
    technique_projet: Optional[str] = None

class ProjectUpdate(BaseModel):
    nom_projet: str | None = None
    techno: str | None = None

    lien_url: str | None = None
    lien_nom: str | None = None
    lien_gh: str | None = None
    lien_vdo: str | None = None

    date_debut: datetime | None = None
    date_fin: datetime | None = None

    presentation_projet: str | None = None
    technique_projet: str | None = None

class ProjectResponse(ProjectCreate):
    id: int

    class Config:
        from_attributes = True

# Read tout les projet
@router.get("", response_model=list[ProjectResponse])
def read_projects(db: Session = Depends(get_db)):
    projects = (db.query(Project).order_by(Project.created_at.desc()).all())    
    return projects

# Create un projet
@router.post("", response_model=ProjectResponse)
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    db_project = Project(**project.model_dump())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

# Update un projet
@router.put("/{project_id}", response_model=ProjectResponse)
def update_project(project_id: int, project_update: ProjectUpdate, db: Session = Depends(get_db)):
    db_project = db.query(Project).filter(Project.id == project_id).first()

    if not db_project:
        raise HTTPException(status_code=404, detail="Projet non trouvé")
    
    # Maj des champs
    for field, value in project_update.model_dump( exclude_unset=True, exclude_none=True).items():
        setattr(db_project, field, value)

    db.commit()
    db.refresh(db_project)
    return db_project

# Delete un projet
@router.delete("/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if not db_project:
        raise HTTPException(status_code=404, detail="Projet non trouvé")
    db.delete(db_project)
    db.commit()
    return {"message": "Projet supprimée avec succès"}


# Read un projet
@router.get("/{project_id}", response_model=ProjectResponse)
def read_project(project_id: int, db: Session = Depends(get_db)):
    projects = db.query(Project).filter(Project.id ==project_id).first()
    if not projects:
        raise HTTPException(status_code=404, detail="Projet non trouvé")
    return projects
