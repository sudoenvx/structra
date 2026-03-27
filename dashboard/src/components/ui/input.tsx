import { type InputHTMLAttributes, forwardRef, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, className, id: externalId, ...props }, ref) => {
    const generatedId = useId()
    const id = externalId ?? generatedId

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-[10px] text-st-text font-bold tracking-[0.06em]">
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={[
            'bg-st-input rounded-sm focus:bg-st-card text-st-text text-[13px] font-[inherit]',
            'px-2 py-1 outline-none w-full',
            'placeholder:text-st-text-faint',
            'transition-colors duration-100',
            'border border-st-input-border focus:border-st-input-border-focus',
            'disabled:bg-st-surface-raised disabled:border-st-surface-raised disabled:text-st-text-faint disabled:cursor-not-allowed',
            error ? 'border-st-danger! border placeholder:text-st-muted!' : '',
            className
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />

        {error && <span className="text-[11px] text-st-danger">{error}</span>}
        {!error && hint && <span className="text-[11px] text-st-text-faint">{hint}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
