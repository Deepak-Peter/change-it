import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* <Box
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
    </Box> */}
      <Container
        sx={{
          my: 4,
          px: { xs: 2, md: 10 },
        }}
        maxWidth="xl"
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
              <Button component="a" variant="contained" sx={{ boxShadow: 0 }}>
                New Post
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>

      <div className="container">
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
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

            <div className="user" style={{ width: "100%", marginTop: "16px" }}>
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
            <div className="user" style={{ width: "100%", marginTop: "16px" }}>
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
            <div className="user" style={{ width: "100%", marginTop: "16px" }}>
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
        <div className="cards"></div>
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
  );
}
