import { Alert, Button, Snackbar } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

export const BlogSnackbar = (props) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
      >
        <Alert
          onClose={props.handleClose}
          sx={{
            width: "100%",
            backgroundColor: "dimgrey",
            color: "white",
            ".MuiAlert-icon": { color: "white" },
          }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
