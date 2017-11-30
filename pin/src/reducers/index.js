import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';
import users from './users';
import feed from './feed';
import follow from './follow';
import cities from './cities';
import toggleAdd from './toggleAdd';

const rootReducer = combineReducers({
  nav,
  login,
  users,
  feed,
  follow,
  cities,
  toggleAdd
});

export default rootReducer;
