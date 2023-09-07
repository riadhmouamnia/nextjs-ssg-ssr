/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["https://fakestoreapi.com/img/", "localhost"] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
