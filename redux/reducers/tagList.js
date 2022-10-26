import {
  TAGLIST_ACTION_ADD,
  TAGLIST_ACTION_REMOVE,
  TAGLIST_ACTION_CHANGECOLOR,
} from "../../constants/tagList";

import { EXCEPTION_ADD_DUPLICATE_TAG_MSG } from "../../constants/exception";

const genRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const generateNewTag = (() => {
  let idCounter = 0;
  return ({ text, id = undefined, color = genRandomColor() }) => {
    const newId = (idCounter++).toString();
    return { text, id: id ? id : newId, color };
  };
})();

const initialState = {
  checkedList: [],
  tags: [],
};

const addTagList = (tagList, newTag) => {
  const { tags } = tagList;
  if (tags.find((tag) => tag.text === newTag.text)) {
    throw EXCEPTION_ADD_DUPLICATE_TAG_MSG;
  }

  return {
    ...tagList,
    tags: [newTag, ...tags],
  };
};

const removeTagList = (tagList, removeId) => {
  const { tags } = tagList;

  const afterRemovetags = tags.filter((tag) => {
    const { id } = tag;
    return id !== removeId;
  });
  return {
    ...tagList,
    tags: afterRemovetags,
  };
};

const changeTagListColor = (tagList, { id, color }) => {
  const { tags } = tagList;
  const newTags = tags?.map((tag) => {
    if (tag.id === id) {
      return Object.assign({}, { ...tag, color });
    }
    return tag;
  });
  return {
    ...tagList,
    tags: newTags,
  };
};

const tagList = (state = initialState, { type, text, id, color }) => {
  switch (type) {
    case TAGLIST_ACTION_ADD:
      return addTagList(state, generateNewTag({ text, id, color }));
    case TAGLIST_ACTION_REMOVE:
      return removeTagList(state, id);
    case TAGLIST_ACTION_CHANGECOLOR:
      return changeTagListColor(state, { id, color });
    default:
      return state;
  }
};

export default tagList;
