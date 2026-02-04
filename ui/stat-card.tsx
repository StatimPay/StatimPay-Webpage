'use client'

import * as React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

type TrendDirection = 'up' | 'down' | 'neutral'
type StatVariant = 'default' | 'success' | 'warning' | 'destructive' | 'info'

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: {
    value: string | number
    direction: TrendDirection
    label?: string
  }
  variant?: StatVariant
}

const variantStyles: Record<StatVariant, { bg: string; border: string; iconBg: string }> = {
  default: {
    bg: 'bg-card',
    border: 'border-border',
    iconBg: 'bg-muted',
  },
  success: {
    bg: 'bg-status-success-muted',
    border: 'border-status-success/30',
    iconBg: 'bg-status-success/20',
  },
  warning: {
    bg: 'bg-status-warning-muted',
    border: 'border-status-warning/30',
    iconBg: 'bg-status-warning/20',
  },
  destructive: {
    bg: 'bg-destructive/10',
    border: 'border-destructive/30',
    iconBg: 'bg-destructive/20',
  },
  info: {
    bg: 'bg-status-info-muted',
    border: 'border-status-info/30',
    iconBg: 'bg-status-info/20',
  },
}

const trendStyles: Record<TrendDirection, { color: string; Icon: React.ComponentType<{ className?: string }> }> = {
  up: { color: 'text-status-success', Icon: TrendingUp },
  down: { color: 'text-destructive', Icon: TrendingDown },
  neutral: { color: 'text-muted-foreground', Icon: Minus },
}

export function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  variant = 'default',
  className,
  ...props
}: StatCardProps) {
  const styles = variantStyles[variant]
  const trendStyle = trend ? trendStyles[trend.direction] : null

  return (
    <Card
      className={cn(
        "p-4 border",
        styles.bg,
        styles.border,
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-muted-foreground truncate">
            {title}
          </p>
          <p className="text-2xl font-bold text-foreground mt-1">
            {value}
          </p>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">
              {description}
            </p>
          )}
          {trend && trendStyle && (
            <div className={cn("flex items-center gap-1 mt-2", trendStyle.color)}>
              <trendStyle.Icon className="h-3 w-3" />
              <span className="text-xs font-medium">{trend.value}</span>
              {trend.label && (
                <span className="text-xs text-muted-foreground">{trend.label}</span>
              )}
            </div>
          )}
        </div>
        {icon && (
          <div className={cn("p-2 rounded-lg shrink-0", styles.iconBg)}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  )
}

/**
 * StatCardGrid - Responsive grid for stat cards
 */
interface StatCardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  columns?: 2 | 3 | 4 | 5
}

export function StatCardGrid({ 
  children, 
  columns = 4, 
  className, 
  ...props 
}: StatCardGridProps) {
  const colsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 lg:grid-cols-5',
  }[columns]

  return (
    <div 
      className={cn("grid gap-4", colsClass, className)} 
      {...props}
    >
      {children}
    </div>
  )
}
