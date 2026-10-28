import type { MetadataRoute } from "next";
import { institute } from "@/data/institute";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/courses", "/about", "/results", "/contact"].map((p) => ({
    url: `${institute.siteUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
