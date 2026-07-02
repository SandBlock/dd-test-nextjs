interface BadgeProps {
  /** Short text shown inside the badge. */
  text: string;
  /** Color theme of the badge. */
  tone?: 'green' | 'yellow' | 'red' | 'gray';
}

const TONES: Record<string, { background: string; color: string }> = {
  green: { background: '#dcfce7', color: '#166534' },
  yellow: { background: '#fef9c3', color: '#854d0e' },
  red: { background: '#fee2e2', color: '#991b1b' },
  gray: { background: '#f3f4f6', color: '#374151' },
};

export function Badge({ text, tone = 'gray' }: BadgeProps) {
  const palette = TONES[tone] ?? TONES.gray;
  return (
    <span
      style={{
        ...palette,
        borderRadius: 999,
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
