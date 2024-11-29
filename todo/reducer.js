import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todoActions';

const initialState = {
  todos: [],
};

export const Reducer = (state = initialState,{type,payload}) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos:  [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default Reducer;
