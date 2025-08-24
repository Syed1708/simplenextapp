"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["Electronics", "Computers", "Furniture", "Fashion", "Accessories", "Sports"];

export default function CategoryFilter() {
  const router = useRouter();
  const params = useSearchParams();

  const handleChange = (e) => {
    const query = new URLSearchParams(params);
    query.set("category", e.target.value);
    query.set("page", 1);
    router.push(`/products?${query.toString()}`);
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={params.get("category") || ""}
      className="border rounded px-3 py-2"
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
