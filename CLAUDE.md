# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Statim Pay is a B2B landing page for a modular workforce management platform targeting retail, hospitality, and multi-site operators. It showcases three modules: Workforce Management (WFM), Payroll, and Earned Wage Access (EWA).

This is a public marketing site with no authentication, database, or backend requirements.

## Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production
npm start          # Run production server
npm run lint       # Run ESLint
```

## Tech Stack

- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** with OKLCH color model
- **shadcn/ui** components (built on Radix UI primitives)
- **Lucide React** for icons
- **Class Variance Authority (CVA)** for component variants

## Architecture

### Component Organization

There are three component directories:

1. **`/components/ui/`** - shadcn/ui components (Button, Card, Badge, Tabs, etc.)
2. **`/components/marketing/`** - Site-wide marketing components (header, footer)
3. **`/ui/`** - Custom UI components (page-layout, stat-card, status-badge)

### Styling System

- CSS variables defined in `app/globals.css` using OKLCH color space
- `cn()` utility in `lib/utils.ts` combines clsx + tailwind-merge for className merging
- Primary color: Purple-blue (`oklch(0.55 0.22 264)`)
- Accent color: Teal green (`oklch(0.45 0.18 150)`)
- Domain-specific tokens exist for department colors, rota statuses, and shift states

### Page Structure Pattern

All pages follow this structure:
- Client components (`'use client'`)
- Fixed header via `MarketingHeader`
- Content sections with `max-w-7xl` containers
- Mobile-first responsive grids
- `MarketingFooter` at bottom

## Key Files

- **`app/page.tsx`** - Main landing page with hero, features, pricing, testimonials
- **`components/marketing/marketing-header.tsx`** - Navigation with Radix UI dropdowns and mobile menu
- **`app/globals.css`** - Complete design system tokens and color definitions
- **`lib/utils.ts`** - `cn()` utility for safe className composition

## Branding Customization Points

- Logo and company name: `components/marketing/marketing-header.tsx`
- Footer branding: `components/marketing/marketing-footer.tsx`
- Site metadata: `app/layout.tsx`
- Color tokens: `app/globals.css` (lines 6-86)

## Design Constraints

- Light mode only (dark mode disabled)
- No authentication flows
- Public-facing, stateless pages
