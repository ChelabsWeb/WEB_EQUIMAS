"use client";

import * as React from "react"
import { motion, Variants, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight } from "@phosphor-icons/react"

interface FeatureBlockProps extends HTMLMotionProps<"div"> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  actionLabel?: string;
  onActionClick?: () => void;
}

// Subtle, Premium Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Smooth, Apple-like easing
  }
}

export function FeatureBlock({
  icon,
  title,
  description,
  features,
  actionLabel,
  onActionClick,
  className,
  ...props
}: FeatureBlockProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        // Softened Radius, Glass Premium, Expanded Padding, Premium Transitions
        "group relative flex flex-col justify-between overflow-hidden rounded-md border border-border/50 glass-premium p-10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] dark:border-white/10",
        className
      )}
      {...props}
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Soft floating icon wrapper */}
        {icon && (
          <motion.div variants={itemVariants} className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-primary/20">
            {icon}
          </motion.div>
        )}
        
        <motion.h4 variants={itemVariants} className="mb-4 text-2xl font-bold tracking-tight text-foreground">
          {title}
        </motion.h4>
        
        <motion.p variants={itemVariants} className="mb-6 leading-relaxed text-muted-foreground">
          {description}
        </motion.p>
        
        {features && features.length > 0 && (
          <motion.ul className="mb-8 space-y-4">
            {features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                variants={itemVariants}
                className="flex items-start text-sm font-medium text-foreground/80 transition-colors duration-500 group-hover:text-foreground"
              >
                <div className="mr-4 mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-md bg-primary/80" />
                <span className="leading-snug">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      {actionLabel && (
        <motion.div variants={itemVariants} className="relative z-10 mt-auto pt-4">
          <button
            onClick={onActionClick}
            className="group/btn inline-flex w-fit items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
          >
            <span>{actionLabel}</span>
            <ArrowRight weight="bold" className="ml-2 h-4 w-4 transition-transform duration-500 ease-out group-hover/btn:translate-x-1" />
          </button>
        </motion.div>
      )}

      {/* Background Micro-interaction: Subtle glow sweep on hover */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 dark:from-primary/10" />
    </motion.div>
  )
}
