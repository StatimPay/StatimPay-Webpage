'use client'

import * as React from 'react'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

/**
 * DataTableContainer - Card wrapper for data tables with consistent styling
 */
interface DataTableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DataTableContainer({ className, children, ...props }: DataTableContainerProps) {
  return (
    <Card className={cn("flex flex-col overflow-hidden", className)} {...props}>
      {children}
    </Card>
  )
}

/**
 * DataTableHeader - Header area for table title, filters, actions
 */
interface DataTableHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DataTableHeader({ className, children, ...props }: DataTableHeaderProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b border-border shrink-0",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * DataTableContent - Scrollable table content area
 */
interface DataTableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DataTableContent({ className, children, ...props }: DataTableContentProps) {
  return (
    <div className={cn("flex-1 overflow-auto", className)} {...props}>
      {children}
    </div>
  )
}

/**
 * DataTableFooter - Footer area for pagination, summary info
 */
interface DataTableFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DataTableFooter({ className, children, ...props }: DataTableFooterProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-between px-4 py-3 border-t border-border bg-muted/30 shrink-0",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * SelectableTableRow - Table row with checkbox selection support
 */
interface SelectableTableRowProps extends Omit<React.HTMLAttributes<HTMLTableRowElement>, 'onSelect'> {
  selected?: boolean
  onSelect?: (selected: boolean) => void
  children: React.ReactNode
}

export function SelectableTableRow({ 
  selected = false, 
  onSelect, 
  className, 
  children, 
  ...props 
}: SelectableTableRowProps) {
  return (
    <TableRow
      className={cn(
        "cursor-pointer transition-colors",
        selected && "bg-primary/5",
        className
      )}
      data-state={selected ? "selected" : undefined}
      {...props}
    >
      {onSelect && (
        <TableCell className="w-[50px] pl-4">
          <Checkbox
            checked={selected}
            onCheckedChange={onSelect}
            onClick={(e) => e.stopPropagation()}
            aria-label="Select row"
          />
        </TableCell>
      )}
      {children}
    </TableRow>
  )
}

/**
 * SelectAllHeader - Table header cell with select all checkbox
 */
interface SelectAllHeaderProps extends React.HTMLAttributes<HTMLTableCellElement> {
  checked: boolean | 'indeterminate'
  onCheckedChange: (checked: boolean) => void
}

export function SelectAllHeader({ 
  checked, 
  onCheckedChange, 
  className, 
  ...props 
}: SelectAllHeaderProps) {
  return (
    <TableHead className={cn("w-[50px] pl-4", className)} {...props}>
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label="Select all"
      />
    </TableHead>
  )
}

/**
 * EmptyState - Display when table has no data
 */
interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}

export function EmptyState({ 
  icon, 
  title, 
  description, 
  action, 
  className, 
  ...props 
}: EmptyStateProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center py-12 px-4 text-center",
        className
      )} 
      {...props}
    >
      {icon && (
        <div className="mb-4 text-muted-foreground">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">{description}</p>
      )}
      {action && (
        <div className="mt-4">{action}</div>
      )}
    </div>
  )
}

// Re-export base table components for convenience
export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow }
