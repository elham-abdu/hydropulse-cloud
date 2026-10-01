'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Map,
  AlertTriangle,
  BarChart3,
  Wrench,
  Settings,
  Droplets,
  ChevronLeft,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Map View', icon: Map, href: '/' },
  { label: 'Incident Log', icon: AlertTriangle, href: '/incidents' },
  { label: 'Director View', icon: BarChart3, href: '/director' },
  { label: 'Technician View', icon: Wrench, href: '/technician' },
  { label: 'About', icon: Layers, href: '/about' },
  { label: 'Settings', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'flex flex-col h-screen bg-[var(--color-sidebar-bg)] transition-all duration-300 ease-in-out',
        collapsed ? 'w-[72px]' : 'w-[260px]'
      )}
    >
      {/* Logo / Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-700/50">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/20">
          <Droplets className="w-5 h-5 text-sky-400" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-[15px] font-bold text-slate-50 leading-tight whitespace-nowrap">
              HydroPulse
            </h1>
            <p className="text-[11px] text-sky-400 font-medium tracking-wide">
              CLOUD
            </p>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-sky-500/15 text-sky-400'
                  : 'text-[var(--color-sidebar-text)] hover:bg-[var(--color-sidebar-hover)] hover:text-slate-200'
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                className={cn(
                  'w-5 h-5 flex-shrink-0',
                  isActive ? 'text-sky-400' : ''
                )}
              />
              {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <div className="px-3 py-2 border-t border-slate-700/50">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-2 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Version Badge */}
      {!collapsed && (
        <div className="px-5 py-3 border-t border-slate-700/50">
          <span className="text-[10px] font-medium text-slate-600 bg-slate-800 px-2 py-1 rounded-full">
            v0.1.0 Beta
          </span>
        </div>
      )}
    </aside>
  );
}
