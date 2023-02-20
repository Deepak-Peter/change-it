import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
        px: 3,
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
        <Typography variant="h3">About</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 15,
          textAlign: "justify",
        }}
      >
        <Box>
          <Typography variant="h5" color="error" sx={{ mb: 2 }}>
            Our Company
          </Typography>
          <Typography variant="body1">
            Zero Pixels takes its deep roots of revolutionizing companies with
            technology from our parent company, Fintech, which has delivered
            innovative technology to businesses for 30 years! Our core values
            are to create a culture of innovation and to create a culture of
            trust and respect for our clients.
            <br />
            <br />
            We are the pioneers in bridging gap between the company and its
            mission with next-generation technologies.
          </Typography>
          <Typography variant="h5" color="error" sx={{ my: 2 }}>
            Our Team
          </Typography>
          <Typography variant="body1">
            We're all a little crazy around here, and we're not big on rules. We
            not only get things done, but we also innovate in more ways than
            one. Our methods may be unconventional, but the results are also
            undeniable. We are passionate about businesses who believe they can
            change the world to make it a better place to live in!"
            <br />
            <br />
            We are the pioneers in bridging gap between the company and its
            mission with next-generation technologies.
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              width: 350,
              height: 450,
              backgroundImage: `url(/img/Zeropixels-1.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: 3,
              "&:hover": {
                transition: "transform .2s ease",
                transform: "scale(1.03)",
              },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
