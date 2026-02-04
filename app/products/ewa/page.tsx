"use client";

import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Section, SectionHeader } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  Heart,
  Smartphone,
  AlertCircle,
  BarChart3,
} from "lucide-react";

export default function EWAPage() {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline">Earned Wage Access Module</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Pay your team when they need it
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let employees access earned wages before payday. No loans, no
                interest, no fees for employees. Improve retention and financial
                wellness.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-12 px-8 text-base">
                  Book a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base bg-transparent"
                >
                  View pricing
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl border shadow-2xl p-8">
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-primary/10">
                    <Zap className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Employee app preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <Section alternate padding="py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Zero cost to employees",
              description:
                "No interest, no fees, no credit checks. Just access to money already earned.",
            },
            {
              icon: Clock,
              title: "Instant withdrawals",
              description:
                "Funds available within minutes, 24/7. Real-time balance updates.",
            },
            {
              icon: Shield,
              title: "Automatic reconciliation",
              description:
                "Deductions handled automatically at payroll. No manual admin.",
            },
          ].map((benefit, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0">
                <div className="p-3 rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">How it works</Badge>
            <h2 className="text-4xl font-bold">Simple for everyone</h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps from earned hours to instant pay
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border"
              style={{ width: "calc(100% - 8rem)", margin: "0 4rem" }}
            />

            {[
              {
                step: "1",
                title: "Employee works shift",
                description:
                  "Hours tracked in time & attendance. Available balance updates in real-time.",
                icon: Clock,
              },
              {
                step: "2",
                title: "Requests withdrawal",
                description:
                  "Employee uses mobile app to request access to earned wages. Instant approval.",
                icon: Smartphone,
              },
              {
                step: "3",
                title: "Automatic deduction",
                description:
                  "Amount deducted from next payroll automatically. No manual intervention.",
                icon: DollarSign,
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <Card className="relative z-10 bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Models */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Flexible funding</Badge>
            <h2 className="text-4xl font-bold">Choose your funding model</h2>
            <p className="text-lg text-muted-foreground">
              Employer-funded or third-party funded options available
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Employer-funded</h3>
                  <p className="text-muted-foreground">
                    You provide the liquidity. Employees withdraw from your
                    funding pool, automatically reconciled at payroll.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Full control over access limits",
                    "Predictable cash flow management",
                    "Lower per-transaction costs",
                    "Direct relationship with employees",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Third-party funded</h3>
                  <p className="text-muted-foreground">
                    Our partner provides the liquidity. No cash flow impact on
                    your business. Deductions at payroll.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Zero cash flow impact",
                    "No funding pool required",
                    "Quick setup and launch",
                    "Managed by our partner",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules & Limits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Configurable rules</Badge>
            <h2 className="text-4xl font-bold">Set your own access rules</h2>
            <p className="text-lg text-muted-foreground">
              Control how much and how often employees can access earned wages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Access limits",
                items: [
                  "% of earned wages",
                  "Maximum per withdrawal",
                  "Maximum per pay period",
                  "Minimum withdrawal amount",
                ],
              },
              {
                title: "Eligibility rules",
                items: [
                  "Probation period",
                  "Employment status",
                  "Role-based access",
                  "Custom criteria",
                ],
              },
              {
                title: "Frequency controls",
                items: [
                  "Max withdrawals per week",
                  "Cooling-off period",
                  "Pay period restrictions",
                  "Custom schedules",
                ],
              },
              {
                title: "Safety features",
                items: [
                  "Minimum net pay protection",
                  "Overdraft prevention",
                  "Alert thresholds",
                  "Admin overrides",
                ],
              },
            ].map((category, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="inline-flex p-4 rounded-full bg-background">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  EWA analytics dashboard
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="outline">Analytics & reporting</Badge>
              <h2 className="text-4xl font-bold">Track usage and trends</h2>
              <p className="text-lg text-muted-foreground">
                Understand how your team uses EWA. Identify patterns and
                optimize your financial wellness program.
              </p>
              <ul className="space-y-3">
                {[
                  "Utilization rates by site and role",
                  "Average withdrawal amounts",
                  "Peak usage patterns",
                  "Financial wellness metrics",
                  "Compliance and audit reports",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-amber-500/30 bg-amber-500/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">
                    Requires Workforce Management and Payroll modules
                  </h3>
                  <p className="text-muted-foreground">
                    EWA calculates available balance from time & attendance data
                    and handles deductions through payroll. You need both WFM
                    and Payroll to enable EWA.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button variant="outline">
                      View WFM module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      View Payroll module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Ready to offer earned wage access?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            See how EWA can improve employee retention and financial wellness
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-base"
            >
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10"
            >
              View pricing
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
