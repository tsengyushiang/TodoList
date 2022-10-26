import PropTypes from "prop-types";
import { ColoredBox } from "./styled";

const CheckBox = ({ text, onChange, checked }) => {
  return (
    <ColoredBox onClick={onChange}>
      <input type="checkbox" value={text} checked={checked} readOnly />
      {text}
    </ColoredBox>
  );
};

CheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CheckBox;
