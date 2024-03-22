/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: "7dd2f257d0af761764b02c582d76aad6",
  },
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
          port: '',
        },
      ],  },
};

export default nextConfig;
