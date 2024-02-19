"use client";

import {
  mainColor,
  textColorBlack,
  textColorWhite,
} from "@/config/colors";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  heading: string;
  url: string;
  renderAsWhite?: boolean;
};

export default function NavLink({
  heading,
  url,
  renderAsWhite = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === url;

  const handleTextColor = () => {
    if (isActive) {
      return mainColor;
    } else if (renderAsWhite) {
      if (pathname === "/") {
        return textColorWhite;
      } else {
        return textColorBlack;
      }
    } else {
      return textColorBlack;
    }
  };

  return (
    <Box
      component="li"
      sx={{
        display: "inline-block",
        color: handleTextColor(),
        transition: "all 200ms ease",
        position: "relative",
        fontSize: "1.2rem",
        zIndex: "10",
        "&::before": {
          content: '""',
          position: "absolute",
          left: "0",
          bottom: "-4px",
          width: "100%",
          height: "2px",
          background: mainColor,
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 300ms ease",
        },
        "&:hover::before": {
          transform: "scaleX(1)",
        },
        "&:hover": { color: mainColor },
      }}
    >
      <Link href={url}>{heading}</Link>
    </Box>
  );
}
