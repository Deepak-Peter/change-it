import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

const countries = [
  { text: "Jersey", value: "JE" },
  { text: "Jordan", value: "JO" },
  { text: "Kazakhstan", value: "KZ" },
  { text: "Kenya", value: "KE" },
  { text: "Kiribati", value: "KI" },
  { text: "Korea, Democratic People'S Republic of", value: "KP" },
  { text: "Korea, Republic of", value: "KR" },
  { text: "Kuwait", value: "KW" },
  { text: "Kyrgyzstan", value: "KG" },
  { text: "Lao People'S Democratic Republic", value: "LA" },
];

export const ProfileSettings = () => {
  return (
    <Card
      sx={{
        p: 3,
        boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.12)",
      }}
    >
      <Box>
        <form onSubmit={(event) => event.preventDefault()}>
          <CardHeader title="Profile" />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Name" name="name" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  required
                  type="email"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Phone Number" name="phone" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Autocomplete
                  id="country-select-demo"
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label} ({option.code}) +{option.phone}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="State/Region" name="state" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="City" name="city" />
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  pl: 4,
                  mt: 5,
                }}
              >
                <Box>
                  <Typography gutterBottom variant="subtitle2">
                    Public Profile
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Means that anyone viewing your profile will be able to see
                    your contacts details
                  </Typography>
                </Box>

                <Switch edge="start" name="isPublic" />
              </Box>
            </Grid>
          </CardContent>
          <Divider sx={{ mt: 2 }} />
          <CardActions
            sx={{
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button color="primary" type="submit" variant="contained">
              Update Profile
            </Button>
          </CardActions>
        </form>
      </Box>
    </Card>
  );
};
