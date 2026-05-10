import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Anchor / Spotify for Podcasters host show artwork on these CDNs.
      { protocol: "https", hostname: "**.anchor.fm" },
      { protocol: "https", hostname: "d3t3ozftmdmh3i.cloudfront.net" },
      { protocol: "https", hostname: "**.scdn.co" },
      { protocol: "https", hostname: "**.spotifycdn.com" },
      { protocol: "https", hostname: "image.simplecastcdn.com" },
    ],
  },
};

export default nextConfig;
