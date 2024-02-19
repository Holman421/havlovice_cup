import PlayersTable from "@/components/Tables/PlayersTable";
import { db } from "@/config/db";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TeamInfoPanel from "@/components/TeamInfoPanel";

type TeamDetailProps = {
  params: {
    id: string;
  };
};

export default async function TeamDetail(
  props: TeamDetailProps
) {
  const team = await db.team.findUnique({
    where: { id: props.params.id },
    include: {
      players: true,
    },
  });

  if (!team) {
    return notFound();
  }

  return (
    <Box
      sx={{
        margin: "auto",
        animation: "fadeInFromTop 600ms ease",
        width: "clamp(15rem, 100%, 60rem)",
        marginTop: "4rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Detail týmu
      </Typography>
      <Paper
        sx={{
          padding: "1.5rem 2rem 2rem 2rem",
        }}
        elevation={3}
      >
        <TeamInfoPanel team={team} />

        <Typography
          sx={{
            margin: "2rem 0 .5rem 0",
            fontSize: "1.5rem",
          }}
        >
          Seznam hráčů
        </Typography>

        <PlayersTable
          players={team.players}
          teamId={props.params.id}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            <Link href="/teams">
              Zpátky na přehled týmů
            </Link>
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
