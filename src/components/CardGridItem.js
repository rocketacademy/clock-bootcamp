import { CSS } from "@dnd-kit/utilities";
import { ClockCard } from "./ClockCard";
import { Grid } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";

export const SortableGridItem = (props) => {
  const { item, date } = props;
  const { setNodeRef, attributes, listeners, transition, transform } =
    useSortable({ id: item.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
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
