import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { search } from "../../../redux/actions/todoFilter";
import TextBox from "../../../components/TextBox";

const ImmediateSearchBox = ({}) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onChange = (text) => {
    setText(text);
    dispatch(search(text));
  };

  return (
    <Wrapper>
      <TextBox
        icon={<BsSearch />}
        text={text}
        onChange={onChange}
        placeholder={""}
      />
    </Wrapper>
  );
};

export default ImmediateSearchBox;
