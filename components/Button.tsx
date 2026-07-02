'use client';

interface ButtonProps {
  /** Text shown inside the button. */
  label: string;
  /** Visual style of the button. */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Called when the button is clicked. */
  onClick?: () => void;
}

const COLORS: Record<string, { background: string; color: string }> = {
  primary: { background: '#4f46e5', color: '#ffffff' },
  secondary: { background: '#e5e7eb', color: '#111827' },
  danger: { background: '#dc2626', color: '#ffffff' },
};

export function Button({ label, variant = 'primary', onClick }: ButtonProps) {
  const palette = COLORS[variant] ?? COLORS.primary;
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...palette,
        border: 'none',
        borderRadius: 8,
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
