'use client';

import { X, Activity, Droplets, Calendar, Wrench } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import type { PipeNode } from '@/data/mock-pipes';
import { mockTelemetryData } from '@/data/mock-pipes';
import { getStatusColor, getStatusDot, formatPressure, formatFlowRate, formatLeakProbability } from '@/lib/utils';

interface PipeDetailPanelProps {
  pipe: PipeNode | null;
  onClose: () => void;
}

export default function PipeDetailPanel({ pipe, onClose }: PipeDetailPanelProps) {
  if (!pipe) return null;

  // Format telemetry data for the charts (extract time for X axis)
  const chartData = mockTelemetryData.map((d) => ({
    ...d,
    time: new Date(d.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  }));

  return (
    <>
      {/* Backdrop for mobile (optional, mostly for focus) */}
      <div 
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[400] lg:hidden transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[500] border-l border-slate-200 flex flex-col transform transition-transform duration-300 ease-in-out overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div>
            <h2 className="text-xl font-bold text-slate-800">{pipe.name}</h2>
            <p className="text-xs font-mono text-slate-500 mt-0.5">{pipe.id} • {pipe.sensor_id}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* Status & Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`col-span-2 p-3 rounded-lg border flex items-center justify-between ${getStatusColor(pipe.status)}`}>
              <span className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${getStatusDot(pipe.status)} animate-pulse`} />
                Current Status
              </span>
              <span className="font-bold uppercase">{pipe.status}</span>
            </div>
            
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
              <p className="text-xs text-slate-500 mb-1 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> Pressure</p>
              <p className="text-lg font-bold text-slate-800">{formatPressure(pipe.pressure_psi)}</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
              <p className="text-xs text-slate-500 mb-1 flex items-center gap-1.5"><Droplets className="w-3.5 h-3.5" /> Flow Rate</p>
              <p className="text-lg font-bold text-slate-800">{formatFlowRate(pipe.flow_rate_m3h)}</p>
            </div>
          </div>

          {/* AI Leak Probability */}
          {pipe.leak_probability > 0 && (
            <div className="p-4 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-sky-900">AI Leak Probability</p>
                <p className="text-xs text-sky-700 mt-0.5">ModelArts Confidence Score</p>
              </div>
              <div className="text-2xl font-black text-sky-600">
                {formatLeakProbability(pipe.leak_probability)}
              </div>
            </div>
          )}

          {/* Charts Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Telemetry History (24h)</h3>
            
            {/* Pressure Chart */}
            <div className="h-48">
              <p className="text-xs font-semibold text-slate-500 mb-2 flex justify-between">
                <span>Pressure (PSI)</span>
                <span className="text-slate-400 font-normal">Target: 50 PSI</span>
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#64748B' }} tickMargin={10} minTickGap={30} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748B' }} domain={['dataMin - 5', 'dataMax + 5']} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    labelStyle={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}
                    itemStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                  />
                  <ReferenceLine y={50} stroke="#94A3B8" strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="pressure_psi" name="Pressure" stroke="#0EA5E9" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#0EA5E9' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Flow Rate Chart */}
            <div className="h-48 pt-4">
              <p className="text-xs font-semibold text-slate-500 mb-2 flex justify-between">
                <span>Flow Rate (m³/h)</span>
                <span className="text-slate-400 font-normal">Target: 5.0 m³/h</span>
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#64748B' }} tickMargin={10} minTickGap={30} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748B' }} domain={[0, 'dataMax + 2']} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    labelStyle={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}
                    itemStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                  />
                  <Line type="monotone" dataKey="flow_rate_m3h" name="Flow Rate" stroke="#8B5CF6" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#8B5CF6' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Details & Maintenance */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 pb-1">Asset Information</h3>
            <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Material</span>
                <span className="font-medium text-slate-700">{pipe.material}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Installed</span>
                <span className="font-medium text-slate-700">{pipe.install_date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-1.5"><Wrench className="w-3.5 h-3.5" /> Maintained</span>
                <span className="font-medium text-slate-700">{pipe.last_maintenance}</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Actions Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex gap-3">
          <button className="flex-1 bg-white border border-slate-300 text-slate-700 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors">
            Diagnostic Run
          </button>
          <button className="flex-1 bg-sky-500 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-sky-600 transition-colors shadow-sm shadow-sky-500/30">
            Create Incident
          </button>
        </div>

      </div>
    </>
  );
}
