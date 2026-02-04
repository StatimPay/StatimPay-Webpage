'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileEdit,
  Lock,
  Send,
  Loader2,
} from 'lucide-react'

type StatusType = 
  | 'draft' 
  | 'published' 
  | 'locked' 
  | 'pending' 
  | 'approved' 
  | 'rejected' 
  | 'exception'
  | 'in-progress'
  | 'completed'
  | 'not-started'

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType
  showIcon?: boolean
  size?: 'sm' | 'default'
}

const statusConfig: Record<StatusType, {
  label: string
  className: string
  Icon: React.ComponentType<{ className?: string }>
}> = {
  draft: {
    label: 'Draft',
    className: 'bg-rota-draft-muted text-rota-draft border-rota-draft/30',
    Icon: FileEdit,
  },
  published: {
    label: 'Published',
    className: 'bg-rota-published-muted text-rota-published border-rota-published/30',
    Icon: Send,
  },
  locked: {
    label: 'Locked',
    className: 'bg-rota-locked-muted text-rota-locked border-rota-locked/30',
    Icon: Lock,
  },
  pending: {
    label: 'Pending',
    className: 'bg-status-warning-muted text-status-warning-foreground border-status-warning/30',
    Icon: Clock,
  },
  approved: {
    label: 'Approved',
    className: 'bg-status-success-muted text-status-success border-status-success/30',
    Icon: CheckCircle2,
  },
  rejected: {
    label: 'Rejected',
    className: 'bg-destructive/10 text-destructive border-destructive/30',
    Icon: XCircle,
  },
  exception: {
    label: 'Exception',
    className: 'bg-destructive/10 text-destructive border-destructive/30',
    Icon: AlertTriangle,
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-status-info-muted text-status-info border-status-info/30',
    Icon: Loader2,
  },
  completed: {
    label: 'Completed',
    className: 'bg-status-success-muted text-status-success border-status-success/30',
    Icon: CheckCircle2,
  },
  'not-started': {
    label: 'Not Started',
    className: 'bg-muted text-muted-foreground border-border',
    Icon: Clock,
  },
}

export function StatusBadge({ 
  status, 
  showIcon = true, 
  size = 'default',
  className, 
  ...props 
}: StatusBadgeProps) {
  const config = statusConfig[status]
  const sizeClass = size === 'sm' ? 'h-5 text-xs px-1.5' : 'h-6 text-xs px-2'
  const iconSize = size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5'

  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1 font-medium border",
        sizeClass,
        config.className,
        className
      )}
      {...props}
    >
      {showIcon && <config.Icon className={cn(iconSize, status === 'in-progress' && 'animate-spin')} />}
      {config.label}
    </Badge>
  )
}

/**
 * DepartmentBadge - Badge for department/role identification
 */
type DepartmentType = 'bar' | 'kitchen' | 'floor'

interface DepartmentBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  department: DepartmentType
  size?: 'sm' | 'default'
}

const deptConfig: Record<DepartmentType, { label: string; className: string }> = {
  bar: {
    label: 'Bar',
    className: 'bg-dept-bar-muted text-dept-bar border-dept-bar/30',
  },
  kitchen: {
    label: 'Kitchen',
    className: 'bg-dept-kitchen-muted text-dept-kitchen border-dept-kitchen/30',
  },
  floor: {
    label: 'Floor',
    className: 'bg-dept-floor-muted text-dept-floor border-dept-floor/30',
  },
}

export function DepartmentBadge({ 
  department, 
  size = 'default',
  className, 
  ...props 
}: DepartmentBadgeProps) {
  const config = deptConfig[department]
  const sizeClass = size === 'sm' ? 'h-5 text-xs px-1.5' : 'h-6 text-xs px-2'

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium border",
        sizeClass,
        config.className,
        className
      )}
      {...props}
    >
      {config.label}
    </Badge>
  )
}
