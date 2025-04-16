
import { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert('Registered successfully! Now login.');
      navigate('/login');
    } catch (err) {
      alert(err.message || 'Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
<h3>Your name:</h3>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} required /><br/>
<h3>Your Email</h3>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br/>
<h3>Your password</h3>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br/>
        <select name="role" onChange={handleChange}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
