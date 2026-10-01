'use client';

import { useState } from 'react';
import { Zap, Bug, WifiOff, RotateCcw, ChevronUp, ChevronDown } from 'lucide-react';

export default function DemoControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [leakTriggered, setLeakTriggered] = useState(false);
  const [mlOutage, setMlOutage] = useState(false);
  const [sensorOffline, setSensorOffline] = useState(false);

  const handleTriggerLeak = () => {
    setLeakTriggered(true);
    // TODO: When backend is ready, POST to /api/demo/trigger-leak
    setTimeout(() => setLeakTriggered(false), 5000);
  };

  const handleMLOutage = () => {
    setMlOutage(!mlOutage);
    // TODO: When backend is ready, POST to /api/demo/toggle-ml
  };

  const handleSensorOffline = () => {
    setSensorOffline(!sensorOffline);
    // TODO: When backend is ready, POST to /api/demo/toggle-sensor
  };

  const handleReset = () => {
    setLeakTriggered(false);
    setMlOutage(false);
    setSensorOffline(false);
    // TODO: When backend is ready, POST to /api/demo/reset
  };

  return (
    <div className="fixed bottom-4 right-4 z-[1000]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-slate-800 transition-colors text-sm font-semibold"
      >
        <Zap className="w-4 h-4 text-yellow-400" />
        Demo Controls
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-80 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-700">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" /> Live Demo Control Panel
            </h3>
            <p className="text-xs text-slate-400 mt-1">For hackathon pitch use only.</p>
          </div>

          <div className="p-4 space-y-3">
            {/* Trigger Synthetic Leak */}
            <button
              onClick={handleTriggerLeak}
              disabled={leakTriggered}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                leakTriggered
                  ? 'bg-red-900/30 border-red-700 text-red-300'
                  : 'bg-slate-800 border-slate-700 hover:border-red-500 hover:bg-red-900/20'
              }`}
            >
              <Bug className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">{leakTriggered ? '🔴 Leak Active!' : 'Trigger Synthetic Leak'}</p>
                <p className="text-xs text-slate-400">Simulates a critical pipe burst event</p>
              </div>
            </button>

            {/* Toggle ML Outage */}
            <button
              onClick={handleMLOutage}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                mlOutage
                  ? 'bg-amber-900/30 border-amber-700 text-amber-300'
                  : 'bg-slate-800 border-slate-700 hover:border-amber-500 hover:bg-amber-900/20'
              }`}
            >
              <WifiOff className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">{mlOutage ? '⚠️ ML Offline (Heuristic Mode)' : 'Simulate ML Outage'}</p>
                <p className="text-xs text-slate-400">Shows heuristic fallback behavior</p>
              </div>
            </button>

            {/* Toggle Sensor Offline */}
            <button
              onClick={handleSensorOffline}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                sensorOffline
                  ? 'bg-gray-700 border-gray-600 text-gray-300'
                  : 'bg-slate-800 border-slate-700 hover:border-gray-500 hover:bg-gray-800'
              }`}
            >
              <WifiOff className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">{sensorOffline ? '🔘 Sensor Offline' : 'Simulate Sensor Dropout'}</p>
                <p className="text-xs text-slate-400">Takes a sensor node offline</p>
              </div>
            </button>
          </div>

          {/* Reset */}
          <div className="p-4 border-t border-slate-700">
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Reset All to Normal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
