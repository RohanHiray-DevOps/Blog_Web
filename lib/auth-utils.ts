import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const authSession = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  return session; // returns null if not logged in, no throwing
};

export const requireAuth = async () => {
  const session = await authSession();

  if (!session) {
    redirect("/sign-in");
  }

  return session;
};

export const requireNoAuth = async () => {
  const session = await authSession();

  if (session) {
    redirect("/");
  }
};