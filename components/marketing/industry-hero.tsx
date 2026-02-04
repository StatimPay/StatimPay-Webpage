'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ImagePlaceholder } from './image-placeholder'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface IndustryHeroProps {
  badge: string
  title: string
  description: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  imagePlaceholder?: {
    description: string
    icon?: LucideIcon
  }
}

export function IndustryHero({
  badge,
  title,
  description,
  primaryCta = { label: 'Book a demo', href: '/contact' },
  secondaryCta = { label: 'See pricing', href: '/#pricing' },
  imagePlaceholder,
}: IndustryHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="outline">{badge}</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={primaryCta.href}>
                <Button size="lg" className="h-12 px-8 text-base">
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
                  {secondaryCta.label}
                </Button>
              </Link>
            </div>
          </div>
          {imagePlaceholder && (
            <ImagePlaceholder
              description={imagePlaceholder.description}
              icon={imagePlaceholder.icon}
              aspectRatio="4/3"
              className="shadow-2xl"
            />
          )}
        </div>
      </div>
    </section>
  )
}
