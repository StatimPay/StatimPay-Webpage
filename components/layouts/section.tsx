import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Adds alternating background color (muted/30) */
  alternate?: boolean;
  /** Custom padding override - defaults to py-20 px-6 */
  padding?: string;
  /** Center content with max-width container */
  container?: boolean;
  /** Custom max-width - defaults to max-w-7xl */
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full";
}

/**
 * Standardized section component for consistent spacing and layout
 * Usage:
 * <Section alternate> - adds muted background
 * <Section container> - wraps content in max-width container
 */
export function Section({
  children,
  className,
  alternate = false,
  padding = "py-20 px-6",
  container = true,
  maxWidth = "7xl",
}: SectionProps) {
  const content = container ? (
    <div className={cn(`max-w-${maxWidth} mx-auto`, className)}>{children}</div>
  ) : (
    children
  );

  return (
    <section
      className={cn(
        padding,
        alternate && "bg-muted/30",
        !container && className,
      )}
    >
      {content}
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

/**
 * Standardized section header with optional badge, title, and description
 */
export function SectionHeader({
  badge,
  title,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("space-y-4 mb-16", centered && "text-center", className)}
    >
      {badge && (
        <div className="inline-block">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold">
            {badge}
          </div>
        </div>
      )}
      <h2 className="text-4xl font-bold">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
