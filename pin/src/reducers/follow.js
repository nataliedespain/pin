const initialState =
{
  followers: [],
  following: [],
  follows: [],
  isFetching: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FOLLOWERS_PENDING':
      return {...state, isFetching: true};
    case 'GET_FOLLOWERS_FULFILLED':
      return {...state, followers: action.payload.data, isFetching: false};
    case 'GET_FOLLOWING_PENDING':
      return {...state, isFetching: true}
    case 'GET_FOLLOWING_FULFILLED':
      return {...state, following: action.payload.data, isFetching: false};
    case 'GET_ALL_FOLLOWS_PENDING':
      return {...state, isFetching: true}
    case 'GET_ALL_FOLLOWS_FULFILLED':
      return {...state, follows: action.payload.data, isFetching: false};
    case 'FOLLOW_USER_FULFILLED':
      return state;
    case 'UNFOLLOW_USER_FULFILLED':
      return {...state, follows: [...action.payload.data, ...state.follows]};
    default:
      return state;
  }
};
