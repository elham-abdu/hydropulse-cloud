import AppShell from '@/components/layout/AppShell';
import SensorFleetTable from '@/components/iot/SensorFleetTable';
import { Cpu } from 'lucide-react';

export default function IotFleetPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-100 rounded-xl">
            <Cpu className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">IoT Edge Devices</h2>
            <p className="text-slate-500 mt-1 text-sm">Monitor hardware health, battery life, and connectivity of remote sensors.</p>
          </div>
        </div>
        
        <SensorFleetTable />
      </div>
    </AppShell>
  );
}
