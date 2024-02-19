import HeroSectionPartners from "@/components/HeroSectionPartners";
import HeroSectionPoster from "@/components/HeroSectionPoster";
import { mainColor } from "@/config/colors";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          margin: "4rem 0 0 10%",
          maxWidth: "37%",
          animation: "fadeInFromTop 600ms ease",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            maxWidth: "40rem",
            fontSize: "7rem",
            fontWeight: "bold",
          }}
        >
          Open Air Havlovice
        </Typography>

        <Button
          variant="contained"
          sx={{
            margin: "2rem 0 0 .3rem",
            padding: "1rem 2rem",
            backgroundColor: mainColor,
            color: "white",
            transition: "all 200ms ease",
            "&:hover": {
              backgroundColor: mainColor,
              transform: "scale(1.05)",
            },
            "&:active": {
              backgroundColor: mainColor,
              transform: "scale(0.95)",
            },
          }}
        >
          <Link href="/registration">
            Zaregistrovat tým
          </Link>
        </Button>
        <HeroSectionPartners />
      </Box>
      <HeroSectionPoster />
    </Box>
  );
}
