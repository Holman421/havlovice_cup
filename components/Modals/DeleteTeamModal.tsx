"use client";

import {
  mainColor,
  negativeRed,
  negativeRedHover,
  negativeRedHoverLight,
} from "@/config/colors";
import {
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { useState, useTransition } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { deleteTeam } from "@/actions/deleteTeam";

type DeleteTeamModalProps = {
  teamId: string;
};

export default function DeleteTeamModal({
  teamId,
}: DeleteTeamModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  let [isPending, startTransition] = useTransition();

  return (
    <>
      <Button
        onClick={handleOpenModal}
        variant="outlined"
        startIcon={<CloseIcon />}
        sx={{
          borderColor: negativeRed,
          color: negativeRed,
          "&:hover": {
            borderColor: negativeRedHover,
            color: negativeRedHover,
            background: negativeRedHoverLight,
          },
        }}
      >
        Vymazat tým
      </Button>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: ".5rem",
            border: `4px solid ${mainColor}`,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Opravdu chceš smazat tým?
          </Typography>

          <Button
            variant="contained"
            onClick={() =>
              startTransition(() => {
                deleteTeam(teamId);
                handleCloseModal();
              })
            }
            sx={{ marginTop: "1rem" }}
            type="submit"
            color="error"
          >
            Smazat
          </Button>
        </Box>
      </Modal>
    </>
  );
}
