import type { Metadata } from "next";

import { SeoCityPage } from "@/components/seo/seo-city-page";
import { getCityBySlug } from "@/data/cities";

const city = getCityBySlug("veterinar-chekhov")!;

export const metadata: Metadata = {
    title: city.titleSeo,
    description: city.metaDescription,
    alternates: {
        canonical: "https://vet-doctor-24.ru/veterinar-chekhov",
    },
    openGraph: {
        title: city.titleSeo,
        description: city.metaDescription,
        url: "https://vet-doctor-24.ru/veterinar-chekhov",
        locale: "ru_RU",
        type: "website",
    },
};

export default function Page() {
    return <SeoCityPage city={city} />;
}
