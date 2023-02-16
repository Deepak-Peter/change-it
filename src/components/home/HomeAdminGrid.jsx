import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

export const HomeAdminGrid = (props) => {
  const onReject = async (id) => {
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // setBlogs(data);
        alert("Deleted successfully");
        window.location.reload();
      });
  };

  const onApprove = async (id) => {
    const data = {
      approved: true,
    };
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${id}`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // setBlogs(data);
        alert("Approved successfully");
        window.location.reload();
      });
  };
  return (
    <Grid item lg={4} md={6} xs={12}>
      <Card
        sx={{
          boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${props.data.imagestr})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "block",
              height: "280px",
            }}
          />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" color="primary">
            {props.data?.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#8c8c8c" }}>
            {props.data?.category}
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", columnGap: 1 }}>
              <Avatar
                sx={{
                  background: "#fc818e",
                  width: 30,
                  height: 30,
                }}
              >
                {props?.data?.signature[0]?.substring(0, 1)}
              </Avatar>
              <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                By {props?.data?.signature[0]} • {props?.data?.createdAt}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
                15 min ago
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            {props.data?.approved ? (
              <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                <Button
                  fullWidth
                  variant="contained"
                  href={`/blog/${props?.data?.id}`}
                  sx={{
                    backgroundColor: "#4d4c4c",
                    "&:hover": {
                      backgroundColor: "#333333",
                    },
                  }}
                >
                  Read
                </Button>
                <Chip
                  label="Approved"
                  color="success"
                  icon={<DoneAllRoundedIcon />}
                />
              </Stack>
            ) : (
              <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                <Button
                  fullWidth
                  variant="contained"
                  href={`/blog/${props?.data?.id}`}
                  sx={{
                    backgroundColor: "#4d4c4c",
                    "&:hover": {
                      backgroundColor: "#333333",
                    },
                  }}
                >
                  Read
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="success"
                  onClick={() => {
                    onApprove(props?.data?.id);
                  }}
                >
                  Approve
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    onReject(props?.data?.id);
                  }}
                >
                  Reject
                </Button>
              </Stack>
            )}
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};
