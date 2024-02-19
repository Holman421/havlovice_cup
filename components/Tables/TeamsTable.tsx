import { secondaryColor } from "@/config/colors";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TeamsTableBody from "./TeamsTableBody";
import { Team } from "@prisma/client";

type TeamsTableProps = {
  categoryName: string;
  teams: Team[];
};

export default function TeamsTable({
  categoryName,
  teams,
}: TeamsTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: secondaryColor,
              height: "3rem !important",
              "& > *": { fontWeight: "bold !important" },
            }}
          >
            <TableCell
              sx={{
                width: "20%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    fontSize: "1.5rem",
                    // color: textColorWhite,
                  }}
                >
                  {categoryName}
                </Box>
                <Box
                // sx={{ color: textColorWhite }}
                >{`${teams.length}/40`}</Box>
              </Box>
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1rem",
                width: "40%",
                // color: textColorWhite,
              }}
            >
              Název týmu
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1rem",
                width: "30%",
                // color: textColorWhite,
              }}
            >
              Stav registrace
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TeamsTableBody teams={teams} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
