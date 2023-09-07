import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            E-commerce
          </h1>
          <div className="w-50 flex justify-center md:justify-between gap-4">
            <Link href="/">Home</Link>
            <Link href="/products">All Products</Link>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
