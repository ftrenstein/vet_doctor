"use client";

import { FormEvent, useState } from "react";

export default function BookingForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const form = new FormData(e.currentTarget);
        const data = Object.fromEntries(form);

        const res = await fetch("/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setSuccess(true);
        } else {
            setError("Не удалось отправить заявку. Попробуйте еще раз.");
        }

        setLoading(false);
    }

    if (success) {
        return (
            <p className="rounded-2xl bg-[#e9f6ee] px-4 py-3 text-sm font-medium text-[#1d4533]">
                Спасибо! Мы скоро свяжемся с вами.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                name="name"
                placeholder="Ваше имя"
                required
                className="h-11 rounded-xl border border-[#cfd9d2] bg-white px-3 text-sm outline-none focus:border-[#3f6653]"
            />
            <input
                name="phone"
                placeholder="Телефон"
                required
                className="h-11 rounded-xl border border-[#cfd9d2] bg-white px-3 text-sm outline-none focus:border-[#3f6653]"
            />
            <input
                name="pet"
                placeholder="Питомец (кот, собака...)"
                className="h-11 rounded-xl border border-[#cfd9d2] bg-white px-3 text-sm outline-none focus:border-[#3f6653]"
            />
            <textarea
                name="problem"
                placeholder="Что случилось?"
                className="min-h-[100px] rounded-xl border border-[#cfd9d2] bg-white px-3 py-2 text-sm outline-none focus:border-[#3f6653]"
            />
            <input
                name="time"
                placeholder="Желаемое время"
                className="h-11 rounded-xl border border-[#cfd9d2] bg-white px-3 text-sm outline-none focus:border-[#3f6653]"
            />

            <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-[#3f6653] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
                {loading ? "Отправка..." : "Записаться"}
            </button>

            {error ? <p className="text-sm text-[#a31f1f]">{error}</p> : null}
        </form>
    );
}
