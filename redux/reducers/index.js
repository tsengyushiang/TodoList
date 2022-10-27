import { combineReducers } from "redux";
import todoFilterReducer from "./todoFilter";
import todoListReducer from "./todoList";
import tagListReducer from "./tagList";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  todoFilter: todoFilterReducer,
  tagList: tagListReducer,
});

export default rootReducer;
