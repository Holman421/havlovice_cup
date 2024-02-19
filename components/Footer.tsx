"use client";

import { useAuth } from "@/config/AuthContext";
import {
  mainColor,
  negativeRed,
  positiveGreen,
} from "@/config/colors";
import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  const auth = useAuth();

  return (
    <Box
      component={"footer"}
      sx={{
        width: "100vw",
        backgroundColor: mainColor,
        padding: ".5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Button
        variant="text"
        onClick={() => {
          auth?.login();
        }}
        sx={{ color: "white" }}
      >
        Přihlásit test
      </Button>
      <Typography
        sx={{
          fontSize: "1rem",
          color: auth?.isLoggedIn
            ? positiveGreen
            : negativeRed,
          padding: ".25rem .5rem",
          borderRadius: ".5rem",
        }}
      >
        {auth?.isLoggedIn ? "Přihlášen" : "Nepřihlášen"}
      </Typography>
      <Button
        variant="text"
        onClick={() => {
          auth?.logout();
        }}
        sx={{ color: "white" }}
      >
        Odhlásit test
      </Button>
    </Box>
  );
}
