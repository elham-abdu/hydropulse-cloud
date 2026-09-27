import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'normal':
      return 'text-green-500 bg-green-50 border-green-200';
    case 'warning':
      return 'text-amber-500 bg-amber-50 border-amber-200';
    case 'critical':
      return 'text-red-500 bg-red-50 border-red-200';
    case 'offline':
      return 'text-gray-500 bg-gray-50 border-gray-200';
    default:
      return 'text-slate-500 bg-slate-50 border-slate-200';
  }
}

export function getStatusDot(status: string): string {
  switch (status) {
    case 'normal':
      return 'bg-green-500';
    case 'warning':
      return 'bg-amber-500';
    case 'critical':
      return 'bg-red-500';
    case 'offline':
      return 'bg-gray-400';
    default:
      return 'bg-slate-400';
  }
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'low':
      return 'text-blue-600 bg-blue-50 border-blue-200';
    case 'medium':
      return 'text-amber-600 bg-amber-50 border-amber-200';
    case 'high':
      return 'text-orange-600 bg-orange-50 border-orange-200';
    case 'critical':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-slate-600 bg-slate-50 border-slate-200';
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatPressure(psi: number): string {
  return `${psi.toFixed(1)} PSI`;
}

export function formatFlowRate(m3h: number): string {
  return `${m3h.toFixed(2)} m³/h`;
}

export function formatLeakProbability(probability: number): string {
  return `${(probability * 100).toFixed(0)}%`;
}
