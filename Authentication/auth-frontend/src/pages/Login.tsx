import React, { useState } from 'react';
import API, { setAuthToken } from '../api';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; 

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await API.post('/auth/login', form);
      const token = res.data.token;
      setAuthToken(token);
      navigate('/home');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <span>
        No account? <Link to="/register">Register</Link>
      </span>
    </div>
  );
};

export default Login;

