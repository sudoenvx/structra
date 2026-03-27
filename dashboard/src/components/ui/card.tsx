import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'light' | 'dark' | 'secondary'
}

export function Card({
  children,
  className = '',
  variant = 'default',
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'bg-st-card',
    secondary: 'bg-st-card-secondary text-st-text',
    light: 'bg-st-surface',
    dark: 'bg-st-surface-dark'
  }

  return (
    <div className={`${variantStyles[variant]} px-2 py-2 rounded-sm ${className}`} {...props}>
      {children}
    </div>
  )
}
