import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

/**
 * Consistent layout wrapper for all marketing pages
 * Includes header and footer, ensuring they're not duplicated on every page
 */
export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </div>
  );
}
