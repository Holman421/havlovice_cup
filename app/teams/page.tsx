import Box from "@mui/material/Box";
import TeamsTable from "@/components/Tables/TeamsTable";
import { Category, Player } from "@prisma/client";
import { db } from "@/config/db";
import TeamsTableAdminRow from "@/components/Tables/TeamsTableAdminRow";
import { Typography } from "@mui/material";

export type TeamTypeWithPlayers = {
  teamName: string;
  isPaid: boolean;
  category: Category;
  players: Player[];
};

export default async function CollapsibleTable() {
  let teams;
  try {
    teams = await db.team.findMany();
  } catch (error) {
    console.error("Failed to load teams:", error);
    return (
      <div>
        <p>
          Problém s databází. Prosím zkuste později znovu.
        </p>
      </div>
    );
  }

  const menTeams = teams.filter(
    (team) => team.category === "MEN"
  );

  const womenTeams = teams.filter(
    (team) => team.category === "WOMEN"
  );

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
        Seznam týmů
      </Typography>
      <Box
        sx={{
          padding: "0.75rem 2rem 4rem 2rem",
          "@media (max-width: 600px)": {
            padding: "0.75rem .25rem 2rem .25rem",
          },
          "& > *": { marginTop: "1.5rem" },
        }}
      >
        <TeamsTable categoryName="Muži" teams={menTeams} />
        <TeamsTable
          categoryName="Ženy"
          teams={womenTeams}
        />
        <TeamsTableAdminRow />
      </Box>
    </Box>
  );
}
