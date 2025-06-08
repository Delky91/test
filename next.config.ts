import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [new URL('https://ext.same-assets.com/830637805/**')]
  }
};

export default nextConfig;
