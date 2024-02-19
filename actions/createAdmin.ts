"use server";

import { db } from "@/config/db";

export async function createAdmin() {
  await db.admin.create({
    data: {
      userName: "bako",
      password: "test123",
    },
  });
}
