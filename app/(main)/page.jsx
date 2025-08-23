
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (

    <>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center p-8 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Welcome to ProductApp 🚀</h2>
        <p className="text-lg text-gray-600 mb-6">
          Browse and manage your products easily.
        </p>
        <div className="flex gap-4">
          <Link href="/products"><Button>Explore Products</Button></Link>
          <Link href="/login"><Button variant="outline">Get Started</Button></Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-xl">🚀 Fast</h3>
            <p>Optimized with Next.js App Router</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-xl">🔐 Secure</h3>
            <p>Authentication with NextAuth.js</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-xl">🎨 Beautiful</h3>
            <p>Styled with Tailwind & shadcn/ui</p>
          </CardContent>
        </Card>
      </section>

</>


  )
}
