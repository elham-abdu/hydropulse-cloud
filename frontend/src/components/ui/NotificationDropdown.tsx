'use client';

import { useState, useRef, useEffect } from 'react';
import { Bell, AlertTriangle, CheckCircle2, Info, Clock } from 'lucide-react';

const mockNotifications = [
  {
    id: '1',
    type: 'critical' as const,
    title: 'Critical Leak Detected',
    message: 'Pipe PIPE-003 near Bole Medhanialem — pressure drop of 18 PSI.',
    time: '2 min ago',
    read: false,
  },
  {
    id: '2',
    type: 'warning' as const,
    title: 'AI Model Alert',
    message: 'ModelArts detected anomaly on PIPE-007 with 87% confidence.',
    time: '15 min ago',
    read: false,
  },
  {
    id: '3',
    type: 'success' as const,
    title: 'Incident Resolved',
    message: 'INC-004 at Megenagna Junction marked resolved by Technician B.',
    time: '1 hr ago',
    read: true,
  },
  {
    id: '4',
    type: 'info' as const,
    title: 'System Update',
    message: 'GaussDB sync completed. 15 sensors reporting normally.',
    time: '3 hr ago',
    read: true,
  },
  {
    id: '5',
    type: 'warning' as const,
    title: 'Sensor Dropout',
    message: 'Sensor SNS-012 at Lideta has gone offline.',
    time: '5 hr ago',
    read: true,
  },
];

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const ref = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const icons = {
    critical: <AlertTriangle className="w-4 h-4 text-red-500" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-500" />,
    success: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
    info: <Info className="w-4 h-4 text-sky-500" />,
  };

  return (
    <div className="relative" ref={ref}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center min-w-[18px] h-[18px] shadow-sm">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50">
          {/* Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <h3 className="font-bold text-slate-800 text-sm">Notifications</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-xs text-sky-600 hover:text-sky-700 font-semibold transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* Notification List */}
          <div className="max-h-96 overflow-y-auto divide-y divide-slate-100">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 hover:bg-slate-50 transition-colors cursor-pointer ${
                  !notif.read ? 'bg-sky-50/50' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">{icons[notif.type]}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm ${!notif.read ? 'font-bold text-slate-800' : 'font-medium text-slate-700'}`}>
                        {notif.title}
                      </p>
                      {!notif.read && (
                        <span className="flex-shrink-0 w-2 h-2 bg-sky-500 rounded-full mt-1.5" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{notif.message}</p>
                    <p className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {notif.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
            <button className="text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors">
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
