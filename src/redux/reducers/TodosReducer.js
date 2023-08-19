const initialState =
  localStorage.length > 0 ? JSON.parse(localStorage.getItem("todos")) : [];

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addTodo":
      localStorage.setItem("todos", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    case "todos/removeTodo":
      localStorage.setItem(
        "todos",
        JSON.stringify(
          JSON.parse(localStorage.getItem("todos")).filter(
            (item) => item.id !== action.payload
          )
        )
      );
      return state.filter((item) => item.id !== action.payload);
    case "todos/markCompleted":
      const todos = JSON.parse(localStorage.getItem("todos")).map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    case "todos/clearAll":
      localStorage.clear();
      return [];
    default:
      return state;
  }
};

export default TodosReducer;
