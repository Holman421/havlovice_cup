"use client";

import { negativeRed } from "@/config/colors";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTransition } from "react";
import { deletePlayer } from "@/actions/deletePlayer";
import { useAuth } from "@/config/AuthContext";

type DeletePlayerIconProps = {
  playerId: string;
  teamId: string;
};

export default function DeletePlayerIcon({
  playerId,
  teamId,
}: DeletePlayerIconProps) {
  let [isPending, startTransition] = useTransition();
  const auth = useAuth();

  if (!auth?.isLoggedIn) {
    return null;
  }

  return (
    <IconButton
      sx={{
        position: "absolute",
        right: ".5rem",
        top: "0",
        color: negativeRed,
      }}
      onClick={() => {
        startTransition(() => {
          deletePlayer(playerId, teamId);
        });
      }}
    >
      <DeleteForeverIcon />
    </IconButton>
  );
}
