import {
  FILTER_MODE_HIGHLIGHT,
  FILTER_MODE_SHOWITEM,
} from "../../../../constants/todoFilter";

const isVisibleByTag = (keyTags) => {
  return (todo) => {
    const { tagIds } = todo;

    let consistAllKeyTags = true;
    keyTags.forEach((keytag) => {
      consistAllKeyTags = consistAllKeyTags && tagIds.includes(keytag);
    });
    return consistAllKeyTags;
  };
};

const isVisibleByText = (keyword, mode) => {
  return (todo) => {
    const { text } = todo;

    if (mode === FILTER_MODE_SHOWITEM && !text.includes(keyword)) {
      return false;
    }
    return true;
  };
};

const isHighlightByText = (keyword, mode) => {
  (todo) => {
    const { text } = todo;

    if (mode === FILTER_MODE_HIGHLIGHT && text.includes(keyword)) {
      return true;
    }

    return false;
  };
};

export { isVisibleByTag, isVisibleByText, isHighlightByText };
