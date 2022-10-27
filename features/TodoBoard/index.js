import { useState } from "react";
import { Board } from "./styled";
import TodoLists from "./Lists";
import EditBox from "./EditBox";
import ImmediateSearchBox from "../TodoList/Search";
import { useDispatch, useSelector } from "react-redux";
import { isVisibleByText, isVisibleByTag } from "./helper/checker";
import { DragDropContext } from "react-beautiful-dnd-next";
import { useEffect } from "react";
import { setTagList } from "../../redux/actions/todoList";

const TodoBoard = ({ board }) => {
  const [boardTags, setBoardTags] = useState([]);
  const [renderOrder, setRenderOrder] = useState([]);
  const todos = useSelector((state) => state.todoList.todos);
  const selectedId = useSelector((state) => state.todoFilter.selectedIndex);
  const keyword = useSelector((state) => state.todoFilter.searchKeyword);
  const mode = useSelector((state) => state.todoFilter.displayMode);
  const dispatch = useDispatch();

  const validTodos = boardTags.map((listTags) => {
    return todos
      .filter(isVisibleByText(keyword, mode))
      .filter(isVisibleByTag(listTags));
  });

  const isHighlight = validTodos?.map((todos) =>
    todos.map((todo) => todo.id === selectedId),
  );

  useEffect(() => {
    setBoardTags(board?.tags);
  }, [board]);

  useEffect(() => {
    setRenderOrder(validTodos?.map((todos) => todos.map((todo) => todo.id)));
  }, [boardTags]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    // Todo : use renderOrder make direction get Todo item not work need to pass through renderOrder first
    const draggingTodo =
      validTodos[result.source.droppableId][result.source.index];

    // change Todo Tags
    const sourceTags = boardTags[result.source.droppableId];
    const targetTags = boardTags[result.destination.droppableId];

    const tagIdsAfterDrag = { ...draggingTodo }?.tagIds.filter((id) => {
      return !sourceTags.includes(id);
    });
    const tagIdsAfterDrop = [...new Set(tagIdsAfterDrag.concat(targetTags))];
    dispatch(setTagList({ id: draggingTodo.id, tagIds: tagIdsAfterDrop }));

    console.log(validTodos);
    console.log(draggingTodo.id);
    console.log(result.source.droppableId, result.source.index);
    console.log(result.destination.droppableId, result.destination.index);
    // recompute render Order
    const newRenderOrder = [...renderOrder];
    // remove drag Todo
    newRenderOrder[result.source.droppableId].splice(result.source.index, 1);
    // insert drop Todo
    newRenderOrder[result.destination.droppableId].splice(
      result.destination.index,
      0,
      draggingTodo.id,
    );
    setRenderOrder(newRenderOrder);
  };

  const onSelectTags = ({ index, tags }) => {
    const newBoardTags = [...boardTags];
    newBoardTags[index] = tags;
    setBoardTags(newBoardTags);
  };
  console.log(validTodos, renderOrder);
  return (
    <>
      <Board>
        <ImmediateSearchBox />
        <DragDropContext onDragEnd={onDragEnd}>
          <TodoLists
            tags={boardTags}
            todos={validTodos}
            isHighlight={isHighlight}
            onSelectTags={onSelectTags}
            renderOrder={renderOrder}
          />
        </DragDropContext>
      </Board>
      <EditBox />
    </>
  );
};

export default TodoBoard;
