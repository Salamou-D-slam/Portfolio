from fastapi import APIRouter, Request, HTTPException, Depends

router = APIRouter()

router = APIRouter(
    prefix="/admin",
    tags=["Administration"]
)

def get_current_user(request: Request):
    user_id = request.session.get("user_id")
    if not user_id:
        raise HTTPException(status_code=401, detail="Non connecté")
    return user_id

@router.get("")
def admin(user_id: int = Depends(get_current_user)):
    return {"message": f"Bienvenue admin {user_id}"}

@router.get("/profilform")
def admin(user_id: int = Depends(get_current_user)):
    return {"message": f"Bienvenue admin profil form {user_id}"}

@router.get("/projectform")
def admin(user_id: int = Depends(get_current_user)):
    return {"message": f"Bienvenue admin project form {user_id}"}
