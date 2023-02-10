import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FileDropzone } from "../file-dropzone/file-dropzone";
import { fileToBase64 } from "../../../utils/file-to-base64";

export const BlogCreate = () => {
  const [cover, setCover] = useState("/static/mock-images/covers/cover_4.jpeg");

  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  };
  const handleRemove = () => {
    setCover(null);
  };
  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mt: 3 }}>
          Create post
        </Typography>
        <Card
          elevation={16}
          sx={{
            alignItems: "center",
            borderRadius: 1,
            display: "flex",
            justifyContent: "space-between",
            mb: 8,
            mt: 6,
            px: 3,
            py: 2,
          }}
        >
          <Typography variant="subtitle1">Hello, Admin</Typography>
          <div>
            <Link href="/blog" passHref>
              <Button
                component="a"
                sx={{
                  display: {
                    xs: "none",
                    sm: "inline-flex",
                  },
                  mr: 2,
                }}
                variant="outlined"
              >
                Cancel
              </Button>
            </Link>
            <Link href="/blog/1" passHref>
              <Button
                component="a"
                sx={{
                  display: {
                    xs: "none",
                    sm: "inline-flex",
                  },
                  mr: 2,
                }}
                variant="contained"
              >
               Submit
              </Button>
            </Link>
            {/* <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton> */}
          </div>
        </Card>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">Basic details</Typography>
            <Box sx={{ mt: 3 }}>
              <TextField fullWidth label="Post title" name="title" />
              <Box sx={{ mt: 3 }}>
                <TextField fullWidth label="Short description" />
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">Post cover</Typography>
            {cover ? (
              <Box
                sx={{
                  backgroundImage: `url(${cover})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: 1,
                  height: 230,
                  mt: 3,
                }}
              />
            ) : (
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: 1,
                  borderRadius: 1,
                  borderStyle: "dashed",
                  borderColor: "divider",
                  height: 230,
                  mt: 3,
                  p: 3,
                }}
              >
                <Typography align="center" color="textSecondary" variant="h6">
                  Select a cover image
                </Typography>
                <Typography
                  align="center"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="subtitle1"
                >
                  Image used for the blog post cover and also for Open Graph
                  meta
                </Typography>
              </Box>
            )}
            <Button onClick={handleRemove} sx={{ mt: 3 }} disabled={!cover}>
              Remove photo
            </Button>
            <Box sx={{ mt: 3 }}>
              <FileDropzone
                accept="image/*"
                maxFiles={1}
                onDrop={handleDropCover}
              />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6" paddingBottom={2}>
              Content
            </Typography>

            <TextField
              fullWidth
              rows={5}
              variant="outlined"
              placeholder="write something"
              multiline
            />
          </CardContent>
        </Card>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <Typography variant="h6">Meta</Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField fullWidth label="SEO title" name="title" />
                <TextField fullWidth sx={{ mt: 3 }} label="SEO description" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: {
              sm: "none",
            },
            mt: 2,
          }}
        >
          <Link href="/blog/1" passHref>
            <Button component="a" variant="contained">
              Publish changes
            </Button>
          </Link>
        </Box>
      </Container>
    </Container>
  );
};
