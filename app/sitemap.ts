import type { MetadataRoute } from "next"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sidojain.dev"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date("2026-07-27"),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/resume`,
            lastModified: new Date("2026-07-27"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]
}