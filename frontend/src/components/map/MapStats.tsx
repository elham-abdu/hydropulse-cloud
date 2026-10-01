'use client';

import { Activity, CheckCircle2, AlertTriangle, AlertOctagon } from 'lucide-react';
import type { PipeNode } from '@/data/mock-pipes';

interface MapStatsProps {
  pipes: PipeNode[];
}

export default function MapStats({ pipes }: MapStatsProps) {
  const total = pipes.length;
  const normal = pipes.filter((p) => p.status === 'normal').length;
  const warnings = pipes.filter((p) => p.status === 'warning').length;
  const critical = pipes.filter((p) => p.status === 'critical').length;

  const stats = [
    {
      label: 'Total Pipes',
      value: total,
      icon: Activity,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      iconBg: 'bg-sky-100',
    },
    {
      label: 'Normal',
      value: normal,
      icon: CheckCircle2,
      color: 'text-green-600',
      bg: 'bg-green-50',
      iconBg: 'bg-green-100',
    },
    {
      label: 'Warnings',
      value: warnings,
      icon: AlertTriangle,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      iconBg: 'bg-amber-100',
    },
    {
      label: 'Critical',
      value: critical,
      icon: AlertOctagon,
      color: 'text-red-600',
      bg: 'bg-red-50',
      iconBg: 'bg-red-100',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg ${stat.iconBg}`}
            >
              <Icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
