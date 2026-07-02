import type { ReactNode } from 'react';

export const metadata = {
  title: 'DD Test App',
  description: 'Fixture app for Direct Designer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  );
}
