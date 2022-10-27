import { useSelector } from "react-redux";
import TagItem from "../Item";
import { List } from "./styled";
import useTagEditable from "./hooks/useTagEditable";

const TagList = ({}) => {
  const tags = useSelector((state) => state.tagList.tags);
  const { getDeleteFunc, getColorChangeFunc } = useTagEditable();

  return (
    <List>
      {[...tags]?.map((tag, index) => {
        const { text, color, id } = tag;
        return (
          <TagItem
            text={text}
            key={index}
            onDelete={getDeleteFunc(text, id)}
            onColorChange={getColorChangeFunc(text, id)}
            color={color}
          />
        );
      })}
    </List>
  );
};

export default TagList;
