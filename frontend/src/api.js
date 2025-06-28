const BASE_URL = 'http://localhost:8000';

export const enhanceSection = async (section, content) => {
  const res = await fetch(`${BASE_URL}/ai-enhance`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ section, content }),
  });
  return res.json();
};

export const saveResume = async (resume) => {
  const res = await fetch(`${BASE_URL}/save-resume`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: resume }),
  });
  return res.json();
};
