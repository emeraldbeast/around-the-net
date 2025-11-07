from app import models
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, leaderboard
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# while True:
#     try:
#         conn = psycopg2.connect(host='localhost', database='fastapi', user='postgres', 
#                                 password='#LetMeIn2', cursor_factory=RealDictCursor)
#         cursor = conn.cursor()
#         print("Database Connection was Successful!")
#         break
#     except Exception as error:
#         print("Connecting to database failed")
#         print("The Error was: ", error)
#         time.sleep(2)
#         break



my_posts = [{"title": "title of post 1", "content": "content of post 1", "id": 1}, 
            {"title": "favourite foods", "content": "i like pizza", "id": 2}]

def find_post(id):
    for p in my_posts:
        if p["id"] == id:
            return p
        
def find_index_post(id):
    for i, p in enumerate(my_posts):
        if p['id'] == id:
            return i
        
# request Get method url: "/"

app.include_router(auth.router)
app.include_router(leaderboard.router)

@app.get("/")
def root():
    return {"message": "Good Morning User!"}
