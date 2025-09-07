"use client";

import UnauthorizedPage from "@/app/unauthorized/page";
import { useSession } from "next-auth/react";

export default function AdminDashboardPage() {
  // const { data: session, status } = useSession()
  const { data: session, status } = useSession();

  if (status === "loading" && !session?.user) return <p>Loading...</p>;

  const isRoleAdmin = session?.user?.role == "admin";

  if (!isRoleAdmin) return <UnauthorizedPage />;

  return (
    <div>
      <h1 className="text-2xl">Welcome admin, {session.user.name} 👋</h1>
    </div>
  );
}
