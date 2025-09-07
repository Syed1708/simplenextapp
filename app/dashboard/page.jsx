"use client"

import { useSession } from "next-auth/react"

export default function DashboardPage() {
  // const { data: session, status } = useSession()
    const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>
  if (!session) return <p>Not authorized</p>

  return (
    <div>
      <h1 className="text-2xl">Welcome, {session.user.name} 👋</h1>
    </div>
  )
}
