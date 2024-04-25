"use server";

import { FormValues } from "@/app/login/page";

export const loginUser = async (loginInfo: FormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginInfo),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
