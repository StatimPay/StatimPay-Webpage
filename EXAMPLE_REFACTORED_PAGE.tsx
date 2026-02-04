/**
 * Example: Updated About Page using new layout system
 * Copy this pattern for other pages
 */

'use client'

import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Section, SectionHeader } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
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
} from 'lucide-react'

export default function AboutPageExample() {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <Section padding="pt-32 pb-20 px-6" maxWidth="4xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="mb-2">About us</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Built for the people who power businesses
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We're on a mission to give retail, hospitality, and multi-site operators the tools they need to manage their workforce with confidence, fairness, and control.
          </p>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section alternate maxWidth="6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Our mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Workforce management should be simple, not complicated. Fair, not frustrating. Empowering, not restricting.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe every business, from single-site cafes to multi-location retail chains, deserves access to enterprise-grade workforce tools without enterprise complexity or cost.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That's why we built a modular platform that starts with what you need today and grows with you tomorrow.
            </p>
          </div>
          <div className="aspect-square bg-gradient-to-br from-primary/10 to-background rounded-2xl border flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex p-6 rounded-full bg-primary/10">
                <Target className="h-16 w-16 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Mission visual</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section>
        <SectionHeader
          title="Built for your industry"
          description="We understand the unique challenges of retail, hospitality, and multi-site operations because we've worked with them from day one."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Store,
              title: 'Retail',
              description: 'From boutiques to national chains, manage seasonal peaks, part-time staff, and multi-location operations with ease.',
            },
            {
              icon: Utensils,
              title: 'Pubs & Restaurants',
              description: 'Handle split shifts, role-based rotas, tip tracking, and break compliance for front and back of house teams.',
            },
            {
              icon: Building2,
              title: 'Multi-site Operators',
              description: 'Centralize policy management while giving site managers the autonomy they need to run their locations.',
            },
          ].map((industry, i) => (
            <Card key={i} className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section alternate>
        <SectionHeader
          badge="Our values"
          title="What drives us"
          description="The principles that guide every decision we make"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: 'People first',
              description: 'We build tools that make work better for employees and employers alike. Fair pay, flexible scheduling, and financial wellness matter.',
            },
            {
              icon: Lightbulb,
              title: 'Simple by default',
              description: 'Powerful software does not have to be complicated. We prioritize clarity and usability in everything we build.',
            },
            {
              icon: Shield,
              title: 'Trust & transparency',
              description: 'Data security, responsible access policies, and clear terms. No hidden fees, no dark patterns, no surprises.',
            },
          ].map((value, i) => (
            <div key={i} className="space-y-4">
              <div className="inline-flex p-3 rounded-lg bg-primary/10">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to see it in action?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a personalized demo and see how our platform can transform your workforce operations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="h-12 px-8">
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Contact sales
            </Button>
          </div>
        </div>
      </Section>
    </MarketingLayout>
  )
}
