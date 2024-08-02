import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TimezoneItem from "./TimezoneItem";

const TimezoneList = ({
  timezones,
  currentTime,
  removeTimezone,
  reorderTimezones,
}) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(timezones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    reorderTimezones(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="timezones">
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            {timezones.map((timezone, index) => (
              <Draggable key={timezone} draggableId={timezone} index={index}>
                {(provided) => (
                  <TimezoneItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    timezone={timezone}
                    currentTime={currentTime}
                    removeTimezone={removeTimezone}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const ListContainer = styled.div`
  margin: 20px 0;
`;

export default TimezoneList;
