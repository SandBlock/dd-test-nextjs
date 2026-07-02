import { PricingTier } from '@/components/PricingTier';

export default function PricingPage() {
  return (
    <main style={{ padding: 48 }}>
      <h1 style={{ textAlign: 'center' }}>Pricing</h1>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 32 }}>
        <PricingTier name="Starter" price={9} features={['1 project', 'Community support']} />
        <PricingTier
          name="Team"
          price={29}
          features={['10 projects', 'Priority support', 'Design branches']}
          highlighted
        />
        <PricingTier
          name="Enterprise"
          price={99}
          features={['Unlimited projects', 'SSO', 'Dedicated support']}
        />
      </div>
    </main>
  );
}
