import { AsyncStorage } from 'react-native';

export default (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_FULFILLED':
      console.log('action', action.payload.data);
      // AsyncStorage.multiSet(['@app:session', action.payload.data.auth_token], ['@user:id', action.payload.data.decoded.user_id])
    case 'LOGIN_REJECTED':
      console.log('error');
    default:
      return state;
  }
};