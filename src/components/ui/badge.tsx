import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
    {
        variants: {
            variant: {
                default: "border-transparent bg-[#3f6653] text-white",
                soft: "border-transparent bg-[#c1edd3] text-[#1d4533]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

function Badge({
    className,
    variant,
    ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
    return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
