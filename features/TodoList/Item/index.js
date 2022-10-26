import React from "react";
import PropTypes from "prop-types";
import { Wrapper, TagsWrapper } from "./styled";
import Tags from "./Tags";
import RemoveTodo from "../Remove";

const Text = ({ text }) => {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
};

const TodoItem = ({ text, tags, id, onSelect, isHightlight }) => {
  const onClick = () => {
    onSelect({ id, tags });
  };
  return (
    <Wrapper onClick={onClick} highlight={isHightlight}>
      <Text text={text} />
      <TagsWrapper>
        <Tags tags={tags} />
      </TagsWrapper>
      <RemoveTodo id={id} />
    </Wrapper>
  );
};

TodoItem.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object.isRequired),
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isHightlight: PropTypes.bool.isRequired,
};

export default TodoItem;
