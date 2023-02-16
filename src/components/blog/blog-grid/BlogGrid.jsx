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
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const BlogGrid = (props) => {
  const [id, setId] = useState();

  return (
    <Grid item lg={6} md={6} xs={12}>
    <Card
      sx={{
        boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
        borderRadius: 2,
        cursor: "pointer",
      }}    
    >
      <Link to={`/blog/${props.ele.id}`} 
      style={{ textDecoration: "none", color: "black" }}>
     {/* <img src={`${props.ele.imagestr}`} alt={"np"}/> */}
        <Box>
      {/* <img src={`${props.ele.imagestr}`} alt={"np"}/> */}

            <Box
              sx={{
                backgroundImage: `url(${props.ele.imagestr})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "block",
                height: "280px",
              }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">{props.ele.title}</Typography>
            <Typography variant="body1" sx={{ color: "#8c8c8c" }}>
              {props.ele.category}
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
                    //   background:
                    //     "linear-gradient(90deg, rgba(105,228,254,1) 0%, rgba(2,186,223,1) 100%)",
                    width: 30,
                    height: 30,
                  }}
                >
                  R
                </Avatar>
                <Typography variant="subtitle1" sx={{ color: "#696969" }}>
                  By {props.ele.signature[0]} • {props.ele.createdAt}
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
  );
};
