"use server";

import { db } from "@/config/db";
import { Category, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

type registerTeamError = {
  teamNameError: string;
  categoryError: string;
  leaderEmailError: string;
  leaderTelError: string;
  databaseError: string;
  isSuccessful: boolean;
};

export async function registerTeam(
  formState: registerTeamError,
  formData: FormData
): Promise<registerTeamError> {
  const teamName = formData.get("teamName") as string;
  const category = formData.get("category");
  const leaderEmail = formData.get("leaderEmail") as string;
  const leaderTel = (
    formData.get("leaderTel") as string
  ).replace(/\s/g, "");

  const teamNameError = teamName === "";
  const categoryError = category === "";
  const leaderEmailError = leaderEmail === "";
  const leaderTelError = leaderTel === "";

  const leaderTelFormatError =
    !leaderTel.match(/^[0-9]{9}$/);

  if (
    teamNameError ||
    categoryError ||
    leaderEmailError ||
    leaderTelError
  ) {
    return {
      teamNameError: teamNameError
        ? "Prosím vyplňte název týmu"
        : "",
      categoryError: categoryError
        ? "Prosím vyberte kategorii"
        : "",

      leaderEmailError: leaderEmailError
        ? "Prosím vyplňte email"
        : "",
      leaderTelError: leaderTelError
        ? "Prosím vyplňte telefonní číslo"
        : leaderTelFormatError
        ? "Prosím vyplňte přesně 9 číslic bez předvolby a znaků"
        : "",
      databaseError: "",
      isSuccessful: false,
    };
  }

  const team = {
    teamName: teamName,
    category: category as Category,
    isPaid: false,
    players: {},
    leaderEmail: leaderEmail,
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
    console.log(error);
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
