import Image from "next/image";

import { ContactButtons } from "@/components/landing/contact-buttons";
import { contact } from "@/components/landing/data";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
    return (
        <section id="hero" className="px-4 pb-10 pt-8 sm:pt-10">
            <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                <div className="space-y-4">
                    <Badge variant="soft">Ветеринарный врач высшей категории</Badge>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#1c241f] sm:text-5xl">
                        Геннадий Иванович
                    </h1>
                    <p className="max-w-xl text-lg leading-relaxed text-[#495850]">
                        30+ лет практики. Быстрый выезд, понятные рекомендации и забота о вашем питомце.
                    </p>

                    <ContactButtons
                        whatsappHref={contact.whatsappHref}
                        telegramHref={contact.telegramHref}
                        phoneHref={contact.phoneHref}
                        phoneLabel={contact.phone}
                    />
                </div>

                <div className="relative">
                    <div className="absolute -right-6 -top-6 hidden h-40 w-40 rounded-full bg-[#c1edd3]/70 blur-3xl sm:block" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-[#d1ddd5] bg-white shadow-[0_20px_50px_rgba(46,73,59,0.12)]">
                        <Image
                            src="/hero-vet.jpeg"
                            alt="Ветеринарный врач Геннадий Иванович"
                            width={900}
                            height={1100}
                            className="h-[420px] w-full object-cover sm:h-[520px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
