"use client"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function HeroSection() {
    const { data: session } = useSession()
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to ProductApp 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow-sm">
          Browse, manage, and grow your products easily with our platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore Products
            </Button>
          </Link>

          {!session && (
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className=" cursor-pointer hover:text-blue-600"
              >
                Get Started
              </Button>
            </Link>
          )}


        </div>
      </div>
    </section>
  )
}
