import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import dynamic from "next/dynamic";
import CardPlaceholder from "@/components/CardPlaceholder ";

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <CardPlaceholder />,
});

export default function Products({ products }) {
  return (
    <div
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 10, // In seconds
  };
}
