"use server";

import { db } from "@/config/db";
import { Position } from "@prisma/client";
import { revalidatePath } from "next/cache";

type createTeamError = {
  playerNameError?: string;
  dressNumberError?: string;
  positionError?: string;
  databaseError?: string;
  isSuccessful?: boolean;
};

export async function createPlayer(
  formState: createTeamError,
  formData: FormData
): Promise<createTeamError> {
  const playerName = formData.get("playerName") as string;
  const dressNumber = formData.get("dressNumber") as any;
  const position = formData.get("position");
  const teamId = formData.get("teamId") as string;

  const playerNameError = playerName === "";
  const dressNumberError =
    dressNumber === 0 || dressNumber === "";
  const positionError =
    position === "" || position === null;

  if (
    playerNameError ||
    dressNumberError ||
    positionError
  ) {
    return {
      playerNameError: playerNameError
        ? "Potřeba vyplnit jméno hráče"
        : "",
      dressNumberError: dressNumberError
        ? "Potřeba vyplnit číslo dresu"
        : "",
      positionError: positionError
        ? "Potřeba vybrat pozici"
        : "",
      databaseError: "",
      isSuccessful: false,
    };
  }

  const player = {
    playerName: playerName,
    dressNumber: parseInt(dressNumber),
    position: position as Position,
    teamId: teamId,
  };

  try {
    await db.player.create({
      data: {
        ...player,
      },
      include: {
        Team: true,
      },
    });
    revalidatePath(`/teams/${teamId}`);
    return {
      playerNameError: "",
      dressNumberError: "",
      positionError: "",
      databaseError: "",
      isSuccessful: true,
    };
  } catch (error) {
    console.log(error);
    return {
      playerNameError: "",
      dressNumberError: "",
      positionError: "",
      databaseError: "An unknown error occurred",
      isSuccessful: false,
    };
  }
}
