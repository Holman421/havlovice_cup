"use client";

import {
  mainColor,
  positiveGreen,
  positiveGreenHover,
} from "@/config/colors";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  FormHelperText,
} from "@mui/material";
import { useEffect, useState } from "react";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import { createPlayer } from "@/actions/createPlayer";
import { useFormState } from "react-dom";
import CreatePlayerButton from "../Buttons/CreatePlayerButton";

type AddPlayerModalProps = {
  teamId: string;
};

export default function AddPlayerModal({
  teamId,
}: AddPlayerModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, action] = useFormState(createPlayer, {
    playerNameError: "",
    dressNumberError: "",
    positionError: "",
    databaseError: "",
    isSuccessful: false,
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (formState.isSuccessful) {
      handleCloseModal();
    }
  }, [formState]);

  return (
    <>
      <Button
        onClick={handleOpenModal}
        variant="contained"
        sx={{
          margin: ".5rem 0",
          backgroundColor: positiveGreen,
          "&:hover": {
            backgroundColor: positiveGreenHover,
          },
        }}
        startIcon={<PlusOneIcon />}
      >
        Přidat hráče
      </Button>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form action={action}>
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
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.75rem",
              }}
            >
              Přidat hráče
            </Typography>
            <TextField
              name="playerName"
              label="Jméno hráče"
              fullWidth
              error={!!formState.playerNameError}
              helperText={formState.playerNameError}
            />
            <TextField
              name="teamId"
              value={teamId}
              sx={{ display: "none" }}
            />
            <TextField
              name="dressNumber"
              label="Číslo dresu"
              type="number"
              inputProps={{ min: 0, max: 1000 }}
              fullWidth
              error={!!formState.dressNumberError}
              helperText={formState.dressNumberError}
            />
            <FormControl
              fullWidth
              error={!!formState.positionError}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "black" }}
              >
                Pozice
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Pozice"
                name="position"
              >
                <MenuItem disabled value="">
                  <em>Pozice</em>
                </MenuItem>
                <MenuItem value={"ATACKER"}>Útok</MenuItem>
                <MenuItem value={"DEFENDER"}>
                  Obrana
                </MenuItem>
                <MenuItem value={"GOALKEEPER"}>
                  Brankář
                </MenuItem>
              </Select>
              {formState.positionError && (
                <FormHelperText>
                  {formState.positionError}
                </FormHelperText>
              )}
            </FormControl>

            {formState.databaseError && (
              <Alert severity="error">
                {formState.databaseError}
              </Alert>
            )}

            <CreatePlayerButton />
          </Box>
        </form>
      </Modal>
    </>
  );
}
