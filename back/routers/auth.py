from fastapi import APIRouter

router = APIRouter(
    prefix="/auth",
    tags=["Authentification"]
)

@router.get("/check")
def check():
    return{"status": "auth route ok!"}

