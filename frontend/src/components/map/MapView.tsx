'use client';

import dynamic from 'next/dynamic';
import type { PipeNode } from '@/data/mock-pipes';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-slate-100 rounded-xl">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-slate-400 text-sm">Loading map...</p>
      </div>
    </div>
  ),
});

interface MapViewProps {
  pipes: PipeNode[];
  onPipeClick?: (pipe: PipeNode) => void;
}

export default function MapView({ pipes, onPipeClick }: MapViewProps) {
  return (
    <div className="h-[calc(100vh-12rem)] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
      <LeafletMap pipes={pipes} onPipeClick={onPipeClick} />
    </div>
  );
}
