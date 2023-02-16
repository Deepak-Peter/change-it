import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const BlogDetails = (props) => {
  const [data, setData] = useState();
  const params = useParams();

  const getDetails = async () => {
    await fetch(
      `https://zpworkshopapis.netlify.app/.netlify/functions/blog/${params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    getDetails();
  }, []);
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
            <Typography variant="h3" sx={{ mb: 2 }}>
              {data?.title}
            </Typography>
            <Chip
              label={data?.category}
              color="error"
              size="small"
              sx={{ px: 0.5 }}
            />
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
                  {data?.signature[0]?.substring(0, 1)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                    By {data?.signature[0]}
                  </Typography>
                  <Typography variant="caption">{data?.createdAt}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                backgroundImage: `url(${data?.imagestr})`,
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
              {data?.content[0]}
            </Typography>
            <Typography variant="body1" color="#696969" sx={{ mb: 2 }}>
              {data?.content[1]}
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 4 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "start" }}>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    background: "#fc818e",
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
                    background: "#fc818e",
                    width: 40,
                    height: 40,
                  }}
                >
                  S
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
                    background: "#fc818e",
                    width: 40,
                    height: 40,
                  }}
                >
                  A
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
