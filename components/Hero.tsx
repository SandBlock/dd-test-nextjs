import { Button } from '@/components/Button';

interface HeroProps {
  /** Main headline. */
  heading: string;
  /** Supporting sentence under the headline. */
  subheading: string;
  /** Label for the call-to-action button. */
  ctaLabel?: string;
}

export function Hero({ heading, subheading, ctaLabel = 'Get started' }: HeroProps) {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '64px 24px',
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(180deg, #eef2ff 0%, #ffffff 100%)',
      }}
    >
      <h1 style={{ fontSize: 40, margin: 0 }}>{heading}</h1>
      <p style={{ fontSize: 18, color: '#4b5563', margin: '16px 0 32px' }}>{subheading}</p>
      <Button label={ctaLabel} variant="primary" />
    </section>
  );
}
