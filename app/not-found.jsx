"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl mt-2 font-semibold">Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button className="mt-6">Go Back Home</Button>
      </Link>
    </div>
  )
}
