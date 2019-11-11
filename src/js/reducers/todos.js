import ActionTypes from '../constants/actionTypes';

import { initialState } from '../config/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TODOS:
      return action.todos;
    case ActionTypes.ADD_TODO:
      return [...state, action.todo];
    case ActionTypes.DELETE_TODO:
      return state.filter(td => td.id !== action.id);
    default:
      return state;
  }
};
export default reducer;