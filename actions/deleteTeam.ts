"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteTeam(teamId: string) {
  "use server";

  await db.player.deleteMany({
    where: { teamId: teamId },
  });

  await db.team.delete({
    where: { id: teamId },
  });
  revalidatePath("/teams");
  redirect("/teams");
}
