import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/actions/todoList";
import { BiText } from "react-icons/bi";
import { Wrapper } from "./styled";
import TextInput from "../../TextInput";
import { DeleteButton } from "../../../styles/button";

const AddTodo = ({ onCancel, tags }) => {
  const dispatch = useDispatch();
  let [text, setText] = useState("");

  const handleSubmit = (text) => {
    dispatch(addTodo({ text, tags }));
    setText("");
    onCancel();
  };
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Wrapper>
      <TextInput
        icon={<BiText />}
        text={text}
        onChange={setText}
        defaultValue={"Add content here."}
        onSubmit={handleSubmit}
      />
      <DeleteButton onClick={handleCancel} />
    </Wrapper>
  );
};

export default AddTodo;
