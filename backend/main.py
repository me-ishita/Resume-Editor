from fastapi import FastAPI
from pydantic import BaseModel
import uuid, os, json

app = FastAPI()

class AIEnhanceInput(BaseModel):
    section: str
    content: str

class ResumeData(BaseModel):
    data: dict

@app.post("/ai-enhance")
async def enhance_section(payload: AIEnhanceInput):
    improved = f"✨ Enhanced {payload.section}: {payload.content}"
    return {"improved_content": improved}

@app.post("/save-resume")
async def save_resume(payload: ResumeData):
    resume_id = str(uuid.uuid4())
    os.makedirs("saved_resumes", exist_ok=True)
    with open(f"saved_resumes/{resume_id}.json", "w") as f:
        json.dump(payload.data, f)
    return {"message": "Resume saved successfully", "resume_id": resume_id}
