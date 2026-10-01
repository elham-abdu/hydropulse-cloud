import AppShell from '@/components/layout/AppShell';
import ExecutiveKPIs from '@/components/director/ExecutiveKPIs';
import SavingsChart from '@/components/director/SavingsChart';

export default function DirectorPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Director Dashboard</h2>
          <p className="text-slate-500 mt-1 text-sm">Regional overview, ROI calculation, and system performance.</p>
        </div>
        
        <ExecutiveKPIs />
        <SavingsChart />
      </div>
    </AppShell>
  );
}
