import { MetadataRoute } from "next";
import { ROUTER_DOMAIN, ROUTES } from "./constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${ROUTER_DOMAIN}`,
      lastModified: new Date(),
    },
    {
      url: `${ROUTER_DOMAIN}${ROUTES.SIGN_UP}`,
      lastModified: new Date(),
    },
    {
      url: `${ROUTER_DOMAIN}${ROUTES.SIGN_IN}`,
      lastModified: new Date(),
    },
    {
      url: `${ROUTER_DOMAIN}${ROUTES.ANALYTICS}`,
      lastModified: new Date(),
    },
    {
      url: `${ROUTER_DOMAIN}${ROUTES.PROJECTS}`,
      lastModified: new Date(),
    },
    {
      url: `${ROUTER_DOMAIN}${ROUTES.PROFILE}`,
      lastModified: new Date(),
    },
  ];
}
