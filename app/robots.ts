import type { MetadataRoute } from "next";
import { ROUTER_DOMAIN } from "./constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${ROUTER_DOMAIN}/sitemap.xml`,
  };
}
