"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationControls({ currentPage, totalPages }) {
  const router = useRouter();
  const params = useSearchParams();

  const changePage = (page) => {
    const query = new URLSearchParams(params);
    query.set("page", page);
    router.push(`/dashboard/admin/products?${query.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        disabled={currentPage <= 1}
        onClick={() => changePage(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => changePage(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
