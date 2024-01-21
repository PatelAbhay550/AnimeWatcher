/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*" }],
  },
};

export default nextConfig;
