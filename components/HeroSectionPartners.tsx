import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
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

export default function HeroSectionPartners() {
  return (
    <Box sx={{ margin: "16rem 0 3rem 0" }}>
      <Typography
        variant="h3"
        sx={{ marginBottom: "1.5rem" }}
      >
        Partneři
      </Typography>
      <Grid container spacing={3} sx={{}}>
        {partners.map((partner, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                image={partner.logo} // Replae with actual logo path
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
