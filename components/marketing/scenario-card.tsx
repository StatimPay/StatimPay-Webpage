import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface Scenario {
  title: string
  problem: string
  solution: string
  icon: LucideIcon
}

interface ScenarioCardProps extends Scenario {
  className?: string
}

export function ScenarioCard({ title, problem, solution, icon: Icon, className }: ScenarioCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="shrink-0 text-xs bg-red-50 text-red-700 border-red-200">
                  Problem
                </Badge>
                <p className="text-sm text-muted-foreground">{problem}</p>
              </div>
              <div className="flex justify-center py-1">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="shrink-0 text-xs bg-green-50 text-green-700 border-green-200">
                  Solution
                </Badge>
                <p className="text-sm text-muted-foreground">{solution}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface ScenarioGridProps {
  badge?: string
  title?: string
  subtitle?: string
  scenarios: Scenario[]
}

export function ScenarioGrid({ badge, title, subtitle, scenarios }: ScenarioGridProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {(badge || title || subtitle) && (
          <div className="text-center mb-12 space-y-4">
            {badge && <Badge variant="outline">{badge}</Badge>}
            {title && <h2 className="text-4xl font-bold">{title}</h2>}
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {scenarios.map((scenario, i) => (
            <ScenarioCard key={i} {...scenario} />
          ))}
        </div>
      </div>
    </section>
  )
}
