import { Board } from "./styled";
import TodoLists from "./Lists";
import EditBox from "./EditBox";
import ImmediateSearchBox from "../TodoList/Search";

const TodoBoard = ({ board }) => {
  return (
    <>
      <Board>
        <ImmediateSearchBox />
        <TodoLists tags={board?.tags} />
      </Board>
      <EditBox />
    </>
  );
};

export default TodoBoard;
