import { FloatRightBox } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import OnClickOutsideDetector from "../../OnClickOutsideDetector";
import { select } from "../../../redux/actions/todoFilter";
import TodoEdit from "./TodoEdit";
import TagListEdit from "./TagEdit";
const EditBox = () => {
  const index = useSelector((state) => state.todoFilter.selectedIndex);
  const todos = useSelector((state) => state.todoList.todos);

  const dispatch = useDispatch();
  const cancelSelect = () => {
    dispatch(select(""));
  };

  const selectedItem = todos.find((todo) => todo.id === index);

  return (
    <OnClickOutsideDetector onClickOutside={cancelSelect}>
      {!!selectedItem && (
        <FloatRightBox>
          <TodoEdit todo={selectedItem} />
          <TagListEdit />
        </FloatRightBox>
      )}
    </OnClickOutsideDetector>
  );
};

export default EditBox;
