import {
  deleteProductAction,
  getProducts,
} from "@/app/actions/product-actions";
import { Button } from "@/components/ui/button";
import PaginationControls from "../_components/PaginationControls";
import Link from "next/link";
import ProductsToast from "./_components/ProductsToast ";
import { ToastContainer } from "react-toastify";
import DeleteButton from "./_components/DeleteButton";

export default async function DashboardProductsPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;

  const { products, total, pages } = await getProducts({ page });

  if (!products || products.length === 0) {
        return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Products</h1>
          <Link href="/dashboard/products/create">
            <Button>Create Product</Button>
          </Link>
        </div>
        <p className="text-gray-600">No products found.</p>
      </div>
    )
  }

  return (
    <div>
      <ProductsToast/>
      <ToastContainer/>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <Link href="/dashboard/products/create">
          <Button>Create Product</Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3 font-semibold">${p.price}</td>
                <td className="p-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline">
                      <Link href={`/dashboard/products/edit/${p._id}`}>Edit</Link>
                    </Button>
                    <DeleteButton productId={p._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <PaginationControls currentPage={page} totalPages={pages} />
      </div>
    </div>
  );
}
