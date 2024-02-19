"use client";

import {
  positiveGreen,
  positiveGreenHover,
} from "@/config/colors";
import {
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { useFormStatus } from "react-dom";

type RegisterTeamButtonProps = {};

export default function RegisterTeamButton({}: RegisterTeamButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button variant="contained" type="submit">
        Registrovat
      </Button>

      {pending && (
        <CircularProgress sx={{ margin: "1rem 0 0" }} />
      )}
    </Box>
  );
}
