import { CSS } from "@dnd-kit/utilities";
import { ClockCard } from "./ClockCard";
import { Grid } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { useMemo } from "react";

export const SortableGridItem = (props) => {
  const { item, date } = props;
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id: item.id });

  const style = useMemo(
    () => ({
      transition,
      transform: CSS.Transform.toString(transform),
      zIndex: isDragging ? 5 : 0,
      opacity: isDragging ? 0.3 : 1,
    }),
    [transition, transform, isDragging]
  );

  return (
    <Grid
      key={item.id}
      item
      xs={12}
      sm={6}
      md={4}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <ClockCard
        title={item.label}
        timeZone={item.timeZone}
        date={date}
        close={(ev) => props.removeCardHandler(item)}
      />
    </Grid>
  );
};
