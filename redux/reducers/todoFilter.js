import {
  FILTER_ACTION_SEARCH,
  FILTER_ACTION_SEARCH_MODECHANGE,
  FILTER_ACTION_SELECT,
  FILTER_MODE_HIGHLIGHT,
  FILTER_MODE_SHOWITEM,
  FILTER_ACTION_SET_SELECTED_TAGLIST,
} from "../../constants/todoFilter";

const initialState = {
  selectedIndex: "",
  selectedTagList: [],
  searchKeyword: "",
  displayMode: FILTER_MODE_SHOWITEM,
};

const changeSelected = (filter, selectedIndex) => {
  return {
    ...filter,
    selectedIndex,
  };
};

const search = (filter, searchKeyword) => {
  return {
    ...filter,
    searchKeyword,
  };
};

const displayModeToggle = (filter) => {
  const displayMode =
    filter.displayMode === FILTER_MODE_HIGHLIGHT
      ? FILTER_MODE_SHOWITEM
      : FILTER_MODE_HIGHLIGHT;

  return {
    ...filter,
    displayMode,
  };
};

const setSelectedTagList = (filter, selectedTagList) => {
  return {
    ...filter,
    selectedTagList,
  };
};

const todoFilter = (
  state = initialState,
  { type, index, keyword, tagList }
) => {
  switch (type) {
    case FILTER_ACTION_SELECT:
      return changeSelected(state, index);
    case FILTER_ACTION_SET_SELECTED_TAGLIST:
      return setSelectedTagList(state, tagList);
    case FILTER_ACTION_SEARCH:
      return search(state, keyword);
    case FILTER_ACTION_SEARCH_MODECHANGE:
      return displayModeToggle(state);
    default:
      return state;
  }
};

export default todoFilter;
