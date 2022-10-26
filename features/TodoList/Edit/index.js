import React from "react";
import TextInput from "../../TextInput";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../../redux/actions/todoList";
import PropTypes from "prop-types";

const EditTodo = ({ text }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.todoFilter.selectedIndex);

  return (
    <TextInput
      onSubmit={(text) => {
        dispatch(editTodo({ text, id }));
      }}
      defaultValue={text}
      buttonName={"Modify"}
    />
  );
};

EditTodo.propTypes = {
  text: PropTypes.string.isRequired,
};

import { TextArea } from "./styled";
const ImmediateEditTodo = ({ text }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.todoFilter.selectedIndex);
  const onChange = (e) => {
    dispatch(editTodo({ text: e.target.value, id }));
  };

  return <TextArea onChange={onChange} value={text} rows={10} />;
};

export default ImmediateEditTodo;
