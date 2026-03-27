import { type TextareaHTMLAttributes, forwardRef, useId } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  hint?:  string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, className, id: externalId, ...props }, ref) => {
    const generatedId = useId()
    const id = externalId ?? generatedId

    return (
      <div className="flex flex-col gap-[3px]">
        {label && (
          <label htmlFor={id} className="text-[11px] text-st-text font-bold">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={[
            'bg-st-input focus:bg-st-card rounded-sm border border-st-input-border text-st-text text-[13.5px] font-[inherit]',
            'px-2 py-1 outline-none w-full',
            'placeholder:text-st-text-faint',
            'resize-y min-h-20 leading-relaxed',
            'transition-colors duration-100',
            // 'hover:border-st-border-strong',
            'focus:border-st-input-border-focus',
            'disabled:bg-st-surface-raised disabled:text-st-text-faint disabled:cursor-not-allowed',
            error ? 'bg-st-danger-tint!' : 'border-st-border',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
        {error && (
          <span className="text-[11px] text-st-danger">{error}</span>
        )}
        {!error && hint && (
          <span className="text-[11px] text-st-text-faint">{hint}</span>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
