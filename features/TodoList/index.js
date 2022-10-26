import Edit from "./Edit";
import Add from "./Add";
import ListWithFilter from "./ListWithFilter";
import SearchBox from "./Search";
import Remove from "./Remove";

const TodoList = () => {
  return (
    <div>
      <Add />
      <ListWithFilter />
      <Edit />
      <Remove />
      <SearchBox />
    </div>
  );
};

export default TodoList;
