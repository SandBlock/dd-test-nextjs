interface BadgeProps {
  /** Short text shown inside the badge. */
  text: string;
  /** Color theme of the badge. */
  tone?: 'action' | 'danger' | 'neutral';
}

const TONE_STYLE: Record<NonNullable<BadgeProps['tone']>, { background: string; color: string }> = {
  action: {
    background: 'var(--semantic-color-surface-default, #ede9fe)',
    color: 'var(--semantic-color-text-heading, #4c1d95)',
  },
  danger: {
    background: '#fee2e2',
    color: 'var(--semantic-color-danger-default, #dc2626)',
  },
  neutral: {
    background: '#f3f4f6',
    color: '#374151',
  },
};

export function Badge({ text, tone = 'neutral' }: BadgeProps) {
  const palette = TONE_STYLE[tone] ?? TONE_STYLE.neutral;
  return (
    <span
      style={{
        ...palette,
        borderRadius: 'var(--sp-radius-full, 999px)',
        padding: '2px 10px',
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-block',
      }}
    >
      {text}
    </span>
  );
}
