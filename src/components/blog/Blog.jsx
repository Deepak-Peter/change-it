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
        setBlogs(data);
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
            blogs?.map((ele) => {
              return <BlogGrid ele={ele} />;
            })
          ) : (
            <Box sx={{ my: 10 }}>
              <CircularProgress color="error" />
            </Box>
          )}
          {/* <Grid item lg={6} md={6} xs={12}>
            <Card
              sx={{
                boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
                borderRadius: 2,
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundImage: "url(/img/business-large.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                    height: "280px",
                  }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">
                  Why I Still Lisp, and You Should Too
                </Typography>
                <Typography variant="body1" sx={{ color: "#8c8c8c" }}>
                  Aliquam dapibus elementum nulla at malesuada. Ut mi nisl,
                  aliquet non mollis vel, feugiat non nibh.
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
                      N
                    </Avatar>
                    <Typography variant="subtitle1">
                      By Jie Yan Song • Feb 4, 2023
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
                      5 min read
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Card
              sx={{
                boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
                borderRadius: 2,
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundImage: "url(/img/business-large.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                    height: "280px",
                  }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">
                  Why I Still Lisp, and You Should Too
                </Typography>
                <Typography variant="body1" sx={{ color: "#8c8c8c" }}>
                  Aliquam dapibus elementum nulla at malesuada. Ut mi nisl,
                  aliquet non mollis vel, feugiat non nibh.
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
                      N
                    </Avatar>
                    <Typography variant="subtitle1">
                      By Jie Yan Song • Feb 4, 2023
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
                      5 min read
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid> */}
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
