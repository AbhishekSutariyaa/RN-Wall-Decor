export const ADD_TO_SAVE = 'ADD_TO_SAVE';
export const REMOVE_FROM_SAVE = 'REMOVE_FROM_SAVE';

const initialState = [];

const saveItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SAVE:
      return [...state, action.payload];
    case REMOVE_FROM_SAVE:
      return state.filter((saveItem) => saveItem !== action.payload);
  }
  return state;
};

export default saveItemsReducer;
