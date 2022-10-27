import produce from "immer";

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

const todoFilter = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FILTER_ACTION_SELECT:
        draft.selectedIndex = action.index;
        break;
      case FILTER_ACTION_SET_SELECTED_TAGLIST:
        draft.selectedTagList = action.tagList;
        break;
      case FILTER_ACTION_SEARCH:
        draft.searchKeyword = action.keyword;
        break;
      case FILTER_ACTION_SEARCH_MODECHANGE:
        draft.displayMode =
          state.displayMode === FILTER_MODE_HIGHLIGHT
            ? FILTER_MODE_SHOWITEM
            : FILTER_MODE_HIGHLIGHT;
        break;
      default:
        break;
    }
  });

export default todoFilter;
