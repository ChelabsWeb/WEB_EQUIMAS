import * as React from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface MaterialSwatchProps extends React.ComponentProps<"button"> {
  name: string
  color?: string
  imageUrl?: string
  selected?: boolean
}

export const MaterialSwatch = React.forwardRef<HTMLButtonElement, MaterialSwatchProps>(
  ({ className, name, color, imageUrl, selected, ...props }, ref) => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            ref={ref}
            type="button"
            className={cn(
              "relative h-12 w-12 rounded-md overflow-hidden border-2 transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              selected ? "border-primary scale-110 shadow-md" : "border-transparent hover:border-black/30 dark:hover:border-white/30 hover:scale-105",
              className
            )}
            style={{
              backgroundColor: color,
              backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-label={`Select material ${name}`}
            aria-pressed={selected}
            {...props}
          >
            {/* Inner ring for depth */}
            <div className={cn(
               "absolute inset-0 rounded-md border border-black/10 transition-colors",
               selected && "border-primary/20"
            )} />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="font-medium text-xs rounded-md">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    )
  }
)
MaterialSwatch.displayName = "MaterialSwatch"
