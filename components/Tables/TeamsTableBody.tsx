import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import Link from "next/link";
import {
  mainColor,
  negativeRed,
  positiveGreen,
} from "@/config/colors";
import InfoIcon from "@mui/icons-material/Info";
import { Team } from "@prisma/client";

type TeamsTableBodyProps = {
  teams: Team[];
};

export default function TeamsTableBody({
  teams,
}: TeamsTableBodyProps) {
  if (teams.length === 0) {
    return (
      <TableRow sx={{}}>
        <TableCell sx={{ fontSize: "1rem", width: "30%" }}>
          Žádné týmy
        </TableCell>
      </TableRow>
    );
  } else {
    return teams.map((team) => (
      <TableRow
        key={team.id}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <Button
            startIcon={<InfoIcon />}
            sx={{
              "& > *": {
                whiteSpace: "nowrap",
              },
              color: mainColor,
            }}
          >
            <Link href={`/teams/${team.id}`}>
              Detail týmu
            </Link>
          </Button>
        </TableCell>
        <TableCell component="th" scope="row">
          {team.teamName}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          sx={{
            color: team.isPaid
              ? positiveGreen
              : negativeRed,
          }}
        >
          {/* {team.isPaid ? (
            <CheckIcon
              sx={{ color: "green", fontSize: "1.5rem" }}
            />
          ) : (
            <CloseIcon
              sx={{ color: "red", fontSize: "1.5rem" }}
            />
          )} */}
          {team.isPaid
            ? `Potvrzeno ${team.dateOfApproval?.toLocaleDateString()}`
            : "Nepotvrzeno"}
        </TableCell>
      </TableRow>
    ));
  }
}
