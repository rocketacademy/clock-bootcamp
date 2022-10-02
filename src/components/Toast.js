import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from "@mui/icons-material/Replay";
import { Slide } from "@mui/material";

function Transition(props) {
  return <Slide {...props} direction="right" />;
}

export function Toast({ toast, id }) {
  const [open, setOpen] = React.useState(true);

  const closeHandler = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const undoHandler = (event) => {
    setOpen(false);
    toast.undoHandler(event);
  };

  const action = (
    <>
      {toast.undoHandler && (
        <IconButton size="small" color="inherit" onClick={undoHandler}>
          <ReplayIcon fontSize="small" />
        </IconButton>
      )}
      <IconButton size="small" color="inherit" onClick={closeHandler}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      sx={{ position: "relative" }}
      open={open}
      autoHideDuration={toast.duration || 5000}
      onClose={closeHandler}
      message={toast.message}
      TransitionComponent={Transition}
      action={action}
      key={id}
    />
  );
}
