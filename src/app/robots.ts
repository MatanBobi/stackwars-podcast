import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || site.url || "https://stackwarspod.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
