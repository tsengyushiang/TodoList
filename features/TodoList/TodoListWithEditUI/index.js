import { useTranslation } from "react-i18next";
import { useState } from "react";
import PropTypes from "prop-types";

import TodoList from "../List";
import AddTodo from "../Add";
import DropDownTagSelector from "../../DropDownTagSelector";
import useValidTagsFilter from "../../../hooks/useValidTagsFilter";
import { TagsAndAdd, TagListWrapper } from "./styled";
import { AddButton } from "../../../styles/button";
import Tags from "../Item/Tags";

const TagListAndAddButton = ({ onAddClick, tags, onSelect }) => {
  const { t } = useTranslation("common");

  const defaultTags = tags?.map((tag) => tag.id);
  const onHover = (
    <>{tags.length ? <Tags tags={tags} /> : t("placeHolderOfListFilter")}</>
  );

  return (
    <TagsAndAdd>
      <TagListWrapper>
        <DropDownTagSelector
          defaultTags={defaultTags}
          onHover={onHover}
          onSelect={onSelect}
        />
      </TagListWrapper>
      <AddButton onClick={onAddClick} />
    </TagsAndAdd>
  );
};

// only show todos with assigned tags
const TodoListWithEditUI = ({
  tags,
  onSelectTags,
  todos,
  isHighlight,
  draggableIdBase,
  droppableId,
}) => {
  const [isAdding, setAdding] = useState(false);
  const { getValidTagsId, getValidTagsObject } = useValidTagsFilter();

  const validTagIds = getValidTagsId(tags);

  return (
    <>
      <TagListAndAddButton
        onAddClick={() => setAdding(true)}
        tags={getValidTagsObject(tags)}
        onSelect={onSelectTags}
      />
      {isAdding && (
        <AddTodo tagIds={validTagIds} onCancel={() => setAdding(false)} />
      )}
      <TodoList
        todos={todos}
        isHighlight={isHighlight}
        draggableIdBase={draggableIdBase}
        droppableId={droppableId}
      />
    </>
  );
};

TodoListWithEditUI.propTypes = {
  draggableIdBase: PropTypes.number.isRequired,
  droppableId: PropTypes.number.isRequired,
};

export default TodoListWithEditUI;
