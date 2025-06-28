# 🌟 AI-Powered Resume Editor

An interactive web-based Resume Editor built with **React** and **FastAPI**. Users can upload, edit, enhance, and download resumes with a beautiful, premium-styled interface.

---

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/🌐%20View%20Live-Resume%20Editor-007cf0?style=for-the-badge)](https://resume-frontend-z7l2.onrender.com)

---

## 📌 Features

- 📝 Upload `.pdf` or `.docx` resume files (mocked parsing)
- ✏️ Edit name, summary, experience, education, skills, and language proficiency
- 🤖 "Enhance with AI" feature for each section
- 💾 Save resume data to backend (mocked FastAPI)
- 📥 Download final resume as `.json` or `.pdf`
- 🎨 Fully responsive, animated UI with Bootstrap, AOS & gradient styles

---

## 🛠 Tech Stack

| Frontend                        | Backend              |
|-------------------------------|----------------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react) | ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap) | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python) |
| ![HTML2PDF](https://img.shields.io/badge/html2pdf.js-lightgrey?style=for-the-badge) | ![Pydantic](https://img.shields.io/badge/Pydantic-0A0A0A?style=for-the-badge) |

---

## 📦 Installation (Local Setup)

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


