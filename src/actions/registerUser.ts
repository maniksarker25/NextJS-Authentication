"use server";

import { UserData } from "@/app/register/page";

export const registerUser = async (registerInfo: UserData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerInfo),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
