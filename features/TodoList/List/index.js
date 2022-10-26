import React from "react";
import Item from "../Item";
import { useDispatch } from "react-redux";
import { select, setSelectedTagList } from "../../../redux/actions/todoFilter";
import { List } from "./styled";
import useValidTagsFilter from "../../../hooks/useValidTagsFilter";

const TodoList = ({ todos, isHighlight }) => {
  const { getValidTagsObject } = useValidTagsFilter();
  const dispatch = useDispatch();

  const onSelect = ({ id, tags }) => {
    dispatch(select(id));
    dispatch(setSelectedTagList(tags));
  };

  return (
    <List>
      {todos?.map((todo, index) => {
        const { text, id } = todo;
        return (
          <Item
            key={id}
            text={text}
            tags={getValidTagsObject(todo.tagIds)}
            id={id}
            onSelect={onSelect}
            isHightlight={isHighlight[index]}
          />
        );
      })}
    </List>
  );
};

export default TodoList;
