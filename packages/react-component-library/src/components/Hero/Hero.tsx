import { Button } from '../Button/Button';

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
        background:
          'linear-gradient(180deg, var(--semantic-color-surface-default, #ede9fe) 0%, #ffffff 100%)',
      }}
    >
      <h1
        style={{
          fontSize: 'var(--custom-font-size-hero, 40px)',
          margin: 0,
          color: 'var(--semantic-color-text-heading, #4c1d95)',
        }}
      >
        {heading}
      </h1>
      <p
        style={{
          fontSize: 18,
          color: 'var(--semantic-color-text-muted, #6d28d9)',
          margin: '16px 0 32px',
        }}
      >
        {subheading}
      </p>
      <Button label={ctaLabel} variant="primary" />
    </section>
  );
}
