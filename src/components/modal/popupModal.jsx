import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { CloseSharp } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  pt: 2,
  px: 4,
  pb: 3,
};

export const PopupModal = (props) => {
  const [open, setOpen] = React.useState(props.popupOpen);

  useEffect(() => {
    setOpen(props.popupOpen);
  });

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Done
              </Typography>
              <CloseSharp
                onClick={props.handleClose}
                sx={{ cursor: "pointer" }}
              />
            </Box>
            <Box>
              <Typography id="modal-modal-title" variant="body1">
                Your blog has been Submitted
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", mt: 1 }}>
              <Button
                onClick={props.handleClose}
                variant="contained"
                color="error"
                size="small"
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
