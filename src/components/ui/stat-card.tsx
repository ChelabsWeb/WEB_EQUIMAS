import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps extends React.ComponentProps<typeof Card> {
  title: string
  value: string | number
  trend?: {
    value: number
    label: string
    isPositive?: boolean
  }
  icon?: React.ReactNode
}

export function StatCard({
  title,
  value,
  trend,
  icon,
  className,
  ...props
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden group", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b-0">
        <CardTitle className="text-sm font-medium uppercase tracking-wider text-muted-foreground group-hover:text-black dark:group-hover:text-white transition-colors">
          {title}
        </CardTitle>
        {icon && (
          <div className="text-muted-foreground group-hover:text-black dark:group-hover:text-white transition-colors">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-black tracking-tighter uppercase">{value}</div>
        {trend && (
          <p className="text-xs text-muted-foreground mt-2 font-medium">
            <span
              className={cn(
                "mr-1 inline-flex items-center",
                trend.isPositive === true
                  ? "text-emerald-500"
                  : trend.isPositive === false
                  ? "text-red-500"
                  : ""
              )}
            >
              {trend.isPositive ? "+" : ""}
              {trend.value}%
            </span>
            {trend.label}
          </p>
        )}
      </CardContent>
      {/* Decorative architectural accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-black/10 dark:border-white/10 group-hover:bg-primary transition-colors" />
    </Card>
  )
}
