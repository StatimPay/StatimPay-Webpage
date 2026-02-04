"use client";

import Link from "next/link";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { IndustryHero } from "@/components/marketing/industry-hero";
import { PainPointsGrid } from "@/components/marketing/pain-points-grid";
import { FeatureSection } from "@/components/marketing/feature-section";
import { ProcessFlow } from "@/components/marketing/process-flow";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Store,
  TrendingUp,
  Clock,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Zap,
  BarChart3,
  FileText,
  Shield,
} from "lucide-react";

export default function RetailPage() {
  const painPoints = [
    {
      icon: Users,
      title: "Variable staffing needs",
      description:
        "Staff requirements change by day, season, and promotion. Building rotas that match demand is time-consuming.",
    },
    {
      icon: Clock,
      title: "Peak trading hours",
      description:
        "Weekends, lunch rushes, and sales events need extra coverage. Getting the right people at the right time is critical.",
    },
    {
      icon: TrendingUp,
      title: "Overtime creep",
      description:
        "Hours add up without visibility. By the time payroll runs, labor costs have exceeded budget.",
    },
    {
      icon: Users,
      title: "High turnover",
      description:
        "Retail staff come and go. Onboarding new hires and managing availability is a constant challenge.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Plan your rota",
      description:
        "Use templates or drag-and-drop to build weekly schedules. See labor costs as you plan.",
      timeEstimate: "5 min",
    },
    {
      number: "2",
      title: "Run your store",
      description:
        "Staff clock in on mobile or tablet. Track breaks and attendance in real-time.",
      timeEstimate: "Ongoing",
    },
    {
      number: "3",
      title: "Approve time",
      description:
        "Review exceptions, resolve issues, and approve timesheets by site or department.",
      timeEstimate: "2 min/day",
    },
    {
      number: "4",
      title: "Export to payroll",
      description:
        "One-click export to your payroll system. All hours, premiums, and deductions calculated.",
      timeEstimate: "1 min",
    },
    {
      number: "5",
      title: "Enable EWA",
      description:
        "Optional: Let staff access earned wages before payday. Improve retention and satisfaction.",
      timeEstimate: "Optional",
    },
  ];

  return (
    <MarketingLayout>
      <IndustryHero
        badge="Retail"
        title="Workforce management built for retail operations"
        description="From single stores to national chains, manage scheduling, time tracking, and labor costs across all your locations. Built for the unique challenges of retail."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        imagePlaceholder={{
          description: "Retail store scheduling dashboard",
          icon: Store,
        }}
      />

      <PainPointsGrid items={painPoints} columns={4} />

      {/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Built for retail</Badge>
            <h2 className="text-4xl font-bold">
              Solutions for every retail challenge
            </h2>
            <p className="text-lg text-muted-foreground">
              Features designed specifically for retail operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Rota Templates */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">
                Rota templates & patterns
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Save your most common shift patterns. Apply templates to quickly
                build rotas that match your trading patterns.
              </p>
              <ul className="space-y-2">
                {[
                  "Weekly templates by store type",
                  "Seasonal pattern variations",
                  "One-click clone from previous weeks",
                  "Share templates across locations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Role-based Scheduling */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Role-based scheduling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Schedule by role: Cashier, Stock, Supervisor. See coverage gaps
                at a glance and fill them quickly.
              </p>
              <ul className="space-y-2">
                {[
                  "Role lanes in rota view",
                  "Minimum coverage per role",
                  "Skills and certifications",
                  "Training role assignments",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage Board */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">
                Coverage board for peaks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                See staffing levels across all stores. Identify understaffed
                periods and balance coverage before they become problems.
              </p>
              <ul className="space-y-2">
                {[
                  "Heat map by hour and day",
                  "Demand forecasting integration",
                  "Peak period alerts",
                  "Cross-store coverage view",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance & Reporting */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Compliance & reporting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track working time compliance, break rules, and overtime
                automatically. Export audit-ready reports.
              </p>
              <ul className="space-y-2">
                {[
                  "Working time directive compliance",
                  "Break tracking and alerts",
                  "Overtime threshold warnings",
                  "Audit-ready export reports",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Day in the Life */}
      <ProcessFlow
        badge="A day in the life"
        title="From rota to payroll"
        subtitle="How retail managers use Statim Pay every day"
        steps={processSteps}
      />

      {/* Add-on Modules */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Add-on modules</Badge>
            <h2 className="text-4xl font-bold">Extend your platform</h2>
            <p className="text-lg text-muted-foreground">
              Add payroll and EWA when you're ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Payroll integration</h3>
                  <p className="text-muted-foreground">
                    Approved timesheets flow directly into payroll. Calculate
                    premiums, overtime, and deductions automatically.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Auto-calculated pay elements",
                    "Sunday and bank holiday premiums",
                    "Overtime rules by contract",
                    "Export to Xero, Sage, or CSV",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/products/payroll">
                  <Button variant="outline" className="w-full">
                    Learn about Payroll
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Earned Wage Access</h3>
                  <p className="text-muted-foreground">
                    Let retail staff access earned wages before payday. Reduce
                    turnover and improve financial wellness.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Zero cost to employees",
                    "Instant withdrawals",
                    "Automatic payroll deduction",
                    "Boost retention and satisfaction",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/products/ewa">
                  <Button variant="outline" className="w-full">
                    Learn about EWA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Ready to transform your retail operations?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            See how leading retailers manage their workforce with Statim Pay
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-base"
              >
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10"
              >
                View pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
