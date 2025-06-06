import type React from "react"
import Link from "next/link"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Rocket } from "lucide-react"

interface JoinCtaButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg" | "sm"
  className?: string
  children?: React.ReactNode
}

export function JoinCtaButton({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: JoinCtaButtonProps) {
  const getButtonProps = () => {
    switch (variant) {
      case "primary":
        return {
          className: `bg-red-600 hover:bg-red-700 text-white ${className}`,
        }
      case "secondary":
        return {
          className: `bg-emerald-600 hover:bg-emerald-700 text-white ${className}`,
        }
      case "outline":
        return {
          variant: "outline" as const,
          className: `border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black ${className}`,
        }
      default:
        return {
          className: `bg-red-600 hover:bg-red-700 text-white ${className}`,
        }
    }
  }

  const getSizeProps = () => {
    switch (size) {
      case "lg":
        return {
          size: "lg" as const,
          className: "px-8 py-6 text-lg",
        }
      case "sm":
        return {
          size: "sm" as const,
        }
      default:
        return {
          size: "default" as const,
        }
    }
  }

  const buttonProps = {
    ...getButtonProps(),
    ...getSizeProps(),
    ...props,
  }

  return (
    <Button asChild {...buttonProps}>
      <Link href="/join">
        {children || (
          <>
            <Rocket className="mr-2 h-5 w-5" />
            本気の仲間募集！
          </>
        )}
      </Link>
    </Button>
  )
}
