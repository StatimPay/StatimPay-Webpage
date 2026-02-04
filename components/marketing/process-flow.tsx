import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, LucideIcon } from 'lucide-react'

interface Step {
  number: string
  title: string
  description: string
  timeEstimate?: string
  icon?: LucideIcon
}

interface ProcessFlowProps {
  badge?: string
  title?: string
  subtitle?: string
  steps: Step[]
}

export function ProcessFlow({ badge, title, subtitle, steps }: ProcessFlowProps) {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {(badge || title || subtitle) && (
          <div className="text-center mb-16 space-y-4">
            {badge && <Badge variant="outline">{badge}</Badge>}
            {title && <h2 className="text-4xl font-bold">{title}</h2>}
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border"
            style={{ width: 'calc(100% - 8rem)', margin: '0 4rem' }}
          />

          {steps.slice(0, 3).map((step, i) => (
            <div key={i} className="relative z-10">
              <Card className="bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {step.number}
                  </div>
                  {step.icon && (
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {step.timeEstimate && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{step.timeEstimate}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {steps.length > 3 && (
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            {steps.slice(3).map((step, i) => (
              <div key={i + 3} className="relative z-10">
                <Card className="bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {step.timeEstimate && (
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{step.timeEstimate}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
