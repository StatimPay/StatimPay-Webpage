# Statim Pay Design System

## 🎨 Color Usage Guidelines

### Primary Colors

- **Primary** (`bg-primary`, `text-primary`) - Brand purple, use for:
  - CTAs and important buttons
  - Icon backgrounds (`bg-primary/10`)
  - Active navigation states
  - Key UI elements

- **Accent** (`bg-accent`, `text-accent`) - Brand green, use for:
  - Success states
  - EWA-specific features
  - Positive metrics
  - Secondary CTAs (sparingly)

### Neutral Colors

- **Background** (`bg-background`) - Default page background (white/light)
- **Muted** (`bg-muted/30`) - Alternating section backgrounds
- **Card** (`bg-card`) - Card backgrounds
- **Border** (`border`) - Dividers and borders

### Text Colors

- **Foreground** (`text-foreground`) - Primary text
- **Muted Foreground** (`text-muted-foreground`) - Secondary text, descriptions
- **Primary Foreground** (`text-primary-foreground`) - Text on primary background

### Component-Specific

- Icon containers: `bg-primary/10` with `text-primary`
- Badges: Use `variant="outline"` for section labels
- Buttons: `variant="outline"` for secondary actions, default for primary

## 📏 Spacing System

### Page Structure

```tsx
// Use MarketingLayout wrapper
<MarketingLayout>
  {/* Hero - pt-32 pb-20 */}
  {/* Sections - py-20 */}
</MarketingLayout>
```

### Sections

- **Hero sections**: `pt-32 pb-20 px-6` (128px top, 80px bottom)
- **Content sections**: `py-20 px-6` (80px vertical)
- **Alternate sections**: Add `bg-muted/30`

### Containers

- Max width: `max-w-7xl` (1280px)
- Always center: `mx-auto`
- Side padding: `px-6` (24px)

### Cards

- Card padding: `p-8` (32px)
- CardHeader: Natural padding from component
- CardContent: `p-8` for large cards, `p-6` for medium

### Gaps

- Grid gaps: `gap-8` (md screens), `gap-12` (lg screens)
- Stack gaps: `space-y-4` (small), `space-y-6` (medium), `space-y-8` (large)
- Flex gaps: `gap-4` for buttons, `gap-3` for icons+text

## 🧩 Component Patterns

### Hero Section

Use the `IndustryHero` component for consistency:

```tsx
<IndustryHero
  badge="Industry Name"
  title="Main heading"
  description="Subtitle text"
  primaryCta={{ label: "Book a demo", href: "/contact" }}
  secondaryCta={{ label: "See pricing", href: "/#pricing" }}
  imagePlaceholder={{ description: "Alt text", icon: IconComponent }}
/>
```

### Section Headers

Use `SectionHeader` for consistent section intros:

```tsx
<SectionHeader
  badge="Section Label"
  title="Section Heading"
  description="Optional description text"
  centered
/>
```

### Icons

- Icons in text: `h-4 w-4` or `h-5 w-5`
- Icons in containers: `h-6 w-6` or `h-8 w-8`
- Icon containers:
  ```tsx
  <div className="inline-flex p-3 rounded-lg bg-primary/10">
    <Icon className="h-6 w-6 text-primary" />
  </div>
  ```

## 🗂️ File Organization

### Pages

- All marketing pages should use `MarketingLayout`
- Import only page-specific components
- Keep data/content at top of file

### Components

- `/components/layouts` - Layout wrappers
- `/components/marketing` - Marketing-specific components
- `/components/ui` - Base shadcn components

### Routing

- Home: `/`
- Products: `/products`, `/products/[slug]`
- Industries: `/industries/[slug]`
- Static: `/about`, `/contact`, `/security`

## ✅ Consistency Checklist

Before committing a new page:

- [ ] Uses `MarketingLayout` wrapper
- [ ] Hero uses `pt-32 pb-20` or `IndustryHero` component
- [ ] Sections use `py-20 px-6` consistently
- [ ] Alternating sections use `bg-muted/30`
- [ ] Icon containers use `bg-primary/10`
- [ ] Max width containers are `max-w-7xl mx-auto`
- [ ] CTAs use consistent button styling
- [ ] All links/routes are correct and exist
- [ ] Grid gaps follow pattern: `gap-8` → `gap-12` (responsive)

## 🔗 Navigation Structure

```
/ (Home)
├── /products
│   ├── /workforce-management
│   ├── /payroll
│   └── /ewa
│       └── /responsible-access
├── /industries
│   ├── /retail
│   ├── /hospitality
│   ├── /multisite
│   └── /franchise
├── /about
├── /contact
├── /security
└── /site-map
```

## 🚀 Future: Missing Pages to Create

- `/blog` - Blog listing
- `/case-studies` - Customer stories
- `/docs` - Documentation
- `/help` - Help center
- `/careers` - Careers page
- `/partners` - Partner program
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/login` - Authentication
- `/signup` - Registration
- `/forgot-password` - Password reset

## 📝 Notes

- Wait for final brand colors before converting to OKLCH
- Current HSL colors are working correctly with Tailwind
- Design tokens in `globals.css` for spacing values
- Consider creating more reusable components as patterns emerge
