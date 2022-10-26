import {
  TAGLIST_ACTION_ADD,
  TAGLIST_ACTION_REMOVE,
  TAGLIST_ACTION_CHANGECOLOR,
} from "../../constants/tagList";

export const addTagList = (text, id, color) => {
  return {
    type: TAGLIST_ACTION_ADD,
    text,
    id,
    color,
  };
};

export const removeTagList = (id) => {
  return {
    type: TAGLIST_ACTION_REMOVE,
    id,
  };
};

export const editTagListColor = ({ id, color }) => {
  return {
    type: TAGLIST_ACTION_CHANGECOLOR,
    id,
    color,
  };
};
