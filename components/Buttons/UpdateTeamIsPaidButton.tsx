"use client";

import { updateTeamIsPaid } from "@/actions/updateTeamIsPaid";
import { Button } from "@mui/material";
import { useTransition } from "react";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

type UpdateTeamIsPaidButtonProps = {
  teamId: string;
};

export default function UpdateTeamIsPaidButton({
  teamId,
}: UpdateTeamIsPaidButtonProps) {
  let [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outlined"
      onClick={() => {
        startTransition(() => {
          updateTeamIsPaid(teamId);
        });
      }}
      startIcon={<ToggleOffIcon />}
    >
      Změnit zaplaceno
    </Button>
  );
}
