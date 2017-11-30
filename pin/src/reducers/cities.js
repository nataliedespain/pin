const initialState =
{
  cities: [],
  isFetching: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITIES_PENDING':
      return {...state, isFetching: true}
    case 'GET_CITIES_FULFILLED':
      return {...state, cities: action.payload.data, isFetching: false}
    case 'ADD_CITY_FULFILLED':
      return {...state, cities: [...state.cities, action.payload.data]}
    default:
      return state;
  }
};
