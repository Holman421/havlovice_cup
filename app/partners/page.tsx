"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const partners = [
  {
    name: "Sponzor 1",
    logo: "https://www.iicsodisha.in/wp-content/uploads/2019/10/partner-logo-placeholder-Copy-5.jpg",
  },
  {
    name: "Sponzor 2",
    logo: "https://www.iicsodisha.in/wp-content/uploads/2019/10/partner-logo-placeholder-Copy-5.jpg",
  },
  {
    name: "Sponzor 3",
    logo: "https://www.iicsodisha.in/wp-content/uploads/2019/10/partner-logo-placeholder-Copy-5.jpg",
  },
  {
    name: "Sponzor 4",
    logo: "https://www.iicsodisha.in/wp-content/uploads/2019/10/partner-logo-placeholder-Copy-5.jpg",
  },
  {
    name: "Sponzor 5",
    logo: "https://www.iicsodisha.in/wp-content/uploads/2019/10/partner-logo-placeholder-Copy-5.jpg",
  },
];

export default function Partners() {
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "4rem",
        width: "clamp(15rem, 100%, 60rem)",
        animation: "fadeInFromTop 600ms ease",
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Partneři
      </Typography>
      <Grid container spacing={3} sx={{ padding: "1rem" }}>
        {partners.map((partner, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                image={partner.logo} // Replace with actual logo path
                alt={partner.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {partner.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
