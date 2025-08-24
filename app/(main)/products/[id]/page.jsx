import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Product } from "@/models/Product"
import { dbConnect } from "@/services/dbConnect"
import Link from "next/link"

export default async function ProductDetailsPage({ params }) {
  await dbConnect()
  const product = await Product.findById(params.id).lean()

  if (!product) return notFound()

  const related = await Product.find({
    category: product.category,
    _id: { $ne: product._id },
  })
    .limit(4)
    .lean()

  return (
    <div className=" mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Large Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow">
          <Image
            src={product.large_image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-2">
              Category:{" "}
              <span className="font-medium text-gray-700">
                {product.category}
              </span>
            </p>
            <p className="text-2xl font-semibold text-green-600 mb-6">
              ${product.price}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              🛒 Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              ❤️ Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item._id} href={`/products/${item._id}`}>
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-4">
                    <div className="relative w-full h-40 rounded-lg overflow-hidden">
                      <Image
                        src={item.thumbnail_image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 text-sm font-medium line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-green-600 font-semibold">
                      ${item.price}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}


      
    </div>
  )
}
