'use client';

import { MapPin, AlertTriangle, Clock } from 'lucide-react';
import { mockIncidents, type Incident } from '@/data/mock-pipes';
import { formatDate } from '@/lib/utils';

interface ActiveAssignmentsProps {
  selectedId: string | null;
  onSelect: (incident: Incident) => void;
}

export default function ActiveAssignments({ selectedId, onSelect }: ActiveAssignmentsProps) {
  // Filter only active or investigating incidents for the technician
  const assignments = mockIncidents.filter((inc) => inc.status !== 'resolved');

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-bold text-slate-800">My Field Assignments</h3>
        <p className="text-xs text-slate-500 mt-0.5">Dispatched to you ({assignments.length})</p>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {assignments.length === 0 ? (
          <div className="p-4 text-center text-sm text-slate-500">No active assignments.</div>
        ) : (
          assignments.map((inc) => (
            <button
              key={inc.id}
              onClick={() => onSelect(inc)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedId === inc.id
                  ? 'bg-sky-50 border-sky-200 ring-1 ring-sky-500'
                  : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${
                  inc.severity === 'critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {inc.severity}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {formatDate(inc.created_at)}
                </span>
              </div>
              <h4 className="font-bold text-slate-800">{inc.pipe_name}</h4>
              <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5" /> {inc.pipe_id}
              </p>
              
              {inc.leak_probability > 0.8 && (
                <div className="mt-3 text-xs flex items-center gap-1.5 text-red-600 bg-red-50 p-2 rounded border border-red-100">
                  <AlertTriangle className="w-3.5 h-3.5" /> High AI Confidence
                </div>
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
