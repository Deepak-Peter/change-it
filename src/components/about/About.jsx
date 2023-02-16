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
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
        <Box>
          <Typography variant="h5" sx={{ mb: 2 }}>
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
        </Box>
        <Box>
          <Box
            sx={{
              width: "500px",
              backgroundImage: "url(img/Zeropixels-1.jpg)",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
