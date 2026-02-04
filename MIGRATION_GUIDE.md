# Migration Guide: Refactoring to Consistent Design System

## Quick Wins (Do These First)

### 1. Remove Duplicate Header/Footer Imports

**Before:**

```tsx
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      {/* content */}
      <MarketingFooter />
    </div>
  );
}
```

**After:**

```tsx
import { MarketingLayout } from "@/components/layouts/marketing-layout";

export default function Page() {
  return <MarketingLayout>{/* content */}</MarketingLayout>;
}
```

### 2. Standardize Section Spacing

**Before:**

```tsx
<section className="py-16 px-6">
  <div className="max-w-7xl mx-auto">{/* content */}</div>
</section>
```

**After:**

```tsx
import { Section } from "@/components/layouts/section";

<Section>
  {/* content - automatically gets max-w-7xl mx-auto wrapper */}
</Section>;
```

### 3. Use Section Headers Consistently

**Before:**

```tsx
<div className="text-center mb-16 space-y-4">
  <Badge variant="outline">Industries</Badge>
  <h2 className="text-4xl font-bold">Our Solutions</h2>
  <p className="text-lg text-muted-foreground">Description text</p>
</div>
```

**After:**

```tsx
import { SectionHeader } from "@/components/layouts/section";

<SectionHeader
  badge="Industries"
  title="Our Solutions"
  description="Description text"
/>;
```

## Page-by-Page Migration Priority

### Phase 1: High-Traffic Pages (Do First)

1. ✅ Create layout components (Done)
2. `/` (homepage) - Most complex, highest impact
3. `/contact` - High conversion page
4. `/products` - Product overview

### Phase 2: Industry Pages

5. `/industries/retail`
6. `/industries/hospitality`
7. `/industries/multisite`
8. `/industries/franchise`

### Phase 3: Product Pages

9. `/products/workforce-management`
10. `/products/payroll`
11. `/products/ewa`

### Phase 4: Static Pages

12. `/about`
13. `/security`
14. `/site-map`

## Common Refactoring Patterns

### Pattern 1: Hero Sections Already Using IndustryHero

✅ Already consistent - no changes needed!

### Pattern 2: Custom Hero Sections (Homepage)

**Recommendation**: Keep custom for now, ensure spacing matches:

- `pt-32 pb-16` → Change to `pt-32 pb-20`

### Pattern 3: Feature Grid Sections

```tsx
// Before: Inline grid
<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8">
      {/* features */}
    </div>
  </div>
</section>

// After: Using Section component
<Section>
  <SectionHeader
    badge="Features"
    title="Key Benefits"
    description="What makes us different"
  />
  <div className="grid md:grid-cols-3 gap-8">
    {/* features */}
  </div>
</Section>
```

### Pattern 4: Alternating Backgrounds

```tsx
// Before
<section className="py-20 px-6 bg-muted/30">

// After
<Section alternate>
```

## Example: Refactoring a Complete Page

### Before: `/app/about/page.tsx`

```tsx
"use client";

import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline">About us</Badge>
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="text-xl text-muted-foreground">Description</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          {/* content */}
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
```

### After: Refactored

```tsx
"use client";

import { MarketingLayout } from "@/components/layouts/marketing-layout";
import { Section, SectionHeader } from "@/components/layouts/section";

export default function AboutPage() {
  return (
    <MarketingLayout>
      <Section padding="pt-32 pb-20 px-6" maxWidth="4xl">
        <div className="text-center space-y-6">
          <Badge variant="outline">About us</Badge>
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="text-xl text-muted-foreground">Description</p>
        </div>
      </Section>

      <Section alternate maxWidth="6xl">
        <SectionHeader title="Our Mission" centered={false} />
        {/* content */}
      </Section>
    </MarketingLayout>
  );
}
```

## Testing Checklist

After refactoring each page:

- [ ] Visual spacing matches before/after
- [ ] Header and footer render correctly
- [ ] Responsive behavior works on mobile
- [ ] All links still work
- [ ] No console errors
- [ ] Check in dev tools that styles apply correctly

## Common Issues & Solutions

### Issue: Max-width not applying

**Solution**: The Section component applies `max-w-{size} mx-auto` automatically when `container={true}` (default).

### Issue: Need custom spacing for one section

**Solution**: Use the `padding` prop:

```tsx
<Section padding="py-12 px-6">
```

### Issue: Don't want the container wrapper

**Solution**: Set `container={false}`:

```tsx
<Section container={false}>
```

## Rollback Strategy

If a refactor causes issues:

1. The old component pattern is not deprecated - you can keep it
2. MarketingLayout is just a wrapper - easy to remove if needed
3. Section component is optional - pages can still use raw sections

## Next Steps After Migration

1. Create a Storybook or component documentation
2. Add TypeScript strict mode
3. Create automated tests for layout consistency
4. Consider creating more specialized section components (PricingSection, FAQSection, etc.)
