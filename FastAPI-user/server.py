from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn  
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users = {
    "101": {"id": "101", "name": "Alice", "email": "alice@zmail.com"},
    "102": {"id": "102", "name": "Bob", "email": "bob@zmail.com"},
    "123": {"id": "123", "name": "Charlie", "email": "charlie@zmail.com"},
    "999": {"id": "999", "name": "Dana", "email": "dana@zmail.com"},
    "456": {"id": "456", "name": "Eve", "email": "eve@zmail.com"},
    "201": {"id": "201", "name": "Frank", "email": "frank@zmail.com"},
    "202": {"id": "202", "name": "Grace", "email": "grace@zmail.com"},
    "303": {"id": "303", "name": "Heidi", "email": "heidi@zmail.com"},
    "404": {"id": "404", "name": "Ivan", "email": "ivan@zmail.com"},
    "505": {"id": "505", "name": "Judy", "email": "judy@zmail.com"},
    "606": {"id": "606", "name": "Karl", "email": "karl@zmail.com"},
    "707": {"id": "707", "name": "Liam", "email": "liam@zmail.com"},
    "808": {"id": "808", "name": "Mia", "email": "mia@zmail.com"},
    "909": {"id": "909", "name": "Nina", "email": "nina@zmail.com"},
    "010": {"id": "010", "name": "Oscar", "email": "oscar@zmail.com"}
}

@app.get("/user/{user_id}")
def get_user(user_id: str):
    print("Invoked")
    user = users.get(user_id)
    print(user)
    if user:
        return JSONResponse(content=user)
    return JSONResponse(status_code=404, content={"error": "User not found"})

if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)