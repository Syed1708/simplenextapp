"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, LayoutDashboard, Home, Package } from "lucide-react"
import { useSession } from "next-auth/react"

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession();
  const isRoleUser = session?.user?.role == "user"
  const isRoleAdmin = session?.user?.role == "admin"

  if (status === "loading") return <p>Loading...</p>;

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-white shadow-md z-40 transform transition-transform duration-200 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 mb-8">
            Dashboard
          </h1>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {
              isRoleAdmin && (
                <>
              <Link
              href="/dashboard/admin"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <LayoutDashboard className="h-5 w-5" />
              Overview
            </Link>

            <Link
              href="/dashboard/admin/products"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <Package className="h-5 w-5" />
              Manage Products
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <Home className="h-5 w-5" />
              Back Home
            </Link>              
                </>
              )
            }

            {
              isRoleUser && (
                <>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <LayoutDashboard className="h-5 w-5" />
              Overview
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              <Home className="h-5 w-5" />
              Back Home
            </Link>                
                </>
              )
            }

          </nav>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
