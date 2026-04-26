import { MessageCircle, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactButtonsProps {
    phoneHref: string;
    whatsappHref: string;
    telegramHref: string;
    phoneLabel?: string;
    className?: string;
    large?: boolean;
}

export function ContactButtons({
    phoneHref,
    whatsappHref,
    telegramHref,
    phoneLabel = "Позвонить",
    className,
    large = true,
}: ContactButtonsProps) {
    const size = large ? "xl" : "lg";

    return (
        <div className={cn("grid gap-3 sm:flex sm:flex-wrap", className)}>
            <Button asChild variant="whatsapp" size={size}>
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 size-5" />
                    Написать в WhatsApp
                </a>
            </Button>
            <Button asChild variant="telegram" size={size}>
                <a href={telegramHref} target="_blank" rel="noreferrer">
                    <Send className="mr-2 size-5" />
                    Telegram
                </a>
            </Button>
            <Button asChild variant="default" size={size}>
                <a href={phoneHref}>
                    <Phone className="mr-2 size-5" />
                    {phoneLabel}
                </a>
            </Button>
        </div>
    );
}
