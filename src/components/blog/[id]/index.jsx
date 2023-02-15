import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const BlogDetails = () => {
  const [data,setData]=useState();
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  debugger;
  return (
    <div>
      {" "}
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          pt: 3,
          px: 3,
          pb: 5,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 6,
            }}
          >
            <Typography variant="h3" sx={{ mt: 3 }}>
              Blog Details
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
              {data.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#8c8c8c" }}>
              Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet
              non mollis vel, feugiat non nibh.
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
                <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                  By Jie Yan Song • Feb 4, 2023
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                backgroundImage: "url(/img/business-large.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "block",
                height: "280px",
                borderRadius: "10px",
              }}
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" fontWeight="900" sx={{ mb: 2 }}>
              Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis,
              sed mattis nibh accumsan.
            </Typography>
            <Typography variant="body1" color="#696969" sx={{ mb: 2 }}>
              Phasellus ullamcorper ultrices ullamcorper. Nunc auctor porttitor
              ex, non consequat ipsum aliquam at. Duis dapibus dolor in nisi
              viverra, a elementum nulla viverra. Etiam feugiat turpis leo, nec
              finibus diam rhoncus ac. Sed at metus et orci consequat facilisis
              vel vel diam.
            </Typography>
            <Typography variant="h6" fontWeight="900" sx={{ mb: 2 }}>
              Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis,
              sed mattis nibh accumsan.
            </Typography>
            <Typography variant="body1" color="#696969" sx={{ mb: 2 }}>
              Etiam faucibus massa auctor gravida finibus. Cras nulla magna,
              dapibus sit amet accumsan nec, ullamcorper sit amet dolor.
              <br />
              Donec leo nisi, porta et gravida nec, tincidunt ac velit. Aliquam
              in turpis a quam tempus dapibus. Morbi in tellus tempor, hendrerit
              mi vel, aliquet tellus. Quisque vel interdum ante. Nunc quis purus
              sem. Donec at risus lacinia ipsum cursus condimentum at ac dui.
              Nulla bibendum feugiat tellus ac tristique. Proin auctor, lectus
              et accumsan varius, justo odio vulputate neque, et efficitur augue
              leo id ex. Aliquam eget turpis nisl. Nam sapien massa,
              sollicitudin et vehicula a, fringilla vitae purus. Praesent a
              vestibulum felis.
            </Typography>
            <Typography variant="h6" fontWeight="900" sx={{ mb: 2 }}>
              Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis,
              sed mattis nibh accumsan.
            </Typography>
            <Typography variant="body1" color="#696969" sx={{ mb: 2 }}>
              Phasellus ullamcorper ultrices ullamcorper. Nunc auctor porttitor
              ex, non consequat ipsum aliquam at. Duis dapibus dolor in nisi
              viverra, a elementum nulla viverra. Etiam feugiat turpis leo, nec
              finibus diam rhoncus ac. Sed at metus et orci consequat facilisis
              vel vel diam.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 4 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "start" }}>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(105,228,254,1) 0%, rgba(2,186,223,1) 100%)",
                    width: 40,
                    height: 40,
                  }}
                >
                  R
                </Avatar>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  backgroundColor: "#F3F4F6",
                  borderRadius: 2,
                  p: 2,
                  width: "100%",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                  By Jie Yan Song
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "start" }}>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(105,228,254,1) 0%, rgba(2,186,223,1) 100%)",
                    width: 40,
                    height: 40,
                  }}
                >
                  R
                </Avatar>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  backgroundColor: "#F3F4F6",
                  borderRadius: 2,
                  p: 2,
                  width: "100%",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                  By Jie Yan Song
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "start" }}>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    background:
                      "linear-gradient(90deg, rgba(105,228,254,1) 0%, rgba(2,186,223,1) 100%)",
                    width: 40,
                    height: 40,
                  }}
                >
                  R
                </Avatar>
              </Box>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Add a comment"
                sx={{
                  fieldset: {
                    border: "1px solid #D1D5DB",
                    borderRadius: 3,
                  },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", md: "150px" },
                  py: 1.5,
                  boxShadow: 0,
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
