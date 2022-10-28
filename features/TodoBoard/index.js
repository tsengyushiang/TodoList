import { useState } from "react";
import { Board } from "./styled";
import TodoLists from "./Lists";
import EditBox from "./EditBox";
import ImmediateSearchBox from "../TodoList/Search";
import { useDispatch, useSelector } from "react-redux";
import { isVisibleByText, isVisibleByTag } from "./helper/checker";
import { DragDropContext } from "react-beautiful-dnd-next";
import { useEffect } from "react";
import { setTagList, dragTodo } from "../../redux/actions/todoList";

const TodoBoard = ({ board }) => {
  const [boardTags, setBoardTags] = useState([]);
  const todos = useSelector((state) => state.todoList.todos);
  const renderOrder = useSelector((state) => state.todoList.renderOrder);
  const selectedId = useSelector((state) => state.todoFilter.selectedIndex);
  const keyword = useSelector((state) => state.todoFilter.searchKeyword);
  const mode = useSelector((state) => state.todoFilter.displayMode);
  const dispatch = useDispatch();

  useEffect(() => {
    setBoardTags(board?.tags);
  }, [board?.tags]);

  const sortedTodos = renderOrder.map((id) =>
    todos.find((todo) => todo.id === id),
  );

  const validTodos = boardTags.map((listTags) => {
    return sortedTodos
      .filter(isVisibleByText(keyword, mode))
      .filter(isVisibleByTag(listTags));
  });

  const isHighlight = validTodos?.map((todos) =>
    todos.map((todo) => todo.id === selectedId),
  );

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    // console.log("source.droppableId", result.source.droppableId);
    // console.log("source.index", result.source.index);
    // console.log("destination.droppableId", result.destination.droppableId);
    // console.log("destination.index", result.destination.index);
    // console.log(validTodos);

    /// change tags
    const sourceDroppableId = result.source.droppableId;
    const destinationDroppableId = result.destination.droppableId;
    const sourceIndex = result.source.index;

    const draggingTodo = validTodos[sourceDroppableId][sourceIndex];

    const sourceTags = boardTags[sourceDroppableId];
    const targetTags = boardTags[destinationDroppableId];

    const tagIdsAfterDrag = { ...draggingTodo }?.tagIds.filter((id) => {
      return !sourceTags.includes(id);
    });
    const tagIdsAfterDrop = [...new Set(tagIdsAfterDrag.concat(targetTags))];
    dispatch(setTagList({ id: draggingTodo.id, tagIds: tagIdsAfterDrop }));

    // change render order
    const destinationIndex = result.destination.index;
    const dragToSameDroppableId =
      sourceDroppableId === destinationDroppableId &&
      destinationIndex > sourceIndex
        ? 1
        : 0;
    const beforeDropTodo =
      validTodos[destinationDroppableId][
        destinationIndex + dragToSameDroppableId - 1
      ];
    const afterDropTodo =
      validTodos[destinationDroppableId][
        destinationIndex + dragToSameDroppableId
      ];

    // drop to empty list then not need to change renderOrder
    if (!beforeDropTodo && !afterDropTodo) return;

    dispatch(
      dragTodo({
        id: draggingTodo.id,
        frontId: beforeDropTodo?.id,
        backId: afterDropTodo?.id,
      }),
    );
  };

  const onSelectTags = ({ index, tags }) => {
    const newBoardTags = [...boardTags];
    newBoardTags[index] = tags;
    setBoardTags(newBoardTags);
  };

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
          />
        </DragDropContext>
      </Board>
      <EditBox />
    </>
  );
};

export default TodoBoard;
