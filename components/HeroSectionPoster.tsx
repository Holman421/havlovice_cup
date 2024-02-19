import { secondaryColor } from "@/config/colors";
import { Box, Typography } from "@mui/material";
import PosterImage from "@/public/HeroSectionPoster.png";
import Image from "next/image"; // Import Image from next.js

export default function HeroSectionPoster() {
  return (
    <Box
      sx={{
        backgroundColor: secondaryColor,
        width: "37.5%",
        height: "calc(100% + 5rem)",
        position: "absolute",
        top: "-5rem",
        left: "calc(50% + 4.4rem)",
        animation: "fadeInFromLeft 600ms ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          aspectRatio: "10/14",
          marginTop: "8rem",
          borderRadius: ".5rem",
          overflow: "hidden",
          boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        <Image
          src={PosterImage} // Use Image component here
          alt="Hero section poster"
          layout="fill" // This will make the image fill its parent container
          objectFit="cover" // This will make the image cover its parent container
        />
      </Box>
      <Typography
        sx={{ fontSize: "1.5rem", marginTop: "5rem" }}
      >
        Důležité termíny
      </Typography>
      <Typography>sem dát nějaký informace?</Typography>
    </Box>
  );
}
