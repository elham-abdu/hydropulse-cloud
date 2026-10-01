'use client';

import { useState } from 'react';
import { Bell, Moon, Sun, Globe, Shield, User } from 'lucide-react';

export default function SettingsForm() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [autoRefresh, setAutoRefresh] = useState(true);

  const Toggle = ({ enabled, onChange, label, description, icon: Icon }: {
    enabled: boolean;
    onChange: (val: boolean) => void;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-100 rounded-lg mt-0.5">
          <Icon className="w-4 h-4 text-slate-600" />
        </div>
        <div>
          <p className="font-medium text-slate-800 text-sm">{label}</p>
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        </div>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-sky-500' : 'bg-slate-300'
        }`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-slate-400" /> Profile
        </h3>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-xl">
            GT
          </div>
          <div>
            <p className="font-bold text-slate-800">Gemechu T.</p>
            <p className="text-sm text-slate-500">Frontend Engineer • Person A</p>
            <p className="text-xs text-slate-400 mt-1">gemechu@hydropulse.dev</p>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Bell className="w-4 h-4 text-slate-400" /> Notifications
        </h3>
        <Toggle
          enabled={notifications}
          onChange={setNotifications}
          label="Push Notifications"
          description="Receive browser push alerts for critical leak detections"
          icon={Bell}
        />
        <Toggle
          enabled={emailAlerts}
          onChange={setEmailAlerts}
          label="Email Alerts"
          description="Get daily incident summary reports via email"
          icon={Shield}
        />
        <Toggle
          enabled={autoRefresh}
          onChange={setAutoRefresh}
          label="Auto-Refresh Telemetry"
          description="Auto-poll sensor data every 30 seconds"
          icon={Globe}
        />
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
          {darkMode ? <Moon className="w-4 h-4 text-slate-400" /> : <Sun className="w-4 h-4 text-slate-400" />} Appearance
        </h3>
        <Toggle
          enabled={darkMode}
          onChange={setDarkMode}
          label="Dark Mode"
          description="Switch between light and dark themes"
          icon={Moon}
        />
        <div className="flex items-center justify-between py-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-slate-100 rounded-lg mt-0.5">
              <Globe className="w-4 h-4 text-slate-600" />
            </div>
            <div>
              <p className="font-medium text-slate-800 text-sm">Language</p>
              <p className="text-xs text-slate-500 mt-0.5">Choose your preferred display language</p>
            </div>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-sm border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ (Amharic)</option>
            <option value="om">Afaan Oromoo</option>
          </select>
        </div>
      </div>
    </div>
  );
}
