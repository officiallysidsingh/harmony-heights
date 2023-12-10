"use client";

import { redirect } from "next/navigation";

// Next Auth Import
import { useSession } from "next-auth/react";

export default function Redirect() {
  const { data: session } = useSession();

  if (session?.user?.type === "admin") {
    redirect("/dashboard");
  } else if (session?.user?.type === "customer") {
    redirect("/profile");
  } else {
    return null;
  }
}
