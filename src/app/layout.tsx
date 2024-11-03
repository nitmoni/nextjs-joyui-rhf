import Layout from '@/components/theme/Layout';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
