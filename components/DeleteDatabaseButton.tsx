"use client";

import {
  negativeRed,
  negativeRedHover,
  negativeRedHoverLight,
} from "@/config/colors";
import { Button } from "@mui/material";
import { useTransition } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteDatabase } from "@/actions/deleteDatabase";

export default function DeleteDatabaseButton() {
  let [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: negativeRed,
        color: negativeRed,
        "&:hover": {
          borderColor: negativeRedHover,
          color: negativeRedHover,
          background: negativeRedHoverLight,
        },
      }}
      onClick={() => {
        startTransition(() => {
          deleteDatabase();
        });
      }}
      startIcon={<DeleteForeverIcon />}
    >
      Zcela vymazat databázi týmů
    </Button>
  );
}
