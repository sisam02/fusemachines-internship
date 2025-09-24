import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api',
  
});


export function setAuthToken(token: string | null) {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete API.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
}

export default API;
