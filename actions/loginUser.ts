"use server";

import { db } from "@/config/db";

type loginUserError = {
  userNameError?: string;
  passwordError?: string;
  isSuccessful?: boolean | null;
};

export async function loginUser(
  formState: loginUserError,
  formData: FormData
): Promise<loginUserError> {
  const userName = formData.get("userName");
  const password = formData.get("password");

  const userNameError = userName === "";
  const passwordError = password === "";

  if (userNameError || passwordError) {
    return {
      userNameError: userNameError
        ? "Potřeba vyplnit uživatelské jméno"
        : "",
      passwordError: passwordError
        ? "Potřeba vyplnit heslo"
        : "",
      isSuccessful: false,
    };
  }

  try {
    const user = await db.admin.findUnique({
      where: {
        userName: userName as string,
        password: password as string,
      },
    });
    if (user) {
      return {
        userNameError: "",
        passwordError: "",
        isSuccessful: true,
      };
    } else {
      return {
        userNameError: "",
        passwordError: "",
        isSuccessful: false,
      };
    }
  } catch (error) {
    return {
      userNameError: "",
      passwordError: "",
      isSuccessful: false,
    };
  }
}
