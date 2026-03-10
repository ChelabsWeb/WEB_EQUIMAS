"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CircleNotch } from "@phosphor-icons/react"

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: 'sm' | 'default' | 'lg' | 'xl'
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = 'default', ...props }, ref) => {
    return (
      <CircleNotch
        ref={ref}
        weight="bold"
        className={cn(
          "animate-spin text-primary",
          {
            "h-4 w-4": size === "sm",
            "h-6 w-6": size === "default",
            "h-8 w-8": size === "lg",
            "h-12 w-12": size === "xl",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner }
