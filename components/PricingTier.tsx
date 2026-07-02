import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';

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
        border: highlighted ? '2px solid #4f46e5' : '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 24,
        maxWidth: 280,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {highlighted ? <Badge text="Popular" tone="green" /> : null}
      </div>
      <p style={{ fontSize: 32, fontWeight: 700, margin: '16px 0' }}>
        €{price}
        <span style={{ fontSize: 14, fontWeight: 400, color: '#6b7280' }}>/mo</span>
      </p>
      <ul style={{ paddingLeft: 18, color: '#4b5563', fontSize: 14 }}>
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
