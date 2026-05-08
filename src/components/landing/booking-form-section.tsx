import BookingForm from "@/components/BookingForm";
import { Badge } from "@/components/ui/badge";

export function BookingFormSection() {
    return (
        <section id="booking" className="bg-[#eef2ed] px-4 py-12 sm:py-16">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                <div className="space-y-4">
                    <Badge variant="soft">Запись на приём</Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                        Оставьте заявку
                    </h2>
                    <p className="text-base leading-relaxed text-[#4a5750]">
                        Заполните форму — свяжусь с вами в течение 30 минут и согласую удобное время выезда.
                    </p>
                    <ul className="space-y-2 text-sm text-[#4a5750]">
                        <li className="flex items-center gap-2">
                            <span className="inline-block size-1.5 rounded-full bg-[#3f6653]" />
                            Выезд по Москве и Московской области
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="inline-block size-1.5 rounded-full bg-[#3f6653]" />
                            Принимаю кошек, собак, птиц, грызунов
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="inline-block size-1.5 rounded-full bg-[#3f6653]" />
                            Стоимость оговаривается до выезда
                        </li>
                    </ul>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#dce4df]">
                    <BookingForm />
                </div>
            </div>
        </section>
    );
}
