import { AlertCircle, Frown, HeartPulse, Pill, Stethoscope, Syringe, Thermometer, Wind } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
    {
        icon: Frown,
        title: "Питомец не ест",
        text: "Отказ от еды 1–2 дня — повод для осмотра, особенно у кошек.",
    },
    {
        icon: AlertCircle,
        title: "Рвота или понос",
        text: "Неоднократная или с кровью — нельзя ждать до завтра.",
    },
    {
        icon: Thermometer,
        title: "Вялость и температура",
        text: "Животное не реагирует, лежит, горячий нос — признак серьёзного состояния.",
    },
    {
        icon: Wind,
        title: "Затруднённое дыхание",
        text: "Открытый рот, хрипы, синюшность дёсен — экстренный вызов.",
    },
    {
        icon: HeartPulse,
        title: "Травма или хромота",
        text: "Упал, поранился, не наступает на лапу — нужен осмотр на дому.",
    },
    {
        icon: Syringe,
        title: "Плановая вакцинация",
        text: "Прививки без стресса от дороги в клинику — дома и быстро.",
    },
    {
        icon: Pill,
        title: "Послеоперационный контроль",
        text: "Проверю шов, оценю состояние, скорректирую лечение.",
    },
    {
        icon: Stethoscope,
        title: "Хроническое заболевание",
        text: "Диабет, болезни почек, сердца — регулярный контроль без клиники.",
    },
];

export function ReasonsSection() {
    return (
        <section id="reasons" className="px-4 py-12 sm:py-16">
            <div className="mx-auto w-full max-w-6xl space-y-7">
                <div className="space-y-3">
                    <Badge variant="soft">Когда вызывают врача</Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                        Частые причины вызова
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-[#4a5750]">
                        Не ждите, пока станет хуже. Лучше перестраховаться — осмотр дома займёт 20–30 минут.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason) => (
                        <Card key={reason.title}>
                            <CardContent className="p-5">
                                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#e9f6ee] text-[#2f5d47]">
                                    <reason.icon className="size-5" />
                                </div>
                                <p className="mb-1 text-sm font-bold text-[#1d2822]">{reason.title}</p>
                                <p className="text-sm leading-relaxed text-[#4f5a53]">{reason.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
