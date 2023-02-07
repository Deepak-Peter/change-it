import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 3,
        px: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography variant="h3" sx={{ mt: 3 }}>
          Home
        </Typography>
        <Box>
          <Link to="/blog/blogCreate" style={{ textDecoration: "none" }}>
            <Button component="a" variant="contained" sx={{ boxShadow: 0 }}>
              New Post
            </Button>
          </Link>
        </Box>
      </Box>
      <Box>
        <Box>
          <Card></Card>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h5" sx={{ my: 3 }}>
            My Blogs
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} xs={12}>
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
                    <Box>
                      <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
                        1 day ago
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", columnGap: 1 }}>
                      <Button variant="contained" size="small">
                        Edit
                      </Button>
                      <Button variant="outlined" color="error" size="small">
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
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
                    <Box>
                      <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
                        1 day ago
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", columnGap: 1 }}>
                      <Button variant="contained" size="small">
                        Edit
                      </Button>
                      <Button variant="outlined" color="error" size="small">
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
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
                    <Box>
                      <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
                        1 day ago
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", columnGap: 1 }}>
                      <Button variant="contained" size="small">
                        Edit
                      </Button>
                      <Button variant="outlined" color="error" size="small">
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
