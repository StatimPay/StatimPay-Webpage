'use client'

import { useState } from 'react'
import { MarketingHeader } from '@/components/marketing/marketing-header'
import { MarketingFooter } from '@/components/marketing/marketing-footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Calendar,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Building2,
  Store,
  Utensils,
  ShoppingBag,
  Eye,
  Settings,
  FileText,
  TrendingUp,
  Star,
  ChevronRight,
  Globe,
} from 'lucide-react'

export default function MarketingPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('retail')

  const industryContent = {
    retail: [
      'Peak season workforce planning',
      'Multi-location labor cost tracking',
      'Part-time and seasonal scheduling',
      'Real-time attendance monitoring',
    ],
    pubs: [
      'Role-based rota lanes (Bar, Kitchen, Floor)',
      'Shift swap marketplace',
      'Break compliance tracking',
      'Tip recording and allocation',
    ],
    multisite: [
      'Centralized policy management',
      'Site-level operational autonomy',
      'Cross-location reporting and analytics',
      'Unified payroll exports',
    ],
    franchise: [
      'Brand template inheritance',
      'Franchisee-level customization',
      'HQ visibility controls (aggregated/full)',
      'Independent site management',
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />

      {/* Hero Section - Above the Fold */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Workforce management that grows with you
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Start with scheduling. Add payroll when ready. Enable earned wage access for your team. One modular platform for retail, hospitality, and multi-site operators.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-12 px-8 text-base">
                  Book a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
                  Start free trial
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl border shadow-2xl overflow-hidden">
                <div className="h-full w-full p-8 flex items-center justify-center">
                  <div className="w-full space-y-4">
                    <div className="bg-card/80 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Week Schedule</div>
                          <div className="text-xs text-muted-foreground">Manchester Store</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Scheduled</span>
                          <span className="font-medium">142 hrs</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-primary rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Admin Dashboard Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 px-6 border-y bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Building2 className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">Built for multi-site & franchises</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Shield className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">Audit-ready approvals</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">UK-ready workflows</span>
            </div>
          </div>
        </div>
      </section>

      {/* Module Selector Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <Badge variant="outline">Modular platform</Badge>
            <h2 className="text-4xl font-bold">Choose what you need. Add modules anytime.</h2>
            <p className="text-lg text-muted-foreground">
              Start with one module, scale to three. No long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Calendar,
                title: 'Workforce Management',
                price: 'from £3/user/mo',
                description: 'Scheduling, time tracking, and approvals',
                features: ['Rota builder', 'Mobile clock-in', 'Shift marketplace', 'Labor reports'],
                popular: true,
              },
              {
                icon: DollarSign,
                title: 'Payroll',
                price: 'from £2/user/mo',
                description: 'Automated payroll with exports',
                features: ['Auto calculations', 'HMRC-ready', 'Multiple pay elements', 'Export to Xero/Sage'],
                popular: false,
              },
              {
                icon: Zap,
                title: 'Earned Wage Access',
                price: 'from £1/user/mo',
                description: 'On-demand pay for employees',
                features: ['Instant withdrawals', 'No employee cost', 'Auto reconciliation', 'Financial wellness'],
                popular: false,
              },
            ].map((module, i) => (
              <Card key={i} className={`relative ${module.popular ? 'border-primary shadow-lg' : ''}`}>
                {module.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="shadow-sm">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                    <div className="text-2xl font-bold">{module.price}</div>
                  </div>
                  <ul className="space-y-2.5">
                    {module.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={module.popular ? 'default' : 'outline'}>
                    Get started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Bundle 2+ modules and save 15%. Add or remove modules anytime.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline">Simple onboarding</Badge>
            <h2 className="text-4xl font-bold">How it works</h2>
            <p className="text-lg text-muted-foreground">
              Get up and running in minutes, not weeks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ width: 'calc(100% - 8rem)', margin: '0 4rem' }} />
            
            {[
              {
                step: '1',
                title: 'Set up sites & staff',
                description: 'Add your locations, departments, and team members. Import from spreadsheets or enter manually.',
                time: '5 minutes',
              },
              {
                step: '2',
                title: 'Run rotas & approvals',
                description: 'Build schedules, track time, manage exceptions. Your WFM foundation is live.',
                time: '2 minutes',
              },
              {
                step: '3',
                title: 'Add payroll & EWA when ready',
                description: 'Enable additional modules as you grow. Seamless integration with existing data.',
                time: 'Anytime',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <Card className="relative z-10 bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{item.time}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Switcher */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Industry solutions</Badge>
            <h2 className="text-4xl font-bold">Built for your business</h2>
            <p className="text-lg text-muted-foreground">
              Industry-specific features that solve your unique challenges
            </p>
          </div>

          <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 h-auto">
              <TabsTrigger value="retail" className="flex items-center gap-2 py-3">
                <Store className="h-4 w-4" />
                <span className="hidden sm:inline">Retail</span>
              </TabsTrigger>
              <TabsTrigger value="pubs" className="flex items-center gap-2 py-3">
                <Utensils className="h-4 w-4" />
                <span className="hidden sm:inline">Pubs & Restaurants</span>
              </TabsTrigger>
              <TabsTrigger value="multisite" className="flex items-center gap-2 py-3">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">Multi-site</span>
              </TabsTrigger>
              <TabsTrigger value="franchise" className="flex items-center gap-2 py-3">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:inline">Franchise</span>
              </TabsTrigger>
            </TabsList>

            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {selectedIndustry === 'retail' && 'Retail solutions'}
                      {selectedIndustry === 'pubs' && 'Hospitality solutions'}
                      {selectedIndustry === 'multisite' && 'Multi-site operations'}
                      {selectedIndustry === 'franchise' && 'Franchise management'}
                    </h3>
                    <ul className="space-y-3">
                      {industryContent[selectedIndustry as keyof typeof industryContent].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6">
                      Learn more
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="inline-flex p-4 rounded-full bg-background">
                        {selectedIndustry === 'retail' && <Store className="h-8 w-8 text-primary" />}
                        {selectedIndustry === 'pubs' && <Utensils className="h-8 w-8 text-primary" />}
                        {selectedIndustry === 'multisite' && <Building2 className="h-8 w-8 text-primary" />}
                        {selectedIndustry === 'franchise' && <ShoppingBag className="h-8 w-8 text-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">Industry visual</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </section>

      {/* Product Highlights Grouped */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Everything you need in one platform</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive features across all modules
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Scheduling */}
            <div className="space-y-4">
              <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Scheduling</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Drag & drop rota builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Role-based lanes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Shift templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Auto-publish schedules</span>
                </li>
              </ul>
            </div>

            {/* Time & Attendance */}
            <div className="space-y-4">
              <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Time & Attendance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Mobile clock-in (PIN/Face)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Break tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Exception management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Timesheet approvals</span>
                </li>
              </ul>
            </div>

            {/* Payroll */}
            <div className="space-y-4">
              <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Payroll</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Auto calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Premium pay rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Overtime tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>CSV/SFTP exports</span>
                </li>
              </ul>
            </div>

            {/* EWA */}
            <div className="space-y-4">
              <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Earned Wage Access</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Instant withdrawals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>No employee fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Auto reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Financial wellness tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">For franchises</Badge>
            <h2 className="text-4xl font-bold">Built for franchise networks</h2>
            <p className="text-lg text-muted-foreground">
              Balance brand consistency with franchisee independence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Brand templates</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  HQ sets default roles, policies, and workflows. Franchisees inherit and can override as needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Franchisee control</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Franchisees manage their own sites, staff, and schedules independently within brand guidelines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Visibility modes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose between aggregated KPIs, anonymised data, or full operational visibility for HQ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Simple pricing</Badge>
            <h2 className="text-4xl font-bold">Modular pricing that scales with you</h2>
            <p className="text-lg text-muted-foreground">
              Pay per user, per month. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { module: 'WFM', price: '£3', color: 'primary' },
              { module: 'Payroll', price: '£2', color: 'primary' },
              { module: 'EWA', price: '£1', color: 'primary' },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">{item.module}</div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{item.price}</span>
                      <span className="text-muted-foreground">/user/mo</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">Starting price</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Bundle all 3 modules for £5/user/mo (save 17%)
            </p>
            <Button size="lg">
              Get custom pricing
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline">Customer stories</Badge>
            <h2 className="text-4xl font-bold">Trusted by leading businesses</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "This platform has transformed how we manage our workforce across 15 locations. The time savings alone paid for itself in the first month."
                  </p>
                  <div className="space-y-1">
                    <div className="font-semibold text-sm">Jane Smith</div>
                    <div className="text-xs text-muted-foreground">Operations Director, Retail Chain</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-balance">Ready to modernize your workforce operations?</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join 500+ businesses managing smarter with our modular platform. Start with what you need, scale when you're ready.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
              Book a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10">
              Start free trial
            </Button>
          </div>
          <p className="text-sm opacity-75">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
