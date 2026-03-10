"use client"

import * as React from "react"
import { Minus, Plus } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  className?: string
  disabled?: boolean
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
  disabled = false,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10)
    if (!isNaN(val)) {
      if (val >= min && val <= max) {
        onChange(val)
      } else if (val < min) {
        onChange(min)
      } else if (val > max) {
        onChange(max)
      }
    }
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
      >
        <Minus weight="bold" className="h-4 w-4" />
        <span className="sr-only">Decrease quantity</span>
      </Button>
      <Input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
        className="h-8 w-14 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        disabled={disabled}
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
      >
        <Plus weight="bold" className="h-4 w-4" />
        <span className="sr-only">Increase quantity</span>
      </Button>
    </div>
  )
}
