"use client";

import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type EnterMatchDetailsModalProps = {
  open: boolean;
  handleClose: () => void;
  team1: string;
  team2: string;
  handleSetMatchScores: (
    team1: string,
    team2: string,
    score: string
  ) => void;
};

export default function EnterMatchDetailsModal({
  open,
  handleClose,
  team1,
  team2,
  handleSetMatchScores,
}: EnterMatchDetailsModalProps) {
  const [team1score, setTeam1Score] = useState<number>(0);
  const [team2score, setTeam2Score] = useState<number>(0);

  const handleCloseResetState = () => {
    setTeam1Score(0);
    setTeam2Score(0);
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleCloseResetState}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography variant="h5" component="h5">
          Zadej výsledek zápasu mezi týmy:
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".5rem",
          }}
        >
          <TextField
            value={team1score}
            onChange={(e: any) =>
              setTeam1Score(e.target.value)
            }
            label={team1}
            size="small"
            type="number"
          />
          <Box
            component={"span"}
            sx={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            :
          </Box>
          <TextField
            value={team2score}
            onChange={(e: any) =>
              setTeam2Score(e.target.value)
            }
            label={team2}
            size="small"
            type="number"
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            handleSetMatchScores(
              team1,
              team2,
              `${team1score} : ${team2score}`
            );
            handleCloseResetState();
          }}
        >
          Uložit skóre
        </Button>
      </Paper>
    </Modal>
  );
}
