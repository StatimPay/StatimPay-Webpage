"use client";

import Link from "next/link";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { IndustryHero } from "@/components/marketing/industry-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Eye,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Settings,
  Calendar,
  DollarSign,
  Zap,
  Network,
} from "lucide-react";

export default function MultisitePage() {
  return (
    <MarketingLayout>
      <IndustryHero
        badge="Multi-site Operators"
        title="Centralized control with site-level autonomy"
        description="Manage regional and national operations from one dashboard. Give site managers the tools they need while maintaining visibility and control at HQ."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        imagePlaceholder={{
          description: "Multi-site operations dashboard",
          icon: Building2,
        }}
      />

      {/* Control Narrative Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Operational control</Badge>
            <h2 className="text-4xl font-bold">
              See everything, manage anywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              The visibility you need without micromanaging your site teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">All Sites overview</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  See staffing levels, labor costs, and exceptions across all
                  locations in one dashboard. Drill down to any site instantly.
                </p>
                <ul className="space-y-2">
                  {[
                    "Real-time coverage view",
                    "Labor cost by location",
                    "Exception summary",
                    "One-click drill-down",
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
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Coverage board</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Heat map showing staffing across all sites. Identify
                  understaffed locations and balance coverage before problems
                  arise.
                </p>
                <ul className="space-y-2">
                  {[
                    "Color-coded staffing levels",
                    "Gap identification",
                    "Cross-site comparison",
                    "Forecast vs. actual",
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
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Site-level permissions
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Define what each role can see and do. Site managers run their
                  location while area managers see their region.
                </p>
                <ul className="space-y-2">
                  {[
                    "Role-based access control",
                    "Site boundary enforcement",
                    "Regional groupings",
                    "Custom permission sets",
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

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Multi-site features</Badge>
            <h2 className="text-4xl font-bold">Built for scale</h2>
            <p className="text-lg text-muted-foreground">
              Features that work whether you have 5 sites or 500
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Cross-site Eligibility */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">
                Cross-site staff eligibility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Some staff can work at multiple locations. Define eligibility
                and let managers see who's available across sites.
              </p>
              <ul className="space-y-2">
                {[
                  "Staff multi-site flags",
                  "Cross-location scheduling",
                  "Eligibility by role and training",
                  "Travel time considerations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Site-by-site Approvals */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Site-by-site approvals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Site managers approve their own timesheets. Area managers can
                review and approve across their region.
              </p>
              <ul className="space-y-2">
                {[
                  "Site manager first-line approval",
                  "Area manager oversight",
                  "Bulk approval options",
                  "Deadline tracking",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unified Policy Management */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">
                Unified policy management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Set policies at group level and push to all sites. Override at
                site level where needed.
              </p>
              <ul className="space-y-2">
                {[
                  "Group-level policy defaults",
                  "Site-level overrides",
                  "Policy inheritance",
                  "Change rollout controls",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Labor Cost Comparison */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Labor cost comparison</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compare labor costs across sites. Benchmark performance and
                identify optimization opportunities.
              </p>
              <ul className="space-y-2">
                {[
                  "Site-to-site comparison",
                  "Cost as % of revenue",
                  "Trend analysis",
                  "Budget vs. actual",
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

      {/* Reporting Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="inline-flex p-4 rounded-full bg-background">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Multi-site reporting dashboard
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="outline">Reporting</Badge>
              <h2 className="text-4xl font-bold">Multi-site analytics</h2>
              <p className="text-lg text-muted-foreground">
                Compare performance, identify trends, and make data-driven
                decisions across your operation.
              </p>
              <ul className="space-y-3">
                {[
                  "Site comparison dashboard",
                  "Drill-down to individual locations",
                  "Labor cost trends over time",
                  "Exception rates by site",
                  "Scheduled vs. actual hours",
                  "Exportable reports for board meetings",
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

      {/* Modular Rollout Path */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Modular approach</Badge>
            <h2 className="text-4xl font-bold">Start simple, add when ready</h2>
            <p className="text-lg text-muted-foreground">
              Roll out modules at your own pace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="shadow-sm">Start here</Badge>
              </div>
              <CardContent className="p-8 space-y-4 pt-10">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Workforce Management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scheduling, time tracking, and approvals across all sites. The
                  foundation for everything else.
                </p>
                <div className="text-sm font-medium text-primary">
                  from £3/user/mo
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Add Payroll</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Automated payroll calculations with approved timesheets
                  flowing straight through.
                </p>
                <div className="text-sm font-medium text-primary">
                  from £2/user/mo
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Enable EWA</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Give staff access to earned wages. Improve retention and
                  financial wellness across your team.
                </p>
                <div className="text-sm font-medium text-primary">
                  from £1/user/mo
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Bundle all modules for £5/user/mo (save 17%). Roll out site by
              site or all at once.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Ready to unify your multi-site operations?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            See how regional and national operators manage their workforce with
            Statim Pay
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
