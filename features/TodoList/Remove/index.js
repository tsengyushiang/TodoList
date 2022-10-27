import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../redux/actions/todoList";
import { IdAndDeleteDIv } from "./styled";
import { DeleteButton } from "../../../styles/button";

const RemoveTodo = ({ id }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(removeTodo({ id }));
  };
  return (
    <IdAndDeleteDIv>
      <div>{id}</div>
      <DeleteButton onClick={onDelete} />
    </IdAndDeleteDIv>
  );
};

export default RemoveTodo;
