"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "./page-layout"
import { cn, getTheme } from "@/lib/theme-config"

interface HeroSectionProps {
  subdomain?: "main" | "beta"
  title: string | ReactNode
  subtitle?: string | ReactNode
  description?: string | ReactNode
  primaryCta?: {
    text: string
    href: string
    onClick?: () => void
  }
  secondaryCta?: {
    text: string
    href: string
    onClick?: () => void
  }
  image?: {
    src: string
    alt: string
  }
  className?: string
  variant?: "default" | "centered" | "split"
}

export function HeroSection({
  subdomain = "main",
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  className,
  variant = "default",
}: HeroSectionProps) {
  const theme = getTheme(subdomain)
  const isBeta = subdomain === "beta"

  const renderContent = () => (
    <div className={cn("flex flex-col", variant === "centered" ? "items-center text-center" : "items-start")}>
      {subtitle && (
        <div className={cn("mb-4 text-sm font-semibold uppercase tracking-wide", theme.hero.subtitle)}>{subtitle}</div>
      )}

      <h1 className={cn("mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl", theme.hero.title)}>
        {title}
      </h1>

      {description && (
        <p
          className={cn(
            "mb-8 text-lg leading-relaxed",
            theme.hero.subtitle,
            variant === "centered" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}

      {(primaryCta || secondaryCta) && (
        <div
          className={cn("flex flex-col sm:flex-row gap-4", variant === "centered" ? "justify-center" : "justify-start")}
        >
          {primaryCta && (
            <Button
              size="lg"
              className={theme.hero.cta.primary}
              asChild={!!primaryCta.href}
              onClick={primaryCta.onClick}
            >
              {primaryCta.href ? <a href={primaryCta.href}>{primaryCta.text}</a> : primaryCta.text}
            </Button>
          )}

          {secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className={theme.hero.cta.secondary}
              asChild={!!secondaryCta.href}
              onClick={secondaryCta.onClick}
            >
              {secondaryCta.href ? <a href={secondaryCta.href}>{secondaryCta.text}</a> : secondaryCta.text}
            </Button>
          )}
        </div>
      )}
    </div>
  )

  if (variant === "split" && image) {
    return (
      <section className={cn("py-12 sm:py-16 lg:py-20", theme.hero.background, className)}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>{renderContent()}</div>
            <div className="relative">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", theme.hero.background, className)}>
      <Container>
        <div className={cn(variant === "centered" ? "text-center" : "max-w-4xl")}>{renderContent()}</div>

        {image && variant !== "split" && (
          <div className="mt-12">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        )}
      </Container>
    </section>
  )
}
