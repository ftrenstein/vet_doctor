"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("rounded-2xl border border-[#d4ddd6] bg-white px-2", className)}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "flex flex-1 items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-[#1f2a24]",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDown className="size-5 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn("overflow-hidden", className)}
            {...props}
        >
            <div className="px-4 pb-4 pt-1">{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
