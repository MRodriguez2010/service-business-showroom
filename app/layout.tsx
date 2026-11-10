import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Industry Showroom · Miguel Systems',
  description:
    'Explore twelve distinctive business websites. Try your colors and logo, browse real pages, and experience the possibilities.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
