import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import html2pdf from 'html2pdf.js';
import { enhanceSection, saveResume } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {

  const [resume, setResume] = useState({
    name: '',
    summary: '',
    experience: [''],
    education: [''],
    skills: [''],
    languages: [{ language: '', level: '' }]
  });

  const sectionNames = {
    experience: 'Experience',
    education: 'Education',
    skills: 'Skill',
    languages: 'Language'
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (section, value, index = null) => {
    if (Array.isArray(resume[section])) {
      const updated = [...resume[section]];
      updated[index] = value;
      setResume({ ...resume, [section]: updated });
    } else {
      setResume({ ...resume, [section]: value });
    }
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...resume.languages];
    updatedLanguages[index][field] = value;
    setResume({ ...resume, languages: updatedLanguages });
  };

  const addField = (section) => {
    if (section === 'languages') {
      setResume({ ...resume, languages: [...resume.languages, { language: '', level: '' }] });
    } else {
      setResume({ ...resume, [section]: [...resume[section], ''] });
    }
  };

  const removeField = (section, index) => {
    const updated = [...resume[section]];
    updated.splice(index, 1);
    setResume({ ...resume, [section]: updated });
  };

  const handleEnhance = async (section, index = null) => {
    const content = index !== null ? resume[section][index] : resume[section];
    const res = await enhanceSection(section, content);
    if (index !== null) {
      const updated = [...resume[section]];
      updated[index] = res.improved_content;
      setResume({ ...resume, [section]: updated });
    } else {
      setResume({ ...resume, [section]: res.improved_content });
    }
  };

  const handleSave = async () => {
    const res = await saveResume(resume);
    alert(`✅ ${res.message} (ID: ${res.resume_id})`);
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: 'application/json',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.json';
    link.click();
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-download');
    if (!element) {
      alert("⚠️ Resume content not found for export.");
      return;
    }

    element.classList.remove('d-none');

    setTimeout(() => {
      html2pdf()
        .set({
          margin: 0.5,
          filename: 'resume.pdf',
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .from(element)
        .save()
        .then(() => {
          element.classList.add('d-none');
        });
    }, 100);
  };

  const handleMockUpload = (e) => {
    alert("📂 File uploaded and parsed successfully (mocked)!");
    setResume({
      name: 'Ishita Ghosh',
      summary: 'Passionate frontend developer with a flair for UI/UX and modern web stacks.',
      experience: ['Frontend Intern at ABC Inc. (2023)', 'React Developer at XYZ Startups (2022)'],
      education: ['B.Tech in CSE - XYZ University (2025)'],
      skills: ['React', 'Bootstrap', 'JavaScript', 'CSS', 'Git'],
      languages: [
        { language: 'English', level: 'Advanced' },
        { language: 'Hindi', level: 'Intermediate' }
      ]
    });
  };

  return (
    <div className="container my-5">
      <div className="text-end"></div>

      <h2 className="text-center mb-4"> Resume Editor</h2>

      <div className="text-center mb-4">
        <label className="btn btn-upload me-2">
          <i className="bi bi-cloud-arrow-up"></i> Upload Resume [pdf/docx]
          <input type="file" accept=".pdf,.docx" hidden onChange={handleMockUpload} />
        </label>

        <button className="btn btn-save me-2" onClick={handleSave}>
          <i className="bi bi-save2"></i> Save Resume
        </button>

        <button className="btn btn-download me-2" onClick={handleDownloadJSON}>
          <i className="bi bi-file-earmark-arrow-down"></i> Download JSON
        </button>

        <button className="btn btn-outline-secondary" onClick={handleDownloadPDF}>
          <i className="bi bi-file-earmark-pdf"></i> Download PDF
        </button>
      </div>

      <div id="resume-preview" className="card p-4 shadow-sm" data-aos="fade-up">
        <h5>Name</h5>
        <input type="text" className="form-control mb-3" value={resume.name} onChange={(e) => handleChange('name', e.target.value)} />

        <h5>Profile</h5>
        <textarea className="form-control mb-3" rows={3} value={resume.summary} onChange={(e) => handleChange('summary', e.target.value)} />
        <button className="btn action-enhance" onClick={() => handleEnhance('summary')}>
          <i className="bi bi-stars"></i> Enhance With AI
        </button>

        {['experience', 'education', 'skills'].map((section) => (
          <div key={section}>
            <h5 className="mt-4">{sectionNames[section]}</h5>
            {resume[section].map((entry, index) => (
              <div className="input-group mb-2" key={index}>
                <input type="text" className="form-control" value={entry} onChange={(e) => handleChange(section, e.target.value, index)} />
                <button className="btn action-add" onClick={() => addField(section)}>
                  <i className="bi bi-plus-lg"></i>
                </button>
                <button className="btn action-delete" onClick={() => removeField(section, index)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))}
            <button className="btn action-enhance" onClick={() => handleEnhance(section)}>
              <i className="bi bi-stars"></i> Enhance {sectionNames[section]}
            </button>
          </div>
        ))}

        <h5 className="mt-4">Languages</h5>
        {resume.languages.map((lang, index) => (
          <div className="input-group mb-2" key={index}>
            <input type="text" className="form-control" placeholder="Language" value={lang.language} onChange={(e) => handleLanguageChange(index, 'language', e.target.value)} />
            <select className="form-select" value={lang.level} onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}>
              <option value="">Select Level</option>
              <option value="Advanced">Advanced</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Beginner">Beginner</option>
            </select>
            <button className="btn action-add" onClick={() => addField('languages')}>
              <i className="bi bi-plus-lg"></i>
            </button>
            <button className="btn action-delete" onClick={() => removeField('languages', index)}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        ))}
      </div>

      {/* Hidden printable section for PDF export */}
      <div id="resume-download" className="d-none">
        <div style={{
          padding: '30px',
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: '#fff',
          color: '#000',
          lineHeight: 1.6,
          width: '100%',
        }}>
          <h3>{resume.name}</h3>
          <p><strong>Profile:</strong> {resume.summary}</p>

          <h4>Experience</h4>
          <ul>{resume.experience.map((exp, i) => <li key={i}>{exp}</li>)}</ul>

          <h4>Education</h4>
          <ul>{resume.education.map((edu, i) => <li key={i}>{edu}</li>)}</ul>

          <h4>Skills</h4>
          <ul>{resume.skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>

          <h4>Languages</h4>
          <ul>{resume.languages.map((lang, i) => (
            <li key={i}>{lang.language} — <em>{lang.level}</em></li>
          ))}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
