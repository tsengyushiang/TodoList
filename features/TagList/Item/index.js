import PropTypes from "prop-types";
import { Tag, Text, InputColor } from "./styled";
import { DeleteButton } from "../../../styles/button";

const TagItem = ({ text, onDelete, color, onColorChange }) => {
  const handleColorChange = (e) => {
    const { target } = e;
    const { value } = target; //color
    onColorChange(value);
  };

  return (
    <Tag>
      {!!onColorChange && (
        <InputColor value={color} onChange={handleColorChange} />
      )}
      <Text color={color}>{text}</Text>
      {!!onDelete && <DeleteButton onClick={onDelete} />}
    </Tag>
  );
};

TagItem.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TagItem;
