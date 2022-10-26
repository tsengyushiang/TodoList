import { isVisibleByText, isVisibleByTag } from "./helper/checker";
import { useSelector } from "react-redux";
import TodoList from "../List";
import DropDownTagSelector from "../../DropDownTagSelector";
import { useState } from "react";
import useValidTagsFilter from "../../../hooks/useValidTagsFilter";
import AddTodo from "../Add";
import { TagsAndAdd, TagListWrapper } from "./styled";
import { AddButton } from "../../../styles/button";
import Tags from "../Item/Tags";
import {} from "./styled";
import { useTranslation } from "react-i18next";

const TodoListWithFilter = ({ tags = [] }) => {
  const todos = useSelector((state) => state.todoList.todos);
  const selectedId = useSelector((state) => state.todoFilter.selectedIndex);
  const keyword = useSelector((state) => state.todoFilter.searchKeyword);
  const mode = useSelector((state) => state.todoFilter.displayMode);

  const validTodos = todos
    .filter(isVisibleByText(keyword, mode))
    .filter(isVisibleByTag(tags));
  const isHighlight = validTodos?.map((todo) => todo.id === selectedId);

  return <TodoList todos={validTodos} isHighlight={isHighlight}></TodoList>;
};

const TagFilterWithAddButton = ({
  onAddClick,
  validCheckTagsObjects,
  onSelect,
}) => {
  const { t } = useTranslation("common");

  return (
    <TagsAndAdd>
      <TagListWrapper>
        <DropDownTagSelector
          onHover={
            <>
              {validCheckTagsObjects.length ? (
                <Tags tags={validCheckTagsObjects} />
              ) : (
                t("placeHolderOfListFilter")
              )}
            </>
          }
          onSelect={onSelect}
          defaultTags={validCheckTagsObjects?.map((tag) => tag.id)}
        />
      </TagListWrapper>
      <AddButton onClick={onAddClick} />
    </TagsAndAdd>
  );
};

// only show todos with assigned tags
const TodoListWithTagFilter = ({ defaultTags = [] }) => {
  const [isAdding, setAdding] = useState(false);
  const [checkedTags, setCheckedTags] = useState(defaultTags);
  const { getValidTagsId, getValidTagsObject } = useValidTagsFilter();

  const validCheckIds = getValidTagsId(checkedTags);

  return (
    <>
      <TagFilterWithAddButton
        onAddClick={() => setAdding(true)}
        validCheckTagsObjects={getValidTagsObject(checkedTags)}
        onSelect={setCheckedTags}
      />
      {isAdding && (
        <AddTodo tags={validCheckIds} onCancel={() => setAdding(false)} />
      )}
      <TodoListWithFilter tags={validCheckIds} />
    </>
  );
};

export default TodoListWithTagFilter;
