import { Award, GraduationCap, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trustPoints = [
    {
        title: "Опыт 30+ лет",
        text: "Хирургия, терапия и экстренные случаи с понятной тактикой лечения.",
        icon: Award,
    },
    {
        title: "Классическое образование",
        text: "МГАВМиБ им. К.И. Скрябина и постоянное повышение квалификации.",
        icon: GraduationCap,
    },
    {
        title: "Безопасный подход",
        text: "Строгая асептика и аккуратная работа без лишнего стресса для питомца.",
        icon: ShieldCheck,
    },
];

export function AboutSection() {
    return (
        <section id="about" className="bg-[#eef2ed] px-4 py-12 sm:py-16">
            <div className="mx-auto w-full max-w-6xl space-y-7">
                <div className="max-w-2xl space-y-3">
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                        О враче
                    </h2>
                    <p className="text-base leading-relaxed text-[#4a5750] sm:text-lg">
                        Лечу питомцев с вниманием к деталям и честным диалогом с владельцем. Главный
                        приоритет: быстро облегчить состояние и дать ясный план действий.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {trustPoints.map((item) => (
                        <Card key={item.title}>
                            <CardHeader>
                                <div className="mb-1 inline-flex size-11 items-center justify-center rounded-full bg-[#c1edd3] text-[#1d4533]">
                                    <item.icon className="size-5" />
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-[#4f5a53]">{item.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
