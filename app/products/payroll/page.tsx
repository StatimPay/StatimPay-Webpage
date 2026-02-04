"use client";

import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Section, SectionHeader } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Clock,
  Calculator,
  FileSpreadsheet,
  Shield,
  Download,
  Calendar,
  TrendingUp,
  Settings,
  Users,
  AlertCircle,
} from "lucide-react";

export default function PayrollPage() {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline">Payroll Module</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Payroll that works with your time data
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Automated payroll calculations from approved timesheets. Export
                to Xero, Sage, or any payroll bureau. No manual data entry.
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
                    <DollarSign className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Payroll dashboard preview
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
              icon: Clock,
              title: "Hours to pay in one click",
              description:
                "Approved timesheets automatically flow into payroll calculations",
            },
            {
              icon: Calculator,
              title: "Smart calculations",
              description:
                "Premium rates, overtime, and custom pay elements handled automatically",
            },
            {
              icon: Download,
              title: "Export anywhere",
              description:
                "CSV, SFTP, or API integration with Xero, Sage, and payroll bureaus",
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

      {/* Pay Elements */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Pay elements</Badge>
            <h2 className="text-4xl font-bold">Handle any pay structure</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Configure pay rules once, then let the system calculate everything
              automatically
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Base rates",
                items: [
                  "Hourly rates",
                  "Salaries",
                  "Day rates",
                  "Per-shift rates",
                ],
              },
              {
                title: "Premium pay",
                items: [
                  "Overtime rates",
                  "Weekends",
                  "Bank holidays",
                  "Unsocial hours",
                ],
              },
              {
                title: "Allowances",
                items: [
                  "Travel allowance",
                  "Uniform allowance",
                  "Tool allowance",
                  "Custom allowances",
                ],
              },
              {
                title: "Deductions",
                items: [
                  "EWA deductions",
                  "Loan repayments",
                  "Uniform costs",
                  "Custom deductions",
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

      {/* Pay Cycle Management */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline">Pay cycle management</Badge>
              <h2 className="text-4xl font-bold">
                Configure your pay calendar
              </h2>
              <p className="text-lg text-muted-foreground">
                Weekly, bi-weekly, or monthly pay periods. Set approval cut-offs
                and export deadlines.
              </p>
              <ul className="space-y-3">
                {[
                  "Flexible pay period start dates",
                  "Multiple pay groups per organization",
                  "Automatic pay period roll-over",
                  "Approval and export deadlines",
                  "Historical pay period access",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="inline-flex p-4 rounded-full bg-background">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Pay calendar visual
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export & Integration */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Exports & integrations</Badge>
            <h2 className="text-4xl font-bold">
              Export to your payroll system
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible export formats for any payroll provider
            </p>
          </div>

          <Tabs defaultValue="csv" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="csv">CSV Export</TabsTrigger>
              <TabsTrigger value="sftp">SFTP</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>

            <TabsContent value="csv" className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <FileSpreadsheet className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">Custom CSV formats</h3>
                      <p className="text-muted-foreground">
                        Configure column mapping to match your payroll bureau
                        format. Save templates for reuse.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Custom column mapping",
                          "Header row configuration",
                          "Multiple export templates",
                          "One-click download",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        CSV export preview
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sftp" className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Settings className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">
                        Scheduled SFTP delivery
                      </h3>
                      <p className="text-muted-foreground">
                        Automatic file delivery to your payroll provider. Set it
                        once and forget it.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Automated file delivery",
                          "Schedule by pay period",
                          "Secure encrypted transfer",
                          "Delivery confirmation logs",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        SFTP configuration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api" className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">API integration</h3>
                      <p className="text-muted-foreground">
                        Direct integration with Xero, Sage, or build custom
                        integrations using our API.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "REST API endpoints",
                          "Webhook notifications",
                          "OAuth 2.0 authentication",
                          "Full API documentation",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        API integration diagram
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Audit & Compliance */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Audit ready</Badge>
            <h2 className="text-4xl font-bold">Complete audit trail</h2>
            <p className="text-lg text-muted-foreground">
              Every change tracked, every approval logged
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Approval workflows",
                description:
                  "Manager approval required before payroll export. Complete approval history.",
              },
              {
                icon: FileSpreadsheet,
                title: "Exception tracking",
                description:
                  "All manual adjustments logged with reason codes and approver details.",
              },
              {
                icon: Clock,
                title: "Historical data",
                description:
                  "Access any pay period data, export history, and calculation breakdowns.",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
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
                    Requires Workforce Management module
                  </h3>
                  <p className="text-muted-foreground">
                    Payroll uses approved timesheet data from the WFM module.
                    You can add Payroll to an existing WFM setup, or purchase
                    both together.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent">
                    View WFM module
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
            Ready to automate your payroll?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            See how payroll integrates with your time and attendance data
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
