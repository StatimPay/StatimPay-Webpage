'use client'

import React from "react"

import { MarketingHeader } from '@/components/marketing/marketing-header'
import { MarketingFooter } from '@/components/marketing/marketing-footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Shield,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Lock,
} from 'lucide-react'
import Link from 'next/link'

export default function ResponsibleAccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline">Earned Wage Access</Badge>
          <h1 className="text-5xl font-bold leading-tight text-balance">
            Responsible access to earned wages
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Financial flexibility for your team without the risks. No debt, no interest, no hidden fees. Just access to money they've already earned.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold">Built on responsible principles</h2>
            <p className="text-lg text-muted-foreground">
              Employee wellbeing comes first. Every safeguard is designed to protect, not profit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Earned-only approach',
                description: 'Employees can only access wages they\'ve already worked for. No advances, no loans, no credit checks.',
              },
              {
                icon: DollarSign,
                title: 'Zero employee cost',
                description: 'No fees, no interest, no subscriptions for employees. Employers cover the service cost.',
              },
              {
                icon: CheckCircle2,
                title: 'Automatic reconciliation',
                description: 'Withdrawals are automatically deducted from payroll. No manual tracking or debt collection needed.',
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards: Caps and Buffers */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Caps and buffers</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Smart limits protect employees from overusing the service while maintaining financial flexibility.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: 'Maximum withdrawal percentage',
                    detail: 'Default 50% of earned wages (employer configurable)',
                  },
                  {
                    label: 'Buffer protection',
                    detail: 'Always leave a minimum balance for payroll deductions (NI, tax, pensions)',
                  },
                  {
                    label: 'Frequency limits',
                    detail: 'Maximum 4 withdrawals per pay period to encourage healthy habits',
                  },
                  {
                    label: 'Cooling-off period',
                    detail: '24-hour wait between consecutive withdrawals',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Example scenario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 p-4 rounded-lg bg-muted/50">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Gross wages earned (to date)</span>
                    <span className="font-medium">£800</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Deductions buffer (20%)</span>
                    <span className="font-medium">-£160</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Net available</span>
                    <span className="font-medium">£640</span>
                  </div>
                  <div className="h-px bg-border my-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Maximum withdrawal (50%)</span>
                    <span className="font-bold text-primary">£320</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  If the employee requests £320, they'll receive £640 - £320 = £320 remaining on payday (after tax/NI).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Starter Rules */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  New starter protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  New employees are eased into EWA gradually to build healthy financial habits from day one.
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">First 30 days</span>
                      <Badge variant="secondary">25% cap</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Limited access while settling in</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">31-60 days</span>
                      <Badge variant="secondary">40% cap</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Gradually increasing access</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">After 60 days</span>
                      <Badge variant="default">50% cap</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Full access available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Building good habits</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Research shows that gradual access helps employees develop responsible withdrawal patterns and avoid over-reliance.
              </p>
              <ul className="space-y-3">
                {[
                  'Reduces day-one withdrawal rates by 40%',
                  'Encourages employees to plan ahead',
                  'Prevents paycheck-to-paycheck dependency',
                  'Configurable by employer per role or department',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Transparency */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Complete fee transparency</h2>
            <p className="text-lg text-muted-foreground">
              No hidden charges. No surprises. Just honest pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  For employees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">£0</div>
                <p className="text-muted-foreground">
                  Completely free for employees. No transaction fees, no subscription, no interest.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Unlimited withdrawals (within limits)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Instant bank transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>No credit checks or penalties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="h-5 w-5" />
                  For employers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="text-4xl font-bold">£1-£2</div>
                  <div className="text-sm text-muted-foreground">per active user per month</div>
                </div>
                <p className="text-muted-foreground">
                  Pay only for employees who use the service. Volume discounts available.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>No setup fees or minimums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Charged monthly in arrears</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Cancel anytime, no penalties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-muted/50 border-0">
            <CardContent className="p-6 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-medium">Why do employers pay?</div>
                <p className="text-sm text-muted-foreground">
                  This model ensures employees never pay fees or interest, treating EWA as a benefit rather than a loan product. Employers benefit from improved retention, reduced turnover, and a happier workforce.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Employer Controls */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Employer controls</h2>
            <p className="text-lg text-muted-foreground">
              Configure rules and limits that match your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Eligibility rules',
                items: [
                  'Minimum tenure (e.g., 30 days)',
                  'Job role restrictions',
                  'Contract type (permanent only)',
                  'Performance-based access',
                ],
              },
              {
                title: 'Withdrawal limits',
                items: [
                  'Max % of earned wages',
                  'Frequency caps per period',
                  'Cooling-off periods',
                  'Department-specific limits',
                ],
              },
              {
                title: 'Payroll integration',
                items: [
                  'Auto-deduction from payroll',
                  'Real-time balance updates',
                  'Exception handling',
                  'Reporting and audit trails',
                ],
              },
            ].map((section, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">{section.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
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

      {/* Payroll-Close Reconciliation */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Automatic payroll reconciliation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Withdrawals are automatically deducted during your normal payroll run. No manual tracking or adjustments needed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                    1
                  </div>
                  <div>
                    <div className="font-medium">Employee withdraws £100</div>
                    <div className="text-sm text-muted-foreground">Tuesday morning via mobile app</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                    2
                  </div>
                  <div>
                    <div className="font-medium">Funds arrive instantly</div>
                    <div className="text-sm text-muted-foreground">Money hits their bank in seconds</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                    3
                  </div>
                  <div>
                    <div className="font-medium">Payroll run on Friday</div>
                    <div className="text-sm text-muted-foreground">System auto-deducts the £100 from their net pay</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                    4
                  </div>
                  <div>
                    <div className="font-medium">Settlement complete</div>
                    <div className="text-sm text-muted-foreground">Employee receives remaining balance. Zero debt.</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reconciliation guarantees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Always post-tax</div>
                      <div className="text-muted-foreground">Deductions happen after PAYE, NI, and pensions</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Insufficient funds protection</div>
                      <div className="text-muted-foreground">System prevents withdrawals if paycheck can't cover it</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Exception handling</div>
                      <div className="text-muted-foreground">Leavers and adjustments handled automatically</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Audit trail</div>
                      <div className="text-muted-foreground">Complete transaction history for compliance</div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold">Common questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="hover:no-underline">
                What happens if an employee leaves before payday?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The outstanding withdrawal amount is automatically deducted from their final paycheck. If their final pay is insufficient, the employer absorbs the difference (typically covered by insurance included in the service fee).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="hover:no-underline">
                Can employees over-withdraw and end up with no paycheck?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. The system enforces buffers and caps to ensure employees always receive a minimum net pay after deductions. The default buffer is 20% of gross wages to cover tax, NI, and other deductions safely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="hover:no-underline">
                Is this considered a loan for regulatory purposes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Since employees only access wages they've already earned, this is classified as a salary advance service, not a loan. It doesn't require FCA authorization and doesn't appear on credit reports.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="hover:no-underline">
                What if we use an external payroll bureau?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We integrate with most UK payroll providers (Xero, Sage, BrightPay, etc.). Our system exports a deduction file that your bureau can import directly, or we can send it to them automatically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="hover:no-underline">
                Can we turn EWA off for specific employees or departments?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. You have full control over eligibility. You can restrict access by department, role, contract type, tenure, or even individual employees if needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">See how EWA can work for your team</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Book a demo to learn more about implementing responsible earned wage access for your workforce.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products/ewa">
              <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent">
                Learn more about EWA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}

function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}
