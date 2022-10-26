import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoBoard from "../features/TodoBoard";

import LanguageSwitch from "../features/LanguageSwitch";
import { addTagList } from "../redux/actions/tagList";
import { addTodo } from "../redux/actions/todoList";
import { board } from "./api/board";
import { todos } from "./api/todos";
import { tags } from "./api/tags";

const TodoHome = ({ locale, board, tags, todos }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    tags.forEach((tag) => {
      const { text, id, color } = tag;
      dispatch(addTagList(text, id, color));
    });

    todos.forEach((todo) => {
      dispatch(addTodo(todo));
    });
  }, []);

  return (
    <>
      <LanguageSwitch />
      <TodoBoard board={board} />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common"])),
      board,
      tags,
      todos,
    },
  };
}

export default TodoHome;
