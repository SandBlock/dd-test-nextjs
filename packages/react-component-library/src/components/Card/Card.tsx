import type { ReactNode } from 'react';

interface CardProps {
  /** Heading shown at the top of the card. */
  title: string;
  /** Supporting text under the title. */
  description?: string;
  /** Optional card body content. */
  children?: ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <div
      style={{
        border: '1px solid var(--semantic-color-surface-default, #ede9fe)',
        borderRadius: 'var(--sp-radius-lg, 12px)',
        padding: 24,
        maxWidth: 360,
        fontFamily: 'system-ui, sans-serif',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      }}
    >
      <h3 style={{ margin: 0, fontSize: 18, color: 'var(--semantic-color-text-heading, #4c1d95)' }}>
        {title}
      </h3>
      {description ? (
        <p
          style={{
            color: 'var(--semantic-color-text-muted, #6d28d9)',
            fontSize: 14,
            marginTop: 8,
          }}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
