import { ADD_TODO, SET_TODO_INPUT } from "./constants";

const initState = {
  // state go here
  todo: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
        return {
            ...state,
            todo: [...state.todo, action.payload]
        }
    default:
      return new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
