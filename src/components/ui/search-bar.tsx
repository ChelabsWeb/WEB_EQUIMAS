"use client"

import * as React from "react"
import { MagnifyingGlass, X } from "@phosphor-icons/react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface SearchBarProps extends Omit<React.ComponentProps<"input">, "onChange"> {
  onSearch?: (value: string) => void
  onChange?: (value: string) => void
  debounceMs?: number
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onSearch, onChange, value: externalValue, defaultValue, debounceMs = 300, ...props }, ref) => {
    const [value, setValue] = React.useState(externalValue || defaultValue || "")
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Sync external value
    React.useEffect(() => {
      if (externalValue !== undefined) {
        setValue(externalValue)
      }
    }, [externalValue])

    const handleClear = () => {
      setValue("")
      onChange?.("")
      onSearch?.("")
      // If ref is composed, we might need a better way to focus, but this works for internal ref
      if (typeof ref === "function") {
         // Not easily focusable if it's a function ref, so we use internal ref fallback Strategy
      } else if (ref && 'current' in ref && ref.current) {
        ref.current.focus()
      } else if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      onChange?.(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(value.toString())
      }
    }

    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <MagnifyingGlass weight="bold" className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <Input
          ref={(node) => {
            // Merge refs
            if (typeof ref === 'function') {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
            // @ts-ignore
            inputRef.current = node
          }}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="pl-9 pr-9"
          {...props}
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-transparent"
            onClick={handleClear}
          >
            <X weight="bold" className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
