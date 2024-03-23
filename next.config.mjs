/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: "7dd2f257d0af761764b02c582d76aad6",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
