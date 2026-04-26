import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3f6653]",
    {
        variants: {
            variant: {
                default: "bg-[#3f6653] text-white hover:opacity-90",
                whatsapp: "bg-[#25D366] text-white hover:brightness-95",
                telegram: "bg-[#0088cc] text-white hover:brightness-95",
                outline:
                    "border border-[#3f6653]/25 bg-white text-[#1f2a24] hover:border-[#3f6653]",
                soft: "bg-[#c1edd3] text-[#1d4533] hover:bg-[#addfbe]",
            },
            size: {
                default: "h-12 px-6",
                lg: "h-14 px-7 text-[17px]",
                xl: "h-16 px-8 text-lg",
                icon: "size-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
