import PropTypes from "prop-types";
import React from "react";
import Item from "../Item";
import { Draggable } from "react-beautiful-dnd-next";
import { useDispatch } from "react-redux";
import { select, setSelectedTagList } from "../../../redux/actions/todoFilter";
import { List } from "./styled";
import useValidTagsFilter from "../../../hooks/useValidTagsFilter";
import { Droppable } from "react-beautiful-dnd-next";

const TodoList = ({
  todos,
  isHighlight,
  draggableIdBase,
  droppableId,
  renderOrder,
}) => {
  const { getValidTagsObject } = useValidTagsFilter();
  const dispatch = useDispatch();

  const onSelect = ({ id, tags }) => {
    dispatch(select(id));
    dispatch(setSelectedTagList(tags));
  };

  return (
    <Droppable droppableId={`${droppableId}`}>
      {(provided, snapshot) => (
        <List
          ref={provided.innerRef}
          // style={getListStyle(snapshot.isDraggingOver)}
          {...provided.droppableProps}
        >
          {renderOrder.map((id, index) => {
            const { text, tagIds } = todos.find((todo) => todo.id == id);
            return (
              <Draggable
                key={id}
                draggableId={`${draggableIdBase + index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    // style={getItemStyle(
                    //   snapshot.isDragging,
                    //   provided.draggableProps.style,
                    // )}
                  >
                    <Item
                      text={text}
                      tags={getValidTagsObject(tagIds)}
                      id={id}
                      onSelect={onSelect}
                      isHightlight={isHighlight[index]}
                    />
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
};

TodoList.propTypes = {
  draggableIdBase: PropTypes.number.isRequired,
  droppableId: PropTypes.number.isRequired,
};

export default TodoList;
