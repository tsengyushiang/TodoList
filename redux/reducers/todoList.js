import produce from "immer";

import {
  LIST_ACTION_ADD_SUCCESS,
  LIST_ACTION_EDIT,
  LIST_ACTION_SETTAG,
  LIST_ACTION_REMOVE,
} from "../../constants/todoList";

import { EXCEPTION_ADD_DUPLICATE_TAG_MSG } from "../../constants/exception";

const initialState = {
  todos: [],
};

const add = ({ todos }, { text, tagIds, id }) => {
  if (todos.find((todo) => todo.id === id)) {
    console.warn(EXCEPTION_ADD_DUPLICATE_TAG_MSG);
    return [...todos];
  }
  return [{ text, tagIds, id }, ...todos];
};

const setTags = ({ todos }, { id, tagIds }) => {
  return todos?.map((todo) => {
    if (todo.id === id) {
      return { ...todo, tagIds };
    }
    return todo;
  });
};

const remove = ({ todos }, { id }) => {
  return todos.filter((todo) => {
    return todo.id !== id;
  });
};

const edit = ({ todos }, { text, id }) => {
  return todos?.map((todo) => {
    if (todo.id === id) {
      return { ...todo, text, id };
    }
    return todo;
  });
};

const todoList = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LIST_ACTION_ADD_SUCCESS:
        draft.todos = add(state, action);
        break;
      case LIST_ACTION_SETTAG:
        draft.todos = setTags(state, action);
        break;
      case LIST_ACTION_EDIT:
        draft.todos = edit(state, action);
        break;
      case LIST_ACTION_REMOVE:
        draft.todos = remove(state, action);
        break;
      default:
        break;
    }
  });

export default todoList;
