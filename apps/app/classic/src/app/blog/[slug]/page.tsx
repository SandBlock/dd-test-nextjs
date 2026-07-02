import { Badge } from '@dd/rcl';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: 48 }}>
      <Badge text="Blog" tone="neutral" />
      <h1>Post: {params?.slug ?? 'sample-post'}</h1>
      <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
        A dynamic route page. Direct Designer should list this as /blog/[slug].
      </p>
    </main>
  );
}
