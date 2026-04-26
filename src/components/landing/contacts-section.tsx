import { MapPin } from "lucide-react";

import { ContactButtons } from "@/components/landing/contact-buttons";
import { contact } from "@/components/landing/data";
import { Card, CardContent } from "@/components/ui/card";

export function ContactsSection() {
    return (
        <section id="contacts" className="px-4 py-12 sm:py-16">
            <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_1.2fr]">
                <div className="space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                        Контакты
                    </h2>
                    <p className="text-base leading-relaxed text-[#4a5750]">
                        Быстрее всего отвечаю в мессенджерах. Для срочных случаев лучше звонок.
                    </p>
                    <ContactButtons
                        whatsappHref={contact.whatsappHref}
                        telegramHref={contact.telegramHref}
                        phoneHref={contact.phoneHref}
                        phoneLabel="Позвонить сейчас"
                    />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {/* <Card>
                        <CardContent className="p-5">
                            <Phone className="mb-3 size-5 text-[#35624d]" />
                            <p className="text-sm text-[#55635b]">Телефон</p>
                            <a className="mt-1 block text-sm font-bold text-[#1f2a24]" href={contact.phoneHref}>
                                {contact.phone}
                            </a>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-5">
                            <Mail className="mb-3 size-5 text-[#35624d]" />
                            <p className="text-sm text-[#55635b]">Email</p>
                            <a className="mt-1 block text-sm font-bold text-[#1f2a24]" href={`mailto:${contact.email}`}>
                                {contact.email}
                            </a>
                        </CardContent>
                    </Card> */}
                    <Card>
                        <CardContent className="p-5">
                            <MapPin className="mb-3 size-5 text-[#35624d]" />
                            <p className="text-sm text-[#55635b]">Адрес</p>
                            <p className="mt-1 text-sm font-bold text-[#1f2a24]">{contact.location}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
