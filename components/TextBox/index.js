import PropTypes from "prop-types";
import { TextBox, Icon, Input } from "./stlyed";

const TextInput = ({
  text,
  onChange,
  placeholder,
  icon,
  alert = false,
  onFocus = () => {},
}) => {
  const onTextChange = ({ target }) => {
    const { value } = target;
    onChange(value);
  };

  return (
    <TextBox isAlert={alert}>
      {!!icon && <Icon>{icon}</Icon>}
      <Input
        onFocus={onFocus}
        hasIcon={icon}
        onChange={onTextChange}
        placeholder={placeholder}
        value={text}
      />
    </TextBox>
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
