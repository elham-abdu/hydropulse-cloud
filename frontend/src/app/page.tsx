'use client';

import { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
import MapView from '@/components/map/MapView';
import MapStats from '@/components/map/MapStats';
import PipeDetailPanel from '@/components/map/PipeDetailPanel';
import { mockPipes, type PipeNode } from '@/data/mock-pipes';

export default function MapPage() {
  const [selectedPipe, setSelectedPipe] = useState<PipeNode | null>(null);

  return (
    <AppShell>
      <div className="relative flex flex-col h-full p-6 space-y-6">
        {/* Top Stats Row */}
        <MapStats pipes={mockPipes} />

        {/* Map Container */}
        <div className="flex-1 min-h-0 relative">
          <MapView pipes={mockPipes} onPipeClick={setSelectedPipe} />
        </div>

        {/* Slide-out Panel */}
        {selectedPipe && (
          <PipeDetailPanel pipe={selectedPipe} onClose={() => setSelectedPipe(null)} />
        )}
      </div>
    </AppShell>
  );
}
