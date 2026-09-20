// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   basePath: "/kommoncanvas",       // 👈 apna actual subfolder name daalo
//   assetPrefix: "/kommoncanvas",    // 👈 same subfolder name
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "aditechinfo.com",
//         pathname: "/kommoncanvas/**",
//       },
//     ],
//     dangerouslyAllowSVG: true,
//     contentDispositionType: "attachment",
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//     unoptimized: true,
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false, // /contact (contact.html) instead of /contact/ (contact/index.html)
  typescript: {
    ignoreBuildErrors: true,  
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


