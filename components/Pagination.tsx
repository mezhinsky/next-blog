"use client";

import { useState } from "react";
import Link from "next/link";

import { IPagination } from "@/interfaces/IBaseModel";

export default function Pagination({
  pagination,
}: {
  pagination: IPagination;
}) {
  const [selectValue, setSelectValue] = useState("");

  const setParams = (event: any) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      {pagination.pageCount >= 2 && pagination.page > 1 && (
        <Link
          className="px-3 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          href={{ pathname: "/articles", query: { page: pagination.page - 1 } }}
        >
          Previous
        </Link>
      )}

      {Array(pagination.pageCount)
        .fill(0)
        .map((_, i) => (
          <Link
            key={i}
            className={`px-3 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300`}
            href={{
              pathname: "/articles",
              query: { page: i + 1 },
            }}
          >
            {i + 1}
          </Link>
        ))}

      {/* <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        1
      </button> */}
      {/* <span className="px-3 py-2">...</span> */}

      {pagination.pageCount > 1 && pagination.page < pagination.pageCount && (
        <Link
          className="px-3 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
          href={{ pathname: "/articles", query: { page: pagination.page + 1 } }}
        >
          Next
        </Link>
      )}
    </div>
  );
}
