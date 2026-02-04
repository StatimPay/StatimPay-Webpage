import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function MarketingFooter() {
  const footerSections = {
    Product: [
      { label: 'Overview', href: '/products' },
      { label: 'Workforce Management', href: '/products/workforce-management' },
      { label: 'Payroll', href: '/products/payroll' },
      { label: 'Earned Wage Access', href: '/products/ewa' },
      { label: 'Pricing', href: '/pricing' },
    ],
    Industries: [
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Pubs & Restaurants', href: '/industries/hospitality' },
      { label: 'Multi-site Operators', href: '/industries/multisite' },
      { label: 'Franchises', href: '/industries/franchise' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Security & Data', href: '/security' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ],
    Trust: [
      { label: 'Security & Data', href: '/security' },
      { label: 'Responsible Access', href: '/products/ewa/responsible-access' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  }

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <span className="font-semibold text-lg">WorkforcePro</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The modular workforce platform built for modern teams. Scheduling, payroll, and earned wage access in one place.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'github'].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social}
                >
                  <div className="h-5 w-5 rounded bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold">{social[0].toUpperCase()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4 className="font-semibold text-sm">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 WorkforcePro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/security" className="hover:text-foreground transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
