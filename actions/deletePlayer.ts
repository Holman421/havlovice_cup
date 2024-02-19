"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export async function deletePlayer(
  playerId: string,
  teamId: string
) {
  "use server";

  await db.player.delete({
    where: { id: playerId },
  });

  revalidatePath(`/teams/${teamId}`);
}
