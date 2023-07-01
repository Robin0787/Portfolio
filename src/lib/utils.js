import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

function formatDate(input) {
  const date = new Date(input)

  const formattedDate = date.toLocaleDateString("default", {
    month: "long",
    year: "numeric"
  })

  return formattedDate
}

export { cn, formatDate }

