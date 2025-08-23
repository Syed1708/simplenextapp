
import { deleteProductAction } from "@/app/actions/product-actions"
import { Button } from "@/components/ui/button"
import { getAllProducts } from "@/queries/product-queries"

export default async function DashboardProductsPage() {
  const products = await getAllProducts()

  if (!products.length) {
    return <p className="text-gray-600">No products found.</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.description}</td>
                <td className="p-3 font-semibold">${p.price}</td>
                <td className="p-3 text-right space-x-2">
                  <form action={deleteProductAction}>
                    <input type="hidden" name="id" value={p._id} />
                    <Button type="submit" variant="destructive" size="sm">
                      Delete
                    </Button>
                  </form>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
