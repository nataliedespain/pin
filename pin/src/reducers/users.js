const initialState =
{
  user: [],
  users: [],
  isFetching: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {...state, isFetching: true}
    case 'GET_USER_FULFILLED':
      return {...state, user: action.payload.data, isFetching: false}
    case 'GET_USERS_PENDING':
      return {...state, isFetching: true}
    case 'GET_USERS_FULFILLED':
      return {...state, users: action.payload.data, isFetching: false}
    case 'TOGGLE_TRAVELING':
      if (state.user.is_traveling) {
        return {...state, user: {...state.user, is_traveling: false}}
      }
      return {...state, user: {...state.user, is_traveling: true}}
    default:
      return state;
  }
};
