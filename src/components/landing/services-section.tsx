import { House, Scissors, Stethoscope, Syringe } from "lucide-react";

import { services } from "@/components/landing/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const icons = [Syringe, Stethoscope, Stethoscope, Scissors, House, Stethoscope];

export function ServicesSection() {
    return (
        <section id="services" className="px-4 py-12 sm:py-16">
            <div className="mx-auto w-full max-w-6xl space-y-7">
                <div className="space-y-3">
                    <Badge variant="soft">Услуги</Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                        Оказываемые услуги
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = icons[index] ?? Stethoscope;
                        return (
                            <Card key={service.title} className="h-full">
                                <CardHeader>
                                    <div className="mb-1 inline-flex size-11 items-center justify-center rounded-full bg-[#e9f6ee] text-[#2e5b45]">
                                        <Icon className="size-5" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm leading-relaxed text-[#4f5a53]">{service.description}</p>
                                    <p className="text-lg font-extrabold text-[#254736]">{service.price}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
