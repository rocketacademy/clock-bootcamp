import React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Slide } from "@mui/material";

function Transition(props) {
  return <Slide {...props} direction="right" />;
}

export function Toast({ toast, id }) {
  const [open, setOpen] = React.useState(true);

  const closeHandler = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      {toast.undoHandler && (
        <Button
          color="secon"
          size="small"
          onClick={(ev) => {
            setOpen(false);
            toast.undoHandler(ev);
          }}
        >
          UNDO
        </Button>
      )}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeHandler}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      sx={{ position: "relative" }}
      open={open}
      autoHideDuration={5000}
      onClose={closeHandler}
      message={toast.message}
      TransitionComponent={Transition}
      action={action}
      key={id}
    />
  );
}
