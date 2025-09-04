import { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/mousumi_official_business_app" : "",
  assetPrefix: isProd ? "/mousumi_official_business_app/" : "",
  allowedDevOrigins: ["10.176.202.104"],
};

export default nextConfig;


