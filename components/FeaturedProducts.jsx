import { getFeturedProducts } from "@/queries/product-queries"
import { Button } from "./ui/button"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import Image from "next/image";



export default async function FeaturedProducts() {
    const featuredProducts = await getFeturedProducts();
    
  return (
          <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">
          ✨ Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((p) => (
            <Card key={p._id} className="hover:shadow-lg transition">
              <CardContent className="p-4 flex flex-col items-center text-center">
 
        <div className="w-full h-48 relative rounded overflow-hidden mb-4">
          <Image
            src={p.thumbnail_image}
            alt={p.name}
            fill
            className="object-cover"
          />
        </div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-gray-600">{p.price}</p>
                <Button asChild className="mt-4">
                  <Link href={`/products/${p._id}`}>View</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
  )
}
