"use server";

import { db } from "@/config/db";
import { Category, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

type createTeamError = {
  teamNameError: string;
  categoryError: string;
  leaderEmailError: string;
  leaderTelError: string;
  databaseError: string;
  isSuccessful: boolean;
};

export async function createTeam(
  formState: createTeamError,
  formData: FormData
): Promise<createTeamError> {
  const teamName = formData.get("teamName") as string;
  const isPaid = !!formData.get("isPaid");
  const category = formData.get("category");
  const leaderEmail = formData.get("leaderEmail") as string;
  const leaderTel = formData.get("leaderTel") as string;

  const teamNameError = teamName === "";
  const categoryError = category === "";
  const leaderEmailError = leaderEmail === "";
  const leaderTelError = leaderTel === "";

  if (
    teamNameError ||
    categoryError ||
    leaderEmailError ||
    leaderTelError
  ) {
    return {
      teamNameError: teamNameError
        ? "Potřeba vyplnit název týmu"
        : "",
      categoryError: categoryError
        ? "Potřeba vybrat kategorii"
        : "",
      leaderEmailError: leaderEmailError
        ? "Prosím vyplňte email"
        : "",
      leaderTelError: leaderTelError
        ? "Prosím vyplňte telefonní číslo"
        : "",
      databaseError: "",
      isSuccessful: false,
    };
  }

  const team = {
    teamName: teamName,
    category: category as Category,
    isPaid: isPaid,
    players: {},
    leaderEmail: leaderEmail,
    dateOfApproval: isPaid ? new Date() : null,
    leaderTel: leaderTel,
  };

  try {
    await db.team.create({
      data: {
        ...team,
      },
    });

    revalidatePath("/teams");
    return {
      teamNameError: "",
      categoryError: "",
      leaderEmailError: "",
      leaderTelError: "",
      databaseError: "",
      isSuccessful: true,
    };
  } catch (error: any) {
    if (
      error instanceof
        Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        teamNameError: "Tým s tímto názvem již existuje",
        categoryError: "",
        leaderEmailError: "",
        leaderTelError: "",
        databaseError: "",
        isSuccessful: false,
      };
    } else {
      return {
        teamNameError: "",
        categoryError: "",
        leaderEmailError: "",
        leaderTelError: "",
        databaseError: "An unknown error occurred",
        isSuccessful: false,
      };
    }
  }
}
