'use client'

import { useState } from 'react'
import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  ArrowRight,
} from 'lucide-react'

export default function ContactPage() {
  const [selectedModules, setSelectedModules] = useState<string[]>([])

  const toggleModule = (module: string) => {
    setSelectedModules((prev) =>
      prev.includes(module)
        ? prev.filter((m) => m !== module)
        : [...prev, module]
    )
  }

  return (
    <MarketingLayout>
      {/* Hero Section */}
      <Section padding="pt-32 pb-20 px-6">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="mb-2">Get in touch</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Book your personalized demo
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            See how our modular platform can transform your workforce operations. Get a tailored walkthrough based on your specific needs.
          </p>
        </div>
      </Section>

      {/* Form Section */}
      <Section padding="pb-24">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tell us about your business</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name *</Label>
                        <Input id="lastName" placeholder="Smith" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company name *</Label>
                      <Input id="company" placeholder="Acme Retail Ltd" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work email *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" type="tel" placeholder="+44 7700 900000" />
                      </div>
                    </div>

                    {/* Business Information */}
                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-semibold mb-4">Business details</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="sites">Number of sites *</Label>
                          <Select required>
                            <SelectTrigger id="sites">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 site</SelectItem>
                              <SelectItem value="2-5">2-5 sites</SelectItem>
                              <SelectItem value="6-10">6-10 sites</SelectItem>
                              <SelectItem value="11-25">11-25 sites</SelectItem>
                              <SelectItem value="26-50">26-50 sites</SelectItem>
                              <SelectItem value="51+">51+ sites</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employees">Number of employees *</Label>
                          <Select required>
                            <SelectTrigger id="employees">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-100">51-100 employees</SelectItem>
                              <SelectItem value="101-250">101-250 employees</SelectItem>
                              <SelectItem value="251-500">251-500 employees</SelectItem>
                              <SelectItem value="501+">501+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Module Interest */}
                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-semibold mb-4">Modules interested in *</h3>
                      <div className="space-y-3">
                        {[
                          { id: 'wfm', label: 'Workforce Management', desc: 'Scheduling, time tracking, approvals' },
                          { id: 'payroll', label: 'Payroll', desc: 'Automated payroll processing & exports' },
                          { id: 'ewa', label: 'Earned Wage Access', desc: 'On-demand pay for employees' },
                        ].map((module) => (
                          <Card
                            key={module.id}
                            className={`cursor-pointer transition-all ${
                              selectedModules.includes(module.id)
                                ? 'border-primary bg-primary/5'
                                : 'hover:border-primary/50'
                            }`}
                            onClick={() => toggleModule(module.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <Checkbox
                                  checked={selectedModules.includes(module.id)}
                                  onCheckedChange={() => toggleModule(module.id)}
                                  className="mt-1"
                                />
                                <div className="flex-1">
                                  <Label className="font-semibold cursor-pointer">{module.label}</Label>
                                  <p className="text-sm text-muted-foreground mt-0.5">{module.desc}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your needs (optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Share any specific challenges or requirements you'd like to discuss..."
                        rows={4}
                      />
                    </div>

                    {/* Submit */}
                    <Button type="submit" size="lg" className="w-full h-12 text-base">
                      Book your demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Scheduling Widget Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule instantly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Clock className="h-8 w-8 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">Calendar scheduling widget</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pick a time that works for you. Most demos last 30-45 minutes.
                  </p>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What happens next</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'Discovery call',
                        desc: 'We\'ll discuss your specific needs and challenges',
                      },
                      {
                        step: '2',
                        title: 'Tailored demo',
                        desc: 'See the platform configured for your industry and use case',
                      },
                      {
                        step: '3',
                        title: 'Custom proposal',
                        desc: 'Get pricing based on your modules, sites, and team size',
                      },
                      {
                        step: '4',
                        title: 'Trial access',
                        desc: 'Try the platform with your team before committing',
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-muted/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">No obligation</p>
                      <p className="text-xs text-muted-foreground">See the platform risk-free</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Quick setup</p>
                      <p className="text-xs text-muted-foreground">Go live in days, not months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Dedicated support</p>
                      <p className="text-xs text-muted-foreground">Onboarding and ongoing help</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold">Prefer to call?</h3>
                  <p className="text-sm text-muted-foreground">
                    Speak with our sales team directly
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">UK:</span>{' '}
                      <span className="font-medium">+44 20 1234 5678</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>{' '}
                      <span className="font-medium">sales@workforceplatform.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
      </Section>
    </MarketingLayout>
  )
}
