import AddTag from "../../../TagList/Add";
import TagList from "../../../TagList/List";
import { Title, Edit } from "../styled";
import { useTranslation } from "next-i18next";

const TagListEdit = () => {
  const { t } = useTranslation();
  return (
    <Edit>
      <Title>{t("editTagsTitle")}</Title>
      <AddTag />
      <TagList />
    </Edit>
  );
};

export default TagListEdit;
