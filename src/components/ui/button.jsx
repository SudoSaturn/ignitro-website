import React from "react"
import { cn } from "../../utils/cn"

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm focus:outline-none transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
} 