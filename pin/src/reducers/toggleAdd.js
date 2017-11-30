export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD':
      return !state;
    default:
      return state;
  }
};
