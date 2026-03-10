"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { ArrowRight } from "@phosphor-icons/react"
import { motion, HTMLMotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-transparent text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group",
  {
    variants: {
      variant: {
        default: "border-black/5 dark:border-white/10 bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
        outline:
          "border-black/10 dark:border-white/10 bg-background/50 backdrop-blur-sm hover:bg-black/5 hover:text-black dark:hover:bg-white/10 dark:hover:text-white",
        secondary:
          "border-black dark:border-white bg-secondary text-secondary-foreground hover:bg-black hover:text-white",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover-fx-none",
        link: "text-primary underline-offset-4 hover:underline hover-fx-none",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        xs: "h-7 gap-1 rounded-md px-3 text-xs",
        sm: "h-9 gap-1.5 rounded-md px-4",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-7 rounded-md",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const MotionSlot = motion.create ? motion.create(Slot.Root as any) : motion(Slot.Root as any);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? MotionSlot : motion.button
  
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      whileHover={!props.disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!props.disabled ? { scale: 0.97 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...(props as any)}
    >
      {asChild ? (
        props.children
      ) : (
        <>
          {props.children}
          {size !== "icon" && size !== "icon-sm" && size !== "icon-xs" && size !== "icon-lg" && (
            <span className="w-0 overflow-hidden transition-all duration-300 ease-out group-hover:w-4 group-hover:ml-1 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ArrowRight weight="bold" />
            </span>
          )}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
