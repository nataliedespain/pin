import axios from 'axios';

export const getFollowers = (id) => {
  return {
    type: 'GET_FOLLOWERS',
    payload: axios.get(`http://localhost:3000/follows/followers/${id}`)
  };
};

export const getFollowing = (id) => {
  return {
    type: 'GET_FOLLOWING',
    payload: axios.get(`http://localhost:3000/follows/following/${id}`)
  };
};

export const getAllFollows = () => {
  return {
    type: 'GET_ALL_FOLLOWS',
    payload: axios.get(`http://localhost:3000/follows`)
  };
};

export const followUser = (follower_id, following_id) => {
  return {
    type: 'FOLLOW_USER',
    payload: axios.post(`http://localhost:3000/follows`, {follower_id, following_id})
  };
};

export const unfollowUser = (id) => {
  return {
    type: 'UNFOLLOW_USER',
    payload: axios.delete(`http://localhost:3000/follows/${id}`)
  };
};
