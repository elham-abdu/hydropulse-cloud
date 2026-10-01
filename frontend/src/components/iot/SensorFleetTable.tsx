'use client';

import { Battery, Wifi, Activity, Cpu } from 'lucide-react';
import { mockPipes } from '@/data/mock-pipes';

export default function SensorFleetTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800">Huawei IoT Edge Devices</h3>
        <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          Gateway Active
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Sensor ID</th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Location</th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Battery</th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Signal (RSSI)</th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockPipes.map((pipe, index) => {
              // Generate mock hardware data deterministically based on index
              const battery = pipe.status === 'offline' ? 0 : 100 - (index * 7) % 40;
              const signal = pipe.status === 'offline' ? -120 : -50 - (index * 3) % 30;
              const firmware = `v2.${1 + (index % 3)}.4`;

              return (
                <tr key={pipe.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-slate-400" />
                      <div>
                        <p className="text-sm font-bold text-slate-800">{pipe.sensor_id}</p>
                        <p className="text-[10px] text-slate-400 font-mono">FW: {firmware}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-600">
                    {pipe.name}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Battery className={`w-4 h-4 ${battery > 20 ? 'text-emerald-500' : 'text-red-500'}`} />
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${battery > 20 ? 'bg-emerald-500' : 'bg-red-500'}`} 
                          style={{ width: `${battery}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">{battery}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Wifi className={`w-4 h-4 ${signal > -80 ? 'text-sky-500' : 'text-amber-500'}`} />
                      <span className="text-xs font-medium text-slate-600">{signal} dBm</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase border flex w-fit items-center gap-1 ${
                      pipe.status === 'offline' 
                        ? 'bg-slate-100 text-slate-600 border-slate-200' 
                        : 'bg-sky-50 text-sky-600 border-sky-200'
                    }`}>
                      <Activity className="w-3 h-3" />
                      {pipe.status === 'offline' ? 'Offline' : 'Transmitting'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
