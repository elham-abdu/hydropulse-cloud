'use client';

import { usePathname } from 'next/navigation';
import { Bell, User } from 'lucide-react';

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
        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
            3
          </span>
        </button>

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
