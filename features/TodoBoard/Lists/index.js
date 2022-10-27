import TodoListWithEditUI from "../../TodoList/TodoListWithEditUI";
import { ListWrapper, ListContainer } from "./styled";

const TodoLists = ({ tags, todos, isHighlight, onSelectTags, renderOrder }) => {
  const onTagChange = (index) => {
    return (tags) => {
      onSelectTags({ index, tags });
    };
  };

  return (
    <ListContainer>
      {tags?.map((tags, index) => {
        // compute draggableBase
        let draggableIdBase = 0;
        for (let i = 0; i < index; i++) {
          draggableIdBase += todos[i].length;
        }
        if (!renderOrder[index]) return null;
        return (
          <ListWrapper key={index}>
            <TodoListWithEditUI
              draggableIdBase={draggableIdBase}
              droppableId={index}
              tags={tags}
              onSelectTags={onTagChange(index)}
              todos={todos[index]}
              renderOrder={renderOrder[index]}
              isHighlight={isHighlight[index]}
            />
          </ListWrapper>
        );
      })}
    </ListContainer>
  );
};

export default TodoLists;
