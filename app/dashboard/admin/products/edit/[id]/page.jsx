
import { updateProductAction } from "@/app/actions/product-actions"
import { getProductById } from "@/queries/product-queries"

export default async function EditProductPage({ params }) {
  const {id} = await params
  const product = await getProductById(id)

  if (!product) return <p>Product not found.</p>

  const categories = ["Electronics","Computers","Furniture","Fashion","Accessories","Sports"]

  return (
    <div className=" bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <form action={updateProductAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="hidden" name="id" value={product._id} />

        {/* Name */}
        <div className="flex flex-col">
          <label>Name</label>
          <input type="text" name="name" defaultValue={product.name} required className="w-full border px-3 py-2" />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label>Price</label>
          <input type="number" step="0.01" name="price" defaultValue={product.price} required className="w-full border px-3 py-2" />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label>Category</label>
          <select name="category" required className="w-full border px-3 py-2" defaultValue={product.category}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Thumbnail Image */}
        <div className="flex flex-col">
          <label>Thumbnail Image URL</label>
          <input type="url" name="thumbnail_image" defaultValue={product.thumbnail_image} required className="w-full border px-3 py-2" />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label>Description</label>
          <textarea name="description" defaultValue={product.description} required className="w-full border px-3 py-2" />
        </div>

        {/* Large Image */}
        <div className="flex flex-col md:col-span-2">
          <label>Large Image URL</label>
          <input type="url" name="large_image" defaultValue={product.large_image} required className="w-full border px-3 py-2" />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Update Product</button>
        </div>
      </form>
    </div>
  )
}
