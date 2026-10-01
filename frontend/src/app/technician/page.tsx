'use client';

import { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import ActiveAssignments from '@/components/technician/ActiveAssignments';
import DiagnosticPanel from '@/components/technician/DiagnosticPanel';
import type { Incident } from '@/data/mock-pipes';

export default function TechnicianPage() {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

  return (
    <AppShell>
      <div className="p-4 md:p-6 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col space-y-4 md:space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Technician Dashboard</h2>
          <p className="text-slate-500 mt-1 text-sm">Review active field assignments and submit diagnostic reports.</p>
        </div>
        
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden">
          {/* Left Column: Assignment List */}
          <div className="w-full lg:w-1/3 lg:min-w-[350px] h-1/2 lg:h-full">
            <ActiveAssignments 
              selectedId={selectedIncident?.id || null} 
              onSelect={setSelectedIncident} 
            />
          </div>

          {/* Right Column: Diagnostic Action Plan */}
          <div className="w-full lg:flex-1 h-1/2 lg:h-full pb-4 lg:pb-0">
            <DiagnosticPanel incident={selectedIncident} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
