import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectCardProps extends React.ComponentProps<typeof Card> {
  title: string
  client: string
  imageUrl: string
  tags?: string[]
}

export function ProjectCard({
  title,
  client,
  imageUrl,
  tags = [],
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden group p-0 gap-0", className)} {...props}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {/* Replace with actual Next/Image in production */}
        <img 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <CardContent className="p-6">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{client}</p>
        <h3 className="text-xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">{title}</h3>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-md font-normal text-xs uppercase tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
