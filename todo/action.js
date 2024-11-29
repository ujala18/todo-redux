export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text, id: Date.now(), isCompleted: false },
  });
  
  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
  });
  
  export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
  });