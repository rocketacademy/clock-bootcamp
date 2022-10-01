import React from "react";
import { Stack } from "@mui/material";
import { Toast } from "./Toast";

class ToastContainer extends React.Component {
  render() {
    return (
      <Stack
        sx={{
          position: "absolute",
          bottom: 24,
          left: 24,
        }}
        spacing={2}
      >
        {this.props.toasts.map((toast) => {
          return <Toast toast={toast} key={toast.id} />;
        })}
      </Stack>
    );
  }
}

export default ToastContainer;
