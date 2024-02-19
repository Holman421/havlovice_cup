import { Box, Typography } from "@mui/material";

export default function Playoff() {
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "4rem",
        width: "clamp(15rem, 100%, 60rem)",
        animation: "fadeInFromTop 600ms ease",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Playoff
      </Typography>
    </Box>
  );
}
