"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export async function updateTeamIsPaid(teamId: string) {
  "use server";

  const team = await db.team.findUnique({
    where: { id: teamId },
    select: { isPaid: true },
  });

  const isPaid = !!team?.isPaid;

  await db.team.update({
    where: { id: teamId },
    data: {
      isPaid: !isPaid,
      dateOfApproval: isPaid ? null : new Date(),
    },
  });

  revalidatePath(`/teams/${teamId}`);
  revalidatePath("/teams");
}
