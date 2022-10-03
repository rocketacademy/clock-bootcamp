import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material/";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { SortableGridItem } from "./CardGridItem";
import CustomPointerSensor from "./CustomPointerSensor";
import { createPortal } from "react-dom";

export function CardGrid(props) {
  const [date, setDate] = useState(new Date());
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const sensors = [useSensor(CustomPointerSensor)];

  const onDragEndHandler = ({ active, over }) => {
    setActiveItem(null);
    if (active && over && active.id !== over.id) {
      const oldIndex = props.data.findIndex((item) => item.id === active.id);
      const newIndex = props.data.findIndex((item) => item.id === over.id);
      return props.setData(arrayMove(props.data, oldIndex, newIndex));
    }
  };
  const onDragStartHandler = (event) => {
    const index = props.data.findIndex((item) => item.id === event.active.id);
    setActiveItem(props.data[index]);
  };

  return (
    <DndContext // dndkit tutorial: https://www.youtube.com/watch?v=eDc2xowd0RI
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEndHandler}
      onDragStart={onDragStartHandler}
    >
      <Grid
        container
        justifyContent="center"
        alignContent="flex-start"
        spacing={2}
        sx={{ height: "100%" }}
      >
        <SortableContext
          items={props.data.map((item) => item.id)}
          strategy={rectSortingStrategy}
        >
          {props.data.map((item) => (
            <SortableGridItem
              key={item.id}
              item={item}
              date={date}
              removeCardHandler={props.removeCardHandler}
            />
          ))}
        </SortableContext>
      </Grid>
      {createPortal(
        <DragOverlay>
          {activeItem ? (
            <SortableGridItem
              key={activeItem.id}
              item={activeItem}
              date={date}
            />
          ) : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}
