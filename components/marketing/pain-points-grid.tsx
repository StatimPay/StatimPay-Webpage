import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface PainPoint {
  icon: LucideIcon
  title: string
  description: string
}

interface PainPointsGridProps {
  items: PainPoint[]
  columns?: 3 | 4
}

export function PainPointsGrid({ items, columns = 4 }: PainPointsGridProps) {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`grid ${gridCols} gap-6`}>
          {items.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
