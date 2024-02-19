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

type CreateTeamButtonProps = {};

export default function CreateTeamButton({}: CreateTeamButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          margin: "1rem 0 0 0",
          backgroundColor: positiveGreen,
          "&:hover": {
            backgroundColor: positiveGreenHover,
          },
        }}
        type="submit"
      >
        Vytvořit
      </Button>

      {pending && (
        <CircularProgress sx={{ margin: "1rem 0 0" }} />
      )}
    </Box>
  );
}
