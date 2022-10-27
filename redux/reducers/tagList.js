import produce from "immer";

import {
  TAGLIST_ACTION_ADD_SUCCESS,
  TAGLIST_ACTION_REMOVE,
  TAGLIST_ACTION_CHANGECOLOR,
} from "../../constants/tagList";

import { EXCEPTION_ADD_DUPLICATE_TAG_MSG } from "../../constants/exception";

const initialState = {
  tags: [],
};

const add = ({ tags }, { text, id, color }) => {
  if (tags.find((tag) => tag.text === text || tag.id === id)) {
    console.warn(EXCEPTION_ADD_DUPLICATE_TAG_MSG);
    return [...tags];
  }
  return [{ text, id, color }, ...tags];
};

const remove = ({ tags }, { id }) => {
  return tags.filter((tag) => {
    return tag.id !== id;
  });
};

const changeColor = ({ tags }, { id, color }) => {
  return tags?.map((tag) => {
    if (tag.id === id) {
      return Object.assign({}, { ...tag, color });
    }
    return tag;
  });
};

const tagList = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TAGLIST_ACTION_ADD_SUCCESS:
        draft.tags = add(state, action);
        break;
      case TAGLIST_ACTION_REMOVE:
        draft.tags = remove(state, action);
        break;
      case TAGLIST_ACTION_CHANGECOLOR:
        draft.tags = changeColor(state, action);
        break;
      default:
        break;
    }
  });

export default tagList;
