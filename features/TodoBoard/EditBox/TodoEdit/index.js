import { useTranslation } from "next-i18next";
import EditTodo from "../../../TodoList/Edit";
import DropDownTagSelector from "../../../DropDownTagSelector";
import { setTagList } from "../../../../redux/actions/todoList";
import { TagsWrapper } from "./styled";
import { Title, Edit } from "../styled";
import { useDispatch } from "react-redux";
import Tags from "../../../TodoList/Item/Tags";
import useValidTagsFilter from "../../../../hooks/useValidTagsFilter";

const EditTodoText = ({ id, text }) => {
  const { t } = useTranslation("common");

  return (
    <Edit>
      <Title>
        {t("editTodoTextBlockTitle")} #{id}
      </Title>
      <EditTodo text={text} />
    </Edit>
  );
};

const EditTodoTags = ({ tagsObject, onSelect }) => {
  const { t } = useTranslation("common");

  return (
    <Edit>
      <Title>{t("editTodoTagBlockTitle")}</Title>
      <DropDownTagSelector
        onHover={t("assignTags")}
        onSelect={onSelect}
        defaultTags={tagsObject?.map((tag) => tag.id)}
      />
      <TagsWrapper>
        <Tags tags={tagsObject} />
      </TagsWrapper>
    </Edit>
  );
};

const TodoEdit = ({ todo }) => {
  const { getValidTagsObject } = useValidTagsFilter();
  const dispatch = useDispatch();
  const { text, id, tagIds } = todo;

  const onSelect = (selectedIds) => {
    dispatch(setTagList({ id, tagIds: selectedIds }));
  };

  return (
    <>
      <EditTodoText id={id} text={text} />
      <EditTodoTags
        tagsObject={getValidTagsObject(tagIds)}
        onSelect={onSelect}
      />
    </>
  );
};

export default TodoEdit;
