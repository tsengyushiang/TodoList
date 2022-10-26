import {
  LIST_ACTION_ADD,
  LIST_ACTION_EDIT,
  LIST_ACTION_SETTAG,
  LIST_ACTION_REMOVE,
} from "../../constants/todoList";

const generateNewTodoItem = (() => {
  let idCounter = 0;
  return ({ text, tagIds, id = undefined }) => {
    const newId = (idCounter++).toString();
    return { text, tagIds, id: id ? id : newId };
  };
})();

const initialState = {
  todos: [],
};

const addTodo = (todoList, newItem) => {
  const { todos } = todoList;
  return {
    todos: [newItem, ...todos],
  };
};

const setTags = (todoList, id, tagIds) => {
  const { todos } = todoList;
  const newTodos = todos?.map((todo) => {
    if (todo.id === id) {
      return { ...todo, tagIds };
    }
    return todo;
  });
  return {
    todos: newTodos,
  };
};

const removeTodo = (todoList, id) => {
  const { todos } = todoList;
  const afterRemoveTodos = todos.filter((todo) => {
    return todo.id !== id;
  });
  return { todos: afterRemoveTodos };
};

const editTodo = (todoList, text, id) => {
  const { todos } = todoList;
  return {
    todos: todos?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text, id };
      }
      return todo;
    }),
  };
};

const todoList = (state = initialState, { type, text, id, tagIds }) => {
  switch (type) {
    case LIST_ACTION_ADD:
      return addTodo(state, generateNewTodoItem({ text, tagIds }));
    case LIST_ACTION_SETTAG:
      return setTags(state, id, tagIds);
    case LIST_ACTION_EDIT:
      return editTodo(state, text, id);
    case LIST_ACTION_REMOVE:
      return removeTodo(state, id);
    default:
      return state;
  }
};

export default todoList;
