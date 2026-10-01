import AppShell from '@/components/layout/AppShell';
import { Cloud, Database, BrainCircuit, Monitor, Wifi, Shield, Server, Zap } from 'lucide-react';

const architectureLayers = [
  {
    title: 'Edge Layer — IoT Sensors',
    description: 'Pressure, flow rate, and acoustic sensors deployed across Addis Ababa\'s water distribution network.',
    icon: Wifi,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    tech: ['Huawei IoT Platform', 'MQTT Protocol', '15+ Sensor Nodes', 'Real-time Telemetry'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Enterprise-grade Huawei Cloud services powering data ingestion, storage, and compute.',
    icon: Cloud,
    color: 'bg-sky-50 text-sky-600 border-sky-200',
    tech: ['Huawei Cloud ECS', 'API Gateway', 'FunctionGraph', 'Cloud Container Engine'],
  },
  {
    title: 'Data Layer — GaussDB',
    description: 'High-performance distributed database storing time-series telemetry and incident records.',
    icon: Database,
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    tech: ['GaussDB for PostgreSQL', 'Time-series Partitioning', 'Automated Backups', 'High Availability'],
  },
  {
    title: 'AI/ML Engine — ModelArts',
    description: 'Machine learning pipeline for leak probability scoring with heuristic fallback.',
    icon: BrainCircuit,
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    tech: ['Huawei ModelArts', 'LSTM Neural Network', 'Heuristic Fallback', '94.2% Detection Rate'],
  },
  {
    title: 'Application Backend',
    description: 'Go-based REST API handling business logic, incident management, and real-time alerting.',
    icon: Server,
    color: 'bg-slate-100 text-slate-600 border-slate-200',
    tech: ['Go (Golang)', 'REST API', 'WebSocket Alerts', 'JWT Authentication'],
  },
  {
    title: 'Frontend Dashboard',
    description: 'Role-based dashboards for directors, operators, and field technicians.',
    icon: Monitor,
    color: 'bg-rose-50 text-rose-600 border-rose-200',
    tech: ['Next.js 16', 'React-Leaflet Maps', 'Recharts', 'Tailwind CSS'],
  },
];

const highlights = [
  { label: 'Avg Detection Time', value: '< 3 min', icon: Zap },
  { label: 'System Uptime', value: '99.7%', icon: Shield },
  { label: 'Sensors Online', value: '15 / 15', icon: Wifi },
  { label: 'AI Accuracy', value: '94.2%', icon: BrainCircuit },
];

export default function AboutPage() {
  return (
    <AppShell>
      <div className="p-6 max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">System Architecture</h2>
          <p className="text-slate-500 mt-1 text-sm">
            HydroPulse Cloud — End-to-end smart water leak detection platform powered by Huawei Cloud.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.label} className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                <Icon className="w-5 h-5 text-sky-500 mx-auto mb-2" />
                <p className="text-xl font-black text-slate-800">{h.value}</p>
                <p className="text-xs text-slate-500 mt-1">{h.label}</p>
              </div>
            );
          })}
        </div>

        {/* Architecture Stack */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">Full Stack Overview</h3>
          
          <div className="relative">
            {/* Vertical Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

            <div className="space-y-4">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.title} className="relative flex items-start gap-5">
                    {/* Node Dot */}
                    <div className={`hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl items-center justify-center border ${layer.color} z-10`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`md:hidden flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border ${layer.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800">{layer.title}</h4>
                          <span className="text-[10px] text-slate-400 font-mono">LAYER {index + 1}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 mb-3">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.tech.map((t) => (
                          <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-800 text-white rounded-xl p-6 text-center">
          <p className="text-sm font-bold mb-1">Built for the Huawei Cloud Developer Competition 2026</p>
          <p className="text-xs text-slate-400">
            Team HydroPulse • Addis Ababa, Ethiopia 🇪🇹
          </p>
        </div>
      </div>
    </AppShell>
  );
}
