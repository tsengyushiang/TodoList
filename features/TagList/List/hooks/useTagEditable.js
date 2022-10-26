import { useDispatch } from "react-redux";
import {
  removeTagList,
  editTagListColor,
} from "../../../../redux/actions/tagList";

const useTagEditable = () => {
  const dispatch = useDispatch();

  const checkIsEditable = (tagText) => {
    return true;
  };
  const getDeleteFunc = (tagText, id) => {
    if (!checkIsEditable(tagText)) {
      return undefined;
    }
    return () => dispatch(removeTagList(id));
  };

  const getColorChangeFunc = (tagText, id) => {
    if (!checkIsEditable(tagText)) {
      return undefined;
    }
    return (color) => {
      dispatch(editTagListColor({ id, color }));
    };
  };

  return { getDeleteFunc, getColorChangeFunc };
};

export default useTagEditable;
