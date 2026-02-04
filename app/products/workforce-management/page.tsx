"use client";

import { useState } from "react";
import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Section, SectionHeader } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  BarChart3,
  Settings,
  Shield,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function WorkforceManagementPage() {
  const [viewMode, setViewMode] = useState("role");

  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline">Workforce Management</Badge>
              <h1 className="text-5xl font-bold leading-tight text-balance">
                Scheduling that works for retail and hospitality
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build rotas in minutes, track time accurately, and approve
                timesheets with confidence. Built specifically for multi-site
                operators, pubs, restaurants, and retail chains.
              </p>
              <div className="flex flex-wrap gap-4">
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
                  Start free trial
                </Button>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl border shadow-xl p-8 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Calendar className="h-12 w-12 text-primary mx-auto" />
                <p className="text-sm text-muted-foreground">
                  Rota builder interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rota Builder Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Powerful rota builder</h2>
            <p className="text-lg text-muted-foreground">
              Build schedules your way: by role or by employee
            </p>
          </div>

          <Tabs value={viewMode} onValueChange={setViewMode}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="role">Role-based view</TabsTrigger>
              <TabsTrigger value="employee">Employee-based view</TabsTrigger>
            </TabsList>

            <Card>
              <CardContent className="p-12">
                <TabsContent value="role" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">
                      Role-based scheduling
                    </h3>
                    <p className="text-muted-foreground">
                      Perfect for hospitality with distinct roles: Kitchen, Bar,
                      Floor, Delivery. See all shifts for each role lane and
                      fill gaps quickly.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Drag & drop employees into role lanes",
                        "See coverage gaps by role at a glance",
                        "Set required headcount per role per shift",
                        "Clone previous week templates",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Calendar className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        Role-based rota interface
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="employee" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">
                      Employee-based scheduling
                    </h3>
                    <p className="text-muted-foreground">
                      Ideal for retail with varied schedules. See each
                      employee's week, manage availability, and balance hours
                      across your team.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "View individual employee schedules",
                        "Check availability and time-off requests",
                        "Balance contracted hours automatically",
                        "Assign shifts with one click",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Users className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        Employee-based rota interface
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </section>

      {/* Feature Sections Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Shift Templates */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Shift templates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create reusable templates for your most common shifts. Morning
                opener, evening closer, weekend rush — save and apply with one
                click.
              </p>
              <ul className="space-y-2">
                {[
                  "Save frequently-used shift patterns",
                  "Apply templates to multiple days",
                  "Share templates across sites",
                  "Template library for franchises",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Multi-site Coverage */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">
                Multi-site coverage board
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                See all your locations at once. Identify understaffed sites,
                move employees between locations, and balance labor across your
                operation.
              </p>
              <ul className="space-y-2">
                {[
                  "Coverage heatmap across sites",
                  "Cross-location staff moves",
                  "Site-level labor budgets",
                  "Group-wide reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability & Swaps */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Availability and swaps</h3>
              <p className="text-muted-foreground leading-relaxed">
                Let employees set availability and request shift swaps. Managers
                approve or decline with one tap. Reduce scheduling conflicts and
                improve flexibility.
              </p>
              <ul className="space-y-2">
                {[
                  "Employee self-service availability",
                  "Shift swap marketplace",
                  "Manager approval workflow",
                  "Time-off request calendar",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Time & Attendance */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Time & attendance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mobile clock-in with PIN or Face ID. Automatic break tracking.
                Late arrivals and early departures flagged instantly.
              </p>
              <ul className="space-y-2">
                {[
                  "PIN or biometric clock-in",
                  "GPS location verification",
                  "Automatic break reminders",
                  "Late/early exception alerts",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exceptions Queue */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Exceptions queue</h3>
              <p className="text-muted-foreground leading-relaxed">
                All issues in one place: missed breaks, overtime alerts,
                unscheduled clock-ins. Review and resolve exceptions before
                approving timesheets.
              </p>
              <ul className="space-y-2">
                {[
                  "Centralized exception dashboard",
                  "Bulk resolve or escalate",
                  "Exception audit trail",
                  "Custom exception rules",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approvals Hub */}
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Approvals hub</h3>
              <p className="text-muted-foreground leading-relaxed">
                Approve timesheets by site, department, or employee. See pending
                approvals, review edits, and lock periods before payroll.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-level approval workflows",
                  "Bulk approve by site or team",
                  "Approval deadlines and reminders",
                  "Audit trail for all changes",
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
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Reporting & analytics</h2>
            <p className="text-lg text-muted-foreground">
              Labor hours, compliance, and cost insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Labor hours",
                metrics: [
                  "Scheduled vs. actual",
                  "Overtime tracking",
                  "Department breakdowns",
                  "Weekly trends",
                ],
              },
              {
                title: "Compliance",
                metrics: [
                  "Break violations",
                  "Max hours checks",
                  "Rest period gaps",
                  "Working time reports",
                ],
              },
              {
                title: "Labor cost",
                metrics: [
                  "Wage cost per site",
                  "Cost vs. budget",
                  "Labor as % revenue",
                  "Forecast projections",
                ],
              },
            ].map((category, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-site & Franchise Ready */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Enterprise ready</Badge>
            <h2 className="text-4xl font-bold">Multi-site & franchise ready</h2>
            <p className="text-lg text-muted-foreground">
              Group, tenant, and site boundaries with role-based access
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Organizational hierarchy
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Structure your business as Group {">"} Tenant {">"} Site.
                  Perfect for franchise networks where HQ manages multiple
                  franchisee tenants, each with their own locations.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Flexible org structure",
                    "Site-level autonomy",
                    "Tenant-level reporting",
                    "Group-wide policies",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Role-based access control
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Define who can see and edit what. Site managers see their
                  location only. Area managers see their region. HQ sees
                  everything or just aggregated KPIs.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Granular permissions",
                    "Site/tenant boundaries",
                    "Role templates",
                    "Visibility controls",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
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

      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">How it works</h2>
            <p className="text-lg text-muted-foreground">
              Get up and running in three simple steps
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
                title: "Set up your sites",
                description:
                  "Add locations, departments, and roles. Import your employee list or add manually.",
              },
              {
                step: "2",
                title: "Build your first rota",
                description:
                  "Use templates or drag-and-drop employees into shifts. Publish to your team.",
              },
              {
                step: "3",
                title: "Track and approve",
                description:
                  "Employees clock in/out on mobile. Review exceptions and approve timesheets.",
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10">
                <Card className="bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Placeholders */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">See it in action</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Rota builder interface", icon: Calendar },
              { title: "Mobile clock-in screen", icon: Clock },
              { title: "Approval dashboard", icon: Shield },
              { title: "Labor reports", icon: BarChart3 },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-video bg-muted rounded-lg border flex items-center justify-center"
              >
                <div className="text-center space-y-2">
                  <item.icon className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Ready to transform your scheduling?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Book a demo to see our Workforce Management platform in action
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
              Start free trial
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
