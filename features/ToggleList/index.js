import { useEffect, useState } from "react";
import CheckBox from "../../components/CheckBox";
import PropTypes from "prop-types";
import { Wrapper, Container } from "./styled";

export const useToggleList = (initialState = []) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(initialState);
  }, [initialState]);

  const toggle = (text) => {
    const newList = Object.assign([], list);
    const index = newList.indexOf(text);
    if (index > -1) {
      newList.splice(index, 1);
      setList(newList);
      return newList;
    } else {
      setList([...newList, text]);
      return [...newList, text];
    }
  };
  return { list, toggle };
};

const ToggleList = ({ selections, selectedItems, onToggle }) => {
  const { toggle } = useToggleList(selectedItems);

  return (
    <Container>
      {selections?.map((value, index) => {
        const { text, color, id } = value;
        return (
          <Wrapper color={color} key={index}>
            <CheckBox
              text={text}
              checked={!!selectedItems.find((item) => item === id)}
              onChange={() => {
                const currentCheckedList = toggle(id);
                onToggle(currentCheckedList);
              }}
            />
          </Wrapper>
        );
      })}
    </Container>
  );
};

ToggleList.propTypes = {
  selections: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  selectedItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  onToggle: PropTypes.func.isRequired,
};

export default ToggleList;
