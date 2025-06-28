# 📝 Resume Editor with AI Enhancement

A modern web-based Resume Editor built with **React.js** (frontend) and **FastAPI** (backend). This app lets users:

- Upload and mock-parse `.pdf` or `.docx` resumes
- Edit fields like Name, Experience, Education, Skills, and Languages
- Enhance each section using a mock AI-powered backend
- Save resume data via FastAPI
- Download the resume as `.json` or `.pdf`

---

## ✨ Features

### 🔧 Core Functionalities

✅ **Upload Resume**  
- Accepts `.pdf` or `.docx` (mock parsing used)

✅ **Edit Resume**  
- Editable fields: Name, Summary, Experience, Education, Skills, Languages  
- Add/remove entries dynamically  
- Select language proficiency (Advanced, Intermediate, Beginner)

✅ **Enhance with AI**  
- Each section has an **"Enhance with AI"** button  
- Sends content to FastAPI backend (`/ai-enhance`)  
- Receives and displays improved text (mocked)

✅ **Save & Download**  
- Resume data saved via FastAPI (`/save-resume`)  
- Downloads: `.json` (structured data), `.pdf` (formatted layout)

---

## 🎨 UI & Styling

- Styled with **Bootstrap 5**, **Bootstrap Icons**, **AOS animations**
- Gradient backgrounds, glowing button hover effects
- Premium visual layout optimized for frontend evaluations

---

| Layer         | Technology                  | Badge                                                                                                               |
| ------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 💻 Frontend   | **React.js**                | ![React](https://img.shields.io/badge/React-20232A?style=flat\&logo=react\&logoColor=61DAFB)                        |
| 🎨 Styling    | **Bootstrap 5**             | ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat\&logo=bootstrap\&logoColor=white)             |
| 🎬 Animation  | **AOS (Animate on Scroll)** | ![AOS](https://img.shields.io/badge/AOS-Lightblue?style=flat\&logo=databricks\&logoColor=white)                     |
| 🧠 Backend    | **FastAPI**                 | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat\&logo=fastapi\&logoColor=white)                   |
| 🐍 Language   | **Python 3**                | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat\&logo=python\&logoColor=white)                      |
| 🧾 PDF Export | **html2pdf.js**             | ![html2pdf.js](https://img.shields.io/badge/html2pdf.js-F28C28?style=flat\&logo=javascript\&logoColor=white)        |
| 🗂️ Icons     | **Bootstrap Icons**         | ![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-7952B3?style=flat\&logo=bootstrap\&logoColor=white) |


---

## 🚀 Getting Started

### 🔹 Clone the Repository

```bash
git clone https://github.com/me-ishita/resume-editor.git
cd resume-editor

---

## 🔹 Frontend Setup (React)

cd frontend
npm install
npm start


## 🔹 Backend Setup (FastAPI)

cd backend
python -m venv venv
venv\Scripts\activate      # On Windows
# OR
source venv/bin/activate   # On Mac/Linux

pip install -r requirements.txt
uvicorn main:app --reload



