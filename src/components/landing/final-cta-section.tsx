import { ContactButtons } from "@/components/landing/contact-buttons";
import { contact } from "@/components/landing/data";

export function FinalCtaSection() {
    return (
        <section className="relative overflow-hidden bg-[#3f6653] px-4 py-14 text-white sm:py-16">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#88b29b]/35 blur-3xl" />
            <div className="mx-auto w-full max-w-4xl space-y-6 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Нужна помощь питомцу прямо сейчас?
                </h2>
                <p className="text-base text-white/85 sm:text-lg">
                    Напишите в WhatsApp или Telegram. Отвечаю быстро и по делу.
                </p>

                <div className="flex justify-center">
                    <ContactButtons
                        whatsappHref={contact.whatsappHref}
                        telegramHref={contact.telegramHref}
                        phoneHref={contact.phoneHref}
                        className="w-full max-w-3xl"
                    />
                </div>
            </div>
        </section>
    );
}
