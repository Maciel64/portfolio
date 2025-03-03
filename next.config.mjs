import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "skillicons.dev",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "seeklogo.com",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "a.storyblok.com",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
