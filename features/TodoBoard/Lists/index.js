import ListWithFilter from "../../TodoList/ListWithFilter";
import { ListWrapper, ListContainer } from "./styled";

const TodoList = ({ tags }) => {
  return (
    <ListWrapper>
      <ListWithFilter defaultTags={tags} />
    </ListWrapper>
  );
};

const TodoLists = ({ tags }) => {
  return (
    <ListContainer>
      {tags?.map((tags, index) => {
        return <TodoList key={index} tags={tags} />;
      })}
    </ListContainer>
  );
};

export default TodoLists;
