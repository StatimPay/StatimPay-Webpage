import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from './image-placeholder'
import { CheckCircle2, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureSectionProps {
  badge?: string
  title: string
  description: string
  features: string[]
  imagePlaceholder?: {
    description: string
    icon?: LucideIcon
  }
  reversed?: boolean
  className?: string
}

export function FeatureSection({
  badge,
  title,
  description,
  features,
  imagePlaceholder,
  reversed = false,
  className,
}: FeatureSectionProps) {
  return (
    <section className={cn('py-20 px-6', className)}>
      <div className="max-w-6xl mx-auto">
        <div className={cn(
          'grid lg:grid-cols-2 gap-12 items-center',
          reversed && 'lg:grid-flow-dense'
        )}>
          <div className={cn('space-y-6', reversed && 'lg:col-start-2')}>
            {badge && <Badge variant="outline">{badge}</Badge>}
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {imagePlaceholder && (
            <div className={cn(reversed && 'lg:col-start-1')}>
              <ImagePlaceholder
                description={imagePlaceholder.description}
                icon={imagePlaceholder.icon}
                aspectRatio="4/3"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
