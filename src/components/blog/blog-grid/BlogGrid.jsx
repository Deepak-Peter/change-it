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

  return (
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
          {/* <img src={`${props.ele.imagestr}`} alt={"np"}/> */}
          <Box>
            {/* <img src={`${props.ele.imagestr}`} alt={"np"}/> */}

            <Box
              sx={{
                backgroundImage: `url(${props.ele.imagestr})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "block",
                height: "280px",
              }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">{props.ele.title}</Typography>
            <Box sx={{ my: 1 }}>
              <Chip
                label={props.ele.category}
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
                  {props?.data?.signature[0]?.substring(0, 1)}
                </Avatar>
                <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                  By {props.ele.signature[0]} • {props.ele.createdAt}
                </Typography>
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
  );
};
