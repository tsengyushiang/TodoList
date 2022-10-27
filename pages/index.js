import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetServerContext } from "react-beautiful-dnd-next";

import TodoBoard from "../features/TodoBoard";

import LanguageSwitch from "../features/LanguageSwitch";
import { addTagList } from "../redux/actions/tagList";
import { addTodo } from "../redux/actions/todoList";

const InitTodosAndTags = ({ tags, todos }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    tags.forEach((tag) => {
      const { text, id, color } = tag;
      dispatch(addTagList(text, id, color));
    });
    todos.forEach((todo) => {
      const { text, id, tagIds } = todo;
      dispatch(addTodo({ text, id, tagIds }));
    });
  }, []);
};

const TodoHome = ({ board, tags, todos }) => {
  InitTodosAndTags({ tags, todos });
  return (
    <>
      <LanguageSwitch />
      <TodoBoard board={board} />
    </>
  );
};

export async function getStaticProps(context) {
  resetServerContext();
  // Todo : get base url
  const baseURL = "https://todolist-mcwlsn4ik-tsengyushiang.vercel.app/";
  const board = await (await fetch(`${baseURL}/api/board`)).json();
  const tags = await (await fetch(`${baseURL}/api/tags`)).json();
  const todos = await (await fetch(`${baseURL}/api/todos`)).json();
  console.log(context);
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
