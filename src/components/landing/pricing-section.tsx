import { pricing } from "@/components/landing/data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingSection() {
    return (
        <section id="pricing" className="bg-[#eef2ed] px-4 py-12 sm:py-16">
            <div className="mx-auto w-full max-w-4xl space-y-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1d2822] sm:text-4xl">
                    Прайс-лист
                </h2>

                <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                    {pricing.map((group, index) => (
                        <AccordionItem key={group.title} value={`item-${index}`}>
                            <AccordionTrigger>{group.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-2">
                                    {group.rows.map((row) => (
                                        <div
                                            key={row.name}
                                            className="flex items-start justify-between gap-4 border-b border-[#e1e7e2] py-2 text-sm"
                                        >
                                            <div className="pr-2">
                                                <p className="text-[#32413a]">{row.name}</p>
                                                {/* {row.note ? (
                                                    <p className="mt-0.5 text-xs text-[#6b7971]">{row.note}</p>
                                                ) : null} */}
                                            </div>
                                            <span className="text-right font-bold text-[#1f2a24]">{row.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <p className="text-sm text-[#56635b]">
                    Итоговая стоимость зависит от состояния питомца и объема помощи.
                </p>
            </div>
        </section>
    );
}
