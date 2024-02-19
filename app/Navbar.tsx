"use client";

import { Box } from "@mui/material";
import NavLink from "@/components/NavLink";
import { NavLogo } from "@/components/NavLogo";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    listStyle: "none",
    padding:
      scrollY > 0 ? "1.5rem 2rem" : "3rem 2rem 1.5rem 2rem",
    backgroundColor: "transparent",
    position: "fixed",
    width: "100%",
    zIndex: "10",
    boxShadow:
      scrollY > 0
        ? "0 0 10px 0 rgba(0, 0, 0, 0.4)"
        : "none",
    backdropFilter: scrollY > 0 ? "blur(15px)" : "none",
    transition: "all 300ms ease",
  };

  return (
    <Box component="nav" sx={navbarStyles}>
      <NavLogo />
      <NavLink heading="Úvod" url="/" />
      <NavLink heading="Přihláška" url="/registration" />
      <NavLink heading="Týmy" url="/teams" />
      <NavLink
        heading="Rozpis a výsledky"
        url="/schedule"
      />
      <NavLink
        heading="Playoff"
        url="/playoff"
        renderAsWhite={true}
      />
      <NavLink
        heading="Partneři"
        url="/partners"
        renderAsWhite={true}
      />
      <NavLink
        heading="Propozice"
        url="/propositions"
        renderAsWhite={true}
      />
    </Box>
  );
}
