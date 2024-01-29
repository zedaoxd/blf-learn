"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/zustand/auth";
import Link from "next/link";

export default function UserButton() {
  const { user } = useAuth();

  return (
    <Button
      variant="ghost"
      className="font-bold text-black h-full rounded-none hover:bg-transparent hover:text-primary"
      asChild
    >
      {user ? (
        <Link href="/profile">{user.user_metadata.username || user.email}</Link>
      ) : (
        <Link href="/auth">Login/Register</Link>
      )}
    </Button>
  );
}
