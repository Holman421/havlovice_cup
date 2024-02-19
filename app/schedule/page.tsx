"use client";

import ResultsTable from "@/components/Tables/ResultsTable";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Schedule() {
  const [selectedCategory, setSelectedCategory] = useState<
    "men" | "women" | "none"
  >("none");

  const renderTeams = () => {
    if (selectedCategory === "none") {
      return null;
    } else if (selectedCategory === "men") {
      return (
        <>
          <ResultsTable groupName="Muži skupina 1" />
          <ResultsTable groupName="Muži skupina 2" />
          <ResultsTable groupName="Muži skupina 3" />
          <ResultsTable groupName="Muži skupina 4" />
          <ResultsTable groupName="Muži skupina 5" />
        </>
      );
    } else if (selectedCategory === "women") {
      return (
        <>
          <ResultsTable groupName="Ženy skupina 1" />
          <ResultsTable groupName="Ženy skupina 2" />
        </>
      );
    }
  };
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
        Rozpis a výsledky
      </Typography>
      <ButtonGroup
        variant="text"
        size="large"
        sx={{
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Button
          variant={
            selectedCategory === "men"
              ? "contained"
              : "text"
          }
          onClick={() => {
            setSelectedCategory("men");
          }}
        >
          Muži
        </Button>
        <Button
          variant={
            selectedCategory === "women"
              ? "contained"
              : "text"
          }
          onClick={() => {
            setSelectedCategory("women");
          }}
        >
          Ženy
        </Button>
      </ButtonGroup>
      {renderTeams()}
    </Box>
  );
}
