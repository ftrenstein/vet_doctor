import { contact } from "@/components/landing/data";
import { Button } from "@/components/ui/button";

const navItems = [
    { href: "#about", label: "О враче" },
    { href: "#services", label: "Услуги" },
    { href: "#pricing", label: "Прайс" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-[#dce4df] bg-[#f7faf5]/90 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
                <a href="#hero" className="text-base font-extrabold tracking-tight text-[#3f6653]">
                    Вызов ветеринара на дом
                </a>

                <nav className="hidden items-center gap-4 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-[#415049] transition-colors hover:text-[#2f5140]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <Button asChild size="default">
                    <a href={contact.phoneHref}>Позвонить</a>
                </Button>
            </div>
        </header>
    );
}
