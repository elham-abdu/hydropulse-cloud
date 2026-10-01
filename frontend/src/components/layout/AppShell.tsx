'use client';

import Sidebar from './Sidebar';
import TopNav from './TopNav';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation */}
        <TopNav />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[var(--color-bg)]">
          {children}
        </main>
      </div>
    </div>
  );
}
