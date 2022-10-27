import { takeEvery, put } from "redux-saga/effects";
import {
  LIST_ACTION_ADD,
  LIST_ACTION_ADD_SUCCESS,
} from "../../constants/todoList";

const checkId = (() => {
  let idCounter = 0;
  return (id) => {
    return id ? id : `@${idCounter++}`;
  };
})();

function* checkTodo({ text, id, tagIds }) {
  yield put({
    type: LIST_ACTION_ADD_SUCCESS,
    text,
    id: checkId(id),
    tagIds,
  });
}

export default [takeEvery(LIST_ACTION_ADD, checkTodo)];
