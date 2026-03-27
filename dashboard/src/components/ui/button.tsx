// components/ui/Button.tsx
import { Loader2 } from 'lucide-react'
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger' | 'neutral'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  outline?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode

  tint?: boolean
}

// Solid variant classes
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-st-primary text-st-primary-text hover:bg-st-primary-hover hover:border-st-primary-hover',
  secondary:
    'bg-st-secondary text-st-secondary-text  hover:bg-st-secondary-hover hover:border-st-secondary-hover',
  accent: 'bg-st-accent text-st-accent-text hover:bg-st-accent-hover hover:border-st-accent-hover',
  ghost: 'bg-transparent text-st-text hover:bg-[#d9d9d9] hover:text-st-text',
  danger: 'bg-st-danger text-st-danger-text hover:bg-st-danger-hover hover:border-st-danger-hover',
  neutral: 'bg-st-surface text-st-text hover:bg-st-surface/90 hover:text-st-text'
}

const tintVariantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-st-primary/15 text-st-primary-tint-text hover:bg-st-primary hover:text-st-primary-text',
  secondary:
    'bg-st-secondary-tint text-st-secondary-tint-text hover:bg-st-secondary hover:text-st-secondary-text',
  accent: 'bg-st-accent-tint text-st-accent-tint-text hover:bg-st-accent hover:text-st-accent-text',
  ghost:
    'bg-transparent text-st-text border border-st-border hover:bg-[#E7E5DF] hover:text-st-text',
  danger: 'bg-st-danger-tint text-st-danger-tint-text hover:bg-st-danger hover:text-st-danger-text',
  neutral:
    'bg-transparent text-st-text border border-st-border-strong hover:bg-st-surface-raised hover:text-st-text'
}

// Outline variant classes — transparent bg, colored border + text
const outlineVariantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-transparent text-st-primary border border-st-primary hover:bg-st-primary hover:text-st-primary-text',
  secondary:
    'bg-transparent text-st-secondary-text border border-st-secondary hover:bg-st-secondary hover:text-st-secondary-text',
  accent: 'bg-transparent text-st-accent border border-st-accent hover:bg-st-accent hover:text-st-accent-text',
  ghost:
    'bg-transparent text-st-text border border-st-border hover:bg-[#E7E5DF] hover:text-st-text',
  danger:
    'bg-transparent text-st-danger border border-st-danger hover:bg-st-danger hover:text-st-danger-text',
  neutral:
    'bg-transparent text-st-text border border-st-border-strong hover:bg-st-surface-raised hover:text-st-text'
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 text-[12px] h-6.5',
  md: 'px-3 text-[13px] h-8',
  lg: 'px-4 text-[14px] h-9'
}

const spinnerSizeClasses: Record<ButtonSize, string> = {
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'sm',
      loading = false,
      outline = false,
      disabled = false,
      leftIcon,
      rightIcon,
      tint,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    const resolvedVariant = outline
      ? outlineVariantClasses[variant]
      : tint
        ? tintVariantClasses[variant]
        : variantClasses[variant]

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-busy={loading}
        className={[
          'inline-flex items-center gap-1.5 w-fit rounded-sm select-none',
          'focus-visible:outline-black focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:rounded-none',
          'font-[inherit]',
          'transition-colors duration-150',
          'cursor-pointer',
          'disabled:opacity-45 disabled:cursor-not-allowed',
          resolvedVariant,
          sizeClasses[size],
          className
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {loading ? (
          <Loader2 className={`animate-spin ${spinnerSizeClasses[size]}`} />
        ) : leftIcon ? (
          <span className="shrink-0 inline-flex items-center [&>svg]:w-[1em] [&>svg]:h-[1em]">
            {leftIcon}
          </span>
        ) : null}

        {children && <span className={loading ? 'opacity-70' : undefined}>{children}</span>}

        {!loading && rightIcon && (
          <span className="shrink-0 inline-flex items-center [&>svg]:w-[1em] [&>svg]:h-[1em]">
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
