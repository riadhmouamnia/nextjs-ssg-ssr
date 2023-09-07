import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div style={{ height: "240px" }}>
        <Image
          className="rounded-t-lg object-cover h-full w-full"
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
        />
      </div>
      <div className="px-5 py-3">
        <Link href={`products/${product.id}`}>
          <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h3>
        </Link>
        <span className="text-gray-500 mt-2">${product.price}</span>
      </div>
    </div>
  );
}
