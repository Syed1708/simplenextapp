import { addProductAction } from "@/app/actions/product-actions";



export default function createProduct() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form action={addProductAction} className="w-96 p-6 border rounded space-y-4 bg-white shadow">
        <h1 className="text-xl font-bold">Add Product</h1>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}
