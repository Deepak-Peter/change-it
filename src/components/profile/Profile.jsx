import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { ProfileLeft } from "./profile-left/ProfileLeft";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { ProfileSettings } from "./profile-left/profile-settings/ProfileSettings";
export const Profile = () => {
  return (
    <Container sx={{ p: 3 }}>
      <Box>
        <Box
          style={{ backgroundImage: `url(/img/profile-bg.jpg)` }}
          sx={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 3,
            height: 250,
            position: "relative",
            "&:hover": {
              "& button": {
                visibility: "visible",
              },
            },
          }}
        ></Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 5,
          }}
        >
          <Avatar
            src="/img/profile-bg.jpg"
            sx={{
              height: 64,
              width: 64,
            }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography color="textSecondary" variant="overline">
              profile.bio
            </Typography>
            <Typography variant="h6">profile.name</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <Button sx={{ ml: 2 }} variant="outlined">
              Change Picture
            </Button>
          </Box>
          <Tooltip title="More options">
            <IconButton sx={{ ml: 1 }}>
              <MoreHorizOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <ProfileLeft />
          </Grid>
          <Grid item md={8}>
            <ProfileSettings />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
