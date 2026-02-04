# StatimPay Landing Page

A modern, modular workforce management platform landing page built with Next.js 14, React, and Tailwind CSS.

## Features

- **Modular Design**: Showcase for WFM, Payroll, and EWA modules
- **Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Design System**: Consistent spacing, colors, and components
- **No Authentication**: Public landing page - no login required

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page (main landing)
│   ├── globals.css             # Global styles
│   ├── products/               # Product pages
│   │   ├── ewa/
│   │   ├── payroll/
│   │   └── workforce-management/
│   ├── about/
│   ├── contact/
│   └── security/
├── components/
│   ├── layouts/                # Layout components
│   │   ├── marketing-layout.tsx
│   │   └── section.tsx
│   ├── marketing/              # Marketing components
│   │   ├── marketing-header.tsx
│   │   └── marketing-footer.tsx
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
└── lib/
    └── utils.ts                # Utility functions
```

## Key Pages

- `/` - Homepage with hero, features, pricing
- `/products` - Platform overview
- `/products/workforce-management` - WFM module details
- `/products/payroll` - Payroll module details
- `/products/ewa` - Earned Wage Access details
- `/about` - About page
- `/contact` - Contact page
- `/security` - Security information

## Customization

### Branding

The site is branded as "Statim Pay" with an "S" logo. To change:

1. Update logo in `components/marketing/marketing-header.tsx`
2. Update company name throughout components
3. Update footer branding in `components/marketing/marketing-footer.tsx`
4. Update metadata in `app/layout.tsx`

### Colors

Edit color tokens in `app/globals.css` to change the color scheme.

### Content

- Homepage content: `app/page.tsx`
- Navigation links: `components/marketing/marketing-header.tsx`
- Footer links: `components/marketing/marketing-footer.tsx`

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS with HSL colors
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React

## Notes

- All authentication code has been removed
- Dark mode has been disabled
- Project works as a public B2B landing page
- No database or backend required
