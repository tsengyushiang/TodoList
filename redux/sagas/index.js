import { all } from "redux-saga/effects";
import todoList from "./todoList";
import tagList from "./tagList";

export default function* rootSaga() {
  yield all([...todoList, ...tagList]);
}
