import {
  FILTER_ACTION_SEARCH_MODECHANGE,
  FILTER_ACTION_SEARCH,
  FILTER_ACTION_SELECT,
  FILTER_ACTION_SET_SELECTED_TAGLIST,
} from "../../constants/todoFilter";

export const select = (index) => {
  return {
    type: FILTER_ACTION_SELECT,
    index,
  };
};

export const search = (keyword) => {
  return {
    type: FILTER_ACTION_SEARCH,
    keyword,
  };
};

export const displayModeChange = (mode) => {
  return {
    type: FILTER_ACTION_SEARCH_MODECHANGE,
    mode,
  };
};

export const setSelectedTagList = (tagList) => {
  return {
    type: FILTER_ACTION_SET_SELECTED_TAGLIST,
    tagList,
  };
};
