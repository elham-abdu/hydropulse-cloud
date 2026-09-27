'use client';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { PipeNode } from '@/data/mock-pipes';
import { formatPressure, formatFlowRate, formatLeakProbability } from '@/lib/utils';

const STATUS_COLORS: Record<string, string> = {
  normal: '#22C55E',
  warning: '#F59E0B',
  critical: '#EF4444',
  offline: '#6B7280',
};

const STATUS_RADIUS: Record<string, number> = {
  normal: 7,
  warning: 8,
  critical: 10,
  offline: 7,
};

interface LeafletMapProps {
  pipes: PipeNode[];
  onPipeClick?: (pipe: PipeNode) => void;
}

export default function LeafletMap({ pipes, onPipeClick }: LeafletMapProps) {
  return (
    <MapContainer
      center={[9.0192, 38.7525]}
      zoom={12}
      className="h-full w-full"
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {pipes.map((pipe) => (
        <CircleMarker
          key={pipe.id}
          center={[pipe.lat, pipe.lng]}
          radius={STATUS_RADIUS[pipe.status] || 7}
          pathOptions={{
            color: STATUS_COLORS[pipe.status] || '#6B7280',
            fillColor: STATUS_COLORS[pipe.status] || '#6B7280',
            fillOpacity: 0.8,
            weight: 2,
            opacity: 1,
          }}
          className={pipe.status === 'critical' ? 'marker-critical' : ''}
          eventHandlers={{
            click: () => onPipeClick?.(pipe),
          }}
        >
          <Popup>
            <div className="min-w-[200px] p-1">
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                {pipe.name}
              </h3>

              {/* Status Badge */}
              <div className="mb-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase"
                  style={{
                    backgroundColor: `${STATUS_COLORS[pipe.status]}20`,
                    color: STATUS_COLORS[pipe.status],
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: STATUS_COLORS[pipe.status] }}
                  />
                  {pipe.status}
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Pressure:</span>
                  <span className="font-medium text-slate-800">
                    {formatPressure(pipe.pressure_psi)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Flow Rate:</span>
                  <span className="font-medium text-slate-800">
                    {formatFlowRate(pipe.flow_rate_m3h)}
                  </span>
                </div>
                {pipe.leak_probability > 0 && (
                  <div className="flex justify-between">
                    <span>Leak Probability:</span>
                    <span
                      className="font-bold"
                      style={{
                        color:
                          pipe.leak_probability > 0.5
                            ? '#EF4444'
                            : pipe.leak_probability > 0.2
                            ? '#F59E0B'
                            : '#22C55E',
                      }}
                    >
                      {formatLeakProbability(pipe.leak_probability)}
                    </span>
                  </div>
                )}
              </div>

              {/* Sensor ID */}
              <div className="mt-2 pt-2 border-t border-slate-200">
                <p className="text-[10px] text-slate-400">
                  Sensor: {pipe.sensor_id}
                </p>
              </div>

              {/* View Details */}
              <button
                className="mt-2 w-full text-center text-xs font-medium text-sky-500 hover:text-sky-600 transition-colors"
                onClick={() => onPipeClick?.(pipe)}
              >
                View Details →
              </button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
