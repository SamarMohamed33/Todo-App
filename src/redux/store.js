import { createStore, combineReducers } from "redux";
import TodosReducer from "./reducers/TodosReducer";
import VisibilityFilterReducer from "./reducers/VisibilityFilterReducer";

const store = createStore(
  combineReducers({
    Todos: TodosReducer,
    VisibilityFilter: VisibilityFilterReducer,
  })
);
export default store;
