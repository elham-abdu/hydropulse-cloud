import AppShell from '@/components/layout/AppShell';
import SettingsForm from '@/components/settings/SettingsForm';

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
          <p className="text-slate-500 mt-1 text-sm">Manage your preferences, notifications, and account.</p>
        </div>
        
        <SettingsForm />
      </div>
    </AppShell>
  );
}
