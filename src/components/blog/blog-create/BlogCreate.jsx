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
import { useParams } from "react-router-dom";
import axios from "axios";

export const BlogCreate = () => {
  const params = useParams();
  const [cover, setCover] = useState("/static/mock-images/covers/cover_4.jpeg");
  const [img,setImg]=useState();
  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    setSelectedImage(data);
  };
  const handleRemove = () => {
    setSelectedImage(null);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit=async()=>{
    // axios
    // .post(`http://localhost:9000/.netlify/functions/blog`,{
    //   title: 'Blog Sample',
    //   category: 'sample'
    // })
    // .then((res) => setData(res.data))
    // .catch((err) => console.log(err, "it has an error"));
    const data={
        title: 'Y I still exist',
      category: 'sample',
      imagestr:img,
      content:[
        'demo',
        'smaple created for blog p'
      ],
      signature:['Kalidas M'],
    }

    await fetch("https://zpworkshopapis.netlify.app/.netlify/functions/blog",{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      // headers: {
      //   'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then((response) => response.json())
    .then((data) => {
      // setBlogs(data);
    });
  }

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const [data, setData] = useState([]);

  useEffect(() => {
 
  }, []);

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
                <CloudUploadOutlinedIcon color="primary" fontSize="large" />
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
              {/* {imageUrl && selectedImage && (
                <Box mt={2} textAlign="center">
                  <div>Image Preview:</div>
                  <img src={imageUrl} alt={selectedImage.name} />
                </Box>
              )} */}
              <Box>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) =>{
                    debugger;
                    var reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    console.log(reader,'readre')
                    reader.onload = () => {
                      console.log(reader.result); //base64encoded string
                      setImg(reader.result)
                    };
                     setSelectedImage(e.target.files[0])}}
                />
                <label htmlFor="select-image">
                  <Button variant="contained" color="primary" component="span">
                    Upload Image
                  </Button>
                </label>
              </Box>
              <Button onClick={handleRemove} disabled={!imageUrl}>
                Remove photo
              </Button>
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
        <Box sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
          <Link href="/blog" passHref style={{ textDecoration: "none" }}>
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
          <Link  passHref style={{ textDecoration: "none" }}>
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
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Link>
        </Box>
        {/* <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton> */}
      </Container>
    </Container>
  );
};
