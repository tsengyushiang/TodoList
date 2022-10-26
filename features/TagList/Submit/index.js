import Button from "../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { setTagList } from "../../../redux/actions/todoList";
const Submit = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.todoFilter.selectedTagList);
  const selectedTagList = useSelector(
    (state) => state.todoFilter.selectedTagList,
  );
  const selectedId = useSelector((state) => state.todoFilter.selectedIndex);

  const onSubmit = () => {
    const latestTagList = tags.filter((tag) => selectedTagList.includes(tag));
    dispatch(setTagList({ id: selectedId, tagIds: latestTagList }));
  };

  return <Button onClick={onSubmit} value="changeTag"></Button>;
};

export default Submit;
