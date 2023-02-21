import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const BlogGrid = (props) => {
  const [id, setId] = useState();
  const [data, setData] = useState();

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

        window.location.reload();
      });
  };

  const getDetails = async () => {
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${props.ele.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return data?.approved ? (
    <Grid
      item
      lg={6}
      md={6}
      xs={12}
      sx={{ display: "grid", alignItems: "strech" }}
    >
      <Card
        sx={{
          boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        <Link
          to={`/blog/${props.ele.id}`}
          style={{ textDecoration: "none", color: "black" }}
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
            <Typography variant="h6">{data?.title}</Typography>
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
              <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
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
                  <Typography variant="caption" sx={{ color: "#696969" }}>
                    {data?.createdAt}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
                  5 min read
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      </Card>
    </Grid>
  ) : (
    <></>
  );
};
