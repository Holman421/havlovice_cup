"use client";

import React from "react";
import {
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Paper,
  FormHelperText,
  Alert,
  Typography,
  Box,
} from "@mui/material";
import { useFormState } from "react-dom";
import { registerTeam } from "@/actions/registerTeam";
import RegisterTeamButton from "@/components/Buttons/RegisterTeamButton";

export default function Registration() {
  const [formState, action] = useFormState(registerTeam, {
    teamNameError: "",
    categoryError: "",
    leaderEmailError: "",
    leaderTelError: "",
    databaseError: "",
    isSuccessful: false,
  });

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "4rem",
        marginBottom: "3rem",
        width: "clamp(15rem, 100%, 60rem)",
        animation: "fadeInFromTop 600ms ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ marginBottom: "2rem" }}
      >
        Registrace týmu
      </Typography>
      <Box
        sx={{
          width: "clamp(10rem, 600%, 35rem)",
        }}
      >
        <form action={action}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              gap: "1rem",
              padding: "2rem 3rem 3rem 3rem",
              animation: "fadeInFromTop 600ms ease",
            }}
            elevation={3}
          >
            {/* <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Registrace týmu
          </Typography> */}
            <TextField
              name="teamName"
              label="Název týmu"
              error={!!formState.teamNameError}
              helperText={formState.teamNameError}
            />
            <FormControl
              fullWidth
              error={!!formState.categoryError}
            >
              <InputLabel id="demo-simple-select-label">
                Kategorie
              </InputLabel>
              <Select
                name="category"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Kategorie"
                defaultValue=""
              >
                <MenuItem value={"MEN"}>Muži</MenuItem>
                <MenuItem value={"WOMEN"}>Ženy</MenuItem>
              </Select>
              {formState.categoryError && (
                <FormHelperText>
                  {formState.categoryError}
                </FormHelperText>
              )}
            </FormControl>
            <TextField
              name="leaderEmail"
              label="Email vedoucího"
              type="email"
              error={!!formState.leaderEmailError}
              helperText={formState.leaderEmailError}
            />
            <TextField
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
            <RegisterTeamButton />
            {formState.isSuccessful && (
              <Alert severity="success">
                Tým byl úspěšně zaregistrován
              </Alert>
            )}
          </Paper>
        </form>
      </Box>
    </Box>
  );
}
