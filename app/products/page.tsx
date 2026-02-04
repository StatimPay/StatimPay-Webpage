"use client";

import { useState } from "react";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Section, SectionHeader } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  DollarSign,
  Zap,
  ArrowRight,
  CheckCircle2,
  ArrowDown,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function ProductOverviewPage() {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <Section padding="pt-32 pb-20 px-6" maxWidth="5xl">
        <div className="text-center space-y-6">
          <Badge variant="outline">Modular platform</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Start with one module. Add more when ready.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our modular approach means you can begin with Workforce Management,
            add Payroll when you're ready, and enable Earned Wage Access when it
            makes sense for your team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 bg-transparent"
            >
              Explore modules
            </Button>
          </div>
        </div>
      </Section>

      {/* Module Comparison Table */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Compare modules</h2>
            <p className="text-lg text-muted-foreground">
              Each module works independently or together as an integrated
              system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Workforce Management",
                link: "/products/workforce-management",
                capabilities: [
                  "Rota building & templates",
                  "Mobile time tracking",
                  "Shift marketplace",
                  "Timesheet approvals",
                  "Labor cost reporting",
                ],
                forWho:
                  "Retail, hospitality, multi-site operators managing schedules and attendance",
                outcomes:
                  "40% faster scheduling, 95% timesheet accuracy, reduced admin time",
              },
              {
                icon: DollarSign,
                title: "Payroll",
                link: "/products/payroll",
                capabilities: [
                  "Automated pay calculations",
                  "Premium & overtime rules",
                  "Payroll exports (CSV/SFTP)",
                  "Digital payslips",
                  "Audit trail",
                ],
                forWho:
                  "SMEs and multi-site businesses wanting to bring payroll in-house or integrate with bureaus",
                outcomes:
                  "Eliminate manual errors, faster pay runs, accountant-ready exports",
              },
              {
                icon: Zap,
                title: "Earned Wage Access",
                link: "/products/earned-wage-access",
                capabilities: [
                  "Real-time earned accrual",
                  "Instant withdrawals",
                  "Safe access limits",
                  "Auto reconciliation",
                  "No employee fees",
                ],
                forWho:
                  "Employers in retail/hospitality looking to improve employee financial wellness",
                outcomes:
                  "Boost retention, reduce financial stress, attract talent",
              },
            ].map((module, i) => (
              <Card
                key={i}
                className="relative group hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 w-fit mb-3">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">
                      Core capabilities
                    </div>
                    <ul className="space-y-2">
                      {module.capabilities.map((cap, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">
                      {"Who it's for"}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {module.forWho}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">
                      Typical outcomes
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {module.outcomes}
                    </p>
                  </div>

                  <Link href={module.link}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-muted"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Modules Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Seamless integration</Badge>
            <h2 className="text-4xl font-bold">How modules connect</h2>
            <p className="text-lg text-muted-foreground">
              Data flows seamlessly between modules for a unified experience
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 space-y-3">
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">
                      Workforce Management
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tracks worked hours, breaks, and exceptions
                    </p>
                  </div>
                  <div className="shrink-0">
                    <ArrowDown className="h-6 w-6 text-muted-foreground rotate-0 md:-rotate-90" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Payroll</h3>
                    <p className="text-sm text-muted-foreground">
                      Receives approved hours and calculates gross-to-net pay
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 space-y-3">
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Payroll</h3>
                    <p className="text-sm text-muted-foreground">
                      Calculates net pay and processes EWA deductions
                    </p>
                  </div>
                  <div className="shrink-0">
                    <ArrowDown className="h-6 w-6 text-muted-foreground rotate-0 md:-rotate-90" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">
                      Earned Wage Access
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Settles withdrawals and reconciles with final pay
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rollout Paths */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Choose your rollout path</h2>
            <p className="text-lg text-muted-foreground">
              Start where it makes sense for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                path: "WFM only",
                recommended: "Most popular",
                description:
                  "Start with scheduling and time tracking. Add payroll later.",
                timeline: "1 week setup",
                features: [
                  "Rota building",
                  "Time & attendance",
                  "Approvals",
                  "Basic reporting",
                ],
              },
              {
                path: "WFM + Payroll",
                recommended: "Recommended",
                description: "Full workforce-to-pay pipeline from day one.",
                timeline: "2-3 weeks setup",
                features: [
                  "Everything in WFM",
                  "Automated payroll",
                  "Premium pay rules",
                  "Payroll exports",
                ],
              },
              {
                path: "All three modules",
                recommended: "Complete solution",
                description:
                  "Full platform including employee financial wellness.",
                timeline: "3-4 weeks setup",
                features: [
                  "Everything in WFM+Payroll",
                  "Earned wage access",
                  "Auto reconciliation",
                  "Wellness tools",
                ],
              },
            ].map((option, i) => (
              <Card
                key={i}
                className={i === 1 ? "border-primary shadow-lg" : ""}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="shadow-sm">Recommended</Badge>
                  </div>
                )}
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{option.path}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline">{option.timeline}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={i === 1 ? "default" : "outline"}
                  >
                    Choose this path
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I add modules later without disrupting operations?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Modules are designed to be added seamlessly. Your existing
                data, schedules, and workflows remain intact. For example,
                adding Payroll after using WFM automatically inherits your org
                structure, employees, and approved timesheets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do I need all three modules to get value?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Each module is fully functional on its own. Most customers
                start with WFM, and many never need the other modules. Only add
                what makes sense for your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How does pricing work across modules?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each module has its own per-user pricing. Bundle discounts apply
                when you use 2+ modules. There are no setup fees or long-term
                contracts required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I use your Payroll module without WFM?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                WFM is recommended but not required for Payroll. However, you'll
                need to manually input worked hours. Most customers find the
                automation benefits of WFM+Payroll worth the integrated
                approach.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What happens to my data if I remove a module?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your data is always yours. If you remove a module, historical
                data is archived and available for export. Core employee and org
                data remains in the platform for your active modules.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Ready to get started?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Book a demo to see how our modular platform can work for your
            business. No pressure, just answers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="h-12 px-8">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10"
            >
              View pricing
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
