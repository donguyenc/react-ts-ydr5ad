const peopleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PEOPLE':
      return [...state, action.payload]; // example, might need to add check
    default:
      return state;
  }
};

export default peopleReducer;
