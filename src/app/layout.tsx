import Layout from '@/components/theme/Layout';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout options={{ key: 'joy' }}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
