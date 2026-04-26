"use client";

import { useState } from "react";
import { CalendarClock } from "lucide-react";

import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";

export function StickyBookingButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {open ? (
                <div className="fixed inset-0 z-[70] flex items-end bg-black/40 p-3 sm:items-center sm:justify-center">
                    <div className="w-full max-w-lg rounded-3xl border border-[#d4ddd6] bg-[#f7faf5] p-5 shadow-2xl">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <h3 className="text-lg font-extrabold text-[#1d2822]">Запись на приём</h3>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-full border border-[#d4ddd6] bg-white px-3 py-1 text-sm font-medium text-[#2e3d35]"
                            >
                                Закрыть
                            </button>
                        </div>
                        <BookingForm />
                    </div>
                </div>
            ) : null}

            <div className="pointer-events-none fixed bottom-4 left-0 right-0 z-50 px-4 sm:bottom-6">
                <div className="mx-auto w-full max-w-md">
                    <Button
                        type="button"
                        size="xl"
                        className="cta-glow-pulse pointer-events-auto w-full shadow-2xl"
                        onClick={() => setOpen(true)}
                    >
                        <CalendarClock className="mr-2 size-5" />
                        Отправить заявку на приём
                    </Button>
                </div>
            </div>
        </>
    );
}
