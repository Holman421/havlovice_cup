"use client";

import { Box, TableCell, TableRow } from "@mui/material";
import AddPlayerModal from "../Modals/AddPlayerModal";
import UpdateTeamIsPaidButton from "../Buttons/UpdateTeamIsPaidButton";
import DeleteTeamModal from "../Modals/DeleteTeamModal";
import { useAuth } from "@/config/AuthContext";

type PlayersTableAdminRowProps = {
  teamId: string;
};

export default function PlayersTableAdminRow({
  teamId,
}: PlayersTableAdminRowProps) {
  const auth = useAuth();

  if (!auth?.isLoggedIn) {
    return null;
  }

  return (
    <TableRow sx={{}}>
      <TableCell component="th" scope="row">
        <AddPlayerModal teamId={teamId} />
      </TableCell>
      <TableCell>
        <UpdateTeamIsPaidButton teamId={teamId} />
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <DeleteTeamModal teamId={teamId} />
        </Box>
      </TableCell>
    </TableRow>
  );
}
