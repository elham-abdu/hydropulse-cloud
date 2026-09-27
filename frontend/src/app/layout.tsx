import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HydroPulse Cloud',
  description: 'Smart Water Leak Detection & Management Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
