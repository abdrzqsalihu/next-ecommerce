/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["cdn.sanity.io"],
  // },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        // Optionally, specify a path for a directory within the domain:
        // path: "/path/to/images",
      },
    ],
  },
};

export default nextConfig;
