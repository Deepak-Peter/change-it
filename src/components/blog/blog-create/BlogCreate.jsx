import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

export const BlogCreate = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <div>
            <Card>
              <CardHeader title="Profile Progress" />
              <Divider />
              <CardContent>
                <LinearProgress value={50} variant="determinate" />
                <Box sx={{ mt: 2 }}>
                  <Typography color="textSecondary" variant="subtitle2">
                    50% Set Up Complete
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Box sx={{ mt: 3 }}>
              <Card>
                <CardHeader title="About" />
                <Divider />
                <CardContent>
                  <Typography color="textSecondary" variant="subtitle2">
                    &quot;
                    {
                      "Everyone thinks of changing the world, but no one thinks of changing himself."
                    }
                    &quot;
                  </Typography>
                  <List>
                    <ListItem disableGutters divider>
                      <ListItemAvatar sx={{ color: "action.active" }}>
                        <WorkOutlineRoundedIcon fontSize="small" />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography variant="subtitle2">
                            Product Designer at at{" "}
                            <Link
                              color="textPrimary"
                              href="#"
                              variant="subtitle2"
                            >
                              Zero Pixels
                            </Link>
                          </Typography>
                        }
                        secondary={
                          <Typography color="textSecondary" variant="body2">
                            Past: UX Designer Focus
                            <Link
                              color="textSecondary"
                              href="#"
                              variant="body2"
                            >
                              Zero Pixels
                            </Link>
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem disableGutters divider>
                      <ListItemAvatar sx={{ color: "action.active" }}>
                        <SchoolOutlinedIcon fontSize="small" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Link
                            color="textSecondary"
                            sx={{ cursor: "pointer" }}
                            variant="caption"
                          >
                            Add school or collage
                          </Link>
                        }
                      />
                    </ListItem>
                    <ListItem disableGutters divider>
                      <ListItemAvatar sx={{ color: "action.active" }}>
                        <HomeOutlinedIcon fontSize="small" />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography variant="subtitle2">
                            Lives in{" "}
                            <Link
                              color="textPrimary"
                              href="#"
                              variant="subtitle2"
                            >
                              Bucharest
                            </Link>
                          </Typography>
                        }
                        secondary={
                          <Typography color="textSecondary" variant="body2">
                            Originally from{" "}
                            <Link
                              color="textSecondary"
                              href="#"
                              variant="body2"
                            >
                              Rm. Valcea
                            </Link>
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemAvatar sx={{ color: "action.active" }}>
                        <MailOutlineOutlinedIcon fontSize="small" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle2">
                            anika.visser@devias.io
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
