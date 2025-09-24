import React, { useEffect, useState } from 'react';
import API, { setAuthToken } from '../api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const res = await API.get('/protected/me');
        setMessage(res.data.message);
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
        setAuthToken(null);
        navigate('/login');
      }
    };
    fetchProtected();
  }, [navigate]);

  const logout = () => {
    setAuthToken(null);
    navigate('/login');
  };

  return (
    <div className="private">
      <h2>{message}</h2>
     
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;

