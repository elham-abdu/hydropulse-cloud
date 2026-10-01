'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', projectedLoss: 4000, actualLoss: 4000 },
  { month: 'Feb', projectedLoss: 4100, actualLoss: 3800 },
  { month: 'Mar', projectedLoss: 4200, actualLoss: 3100 },
  { month: 'Apr', projectedLoss: 4300, actualLoss: 2400 },
  { month: 'May', projectedLoss: 4400, actualLoss: 1800 },
  { month: 'Jun', projectedLoss: 4500, actualLoss: 1200 },
];

export default function SavingsChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800">Non-Revenue Water (NRW) Reduction</h3>
        <p className="text-sm text-slate-500">Projected water loss vs actual loss after HydroPulse AI implementation.</p>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#94A3B8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} tickMargin={10} />
            <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Area 
              type="monotone" 
              dataKey="projectedLoss" 
              name="Projected Loss (Without AI)" 
              stroke="#94A3B8" 
              fillOpacity={1} 
              fill="url(#colorProjected)" 
              strokeDasharray="5 5"
            />
            <Area 
              type="monotone" 
              dataKey="actualLoss" 
              name="Actual Loss (With AI)" 
              stroke="#0EA5E9" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorActual)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
