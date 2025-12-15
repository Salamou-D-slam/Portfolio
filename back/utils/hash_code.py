from passlib.context import CryptContext
import bcrypt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_code(code: str) -> str:
    truncated_code = code[:72]  # bcrypt max 72 bytes
    hashed = bcrypt.hashpw(truncated_code.encode("utf-8"), bcrypt.gensalt())
    return hashed.decode("utf-8")  # on stocke en str

def verify_code(code: str, hashed_code: str) -> bool:
    truncated_code = code[:72]
    return bcrypt.checkpw(truncated_code.encode("utf-8"), hashed_code.encode("utf-8"))





