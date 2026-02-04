"use client";

import Link from "next/link";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Section, SectionHeader } from "@/components/layouts/section";
import { IndustryHero } from "@/components/marketing/industry-hero";
import { ScenarioGrid } from "@/components/marketing/scenario-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Store,
  Utensils,
  Building2,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  Users,
  LayoutGrid,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Store,
      title: "Retail",
      slug: "retail",
      description:
        "Multi-location scheduling, peak coverage, and labor cost tracking for retail chains.",
      painPoints: [
        "Variable staffing needs",
        "Peak trading hours",
        "Overtime creep",
        "High turnover",
      ],
      popular: true,
    },
    {
      icon: Utensils,
      title: "Pubs & Restaurants",
      slug: "hospitality",
      description:
        "Role-based scheduling, shift swaps, and break compliance for hospitality venues.",
      painPoints: [
        "Split shifts and late finishes",
        "Weekend premiums",
        "No-shows and covers",
        "Multi-role staff",
      ],
      popular: false,
    },
    {
      icon: Building2,
      title: "Multi-site Operators",
      slug: "multisite",
      description:
        "Centralized control with site-level autonomy for regional and national operators.",
      painPoints: [
        "Cross-site visibility",
        "Consistent policies",
        "Labor cost comparison",
        "Unified reporting",
      ],
      popular: false,
    },
    {
      icon: ShoppingBag,
      title: "Franchises",
      slug: "franchise",
      description:
        "Brand standards with franchisee independence for franchise networks.",
      painPoints: [
        "Brand consistency",
        "Franchisee autonomy",
        "HQ visibility controls",
        "Quick onboarding",
      ],
      popular: false,
    },
  ];

  const scenarios = [
    {
      title: "Friday night cover gaps",
      problem:
        "Someone calls in sick an hour before the evening rush. Managers scramble to find cover, calling staff one by one.",
      solution:
        "Shift marketplace notifies eligible staff instantly. First to accept gets the shift. Manager approves with one tap.",
      icon: Clock,
    },
    {
      title: "Late clock-ins and no-shows",
      problem:
        "Staff arrive late or don't show up. Managers only find out when the shift starts, leaving gaps in coverage.",
      solution:
        "Real-time alerts when someone misses clock-in. Exception dashboard shows all issues. Automatic audit trail.",
      icon: AlertTriangle,
    },
    {
      title: "Overtime creep",
      problem:
        "Hours creep up without visibility. By the time you see payroll, it's too late. Labor costs are out of control.",
      solution:
        "Real-time labor cost tracking. Alerts when approaching overtime thresholds. Budgets by site and department.",
      icon: TrendingUp,
    },
    {
      title: "Multi-site staffing gaps",
      problem:
        "One site is overstaffed while another is short. No easy way to see the full picture or move people between locations.",
      solution:
        "Coverage board shows all sites at once. Cross-location eligibility. Move staff with drag-and-drop.",
      icon: Users,
    },
  ];

  return (
    <MarketingLayout>
      <Section padding="pt-32 pb-20 px-6">
        <div className="text-center space-y-6">
          <Badge variant="outline">Industries we serve</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Workforce solutions built for your industry
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you run retail stores, restaurants, or manage multiple
            sites, our modular platform adapts to your specific challenges.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Explore below
            </Button>
          </div>
        </div>
      </Section>

      {/* Industry Cards Grid */}
      <section className="py-20 px-6" id="industries">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Choose your industry</Badge>
            <h2 className="text-4xl font-bold">Tailored for your sector</h2>
            <p className="text-lg text-muted-foreground">
              Each industry has unique challenges. We've built specific features
              to solve them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <Card
                key={i}
                className={`relative ${industry.popular ? "border-primary shadow-lg" : ""}`}
              >
                {industry.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="shadow-sm">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.painPoints.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="block pt-2"
                  >
                    <Button variant="outline" className="w-full">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <ScenarioGrid
        badge="Common scenarios we solve"
        title="Real problems, real solutions"
        subtitle="These are the everyday challenges our customers face. Here's how we help."
        scenarios={scenarios}
      />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Ready to see how it works for your industry?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Book a demo to see features tailored to your specific sector
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
