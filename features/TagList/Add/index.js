import React from "react";
import TextInput from "../../TextInput";
import { useDispatch } from "react-redux";
import { addTagList } from "../../../redux/actions/tagList";
import { useTranslation } from "next-i18next";

const AddTagList = ({}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  return (
    <TextInput
      onSubmit={(text) => {
        dispatch(addTagList(text));
      }}
      defaultValue={t("addTag")}
      buttonName={"addTag"}
    />
  );
};

export default AddTagList;
