import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://vet-doctor-24.ru"),
    title: {
        default: "Ветеринар на дом в Москве и МО — выезд 24/7 | vet-doctor-24.ru",
        template: "%s | Ветеринар на дом",
    },
    description:
        "Ветеринарный врач высшей категории с выездом на дом по Москве и Московской области. 30+ лет практики. Осмотр, лечение, вакцинация, хирургия. Звоните: 8 (903) 729-81-33.",
    keywords: [
        "ветеринар на дом",
        "вызов ветеринара на дом",
        "ветеринар Москва",
        "ветеринар МО",
        "ветеринар выезд",
        "ветеринар 24/7",
    ],
    alternates: {
        canonical: "https://vet-doctor-24.ru",
    },
    openGraph: {
        title: "Ветеринар на дом в Москве и МО — выезд 24/7",
        description:
            "Ветеринарный врач высшей категории с выездом на дом. 30+ лет практики. Осмотр, лечение, вакцинация, хирургия.",
        url: "https://vet-doctor-24.ru",
        siteName: "Ветеринар на дом — vet-doctor-24.ru",
        locale: "ru_RU",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
