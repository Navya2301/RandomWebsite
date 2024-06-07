/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  // For assetPrefix, change it to your GitHub Pages URL if your project is under a repository
  assetPrefix: process.env.NODE_ENV === 'production' ? '/navya2301/' : '',
};

export default nextConfig;
