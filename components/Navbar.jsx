"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import Loading from "@/app/(main)/loading"


export default function Navbar() {
  // const { data: session, status } = useSession()
    const { data: session, status } = useSession();

  // console.log(session)

   // Show loader while session is loading
  if (status === "loading") {
    return <Loading/>
  }

  const isRoleUser = session?.user?.role == "user"
  const isRoleAdmin = session?.user?.role == "admin"

  return (
    <header className="flex justify-between items-center p-4 shadow bg-white">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        PrrductApp
      </Link>

      <nav className="flex gap-4 items-center">
        <Link href="/products">
          <Button variant="ghost">Products</Button>
        </Link>

        {!session && (
          <>
            <Link href="/login"><Button >Login</Button></Link>
            <Link href="/register"><Button>Register</Button></Link>
          </>
        )}

        {session && (
          <>
            <span className="font-medium">Hello, {session.user.name}</span>
            {
              isRoleAdmin && (

                <Link href="/dashboard/admin"><Button>Dashboard</Button></Link>
              )
            }
            {
              isRoleUser && (
                <Link href="/dashboard"><Button>Dashboard</Button></Link>

              )
            }
            <Button onClick={() => signOut()} variant="destructive">
              Logout
            </Button>
          </>
        )}
      </nav>
    </header>
  )
}
