import { useSelector } from "react-redux";

const useValidTagsFilter = () => {
  const validTags = useSelector((state) => state.tagList.tags);

  const tagIsValid = (id) => {
    return validTags.find((validTag) => validTag.id == id);
  };

  const getValidTagsId = (tags) => {
    return tags.filter(tagIsValid);
  };

  const getValidTagsObject = (tags) => {
    const validTagsIds = getValidTagsId(tags);
    return validTags.filter((tag) => validTagsIds.includes(tag.id));
  };

  return { validTags, getValidTagsId, getValidTagsObject };
};

export default useValidTagsFilter;
