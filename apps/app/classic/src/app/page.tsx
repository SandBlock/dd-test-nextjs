import { Hero, Card } from '@dd/rcl';

export default function HomePage() {
  return (
    <main>
      <Hero
        heading="Design without code"
        subheading="See your team's React components come to life, straight from GitHub."
        ctaLabel="Try it now"
      />
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', padding: 32 }}>
        <Card title="Fast" description="Previews load in seconds." />
        <Card title="Safe" description="Nothing changes without a review." />
        <Card title="Familiar" description="Works with the code your team already has." />
      </div>
    </main>
  );
}
