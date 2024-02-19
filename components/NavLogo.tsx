"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export const NavLogo = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        left: "2rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src="/logo.png"
          width={75}
          height={75}
          alt="logo turnaje"
        />
      </Box>
      {/* <Typography
        sx={{
          color: mainColor,
          fontWeight: "bold",
          fontSize: "1.75rem",
          cursor: "pointer",
        }}
      >
        Open Air Havlovice
      </Typography> */}
    </Box>
  );
};
