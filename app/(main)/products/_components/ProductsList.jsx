import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p._id} className="border rounded-lg shadow-md p-4 flex flex-col">
          <img
            src={p.thumbnail_image}
            alt={p.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="mt-3 font-semibold text-lg">{p.name}</h2>
          <p className="text-sm text-gray-600 flex-1">{p.description}</p>
          <p className="text-blue-600 font-bold mt-2">${p.price}</p>
          <Button asChild className="mt-4">
                  <Link href={`/products/${p._id}`}>View</Link>
                </Button>
        </div>
      ))}
    </div> 
  );
}
