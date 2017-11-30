import axios from 'axios';

export const getUsers = () => {
  return {
    type: 'GET_USERS',
    payload: axios.get('http://localhost:3000/users/')
  };
};

export const getUser = (id) => {
  return {
    type: 'GET_USER',
    payload: axios.get(`http://localhost:3000/users/${id}`)
  };
};

export const toggleTraveling = () => {
  return {
    type: 'TOGGLE_TRAVELING'
  };
};
