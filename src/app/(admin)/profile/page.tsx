"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();
  return (
    <div>
      <h1>Profile page</h1>
      <h2>{session?.user?.fullname}</h2>
    </div>
  );
}
