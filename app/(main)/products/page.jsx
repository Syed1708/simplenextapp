
import { getProducts } from "@/app/actions/product-actions";
import CategoryFilter from "./_components/CategoryFilter";
import SearchBar from "./_components/SearchBar";
import ProductsList from "./_components/ProductsList";
import PaginationControls from "./_components/PaginationControls";
import Link from "next/link";

export default async function ProductsPage({ searchParams }) {
   const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const search = params.search || "";
  const category = params.category || "";

  const { products, total, pages } = await getProducts({ page, search, category });

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No products found
        </h2>
        <p className="text-gray-500 mt-2">
          Try adjusting your search or filter options.
        </p>
        <Link
          href="/products"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Reset Filters
        </Link>
      </div>
    );
  }

  return (
    <div className=" p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar />
        <CategoryFilter />
      </div>

      {/* Product List */}
      <ProductsList products={products} />

      {/* Pagination */}
      <PaginationControls currentPage={page} totalPages={pages} />
    </div>
  );
}
