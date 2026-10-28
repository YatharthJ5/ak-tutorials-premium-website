import type { MetadataRoute } from "next";
import { institute } from "@/data/institute";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${institute.siteUrl}/sitemap.xml` };
}
