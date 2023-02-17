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
import { Link } from "react-router-dom";
import "./Home.css";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useEffect, useState } from "react";
import { HomeAdminGrid } from "./HomeAdminGrid";
import CircularProgress from "@mui/material/CircularProgress";
import { HomeUserCard } from "./HomeUserCard";

export default function Home() {
  const user = localStorage.getItem("isLoggedIn");
  const [blogs, setBlogs] = useState();
  const [yourblogs, setYourBlogs] = useState();

  const getBlogs = async () => {
    await fetch("https://zpworkshopapis.netlify.app/.netlify/functions/blog")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        const yourBlogs = data?.filter((ele) => {
          return ele.signature[0] === localStorage.getItem("blogUser");
        });
        setYourBlogs(yourBlogs);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);
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
              {blogs ? (
                blogs?.reverse().map((ele) => {
                  return <HomeAdminGrid data={ele} />;
                })
              ) : (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  <CircularProgress color="error" />
                </Box>
              )}
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
                    <h1>{blogs?.length}</h1>
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
                    <p style={{ marginTop: "10px" }}>Approved Blogs</p>
                    <h1>
                      {(blogs?.filter((ele) => {
                        return ele.approved === true;
                      }))?.length}
                    </h1>
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
                    <p style={{ marginTop: "10px" }}>No Actions Taken By Admin</p>
                    <h1>  {(blogs?.filter((ele) => {
                        return ele.reviewed === false && ele.approved==false;
                      }))?.length}</h1>
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

              <div className="card-banner">
                <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
                  <div className="card-icon">
                    <img src="/svg/red-rejected.svg" alt="rover" />
                  </div>
                  <div className="card-title">
                    {/* <span className="tag tag-teal">Technology</span> */}
                    <p style={{ marginTop: "10px" }}>Rejected Blogs</p>
                    <h1>  {(blogs?.filter((ele) => {
                        return ele.approved === false && ele.reviewed===true;
                      }))?.length}</h1>
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
            {blogs ? (
              blogs?.map((ele) => {
                return <HomeUserCard data={ele} />;
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
          </div>
        </>
      )}
    </>
  );
}
