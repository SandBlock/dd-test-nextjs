import { Badge } from '@dd/rcl';

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: 48 }}>
      <Badge text="About us" tone="action" />
      <h1>We build tools for designers</h1>
      <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
        This is a fixture page used to test Direct Designer&apos;s page detection and live
        preview. It renders plain presentational components with no data fetching.
      </p>
    </main>
  );
}
