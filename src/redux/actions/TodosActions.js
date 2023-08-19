export const Add_Todo = (todo) => {
  return { type: "todos/addTodo", payload: todo };
};
export const Remove_Todo = (id) => {
  return { type: "todos/removeTodo", payload: id };
};

export const Mark_Todo_Completed = (id) => {
  return {
    type: "todos/markCompleted",
    payload: id,
  };
};

export const Clear_Todos = () => {
  return {
    type: "todos/clearAll",
  };
};
