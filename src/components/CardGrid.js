import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material/";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { SortableGridItem } from "./CardGridItem";

export function CardGrid(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const sensors = [
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
  ];

  const onDragEndHandler = ({ active, over }) => {
    if (active && over && active.id !== over.id) {
      const oldIndex = props.data.findIndex((item) => item.id === active.id);
      const newIndex = props.data.findIndex((item) => item.id === over.id);
      return props.setData(arrayMove(props.data, oldIndex, newIndex));
    }
  };

  return (
    <DndContext // dndkit tutorial: https://www.youtube.com/watch?v=eDc2xowd0RI
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(ev) => {
        console.log(ev);
        onDragEndHandler(ev);
      }}
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
    </DndContext>
  );
}
