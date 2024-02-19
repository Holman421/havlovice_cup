"use client";

import { useAuth } from "@/config/AuthContext";
import { Box } from "@mui/material";
import AddTeamModal from "../Modals/AddTeamModal";
import DeleteDatabaseButton from "../DeleteDatabaseButton";

export default function TeamsTableAdminRow() {
  const auth = useAuth();

  if (!auth?.isLoggedIn) {
    return null;
  }
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <AddTeamModal />
      <DeleteDatabaseButton />
    </Box>
  );
}
