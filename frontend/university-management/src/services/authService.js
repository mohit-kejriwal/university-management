
const API_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  if (!res.ok) throw new Error('Registration failed');
  return res.json();
};

export const loginUser = async (loginData) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData)
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json();
};
