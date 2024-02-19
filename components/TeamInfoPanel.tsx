"use client";

import { useAuth } from "@/config/AuthContext";
import {
  negativeRed,
  positiveGreen,
} from "@/config/colors";
import { Box, Typography } from "@mui/material";
import { Category, Team } from "@prisma/client";

type TeamInfoPanelProps = {
  team: Team;
};

export default function TeamInfoPanel({
  team,
}: TeamInfoPanelProps) {
  const auth = useAuth();

  const renderCategoryName = (category: Category) => {
    switch (category) {
      case "WOMEN":
        return "Ženy";
      case "MEN":
        return "Muži";
      default:
        return "Neznámá kategorie";
    }
  };

  const renderTelNumber = (tel: string) => {
    const formattedTel = tel.replace(
      /(\d{3})(\d{3})(\d{3})/,
      "$1 $2 $3"
    );
    return formattedTel;
  };

  return (
    <>
      <Typography sx={{ fontSize: "2rem" }}>
        {team.teamName}
      </Typography>
      <Typography
        sx={{ opacity: "0.7", marginTop: "-.25rem" }}
      >
        {renderCategoryName(team.category)}
      </Typography>
      <Typography
        sx={{
          marginTop: ".5rem",
          color: team.isPaid ? positiveGreen : negativeRed,
        }}
      >
        {team.isPaid ? "Zaplaceno" : "Nezaplaceno"}
      </Typography>

      {auth?.isLoggedIn && (
        <>
          <Typography
            sx={{
              marginTop: ".5rem",
              color: "black",
              opacity: "0.7",
            }}
          >
            Email vedoucího:{" "}
            <Box
              component={"span"}
              sx={{ fontWeight: "bold" }}
            >
              {team.leaderEmail}
            </Box>
          </Typography>
          <Typography
            sx={{
              marginTop: ".5rem",
              color: "black",
              opacity: "0.7",
            }}
          >
            Tel. číslo vedoucího:{" "}
            <Box
              component={"span"}
              sx={{ fontWeight: "bold" }}
            >
              {renderTelNumber(team.leaderTel)}
            </Box>
          </Typography>
        </>
      )}
    </>
  );
}
