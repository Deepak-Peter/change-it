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
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        py: 3,
        px: 3,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography variant="h3" sx={{ mt: 3 }}>
            Blog Platform
          </Typography>
          <Box>
            <Link to="blogCreate" style={{ textDecoration: "none" }}>
              <Button component="a" variant="contained" sx={{ boxShadow: 0 }}>
                New Post
              </Button>
            </Link>
          </Box>
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

        <Grid container spacing={3}>
          <Grid item lg={6} md={6} xs={12}>
            <Card
              sx={{
                boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
                borderRadius: 2,
                cursor:"pointer"
              }}
            >
              <Link to={"/blog/1"}>
              <Box >
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
                        background:
                          "linear-gradient(90deg, rgba(105,228,254,1) 0%, rgba(2,186,223,1) 100%)",
                        width: 30,
                        height: 30,
                      }}
                    >
                      R
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
              </Link>
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
                        background:
                          "linear-gradient(90deg, rgba(105,228,254,1) 0%, rgba(2,186,223,1) 100%)",
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
                        background:
                          "linear-gradient(90deg, rgba(105,228,254,1) 0%, rgba(2,186,223,1) 100%)",
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
