import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HydroPulse Cloud',
  description: 'Smart Water Leak Detection & Management Platform',
};

import DemoControlPanel from '@/components/demo/DemoControlPanel';
import HydroBot from '@/components/ui/HydroBot';
import { ToastProvider } from '@/components/ui/ToastProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ToastProvider>
          {children}
          <DemoControlPanel />
          <HydroBot />
        </ToastProvider>
      </body>
    </html>
  );
}
