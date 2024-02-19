"use client";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EnterMatchDetailsModal from "../Modals/EnterMatchDetailsModal";

type ResultsTableProps = {
  groupName: string;
};

export default function ResultsTable({
  groupName,
}: ResultsTableProps) {
  const [matchScores, setMatchScores] = useState<
    Record<string, string[]>
  >({
    "Plamenné Puky": ["", "", "", "", "", "", "", ""],
    "Mávající Hokejkou": ["", "", "", "", "", "", "", ""],
    "Ohniví Míčaři": ["", "", "", "", "", "", "", ""],
    "Síťoví Nindžové": ["", "", "", "", "", "", "", ""],
    Brankáři: ["", "", "", "", "", "", "", ""],
    Útočníci: ["", "", "", "", "", "", "", ""],
    "Piráti Puku": ["", "", "", "", "", "", "", ""],
    "Ničitelé Skóre": ["", "", "", "", "", "", "", ""],
  });

  const handleSetMatchScores = (
    team1: string,
    team2: string,
    score: string
  ): void => {
    setMatchScores((prev) => {
      const newScores = { ...prev };
      const teams = Object.keys(newScores);
      const index1 = teams.indexOf(team1);
      const index2 = teams.indexOf(team2);

      if (index1 !== -1 && index2 !== -1) {
        newScores[team1][index2] = score;
        newScores[team2][index1] = score;
      }

      return newScores;
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTeams, setSelectedTeams] = useState<{
    team1: string;
    team2: string;
  } | null>(null);

  const handleSetSelectedTeams = (
    team1: string,
    team2: string
  ): void => {
    setSelectedTeams({ team1, team2 });
  };

  const border: string = "1px solid rgba(224, 224, 224, 1)";
  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", padding: "1rem" }}
      >
        {groupName}
      </Typography>
      <Paper
        elevation={3}
        sx={{ padding: "1rem", marginBottom: "3rem" }}
      >
        <TableContainer>
          <Table
            sx={{
              borderCollapse: "separate",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    width: "20%",
                  }}
                >
                  Názvy týmů
                </TableCell>{" "}
                {Object.keys(matchScores).map(
                  (key, index) => (
                    <TableCell
                      key={index}
                      sx={{
                        borderLeft: border,
                        width: "10%",
                      }}
                    >
                      {key}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(matchScores).map(
                ([team, scores], rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>{team}</TableCell>
                    {scores.map((score, colIndex) => {
                      const isSameTeam =
                        rowIndex === colIndex;
                      return (
                        <TableCell
                          key={colIndex}
                          sx={{
                            borderLeft: border,
                            "&:hover": {
                              backgroundColor:
                                "rgba(0, 0, 0, 0.04)",
                            },
                            cursor: isSameTeam
                              ? "auto"
                              : "pointer",
                            backgroundColor: isSameTeam
                              ? "rgba(0, 0, 0, 0.04)"
                              : "white",
                            transition:
                              "background-color 200ms ease",
                            width: "10%",
                          }}
                          onClick={() => {
                            if (isSameTeam) {
                              return;
                            }
                            handleSetSelectedTeams(
                              team,
                              Object.keys(matchScores)[
                                colIndex
                              ]
                            );
                            setIsModalOpen(true);
                          }}
                        >
                          {score}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedTeams && (
          <EnterMatchDetailsModal
            open={isModalOpen}
            handleClose={() => setIsModalOpen(false)}
            team1={selectedTeams.team1}
            team2={selectedTeams.team2}
            handleSetMatchScores={handleSetMatchScores}
          />
        )}
      </Paper>
    </>
  );
}
