"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Topbar() {
  const { data: session } = useSession()

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      {/* Title */}
      <h2 className="text-lg font-semibold text-center">
        <Link href="/dashboard">Dashboard</Link>
      </h2>
      <h2 className="text-lg font-semibold text-center">
        <Link href="/">Home</Link>
      </h2>

      {/* User info */}
      <div className="flex items-center gap-4">
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-8 h-8 rounded-full border"
          />
        )}
        <span className="font-medium">{session?.user?.name}</span>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Logout
        </Button>
      </div>
    </header>
  )
}
