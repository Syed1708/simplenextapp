"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();
  const [value, setValue] = useState(params.get("search") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(params);
    query.set("search", value);
    query.set("page", 1);
    router.push(`/products?${query.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-1/2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products..."
        className="flex-1 border rounded px-3 py-2"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
    </form>
  );
}
