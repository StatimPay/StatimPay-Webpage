'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Calendar, DollarSign, Zap, BarChart3, Store, Utensils, Building2, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

export function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-semibold text-lg">Statim Pay</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Product Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Products</p>
                        <p className="text-sm text-muted-foreground">Choose the modules you need</p>
                      </div>
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <BarChart3 className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none mb-1">Platform Overview</div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  See how our modules work together
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/workforce-management"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Calendar className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none mb-1">Workforce Management</div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  Scheduling, time tracking, and labor optimization
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/payroll"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <DollarSign className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none mb-1">Payroll</div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  Automated payroll with compliance built in
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/products/ewa"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Zap className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none mb-1">Earned Wage Access</div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  Instant access to earned wages for employees
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Industries we serve</p>
                        <p className="text-sm text-muted-foreground">Tailored solutions for your sector</p>
                      </div>
                      <div className="grid gap-3">
                        {[
                          { icon: Store, title: 'Retail', slug: 'retail', desc: 'Multi-location scheduling and labor tracking' },
                          { icon: Utensils, title: 'Pubs & Restaurants', slug: 'hospitality', desc: 'Shift swaps, tips, and break compliance' },
                          { icon: Building2, title: 'Multi-site Operators', slug: 'multisite', desc: 'Centralized control with site autonomy' },
                          { icon: ShoppingBag, title: 'Franchises', slug: 'franchise', desc: 'Brand standards with franchisee flexibility' },
                        ].map((industry) => (
                          <NavigationMenuLink key={industry.title} asChild>
                            <Link
                              href={`/industries/${industry.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                  <industry.icon className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium leading-none mb-1">{industry.title}</div>
                                  <p className="text-sm text-muted-foreground line-clamp-2">{industry.desc}</p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Standard Links */}
              <NavigationMenuItem>
                <Link href="/#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={cn('group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50')}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#resources" legacyBehavior passHref>
                  <NavigationMenuLink className={cn('group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50')}>
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn('group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50')}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn('group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50')}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button>Book a demo</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-6 py-4 space-y-3">
            <Link href="/#products" className="block py-2 font-medium">
              Product
            </Link>
            <Link href="/#industries" className="block py-2 font-medium">
              Industries
            </Link>
            <Link href="/#pricing" className="block py-2 font-medium">
              Pricing
            </Link>
            <Link href="/#resources" className="block py-2 font-medium">
              Resources
            </Link>
            <Link href="/about" className="block py-2 font-medium">
              About
            </Link>
            <Link href="/contact" className="block py-2 font-medium">
              Contact
            </Link>
            <div className="pt-4 border-t">
              <Link href="/contact" className="block">
                <Button className="w-full">Book a demo</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
