import produce from "immer";

import {
  LIST_ACTION_ADD_SUCCESS,
  LIST_ACTION_EDIT,
  LIST_ACTION_SETTAG,
  LIST_ACTION_REMOVE,
  LIST_ACTION_DRAG,
} from "../../constants/todoList";

import { EXCEPTION_ADD_DUPLICATE_TAG_MSG } from "../../constants/exception";

const initialState = {
  renderOrder: [],
  todos: [],
};

const checkIdDuplicate = ({ todos }, { id }) => {
  return todos.find((todo) => todo.id === id);
};
const addTodo = ({ todos }, { text, tagIds, id }) => {
  return [{ text, tagIds, id }, ...todos];
};
const addRenderOrder = ({ renderOrder }, { id }) => {
  return [id, ...renderOrder];
};

const setTags = ({ todos }, { id, tagIds }) => {
  return todos?.map((todo) => {
    if (todo.id === id) {
      return { ...todo, tagIds };
    }
    return todo;
  });
};

const removeTodo = ({ todos }, { id }) => {
  return todos.filter((todo) => {
    return todo.id !== id;
  });
};
const removeRenderOrder = ({ renderOrder }, { id }) => {
  return renderOrder.filter((orderId) => {
    return orderId !== id;
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

const drag = ({ renderOrder }, { id, frontId, backId }) => {
  console.log(`drag ${id} between ${frontId} ${backId}`);
  const newRenderOrder = [...renderOrder];
  newRenderOrder.splice(newRenderOrder.indexOf(id), 1);
  if (backId) {
    newRenderOrder.splice(newRenderOrder.indexOf(backId), 0, id);
  } else if (frontId) {
    newRenderOrder.splice(newRenderOrder.indexOf(frontId) + 1, 0, id);
  } else {
    console.warn("drag failed target location not defined");
  }

  return newRenderOrder;
};

const todoList = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LIST_ACTION_ADD_SUCCESS:
        if (checkIdDuplicate(state, action)) break;
        draft.todos = addTodo(state, action);
        draft.renderOrder = addRenderOrder(state, action);
        break;
      case LIST_ACTION_SETTAG:
        draft.todos = setTags(state, action);
        break;
      case LIST_ACTION_EDIT:
        draft.todos = edit(state, action);
        break;
      case LIST_ACTION_REMOVE:
        draft.todos = removeTodo(state, action);
        draft.renderOrder = removeRenderOrder(state, action);
        break;
      case LIST_ACTION_DRAG:
        draft.renderOrder = drag(state, action);
        break;
      default:
        break;
    }
  });

export default todoList;
