import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-md border border-input/50 bg-background/50 px-4 py-2 text-base shadow-sm backdrop-blur-sm transition-all duration-300 outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/10 hover:border-black/30 dark:hover:border-white/30 focus:border-primary focus:bg-background",
        "focus-visible:border-ring focus-visible:ring-[4px] focus-visible:ring-ring/20 focus-visible:shadow-md",
        "aria-invalid:border-destructive aria-invalid:ring-[4px] aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
