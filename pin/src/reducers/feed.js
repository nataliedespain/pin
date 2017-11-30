const initialState =
{
  feed: [],
  isFetching: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FEED_PENDING':
      return {...state, isFetching: true}
    case 'GET_FEED_FULFILLED':
      return {...state, feed: action.payload.data, isFetching: false}
    default:
      return state;
  }
};