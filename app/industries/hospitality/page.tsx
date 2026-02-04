"use client";

import Link from "next/link";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { IndustryHero } from "@/components/marketing/industry-hero";
import { PainPointsGrid } from "@/components/marketing/pain-points-grid";
import { FeatureSection } from "@/components/marketing/feature-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Utensils,
  Clock,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Zap,
  AlertTriangle,
  Coffee,
  Moon,
  Repeat,
} from "lucide-react";

export default function HospitalityPage() {
  const painPoints = [
    {
      icon: Clock,
      title: "12-hour split shifts",
      description:
        "Long days with split shifts are common. Tracking hours accurately while respecting rest periods is essential.",
    },
    {
      icon: Moon,
      title: "Late finishes & weekend premiums",
      description:
        "Late nights, weekends, and bank holidays all need different pay rates. Manual calculations are error-prone.",
    },
    {
      icon: AlertTriangle,
      title: "No-shows & last-minute covers",
      description:
        "Someone calls in sick an hour before service. Finding cover fast without disrupting other staff is critical.",
    },
    {
      icon: Users,
      title: "Multi-role staff juggling",
      description:
        "Staff work across Bar, Kitchen, and Floor. Scheduling the right skills for the right times is complex.",
    },
  ];

  return (
    <MarketingLayout>
      <IndustryHero
        badge="Pubs & Restaurants"
        title="Scheduling that keeps your venue running smoothly"
        description="From split shifts to shift swaps, manage the unique challenges of hospitality. Built for pubs, restaurants, hotels, and cafes."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        imagePlaceholder={{
          description: "Restaurant staff scheduling",
          icon: Utensils,
        }}
      />

      <PainPointsGrid items={painPoints} columns={4} />

      {/* Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Built for hospitality</Badge>
            <h2 className="text-4xl font-bold">
              Features that understand hospitality
            </h2>
            <p className="text-lg text-muted-foreground">
              Designed for the fast-paced, flexible world of pubs and
              restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Shift Templates */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">
                Shift templates for every service
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Create templates for morning prep, lunch service, evening close.
                Apply them in seconds.
              </p>
              <ul className="space-y-2">
                {[
                  "Morning opener templates",
                  "Evening closer templates",
                  "Weekend rush patterns",
                  "Event and special occasion shifts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Break Policy */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Break policy prompts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatic reminders when breaks are due. Track compliance and
                avoid violations.
              </p>
              <ul className="space-y-2">
                {[
                  "Configurable break rules",
                  "Automatic break reminders",
                  "Compliance dashboard",
                  "Break violation alerts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shift Swap */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Repeat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Shift swap marketplace</h3>
              <p className="text-muted-foreground leading-relaxed">
                Staff post shifts they can't work. Eligible colleagues see and
                claim them. Manager approves with one tap.
              </p>
              <ul className="space-y-2">
                {[
                  "Self-service shift posting",
                  "Eligibility auto-matching",
                  "Manager approval workflow",
                  "Notification to eligible staff",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Multi-role Scheduling */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Multi-role scheduling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Schedule by role: Bar, Kitchen, Floor, Delivery. See coverage
                for each area at a glance.
              </p>
              <ul className="space-y-2">
                {[
                  "Role lanes in rota view",
                  "Staff trained in multiple roles",
                  "Role-specific pay rates",
                  "Minimum coverage by role",
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

      {/* Friday/Saturday Peak Scenario */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Peak night scenario</Badge>
            <h2 className="text-4xl font-bold">Friday night, sorted</h2>
            <p className="text-lg text-muted-foreground">
              How Statim Pay handles your busiest nights
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 h-8 w-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          5pm: Someone calls in sick
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Bar shift needs cover in 2 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 h-8 w-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          5:01pm: Shift posted to marketplace
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Notification sent to all eligible Bar-trained staff
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">5:15pm: Cover claimed</h4>
                        <p className="text-sm text-muted-foreground">
                          Staff member accepts the shift via app
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          5:16pm: Manager approves
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          One-tap approval, rota updated automatically
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="inline-flex p-4 rounded-full bg-background">
                      <Utensils className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Shift swap workflow
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Add-on Modules */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Add-on modules</Badge>
            <h2 className="text-4xl font-bold">More for hospitality teams</h2>
            <p className="text-lg text-muted-foreground">
              Payroll and EWA designed for hospitality workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Payroll with tips</h3>
                  <p className="text-muted-foreground">
                    Track tips, calculate tronc, and handle hospitality-specific
                    pay elements automatically.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Tips recording and allocation",
                    "Tronc scheme support",
                    "Evening and weekend premiums",
                    "Holiday pay calculations",
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
                  <h3 className="text-2xl font-bold">EWA for hospitality</h3>
                  <p className="text-muted-foreground">
                    Give your team access to earned wages when they need it.
                    Reduce turnover and improve morale.
                  </p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Instant access after shifts",
                    "Zero cost to staff",
                    "Reduce payday loans",
                    "Boost retention rates",
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
            Ready to simplify hospitality scheduling?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            See how pubs and restaurants manage their teams with Statim Pay
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
