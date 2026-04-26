import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type BookingPayload = {
    name?: string;
    phone?: string;
    pet?: string;
    problem?: string;
    time?: string;
};

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as BookingPayload;
        const name = body.name?.toString().trim();
        const phone = body.phone?.toString().trim();
        const pet = body.pet?.toString().trim() || "-";
        const problem = body.problem?.toString().trim() || "-";
        const time = body.time?.toString().trim() || "-";

        if (!name || !phone) {
            return NextResponse.json(
                { ok: false, error: "Name and phone are required" },
                { status: 400 }
            );
        }

        const host = process.env.SMTP_HOST;
        const portRaw = process.env.SMTP_PORT;
        const secureRaw = process.env.SMTP_SECURE;
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;
        const to = process.env.BOOKING_TO_EMAIL;
        const from = process.env.BOOKING_FROM_EMAIL || user;

        if (!host || !portRaw || !user || !pass || !to || !from) {
            return NextResponse.json(
                { ok: false, error: "SMTP environment is not configured" },
                { status: 500 }
            );
        }

        const port = Number(portRaw);
        const secure = secureRaw === "true" || port === 465;

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user,
                pass,
            },
        });

        const subject = `Новая заявка на приём: ${name}`;
        const text = [
            "Новая заявка с сайта",
            "",
            `Имя: ${name}`,
            `Телефон: ${phone}`,
            `Питомец: ${pet}`,
            `Проблема: ${problem}`,
            `Желаемое время: ${time}`,
        ].join("\n");

        const html = `
      <h2>Новая заявка с сайта</h2>
      <p><b>Имя:</b> ${name}</p>
      <p><b>Телефон:</b> ${phone}</p>
      <p><b>Питомец:</b> ${pet}</p>
      <p><b>Проблема:</b> ${problem}</p>
      <p><b>Желаемое время:</b> ${time}</p>
    `;

        await transporter.sendMail({
            from,
            to,
            subject,
            text,
            html,
            replyTo: from,
        });

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch {
        return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
    }
}
