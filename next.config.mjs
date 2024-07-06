/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    pageExtensions: ["jsx", "js", "ts", "tsx", "md", "mdx"],
};

export default nextConfig;
