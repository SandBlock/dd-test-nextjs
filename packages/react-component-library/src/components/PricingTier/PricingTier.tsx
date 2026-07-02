import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

interface PricingTierProps {
  /** Name of the plan. */
  name: string;
  /** Monthly price in euros. */
  price: number;
  /** Features included in this plan. */
  features: string[];
  /** Marks the plan designers should notice first. */
  highlighted?: boolean;
}

export function PricingTier({ name, price, features, highlighted = false }: PricingTierProps) {
  return (
    <div
      style={{
        border: highlighted
          ? '2px solid var(--semantic-color-action-default, #8b5cf6)'
          : '1px solid var(--semantic-color-surface-default, #ede9fe)',
        borderRadius: 'var(--sp-radius-lg, 12px)',
        padding: 24,
        maxWidth: 280,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, color: 'var(--semantic-color-text-heading, #4c1d95)' }}>{name}</h3>
        {highlighted ? <Badge text="Popular" tone="action" /> : null}
      </div>
      <p style={{ fontSize: 32, fontWeight: 700, margin: '16px 0' }}>
        €{price}
        <span
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: 'var(--semantic-color-text-muted, #6d28d9)',
          }}
        >
          /mo
        </span>
      </p>
      <ul
        style={{
          paddingLeft: 18,
          color: 'var(--semantic-color-text-muted, #6d28d9)',
          fontSize: 14,
        }}
      >
        {features.map((feature) => (
          <li key={feature} style={{ marginBottom: 6 }}>
            {feature}
          </li>
        ))}
      </ul>
      <Button label="Choose plan" variant={highlighted ? 'primary' : 'secondary'} />
    </div>
  );
}
