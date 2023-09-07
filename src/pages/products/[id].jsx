import React from "react";
import Image from "next/image";

export default function ProductDetails({ product }) {
  return (
    <div className={`flex min-h-screen flex-col items-center  p-24`}>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
        />
        <div className="flex flex-col justify-between items-start p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <p className="font-bold text-lg mb-4">${product.price}</p>
          <div className="flex flex-row justify-between w-full">
            <p className="bg-slate-700 text-center flex items-center py-1 px-3 rounded-full">
              {product.category}
            </p>
            <button className="border-2 p-2 rounded-lg hover:bg-slate-600">
              Buy Tomorrow!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <h2>title: {product.title}</h2>
      <p>description: {product.description}</p>
      <p>price: ${product.price}</p>
      <p>category: {product.category}</p> */
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://fakestoreapi.com/products/" + params.id);
  const product = await res.json();

  return {
    props: {
      product,
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}
