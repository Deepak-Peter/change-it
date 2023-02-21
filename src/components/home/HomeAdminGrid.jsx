import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { BlogSnackbar } from "../snackbar/BlogSnackbar";

export const HomeAdminGrid = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState();

  const onDelete = async (id) => {
    setOpen(true);
    setMessage("Rejected successfully");
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // setBlogs(data);

        window.location.reload();
      });
  };

  const onReject = async (id) => {
    setOpen(true);
    setMessage("Rejected successfully");

    const data = {
      approved: false,
      reviewed: true,
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

        window.location.reload();
      });
  };

  const onApprove = async (id) => {
    setOpen(true);
    setMessage("Approved successfully");

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

        window.location.reload();
      });
  };


  const getDetails = async () => {
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${props.data.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <Grid item lg={4} md={6} xs={12}>
      <BlogSnackbar open={open} message={message} />
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
              backgroundImage: `url(${data?.imagestr})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "block",
              height: "280px",
            }}
          />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: { xs: "1", md: "1" },
              WebkitBoxOrient: "vertical",
              whiteSpace: "normal",
              overflow: "hidden",
            }}
          >
            {data?.title}
          </Typography>
          <Box sx={{ my: 1 }}>
            <Chip
              label={data?.category}
              color="error"
              size="small"
              sx={{ px: 0.5 }}
            />
          </Box>
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
                  textTransform: "uppercase",
                  fontSize: "14px",
                }}
              >
                {data?.signature[0]?.substring(0, 1)}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                  By {data?.signature[0]}
                </Typography>
                <Typography variant="caption">
                  {data?.createdAt}
                </Typography>
              </Box>
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
            {data?.approved === false && data?.reviewed == true ? (
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
                  label="Rejected"
                  color="error"
                  icon={<DoneAllRoundedIcon />}
                />
              </Stack>
            ) : data?.approved ? (
              <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                <Button
                  fullWidth
                  variant="contained"
                  href={`/blog/${data?.id}`}
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
                  href={`/blog/${data?.id}`}
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
                    onApprove(data?.id);
                  }}
                >
                  Approve
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    onReject(data?.id);
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
