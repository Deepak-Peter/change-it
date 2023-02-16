import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { BlogGrid } from "./blog-grid/BlogGrid";
import CircularProgress from "@mui/material/CircularProgress";
export default function Blog() {
  // const [id,setId]=useState();
  const [blogs, setBlogs] = useState();

  const getBlogs = async () => {
    await fetch("https://zpworkshopapis.netlify.app/.netlify/functions/blog")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.reverse());
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
        px: 3,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h3">Blog Platform</Typography>

          <Link to="blogCreate" style={{ textDecoration: "none" }}>
            <Button
              component="a"
              variant="contained"
              color="error"
              sx={{ boxShadow: 0 }}
            >
              New Post
            </Button>
          </Link>
        </Box>
        <Typography variant="h5">Recent Articles</Typography>
        <Typography color="textSecondary" variant="subtitle1">
          Discover the latest news, tips and user research insights from Acme.
        </Typography>
        <Typography color="textSecondary" variant="subtitle1">
          You will learn about web infrastructure, design systems and devops
          APIs best practices.
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {blogs ? (
            blogs?.reverse().map((ele) => {
              if (ele.approved) return <BlogGrid ele={ele} />;
              else return <></>;
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 10,
              }}
            >
              <CircularProgress color="error" />
            </Box>
          )}
        </Grid>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 8,
          }}
        >
          <Button disabled startIcon={<ArrowBackIcon fontSize="small" />}>
            Newer
          </Button>
          <Button
            color="error"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{ ml: 1 }}
          >
            Older posts
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
