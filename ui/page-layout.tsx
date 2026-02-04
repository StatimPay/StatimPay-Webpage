'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * PageContainer - Root container for page content
 * Provides consistent padding and flex layout
 */
interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function PageContainer({ className, children, ...props }: PageContainerProps) {
  return (
    <div 
      className={cn("flex flex-1 flex-col overflow-hidden", className)} 
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * PageHeader - Standardized page header with title, description, and actions
 */
interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  badge?: React.ReactNode
  actions?: React.ReactNode
}

export function PageHeader({ 
  title, 
  description, 
  badge, 
  actions, 
  className, 
  ...props 
}: PageHeaderProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-between border-b border-border bg-card px-6 py-4 shrink-0",
        className
      )} 
      {...props}
    >
      <div className="flex items-center gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-foreground">{title}</h1>
            {badge}
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
      </div>
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  )
}

/**
 * PageToolbar - Secondary toolbar below header for filters, selectors, etc.
 */
interface PageToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function PageToolbar({ className, children, ...props }: PageToolbarProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-between border-b border-border bg-muted/30 px-6 py-3 shrink-0",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * PageContent - Main content area with standard padding and gap
 */
interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function PageContent({ className, children, ...props }: PageContentProps) {
  return (
    <div 
      className={cn(
        "flex flex-1 gap-6 overflow-hidden p-6",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * PageMainContent - Primary content column (flex-1)
 */
interface PageMainContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function PageMainContent({ className, children, ...props }: PageMainContentProps) {
  return (
    <div 
      className={cn(
        "flex flex-1 flex-col gap-4 min-w-0 overflow-hidden",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * PageSidebar - Fixed-width sidebar for secondary content
 */
interface PageSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  width?: string
}

export function PageSidebar({ className, children, width = "w-80", ...props }: PageSidebarProps) {
  return (
    <div 
      className={cn(
        "shrink-0 overflow-auto",
        width,
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}
