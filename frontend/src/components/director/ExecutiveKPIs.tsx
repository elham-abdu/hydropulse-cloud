'use client';

import { Droplet, DollarSign, AlertOctagon, BrainCircuit } from 'lucide-react';

export default function ExecutiveKPIs() {
  const kpis = [
    {
      title: 'Total Water Saved',
      value: '124,500 m³',
      trend: '+12% vs last month',
      trendPositive: true,
      icon: Droplet,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      title: 'Est. Financial Impact',
      value: 'Br 5,250,000',
      trend: '+8.5% vs last month',
      trendPositive: true,
      icon: DollarSign,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Active Critical Leaks',
      value: '2',
      trend: '-3 since yesterday',
      trendPositive: true,
      icon: AlertOctagon,
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      title: 'AI Detection Rate',
      value: '94.2%',
      trend: '+1.4% accuracy improvement',
      trendPositive: true,
      icon: BrainCircuit,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div key={kpi.title} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{kpi.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${kpi.bg}`}>
                <Icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-xs font-semibold ${kpi.trendPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
