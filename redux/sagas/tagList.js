import { takeEvery, put } from "redux-saga/effects";
import {
  TAGLIST_ACTION_ADD,
  TAGLIST_ACTION_ADD_SUCCESS,
} from "../../constants/tagList";

const genRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const checkColor = (color) => {
  return color ? color : genRandomColor();
};

const checkId = (() => {
  let idCounter = 0;
  return (id) => {
    return id ? id : `@${idCounter++}`;
  };
})();

function* checkTag({ text, id, color }) {
  yield put({
    type: TAGLIST_ACTION_ADD_SUCCESS,
    text,
    id: checkId(id),
    color: checkColor(color),
  });
}

export default [takeEvery(TAGLIST_ACTION_ADD, checkTag)];
