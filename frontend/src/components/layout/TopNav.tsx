'use client';

import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';
import NotificationDropdown from '@/components/ui/NotificationDropdown';

const pageTitles: Record<string, string> = {
  '/': 'Network Map',
  '/incidents': 'Incident Log',
  '/director': 'Director Dashboard',
  '/technician': 'Technician View',
  '/settings': 'Settings',
};

export default function TopNav() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || 'HydroPulse Cloud';

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200">
      {/* Page Title */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Dropdown */}
        <NotificationDropdown />

        {/* User Avatar */}
        <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
            <User className="w-4 h-4 text-sky-600" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-700">Technician</p>
            <p className="text-[11px] text-slate-400">Addis Ababa</p>
          </div>
        </div>
      </div>
    </header>
  );
}
