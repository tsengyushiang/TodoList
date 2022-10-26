import PropTypes from "prop-types";
import { useState } from "react";
import TextBox from "../../components/TextBox";
import { AddButton } from "../../styles/button";
import { Wrapper, AlterModalBox, AlterText } from "./styled";
import ModalBox from "../ModalBox";

const TextInput = ({ onSubmit, defaultValue, icon }) => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);
  const [showModalBox, setShowModalBox] = useState(false);

  const onChange = (text) => {
    setText(text);
  };

  const onClick = () => {
    if (text === "" || text.trim() === "") {
      setAlert(true);
      setShowModalBox(true);
      return;
    }
    onSubmit(text);
    setText("");
  };

  return (
    <Wrapper>
      <TextBox
        icon={icon}
        onChange={onChange}
        text={text}
        placeholder={defaultValue}
        alert={alert}
        onFocus={() => setAlert(false)}
      />
      <AddButton onClick={onClick} />
      {showModalBox && (
        <ModalBox>
          <AlterModalBox onClick={() => setShowModalBox(false)} />
          <AlterText>
            Do not submit empty string.
            <br />
            Click to continue.
          </AlterText>
        </ModalBox>
      )}
    </Wrapper>
  );
};

TextInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default TextInput;
