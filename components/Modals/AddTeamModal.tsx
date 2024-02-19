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
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  FormHelperText,
} from "@mui/material";
import { useEffect, useState } from "react";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import { createTeam } from "@/actions/createTeam";
import { useFormState } from "react-dom";
import CreateTeamButton from "../Buttons/CreateTeamButton";

export default function AddTeamModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, action] = useFormState(createTeam, {
    teamNameError: "",
    categoryError: "",
    leaderEmailError: "",
    leaderTelError: "",
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
        startIcon={<PlusOneIcon />}
        sx={{
          backgroundColor: positiveGreen,
          "&:hover": {
            backgroundColor: positiveGreenHover,
          },
        }}
      >
        Přidat tým
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
              Přidat tým
            </Typography>

            <TextField
              label="Název týmu"
              name="teamName"
              fullWidth
              error={!!formState.teamNameError}
              helperText={formState.teamNameError}
            />
            <FormControl
              fullWidth
              error={!!formState.categoryError}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "black" }}
              >
                Káťagorie
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Káťagorie"
                name="category"
                defaultValue=""
              >
                <MenuItem disabled value="">
                  <em>Káťagorie</em>
                </MenuItem>
                <MenuItem value={"MEN"}>Muži</MenuItem>
                <MenuItem value={"WOMEN"}>Ženy</MenuItem>
              </Select>
              {formState.categoryError && (
                <FormHelperText>
                  {formState.categoryError}
                </FormHelperText>
              )}
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox name="isPaid" color="primary" />
              }
              label="Zaplaceno"
            />
            <TextField
              fullWidth
              name="leaderEmail"
              label="Email vedoucího"
              type="email"
              error={!!formState.leaderEmailError}
              helperText={formState.leaderEmailError}
            />
            <TextField
              fullWidth
              name="leaderTel"
              label="Telefonní číslo vedoucího"
              error={!!formState.leaderTelError}
              helperText={formState.leaderTelError}
            />

            {formState.databaseError && (
              <Alert severity="error">
                {formState.databaseError}
              </Alert>
            )}
            <CreateTeamButton />
          </Box>
        </form>
      </Modal>
    </>
  );
}
