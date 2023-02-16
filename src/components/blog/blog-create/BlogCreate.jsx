import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { fileToBase64 } from "../../../utils/file-to-base64";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PopupModal } from "../../modal/popupModal";

export const BlogCreate = () => {
  const [img, setImg] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    setSelectedImage(data);
  };
  const handleRemove = () => {
    setSelectedImage(null);
  };

  const handleOpen = () => {
    setPopupOpen(true);
  };
  const handleClose = () => {
    setPopupOpen(false);
  };

  const onSubmitAPICall = async (values) => {
    const data = {
      title: values.title,
      category: values.category,
      imagestr: img,
      content: [values.content1, values.content2],
      signature: [`${localStorage.getItem("blogUser")}`],
      reviewed: values.reviewed,
      approved: values.approved,
    };

    await fetch("https://zpworkshopapis.netlify.app/.netlify/functions/blog", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      // headers: {
      //   'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => {
        // setBlogs(data);
        // alert("blog submitted");
        setPopupOpen(true);
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      category: "",
      imagestr: "",
      content1: "",
      content2: "",
      signature: "",
      reviewed: false,
      approved: false,
      submit: null,
    },
    validationSchema: Yup.object({}),
    onSubmit: async (values) => {
      try {
        onSubmitAPICall(values);
        // postUser(regData);
      } catch (err) {
        console.error(err);
      }
    },
  });
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <form noValidate onSubmit={formik.handleSubmit}>
        {/* <Container maxWidth="xl"> */}
        <Typography variant="h3" sx={{ mt: 3 }}>
          Create post
        </Typography>

        <Card
          sx={{
            mt: 4,
            boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6">Basic details</Typography>
            <Box sx={{ mt: 3 }}>
              <TextField
                fullWidth
                label="Post title"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Category"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  name="category"
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            mt: 4,
            boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography variant="h6">Post cover</Typography>
            {imageUrl && selectedImage ? (
              <Box
                sx={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: 1,
                  height: 330,
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
                  height: 330,
                  mt: 3,
                  p: 3,
                }}
              >
                <CloudUploadOutlinedIcon color="error" fontSize="large" />
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

            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <Box>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    debugger;
                    var reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    console.log(reader, "readre");
                    reader.onload = () => {
                      console.log(reader.result); //base64encoded string
                      setImg(reader.result);
                    };
                    setSelectedImage(e.target.files[0]);
                  }}
                />
                <label htmlFor="select-image">
                  <Button variant="contained" color="error" component="span">
                    Upload Image
                  </Button>
                </label>
              </Box>
              <Button
                color="inherit"
                onClick={handleRemove}
                disabled={!imageUrl}
              >
                Remove photo
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            mt: 4,
            boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              paddingBottom={2}
              name="content1"
              onChange={formik.handleChange}
              value={formik.values.content1}
            >
              Content
            </Typography>
            <TextField
              fullWidth
              rows={5}
              variant="outlined"
              placeholder="write something"
              multiline
              name="content1"
              onChange={formik.handleChange}
              value={formik.values.content1}
            />
            <Typography
              variant="h6"
              paddingBottom={2}
              name="content2"
              onChange={formik.handleChange}
              value={formik.values.content2}
            >
              Paragragh
            </Typography>

            <TextField
              fullWidth
              rows={5}
              variant="outlined"
              placeholder="write something"
              multiline
              name="content2"
              onChange={formik.handleChange}
              value={formik.values.content2}
            />
          </CardContent>
        </Card>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "end" }}>
          <Button
            component="a"
            href="/blog"
            color="inherit"
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

          <Link href="/blog" passHref style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              color="error"
              sx={{
                display: {
                  xs: "none",
                  sm: "inline-flex",
                },
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Link>
          <PopupModal
            popupOpen={popupOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </Box>
        {/* </Container> */}
      </form>
    </Container>
  );
};
