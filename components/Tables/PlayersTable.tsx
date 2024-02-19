import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Position } from "@prisma/client";
import { secondaryColor } from "@/config/colors";
import PlayersTableBody from "./PlayersTableBody";
import PlayersTableAdminRow from "./PlayersTableAdminRow";

type PlayersTableProps = {
  players: {
    id: string;
    playerName: string;
    dressNumber: number;
    position: Position;
  }[];
  teamId: string;
};

export default function PlayersTable({
  players,
  teamId,
}: PlayersTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: secondaryColor,
              "& > *": {
                fontWeight: "bold !important",
              },
            }}
          >
            <TableCell>Jméno</TableCell>
            <TableCell>Číslo dresu</TableCell>
            <TableCell sx={{ width: "30%" }}>
              Pozice
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <PlayersTableBody
            players={players}
            teamId={teamId}
          />
          <PlayersTableAdminRow teamId={teamId} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
