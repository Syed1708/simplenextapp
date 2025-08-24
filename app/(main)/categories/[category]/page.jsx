import { Product } from "@/models/Product"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { dbConnect } from "@/services/dbConnect"
import Link from "next/link"

export default async function CategoryPage({ params }) {
  const { category } = params

  await dbConnect()

  // Capitalize category to match DB
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  const products = await Product.find({ category: formattedCategory }).lean()

  return (
    <div className="  p-6">
      <h1 className="text-3xl font-bold mb-6">
        {formattedCategory} Products
      </h1>

      {products.length === 0 ? (
        <div className="text-center text-gray-600 py-12">
          <p className="text-lg">No products found in this category.</p>
          <Button variant="outline" className="mt-4">Go Back</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card key={p._id} className="overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="relative w-full h-48">
                <Image
                  src={p.thumbnail_image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">{p.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-primary">${p.price}</span>
                  <Button size="sm">
                    <Link href={`/products/${p._id}`}>Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
