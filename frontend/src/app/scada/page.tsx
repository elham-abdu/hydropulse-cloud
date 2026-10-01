'use client';

import AppShell from '@/components/layout/AppShell';
import { Activity, Droplets, ArrowRightCircle } from 'lucide-react';

export default function ScadaPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Digital Twin (SCADA)</h2>
            <p className="text-slate-500 mt-1 text-sm">Real-time schematic of Legedadi Pumping Station Alpha.</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> Live Remote Control Active
            </span>
          </div>
        </div>

        {/* SCADA Schematic Canvas */}
        <div className="flex-1 bg-slate-900 rounded-2xl border-4 border-slate-800 p-8 relative overflow-hidden flex flex-col justify-center shadow-2xl">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 max-w-4xl w-full mx-auto flex items-center justify-between">
            
            {/* Input Tank */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-40 border-4 border-slate-600 rounded-t-xl rounded-b-md relative bg-slate-800 overflow-hidden flex items-end">
                {/* Animated Water Level */}
                <div className="w-full bg-cyan-500/50 h-[70%] border-t-2 border-cyan-400 relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-cyan-300/30" />
                </div>
              </div>
              <div className="mt-4 bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-center">
                <p className="text-[10px] text-slate-400 font-mono">TNK-01 LEVEL</p>
                <p className="text-xl font-mono text-cyan-400 font-bold">72.4%</p>
              </div>
            </div>

            {/* Pipe Segment 1 */}
            <div className="flex-1 h-4 bg-slate-700 relative overflow-hidden border-y-2 border-slate-600">
              <div className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(6,182,212,0.2)_10px,rgba(6,182,212,0.2)_20px)] animate-[flow_1s_linear_infinite]" />
            </div>

            {/* Main Pump */}
            <div className="flex flex-col items-center relative">
              <div className="w-24 h-24 rounded-full border-4 border-slate-600 bg-slate-800 flex items-center justify-center relative shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <Activity className="w-10 h-10 text-emerald-400 animate-spin-slow" />
                
                {/* Pressure Gauge */}
                <div className="absolute -top-12 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-center whitespace-nowrap">
                  <p className="text-[10px] text-slate-400 font-mono">OUT PRESSURE</p>
                  <p className="text-lg font-mono text-emerald-400 font-bold">84.2 PSI</p>
                </div>
              </div>
              
              {/* Pump Control */}
              <div className="mt-4 flex gap-2 bg-slate-800 p-1.5 rounded-lg border border-slate-700">
                <button className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 px-3 py-1 rounded text-xs font-bold border border-emerald-500/50">ON</button>
                <button className="text-slate-500 hover:bg-slate-700 px-3 py-1 rounded text-xs font-bold">OFF</button>
              </div>
            </div>

            {/* Pipe Segment 2 */}
            <div className="flex-1 h-4 bg-slate-700 relative overflow-hidden border-y-2 border-slate-600">
              <div className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(6,182,212,0.2)_10px,rgba(6,182,212,0.2)_20px)] animate-[flow_1s_linear_infinite]" />
            </div>

            {/* Output Node / City Grid */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-40 border-l-4 border-y-4 border-slate-600 rounded-l-xl bg-slate-800 flex items-center justify-center relative">
                <ArrowRightCircle className="w-8 h-8 text-slate-500" />
                
                {/* Flow Rate Gauge */}
                <div className="absolute -right-4 -bottom-12 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-center whitespace-nowrap z-20">
                  <p className="text-[10px] text-slate-400 font-mono">FLOW RATE</p>
                  <p className="text-lg font-mono text-cyan-400 font-bold">420 m³/h</p>
                </div>
              </div>
            </div>

          </div>

          {/* Legend */}
          <div className="absolute bottom-6 left-6 bg-slate-800/80 backdrop-blur border border-slate-700 p-3 rounded-xl flex gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-cyan-500/50 rounded-full"/> Normal Flow</span>
            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500/50 rounded-full"/> Pressure Drop</span>
            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500/50 rounded-full"/> Pump Active</span>
          </div>
        </div>

        {/* Global Styles for Animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes flow {
            from { background-position: 0 0; }
            to { background-position: 28px 0; }
          }
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
        `}} />
      </div>
    </AppShell>
  );
}
