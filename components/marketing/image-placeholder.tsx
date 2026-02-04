import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  description: string
  icon?: LucideIcon
  aspectRatio?: 'video' | 'square' | '4/3' | '3/2'
  className?: string
}

export function ImagePlaceholder({
  description,
  icon: Icon,
  aspectRatio = '4/3',
  className,
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
  }

  return (
    <div
      className={cn(
        aspectClasses[aspectRatio],
        'bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl border shadow-lg flex items-center justify-center p-8',
        className
      )}
    >
      <div className="text-center space-y-3">
        {Icon && (
          <div className="inline-flex p-4 rounded-full bg-primary/10">
            <Icon className="h-10 w-10 text-primary" />
          </div>
        )}
        <p className="text-sm text-muted-foreground max-w-[200px]">{description}</p>
      </div>
    </div>
  )
}
