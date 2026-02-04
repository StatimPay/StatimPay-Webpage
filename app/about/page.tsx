"use client";

import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Section, SectionHeader } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Heart,
  Lightbulb,
  Shield,
  Users,
  TrendingUp,
  Store,
  Utensils,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <Section padding="pt-32 pb-20 px-6" maxWidth="4xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="mb-2">
            About us
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Built for the people who power businesses
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are on a mission to give retail, hospitality, and multi-site
            operators the tools they need to manage their workforce with
            confidence, fairness, and control.
          </p>
        </div>
      </Section>
    </MarketingLayout>
  );
}
