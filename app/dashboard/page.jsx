"use client"

import { useSession } from "next-auth/react"
import UnauthorizedPage from "../unauthorized/page";

export default function UserDashboardPage() {
  // const { data: session, status } = useSession()
    const { data: session, status } = useSession();
// console.log("session user",session.user);
if (status === "loading" && !session?.user) return <p>Loading...</p>
const isRoleUser = session?.user?.role == "user"

  if (!isRoleUser) return <UnauthorizedPage/>

  return (
    <div>
      <h1 className="text-2xl">Welcome, {session.user.name} 👋</h1>
    </div>
  )
}
