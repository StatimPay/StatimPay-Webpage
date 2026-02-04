"use client";

import { useState } from "react";
import Link from "next/link";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { IndustryHero } from "@/components/marketing/industry-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ShoppingBag,
  Eye,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Network,
  Lock,
  EyeOff,
  ChevronDown,
} from "lucide-react";

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does data ownership work for franchisees?",
      answer:
        "Each franchisee owns their own operational data. HQ can view aggregated metrics or detailed data depending on the visibility mode chosen. Franchisees always have full access to their own information.",
    },
    {
      question: "Can franchisees customize their setup?",
      answer:
        "Yes. Franchisees can override default settings where permitted by HQ. For example, they might use different shift templates while still following brand-mandated pay rules.",
    },
    {
      question: "How quickly can a new franchisee be onboarded?",
      answer:
        "New franchisees can be set up and running within a day. They inherit brand templates and policies automatically, reducing configuration time significantly.",
    },
    {
      question: "What happens if a franchisee leaves the network?",
      answer:
        "Their data can be exported and they can transition to a standalone account. HQ loses access to their operational data while the franchisee retains full control.",
    },
    {
      question: "Is there a minimum number of sites required?",
      answer:
        "No minimum. We work with franchise networks of all sizes, from a single HQ with 3 franchisees to national networks with hundreds of locations.",
    },
    {
      question: "How is pricing structured for franchises?",
      answer:
        "Pricing is per user per month, regardless of whether they work for HQ or a franchisee. Volume discounts are available for larger networks. Contact us for custom pricing.",
    },
  ];

  return (
    <MarketingLayout>
      <IndustryHero
        badge="Franchises"
        title="Brand consistency meets franchisee independence"
        description="Give franchisees the tools to run their business while maintaining brand standards and HQ visibility. Built for the unique dynamics of franchise networks."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        imagePlaceholder={{
          description: "Franchise network dashboard",
          icon: ShoppingBag,
        }}
      />

      {/* Group/Tenant/Site Model */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Franchise hierarchy</Badge>
            <h2 className="text-4xl font-bold">Group, Tenant, Site</h2>
            <p className="text-lg text-muted-foreground">
              A structure that mirrors how franchise networks actually work
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    G
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Group (HQ / Brand)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Set brand-wide policies, templates, and visibility rules.
                      See aggregated or detailed data across all franchisees.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 ml-6">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center font-bold">
                    T
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Tenant (Franchisee)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Each franchisee is a tenant with their own settings,
                      staff, and data. Inherits brand defaults but can
                      customize.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 ml-12">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-primary/40 text-primary-foreground flex items-center justify-center font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Site (Location)</h3>
                    <p className="text-sm text-muted-foreground">
                      Individual locations where staff work. Managed by the
                      franchisee with their own schedules and timesheets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-3">What flows down from HQ:</h4>
                <ul className="space-y-2">
                  {[
                    "Brand templates (roles, shifts, policies)",
                    "Pay rules and compliance requirements",
                    "Reporting requirements and KPIs",
                    "Optional: Approved supplier integrations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="inline-flex p-4 rounded-full bg-background">
                  <Network className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Franchise hierarchy diagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility Modes */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Privacy controls</Badge>
            <h2 className="text-4xl font-bold">HQ visibility modes</h2>
            <p className="text-lg text-muted-foreground">
              Choose how much detail HQ can see about franchisee operations
            </p>
          </div>

          <Tabs defaultValue="aggregated" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
              <TabsTrigger
                value="aggregated"
                className="flex items-center gap-2"
              >
                <EyeOff className="h-4 w-4" />
                <span className="hidden sm:inline">Aggregated</span>
              </TabsTrigger>
              <TabsTrigger
                value="anonymised"
                className="flex items-center gap-2"
              >
                <Lock className="h-4 w-4" />
                <span className="hidden sm:inline">Anonymised</span>
              </TabsTrigger>
              <TabsTrigger value="full" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">Full Detail</span>
              </TabsTrigger>
            </TabsList>

            <Card>
              <CardContent className="p-8">
                <TabsContent value="aggregated" className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-primary/10">
                      <EyeOff className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          Aggregated only
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          Privacy-first approach. HQ sees network-wide KPIs
                          without access to individual franchisee operational
                          details.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700">
                            HQ can see:
                          </h4>
                          <ul className="space-y-2">
                            {[
                              "Network-wide labor cost totals",
                              "Average staffing levels",
                              "Compliance rates across network",
                              "Benchmarking percentiles",
                            ].map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-red-700">
                            HQ cannot see:
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Individual franchisee data</li>
                            <li>Staff names or schedules</li>
                            <li>Site-level breakdowns</li>
                            <li>Operational details</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="anonymised" className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-primary/10">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          Anonymised data
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          Balanced approach. HQ sees site-level metrics but
                          franchisee identity is protected. Good for
                          benchmarking.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700">
                            HQ can see:
                          </h4>
                          <ul className="space-y-2">
                            {[
                              "Site-level KPIs (anonymised)",
                              "Performance rankings",
                              "Comparative benchmarks",
                              "Trend data by site",
                            ].map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-red-700">
                            HQ cannot see:
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Franchisee names</li>
                            <li>Staff personal data</li>
                            <li>Actual site addresses</li>
                            <li>Individual timesheets</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="full" className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-primary/10">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          Full operational detail
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          Maximum visibility. HQ can see all franchisee
                          operational data. Useful for closely managed franchise
                          models.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700">
                            HQ can see:
                          </h4>
                          <ul className="space-y-2">
                            {[
                              "All franchisee operational data",
                              "Individual staff schedules",
                              "Real-time attendance",
                              "Full reporting detail",
                            ].map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Best for:</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Closely managed franchise models</li>
                            <li>New franchisee onboarding</li>
                            <li>Performance support situations</li>
                            <li>Integrated operations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </section>

      {/* Franchisee Onboarding */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Quick setup</Badge>
            <h2 className="text-4xl font-bold">New franchisee onboarding</h2>
            <p className="text-lg text-muted-foreground">
              Get new franchisees up and running fast
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create tenant",
                description:
                  "Add the franchisee as a new tenant. They inherit all brand templates and policies automatically.",
              },
              {
                step: "2",
                title: "Add sites & staff",
                description:
                  "Franchisee adds their locations and imports their team. Roles and permissions are pre-configured.",
              },
              {
                step: "3",
                title: "Go live",
                description:
                  "Staff download the app, managers access the dashboard. Everything works out of the box.",
              },
            ].map((item, i) => (
              <Card key={i} className="relative z-10 bg-background">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarking */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline">Benchmarking</Badge>
              <h2 className="text-4xl font-bold">Privacy-first benchmarking</h2>
              <p className="text-lg text-muted-foreground">
                Help franchisees understand how they compare without exposing
                sensitive data.
              </p>
              <ul className="space-y-3">
                {[
                  "Percentile rankings (top 10%, 25%, etc.)",
                  "Anonymised peer comparison",
                  "Opt-in detailed sharing",
                  "Best practice identification",
                  "Improvement recommendations",
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
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Franchise benchmarking dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">FAQ</Badge>
            <h2 className="text-4xl font-bold">Franchise questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions from franchise networks
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Ready to empower your franchise network?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            See how franchise brands manage their network with Statim Pay
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
