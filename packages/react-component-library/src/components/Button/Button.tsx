'use client';

interface ButtonProps {
  /** Text shown inside the button. */
  label: string;
  /** Visual style of the button. */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Called when the button is clicked. */
  onClick?: () => void;
}

const VARIANT_STYLE: Record<
  NonNullable<ButtonProps['variant']>,
  { background: string; color: string }
> = {
  primary: {
    background: 'var(--semantic-color-action-default, #8b5cf6)',
    color: 'var(--semantic-color-action-foreground, #ffffff)',
  },
  secondary: {
    background: 'var(--semantic-color-surface-default, #ede9fe)',
    color: 'var(--semantic-color-text-heading, #4c1d95)',
  },
  danger: {
    background: 'var(--semantic-color-danger-default, #dc2626)',
    color: 'var(--semantic-color-danger-foreground, #ffffff)',
  },
};

export function Button({ label, variant = 'primary', onClick }: ButtonProps) {
  const palette = VARIANT_STYLE[variant] ?? VARIANT_STYLE.primary;
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...palette,
        border: 'none',
        borderRadius: 'var(--sp-radius-md, 8px)',
        padding: '10px 20px',
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}
