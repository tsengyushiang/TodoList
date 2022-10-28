import {
  LIST_ACTION_ADD,
  LIST_ACTION_EDIT,
  LIST_ACTION_SETTAG,
  LIST_ACTION_REMOVE,
  LIST_ACTION_DRAG,
} from "../../constants/todoList";

export const addTodo = ({ text, tagIds, id }) => {
  return {
    type: LIST_ACTION_ADD,
    text,
    tagIds,
    id,
  };
};

export const editTodo = ({ text, id }) => {
  return {
    type: LIST_ACTION_EDIT,
    text,
    id,
  };
};

export const removeTodo = ({ id }) => {
  return {
    type: LIST_ACTION_REMOVE,
    id,
  };
};

export const setTagList = ({ id, tagIds }) => {
  return {
    type: LIST_ACTION_SETTAG,
    id,
    tagIds,
  };
};

export const dragTodo = ({ id, frontId, backId }) => {
  return {
    type: LIST_ACTION_DRAG,
    id,
    frontId,
    backId,
  };
};
