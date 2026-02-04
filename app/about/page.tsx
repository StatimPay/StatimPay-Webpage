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

export default function AboutPage() {
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
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* Values */}
      <Section alternate>
        <SectionHeader
          badge="Our values"
          title="What we stand for"
        />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Simplicity',
                description: 'Complex problems deserve elegant solutions. We remove the noise and focus on what matters: getting your work done quickly and correctly.',
              },
              {
                icon: Heart,
                title: 'Fairness',
                description: 'From transparent pricing to ethical earned wage access, we believe technology should create value for everyone, not extract it.',
              },
              {
                icon: Shield,
                title: 'Operational control',
                description: 'Your business, your rules. We give you the tools and flexibility to run operations your way, without being locked into rigid workflows.',
              },
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
      </Section>

      {/* Timeline Placeholder */}
      <Section maxWidth="5xl">
        <SectionHeader
          badge="Our journey"
          title="Building the platform piece by piece"
        />

          <div className="space-y-12 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {[
              {
                year: '2020',
                title: 'Founded',
                description: 'Started with a simple vision: workforce management should be accessible to everyone, not just enterprises with big budgets.',
              },
              {
                year: '2021',
                title: 'WFM Launch',
                description: 'Released our first module: Workforce Management. Scheduling, time tracking, and approvals for multi-site operators.',
              },
              {
                year: '2022',
                title: 'Payroll Integration',
                description: 'Added payroll processing with seamless export capabilities. One platform, from hours worked to payment.',
              },
              {
                year: '2023',
                title: 'Earned Wage Access',
                description: 'Launched EWA to help employees access their earned wages instantly, improving financial wellness across our client base.',
              },
              {
                year: '2024',
                title: 'Today',
                description: '500+ businesses, 25,000+ employees managed daily. Growing our modular platform and serving more industries.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 relative">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                  {item.year.slice(2)}
                </div>
                <div className="flex-1 pb-12">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </Section>

      {/* Team Placeholder */}
      <Section alternate>
        <SectionHeader
          badge="Our team"
          title="Meet the people behind the platform"
          description="A diverse team of builders, operators, and thinkers dedicated to making workforce management better."
        />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Co-founder' },
              { name: 'Michael Chen', role: 'CTO & Co-founder' },
              { name: 'Emma Williams', role: 'Head of Product' },
              { name: 'David Martinez', role: 'Head of Customer Success' },
              { name: 'Priya Patel', role: 'Lead Engineer' },
              { name: 'James Taylor', role: 'Head of Operations' },
              { name: 'Sophie Anderson', role: 'Head of Design' },
              { name: 'Tom Roberts', role: 'Head of Sales' },
            ].map((member, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* CTA Section */}
      <Section maxWidth="4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">Join 500+ businesses building better workplaces</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how our modular platform can transform your workforce operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base">
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
              Explore the platform
            </Button>
          </div>
        </div>
      </Section>
    </MarketingLayout>
  )
}
