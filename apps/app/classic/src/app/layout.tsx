import type { ReactNode } from 'react';
import '../../../../../packages/react-component-library/src/styles/globals.css';

export const metadata = {
  title: 'DD Test App',
  description: 'Fixture app for Direct Designer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="base">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  );
}
