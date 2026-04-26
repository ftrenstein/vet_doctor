import { Star } from "lucide-react";

import { reviews } from "@/components/landing/data";
import { Card, CardContent } from "@/components/ui/card";

export function ReviewsSection() {
    return (
        <section id="reviews" className="bg-[#eef2ed] px-4 py-12 sm:py-16">
            <div className="mx-auto w-full max-w-6xl space-y-7">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                    Отзывы
                </h2>

                <div className="grid gap-4 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <Card key={review.author}>
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center gap-1 text-[#d18c1d]">
                                    <Star className="size-4 fill-current" />
                                    <Star className="size-4 fill-current" />
                                    <Star className="size-4 fill-current" />
                                    <Star className="size-4 fill-current" />
                                    <Star className="size-4 fill-current" />
                                </div>
                                <p className="text-sm leading-relaxed text-[#34423b]">{review.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#254736]">{review.author}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
