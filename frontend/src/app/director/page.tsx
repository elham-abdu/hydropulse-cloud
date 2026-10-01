import AppShell from '@/components/layout/AppShell';
import ExecutiveKPIs from '@/components/director/ExecutiveKPIs';
import SavingsChart from '@/components/director/SavingsChart';
import AIRecommendations from '@/components/director/AIRecommendations';

export default function DirectorPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Director Dashboard</h2>
          <p className="text-slate-500 mt-1 text-sm">Regional overview, ROI calculation, and system performance.</p>
        </div>
        
        <ExecutiveKPIs />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SavingsChart />
          </div>
          <div className="lg:col-span-1">
            <AIRecommendations />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
