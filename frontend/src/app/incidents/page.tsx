import AppShell from '@/components/layout/AppShell';
import IncidentTable from '@/components/incidents/IncidentTable';

export default function IncidentsPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Incident Log</h2>
          <p className="text-slate-500 mt-1 text-sm">Review, filter, and prioritize active leak alerts and network anomalies.</p>
        </div>
        
        <IncidentTable />
      </div>
    </AppShell>
  );
}
