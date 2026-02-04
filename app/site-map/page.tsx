"use client";

import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  FileText,
  Mail,
  Shield,
  Calendar,
  DollarSign,
  Zap,
  Users,
  LogIn,
  UserPlus,
  BarChart3,
  Building2,
} from "lucide-react";

export default function SiteMapPage() {
  const sections = [
    {
      title: "Marketing & Information",
      icon: Home,
      pages: [
        {
          name: "Homepage",
          path: "/",
          description: "Main marketing landing page",
        },
        {
          name: "About Us",
          path: "/about",
          description: "Company mission and values",
        },
        {
          name: "Contact",
          path: "/contact",
          description: "Book a demo or get in touch",
        },
      ],
    },
    {
      title: "Products",
      icon: BarChart3,
      pages: [
        {
          name: "Platform Overview",
          path: "/products",
          description: "Modular platform overview",
        },
        {
          name: "Workforce Management",
          path: "/products/workforce-management",
          description: "Scheduling and time tracking",
        },
        {
          name: "Payroll",
          path: "/products/payroll",
          description: "Automated payroll processing",
        },
        {
          name: "Earned Wage Access",
          path: "/products/ewa",
          description: "On-demand pay for employees",
        },
      ],
    },
    {
      title: "Trust & Security",
      icon: Shield,
      pages: [
        {
          name: "Security & Data",
          path: "/security",
          description: "Data protection and compliance",
        },
        {
          name: "Responsible Access",
          path: "/products/ewa/responsible-access",
          description: "EWA safeguards and policies",
        },
      ],
    },
    {
      title: "Authentication",
      icon: LogIn,
      pages: [
        {
          name: "Login",
          path: "/login",
          description: "Sign in to your account",
        },
        {
          name: "Sign Up",
          path: "/signup",
          description: "Create a new organization account",
        },
        {
          name: "Forgot Password",
          path: "/forgot-password",
          description: "Reset your password",
        },
      ],
    },
    {
      title: "Onboarding",
      icon: UserPlus,
      pages: [
        {
          name: "Organization Setup",
          path: "/onboarding",
          description: "Complete guided onboarding wizard",
        },
      ],
    },
    {
      title: "Application",
      icon: Building2,
      pages: [
        {
          name: "Dashboard",
          path: "/",
          description: "Main application dashboard (requires login)",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl font-bold">Site Navigation</h1>
            <p className="text-lg text-muted-foreground">
              Complete overview of all pages and sections in the WorkforcePro
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.pages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="block group"
                    >
                      <div className="space-y-1 p-3 rounded-lg hover:bg-muted transition-colors">
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">
                          {page.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {page.description}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                          {page.path}
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold">Quick Start</h2>
                <p className="text-muted-foreground">
                  New to the platform? Start with the marketing homepage or jump
                  straight to creating an account.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/marketing">
                    <Button size="lg">View Marketing Site</Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent"
                    >
                      Create Account
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
