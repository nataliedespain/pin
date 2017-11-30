import axios from 'axios';

export const getFeed = (id) => {
  return {
    type: 'GET_FEED',
    payload: axios.get(`http://localhost:3000/feed/${id}`)
  };
};