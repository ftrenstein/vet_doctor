import type { MetadataRoute } from "next";

import { cities } from "@/data/cities";

const BASE = "https://vet-doctor-24.ru";

export default function sitemap(): MetadataRoute.Sitemap {
    const cityPages = cities.map((city) => ({
        url: `${BASE}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        ...cityPages,
    ];
}
