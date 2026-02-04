"use client";

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
  Shield,
  Lock,
  Eye,
  FileText,
  Server,
  Users,
  Database,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <Section padding="pt-32 pb-20 px-6" maxWidth="4xl">
        <div className="text-center space-y-6">
          <Badge variant="outline">Security & Data Protection</Badge>
          <h1 className="text-5xl font-bold leading-tight text-balance">
            Security and privacy by design
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Enterprise-grade security for multi-site operators and franchises.
            Your data stays yours, with complete control over who sees what.
          </p>
        </div>
      </Section>

      {/* Data Separation for Franchises */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Complete data separation</h2>
            <p className="text-lg text-muted-foreground">
              Built for franchise networks with strict tenant isolation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  Tenant isolation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every franchisee gets their own isolated database tenant. No
                  cross-contamination of employee records, schedules, or payroll
                  data.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Separate database schemas per franchisee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>No shared employee or payroll tables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Independent backup and recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-primary" />
                  Configurable visibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Franchisees control what HQ can see. Choose between aggregated
                  KPIs, anonymised data, or full visibility.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Aggregated mode: KPIs only, no employee names</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Full access: Operational drill-down when needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Franchisee approval required for changes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Role-Based Permissions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Role-based access control</h2>
            <p className="text-lg text-muted-foreground">
              Granular permissions tailored to your organizational structure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                role: "HQ Admin",
                description:
                  "Manage brand templates, visibility settings, and user provisioning",
                permissions: [
                  "Create brand policies",
                  "View aggregated reports",
                  "Manage integrations",
                ],
              },
              {
                role: "Franchisee Owner",
                description:
                  "Full control over sites, employees, and operational decisions",
                permissions: [
                  "Manage all locations",
                  "Override brand templates",
                  "Export payroll",
                ],
              },
              {
                role: "Site Manager",
                description:
                  "Day-to-day scheduling and approval for assigned locations",
                permissions: [
                  "Build rotas",
                  "Approve timesheets",
                  "View labor costs",
                ],
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.permissions.map((perm, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{perm}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                Additional roles available: Area Manager, Payroll Admin, HR
                Viewer, Auditor (read-only). Custom roles can be configured on
                Enterprise plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Audit Logs */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-full bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Complete audit trail</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every action is logged with timestamp, user, and IP address.
                Perfect for compliance audits and dispute resolution.
              </p>
              <ul className="space-y-3">
                {[
                  "User authentication and permission changes",
                  "Timesheet edits and approvals",
                  "Payroll calculation runs and exports",
                  "Employee data access and modifications",
                  "System configuration changes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="space-y-2 pb-4 border-b">
                  <div className="text-xs text-muted-foreground">
                    2024-01-15 14:32:18
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <div className="font-medium text-sm">
                        Timesheet approved
                      </div>
                      <div className="text-xs text-muted-foreground">
                        John Smith → Week ending 14/01
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pb-4 border-b">
                  <div className="text-xs text-muted-foreground">
                    2024-01-15 10:15:42
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <div className="font-medium text-sm">
                        Payroll export generated
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Manchester Store → CSV format
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    2024-01-14 16:20:11
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500 mt-2" />
                    <div>
                      <div className="font-medium text-sm">
                        Role permissions updated
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Site Manager → Added payroll export
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Encryption & Access Controls */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">
              Encryption and access controls
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-standard security at every layer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data encryption</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>TLS 1.3 for data in transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>AES-256 encryption at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Encrypted database backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Secure key management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Multi-factor authentication (MFA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>SSO integration (SAML, OAuth)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Session timeout policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>IP allowlisting available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Reliability */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Built for reliability</h2>
            <p className="text-lg text-muted-foreground">
              99.9% uptime SLA with redundancy at every level
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                metric: "99.9%",
                label: "Uptime SLA",
                description: "Monitored 24/7",
              },
              {
                metric: "<100ms",
                label: "Response time",
                description: "P95 latency",
              },
              {
                metric: "Daily",
                label: "Backups",
                description: "30-day retention",
              },
              {
                metric: "4 hours",
                label: "RPO target",
                description: "Disaster recovery",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    {item.metric}
                  </div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-red-500/10">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold">What we don't do</h2>
            <p className="text-lg text-muted-foreground">
              Transparency about our data practices
            </p>
          </div>

          <div className="space-y-4">
            {[
              "We never share employee personal data with brand HQ unless explicitly configured by the franchisee",
              "We do not sell or share your data with third parties for marketing purposes",
              "We do not use your operational data to train AI models or benchmarking without consent",
              "We do not provide backdoor access to HQ for franchisee data",
              "We do not retain deleted data beyond regulatory requirements (typically 7 years for payroll)",
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="hover:no-underline">
                Where is our data stored?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All data is stored in UK-based data centers with ISO 27001
                certification. We offer EU data residency for European customers
                on Enterprise plans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="hover:no-underline">
                Can franchisees export their data?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Franchisees can export all their employee, schedule, and
                payroll data at any time in CSV or JSON format. No lock-in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="hover:no-underline">
                How do you handle GDPR and data subject requests?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We provide self-service tools for data subject access requests
                (DSARs), right to be forgotten, and data portability. Responses
                are typically fulfilled within 48 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="hover:no-underline">
                What happens if a franchisee leaves the network?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The franchisee retains full ownership of their data. They can
                continue using the platform independently or export everything
                and close their account. HQ loses access immediately upon
                separation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="hover:no-underline">
                Do you offer penetration testing reports?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We conduct annual penetration tests by third-party security
                firms. Reports are available to Enterprise customers under NDA.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">
            Questions about our security practices?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our team is happy to walk through our security architecture and
            compliance certifications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8">
                Contact security team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-transparent"
              >
                Learn more about us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
