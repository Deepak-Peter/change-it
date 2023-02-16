import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function Home() {
  const user = localStorage.getItem("isLoggedIn");
  return (
    <>
      {user === "admin" ? (
        <>
          <Container
            sx={{
              my: 4,
              // px: { xs: 2, md: 10 },
              maxWidth: "1150px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Typography variant="h3">Home</Typography>
            </Box>
            <Grid container spacing={3}>
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
                        backgroundImage: "url(/img/business-large.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "block",
                        height: "280px",
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" color="primary">
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
                          R
                        </Avatar>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "#696969" }}
                        >
                          By Jie Yan Song • Feb 4, 2023
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
                      <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                        {/* <Link to={"/blog/1"} style={{ textDecoration: "none" }}> */}
                        <Button
                          fullWidth
                          variant="contained"
                          href="/blog/1"
                          sx={{
                            backgroundColor: "#4d4c4c",
                            "&:hover": {
                              backgroundColor: "#333333",
                            },
                          }}
                        >
                          Read
                        </Button>
                        {/* </Link> */}
                        <Button fullWidth variant="outlined" color="success">
                          Approve
                        </Button>
                        <Button fullWidth variant="outlined" color="error">
                          Reject
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
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
                          25 min ago
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                    >
                      <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                        <Button
                          fullWidth
                          variant="contained"
                          href="/blog/1"
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
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
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
                          5 days ago
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                    >
                      <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                        <Button
                          fullWidth
                          variant="contained"
                          href="/blog/1"
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
                          icon={<CloseRoundedIcon />}
                        />
                      </Stack>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Container
            sx={{
              my: 4,
              px: { xs: 8, sm: 10, md: 13, lg: 2 },
              maxWidth: "1150px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h3">Home</Typography>
              <Box>
                <Link to="/blog/blogCreate" style={{ textDecoration: "none" }}>
                  <Button
                    color="error"
                    component="a"
                    variant="contained"
                    sx={{ boxShadow: 0 }}
                  >
                    New Post
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>

          <div className="container">
            <div className="card-main">
              <div className="card-banner">
                <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
                  <div className="card-icon">
                    <img src="/svg/green-check.svg" alt="rover" />
                  </div>
                  <div className="card-title">
                    {/* <span className="tag tag-teal">Technology</span> */}
                    <p style={{ marginTop: "10px" }}>Blogs Uploaded</p>
                    <h1>10</h1>
                  </div>
                </div>

                <div
                  className="user"
                  style={{ width: "100%", marginTop: "16px" }}
                >
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button className="button" type="button">
                      See All Blogs
                    </button>
                    <button className="button-danger" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-banner">
                <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
                  <div className="card-icon">
                    <img src="/svg/blue-warning.svg" alt="rover" />
                  </div>
                  <div className="card-title">
                    {/* <span className="tag tag-teal">Technology</span> */}
                    <p style={{ marginTop: "10px" }}>Done Tasks</p>
                    <h1>10</h1>
                  </div>
                </div>
                <div
                  className="user"
                  style={{ width: "100%", marginTop: "16px" }}
                >
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button className="button" type="button">
                      See All Pendings
                    </button>
                    <button className="button-danger" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-banner">
                <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
                  <div className="card-icon">
                    <img src="/svg/red-rejected.svg" alt="rover" />
                  </div>
                  <div className="card-title">
                    {/* <span className="tag tag-teal">Technology</span> */}
                    <p style={{ marginTop: "10px" }}>Rejected Blogs</p>
                    <h1>10</h1>
                  </div>
                </div>
                <div
                  className="user"
                  style={{ width: "100%", marginTop: "16px" }}
                >
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button className="button" type="button">
                      See All Rejected
                    </button>
                    <button className="button-danger" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="title">
              <h2>My Blogs</h2>
            </div>

            <div className="card">
              <div className="card-header">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <div className="user-info" style={{ marginBottom: "10px" }}>
                  <small>1w ago</small>
                </div>
                {/* <span className="tag tag-teal">Technology</span> */}
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p style={{ marginTop: "10px" }}>
                  An exploration into the truck's polarising design
                </p>
                <div className="user" style={{ width: "100%" }}>
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button className="button" type="button">
                      Edit
                    </button>
                    <button className="button-danger" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <img
                  src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
                  alt="ballons"
                />
              </div>

              <div className="card-body">
                {/* <span className="tag tag-purple">Popular</span> */}
                <div className="user-info" style={{ marginBottom: "10px" }}>
                  <small>1w ago</small>
                </div>
                <h4>How to Keep Going When You Don’t Know What’s Next</h4>
                <p style={{ marginTop: "10px" }}>
                  The future can be scary, but there are ways to deal with that
                  fear.
                </p>
                <div className="user" style={{ width: "100%" }}>
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button className="button" type="button">
                      Edit
                    </button>
                    <button className="button-danger" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <img
                  src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                  alt="city"
                />
              </div>
              <div className="card-body">
                <div className="user-info" style={{ marginBottom: "10px" }}>
                  <small>1w ago</small>
                </div>
                {/* <span className="tag tag-pink">Design</span> */}
                <h4>10 Rules of Dashboard Design</h4>
                <p style={{ marginTop: "10px" }}>Dashboard Design Guidelines</p>
                <div className="user" style={{ width: "100%" }}>
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button className="button" type="button">
                      Edit
                    </button>
                    <button className="button-danger" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <img
                  src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                  alt="city"
                />
              </div>
              <div className="card-body">
                <div className="user-info" style={{ marginBottom: "10px" }}>
                  <small>1w ago</small>
                </div>
                {/* <span className="tag tag-pink">Design</span> */}
                <h4>10 Rules of Dashboard Design</h4>
                <p style={{ marginTop: "10px" }}>Dashboard Design Guidelines</p>
                <div className="user" style={{ width: "100%" }}>
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
                    <button className="button" type="button">
                      Edit
                    </button>
                    <button className="button-danger" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
