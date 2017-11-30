import axios from 'axios';

export const login = (login) => {
  return {
    type: 'LOGIN',
    payload: axios.post('http://localhost:3000/authenticate', login)
  };
};