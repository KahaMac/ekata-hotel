import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/member-portal", "/api"],
    },
    sitemap: "https://dhba.org.np/sitemap.xml",
  }
}
