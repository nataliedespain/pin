import axios from 'axios';

export const getCities = () => {
  return {
    type: 'GET_CITIES',
    payload: axios.get('http://localhost:3000/cities')
  };
};

export const addCity = (data) => {
  return {
    type: 'ADD_CITY',
    payload: axios.post('http://localhost:3000/cities/', data)
  };
};
