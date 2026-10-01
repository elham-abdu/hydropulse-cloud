'use client';

import { useState } from 'react';
import { ShieldAlert, CheckCircle2, Navigation, Wrench, Settings2 } from 'lucide-react';
import type { Incident } from '@/data/mock-pipes';

interface DiagnosticPanelProps {
  incident: Incident | null;
}

export default function DiagnosticPanel({ incident }: DiagnosticPanelProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!incident) {
    return (
      <div className="bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center h-full min-h-[400px]">
        <p className="text-slate-400 text-sm font-medium">Select an assignment from the list to view diagnostics.</p>
      </div>
    );
  }

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checklist = [
    { id: 'c1', text: 'Verify sensor telemetry matches physical gauge' },
    { id: 'c2', text: 'Inspect main valve seals for moisture' },
    { id: 'c3', text: 'Check for surface pooling around pipe coordinates' },
    { id: 'c4', text: 'Test acoustic signature at junction box' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Diagnostic Action Plan</h2>
          <p className="text-sm text-slate-500 mt-1">Incident: {incident.id}</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-sky-50 text-sky-600 hover:bg-sky-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors border border-sky-100">
          <Navigation className="w-4 h-4" /> Get Directions
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-8">
        
        {/* ML Guidance */}
        <div className="bg-slate-800 text-white p-4 rounded-xl shadow-inner relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-slate-700 opacity-20">
            <ShieldAlert className="w-24 h-24" />
          </div>
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <BrainIcon /> AI Diagnostic Insight
          </h3>
          <p className="text-sm text-slate-300">
            ModelArts heuristic anomaly detected. Pressure drop of 12 PSI localized near Valve B. 
            High probability of micro-fracture or seal failure.
          </p>
        </div>

        {/* Checklist */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-slate-400" /> Standard Operating Procedure
          </h3>
          <div className="space-y-2">
            {checklist.map((item) => (
              <label 
                key={item.id} 
                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  checkedItems[item.id] ? 'bg-slate-50 border-slate-200 opacity-70' : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <input 
                  type="checkbox" 
                  className="mt-0.5 w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer"
                  checked={!!checkedItems[item.id]}
                  onChange={() => toggleCheck(item.id)}
                />
                <span className={`text-sm ${checkedItems[item.id] ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}`}>
                  {item.text}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 bg-slate-50 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 px-4 py-3 rounded-xl font-bold text-sm transition-colors shadow-sm">
          <ShieldAlert className="w-5 h-5" /> Emergency Shut-off
        </button>
        <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl font-bold text-sm transition-colors shadow-sm shadow-emerald-500/20">
          <CheckCircle2 className="w-5 h-5" /> Mark as Resolved
        </button>
      </div>
    </div>
  );
}

function BrainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
      <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
      <path d="M6 18a4 4 0 0 1-1.967-.516"/>
      <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
    </svg>
  );
}
