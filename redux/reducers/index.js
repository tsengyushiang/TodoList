import { combineReducers, createStore } from "redux";
import todoFilterReducer from "./todoFilter";
import todoListReducer from "./todoList";
import tagListReducer from "./tagList";

const app = combineReducers({
  todoList: todoListReducer,
  todoFilter: todoFilterReducer,
  tagList: tagListReducer,
});
const store = createStore(app);

export default store;
