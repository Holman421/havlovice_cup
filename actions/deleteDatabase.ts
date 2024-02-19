"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export async function deleteDatabase() {
  "use server";

  await db.player.deleteMany();
  await db.team.deleteMany();
  revalidatePath("/teams");
}
