import { PawPrint } from "lucide-react";

import { steps } from "@/components/landing/data";
import { Card, CardContent } from "@/components/ui/card";

export function ProcessSection() {
    return (
        <section className="px-4 py-12 sm:py-16">
            <div className="mx-auto w-full max-w-6xl space-y-7">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                    Как проходит приём
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <Card key={step}>
                            <CardContent className="p-5">
                                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#e9f6ee] text-[#2f5d47]">
                                    {index + 1}
                                </div>
                                <p className="text-sm font-medium leading-relaxed text-[#2d3a34]">{step}</p>
                                <PawPrint className="mt-4 size-4 text-[#5c7d6b]" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
