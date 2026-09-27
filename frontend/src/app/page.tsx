import AppShell from '@/components/layout/AppShell';
import MapView from '@/components/map/MapView';
import MapStats from '@/components/map/MapStats';
import { mockPipes } from '@/data/mock-pipes';

export default function MapPage() {
  return (
    <AppShell>
      <div className="p-6 space-y-6">
        {/* Top Stats Row */}
        <MapStats pipes={mockPipes} />

        {/* Map Container */}
        <div>
          <MapView pipes={mockPipes} />
        </div>
      </div>
    </AppShell>
  );
}
