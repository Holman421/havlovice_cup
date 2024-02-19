import { TableCell, TableRow } from "@mui/material";
import React from "react";
import {
  informativeBlue,
  negativeRed,
  positiveGreen,
} from "@/config/colors";
import { Position } from "@prisma/client";
import DeletePlayerIcon from "../DeletePlayerIcon";

type PlayersTableBodyProps = {
  players: {
    id: string;
    playerName: string;
    dressNumber: number;
    position: Position;
  }[];
  teamId: string;
};

export default function PlayersTableBody({
  players,
  teamId,
}: PlayersTableBodyProps) {
  const renderPositionName = (category: Position) => {
    switch (category) {
      case "ATACKER":
        return "Útok";
      case "DEFENDER":
        return "Obrana";
      case "GOALKEEPER":
        return "Brankář";
      default:
        return "Neznámá kategorie";
    }
  };

  const renderPositionColor = (category: Position) => {
    switch (category) {
      case "ATACKER":
        return negativeRed;
      case "DEFENDER":
        return positiveGreen;
      case "GOALKEEPER":
        return informativeBlue;
      default:
        return "Neznámá kategorie";
    }
  };

  if (players.length === 0) {
    return (
      <TableRow sx={{}}>
        <TableCell
          sx={{
            fontSize: "1rem",
            width: "30%",
            whiteSpace: "nowrap",
            padding: "1rem !important",
          }}
        >
          Prozatím není nikdo registrovaný
        </TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    );
  } else {
    return players?.map((players) => (
      <TableRow key={players.playerName}>
        <TableCell
          component="th"
          scope="row"
          sx={{ padding: ".75rem" }}
        >
          {players.playerName}
        </TableCell>
        <TableCell>{players.dressNumber}</TableCell>
        <TableCell
          sx={{
            color: renderPositionColor(players.position),
            position: "relative",
          }}
        >
          {renderPositionName(players.position)}
          <DeletePlayerIcon
            playerId={players.id}
            teamId={teamId}
          />
        </TableCell>
      </TableRow>
    ));
  }
}
