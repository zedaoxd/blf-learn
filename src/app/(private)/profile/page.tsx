"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/zustand/auth";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const logout = () => signOut().then(() => router.push("/"));

  return (
    <div>
      <h1>Private route</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
