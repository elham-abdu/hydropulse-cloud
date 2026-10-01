// Mock data for HydroPulse Cloud — Water pipe network in Addis Ababa, Ethiopia

export type PipeStatus = 'normal' | 'warning' | 'critical' | 'offline';

export interface PipeNode {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: PipeStatus;
  pressure_psi: number;
  flow_rate_m3h: number;
  leak_probability: number;
  material: string;
  install_date: string;
  last_maintenance: string;
  sensor_id: string;
}

export interface TelemetryReading {
  timestamp: string;
  pressure_psi: number;
  flow_rate_m3h: number;
}

export interface Incident {
  id: string;
  pipe_id: string;
  pipe_name: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'investigating' | 'resolved';
  leak_probability: number;
  source: 'ml_model' | 'heuristic_fallback';
  created_at: string;
  resolved_at: string | null;
}

// 15 pipe nodes across Addis Ababa
export const mockPipes: PipeNode[] = [
  {
    id: 'PIPE-001',
    name: 'Bole District Main',
    lat: 9.0054,
    lng: 38.7636,
    status: 'normal',
    pressure_psi: 52.3,
    flow_rate_m3h: 5.8,
    leak_probability: 0.02,
    material: 'Ductile Iron',
    install_date: '2019-03-15',
    last_maintenance: '2026-07-20',
    sensor_id: 'SNS-BOLE-001',
  },
  {
    id: 'PIPE-002',
    name: 'Merkato Junction',
    lat: 9.0320,
    lng: 38.7380,
    status: 'warning',
    pressure_psi: 38.1,
    flow_rate_m3h: 3.2,
    leak_probability: 0.45,
    material: 'Cast Iron',
    install_date: '2012-08-10',
    last_maintenance: '2025-11-05',
    sensor_id: 'SNS-MRKT-002',
  },
  {
    id: 'PIPE-003',
    name: 'Piassa Central',
    lat: 9.0350,
    lng: 38.7480,
    status: 'normal',
    pressure_psi: 50.7,
    flow_rate_m3h: 6.1,
    leak_probability: 0.05,
    material: 'HDPE',
    install_date: '2021-01-22',
    last_maintenance: '2026-06-15',
    sensor_id: 'SNS-PIAS-003',
  },
  {
    id: 'PIPE-004',
    name: 'Kazanchis Branch',
    lat: 9.0160,
    lng: 38.7640,
    status: 'critical',
    pressure_psi: 22.4,
    flow_rate_m3h: 1.1,
    leak_probability: 0.92,
    material: 'Cast Iron',
    install_date: '2008-05-30',
    last_maintenance: '2024-12-10',
    sensor_id: 'SNS-KAZN-004',
  },
  {
    id: 'PIPE-005',
    name: 'Megenagna Hub',
    lat: 9.0210,
    lng: 38.7890,
    status: 'normal',
    pressure_psi: 48.9,
    flow_rate_m3h: 5.4,
    leak_probability: 0.08,
    material: 'Ductile Iron',
    install_date: '2017-09-12',
    last_maintenance: '2026-04-28',
    sensor_id: 'SNS-MEGN-005',
  },
  {
    id: 'PIPE-006',
    name: 'Sarbet Distribution',
    lat: 8.9950,
    lng: 38.7450,
    status: 'normal',
    pressure_psi: 53.1,
    flow_rate_m3h: 6.7,
    leak_probability: 0.03,
    material: 'HDPE',
    install_date: '2022-02-18',
    last_maintenance: '2026-08-01',
    sensor_id: 'SNS-SRBT-006',
  },
  {
    id: 'PIPE-007',
    name: 'Arat Kilo Supply',
    lat: 9.0380,
    lng: 38.7580,
    status: 'warning',
    pressure_psi: 35.6,
    flow_rate_m3h: 2.9,
    leak_probability: 0.55,
    material: 'PVC',
    install_date: '2015-11-08',
    last_maintenance: '2025-09-22',
    sensor_id: 'SNS-ARTK-007',
  },
  {
    id: 'PIPE-008',
    name: 'CMC Branch',
    lat: 9.0420,
    lng: 38.8050,
    status: 'normal',
    pressure_psi: 49.2,
    flow_rate_m3h: 4.8,
    leak_probability: 0.06,
    material: 'Ductile Iron',
    install_date: '2018-06-25',
    last_maintenance: '2026-05-14',
    sensor_id: 'SNS-CMC-008',
  },
  {
    id: 'PIPE-009',
    name: 'Kotebe Line',
    lat: 9.0350,
    lng: 38.8150,
    status: 'normal',
    pressure_psi: 51.4,
    flow_rate_m3h: 5.2,
    leak_probability: 0.04,
    material: 'HDPE',
    install_date: '2020-10-03',
    last_maintenance: '2026-07-08',
    sensor_id: 'SNS-KOTB-009',
  },
  {
    id: 'PIPE-010',
    name: 'Lideta Main',
    lat: 9.0180,
    lng: 38.7350,
    status: 'offline',
    pressure_psi: 0,
    flow_rate_m3h: 0,
    leak_probability: 0,
    material: 'Cast Iron',
    install_date: '2005-04-14',
    last_maintenance: '2024-08-30',
    sensor_id: 'SNS-LDTA-010',
  },
  {
    id: 'PIPE-011',
    name: 'Akaki Industrial',
    lat: 8.9400,
    lng: 38.7520,
    status: 'normal',
    pressure_psi: 47.6,
    flow_rate_m3h: 7.3,
    leak_probability: 0.07,
    material: 'Ductile Iron',
    install_date: '2016-12-01',
    last_maintenance: '2026-03-18',
    sensor_id: 'SNS-AKKI-011',
  },
  {
    id: 'PIPE-012',
    name: 'Summit Condominium',
    lat: 8.9750,
    lng: 38.7900,
    status: 'normal',
    pressure_psi: 50.1,
    flow_rate_m3h: 4.5,
    leak_probability: 0.03,
    material: 'HDPE',
    install_date: '2023-05-20',
    last_maintenance: '2026-09-01',
    sensor_id: 'SNS-SMMT-012',
  },
  {
    id: 'PIPE-013',
    name: 'Gerji Residential',
    lat: 9.0010,
    lng: 38.7980,
    status: 'critical',
    pressure_psi: 18.7,
    flow_rate_m3h: 0.8,
    leak_probability: 0.87,
    material: 'PVC',
    install_date: '2011-07-09',
    last_maintenance: '2025-02-14',
    sensor_id: 'SNS-GRJI-013',
  },
  {
    id: 'PIPE-014',
    name: 'Hayat Branch',
    lat: 9.0100,
    lng: 38.7280,
    status: 'normal',
    pressure_psi: 49.8,
    flow_rate_m3h: 5.6,
    leak_probability: 0.04,
    material: 'Ductile Iron',
    install_date: '2019-09-28',
    last_maintenance: '2026-06-22',
    sensor_id: 'SNS-HYAT-014',
  },
  {
    id: 'PIPE-015',
    name: 'Mexico Square',
    lat: 9.0120,
    lng: 38.7520,
    status: 'warning',
    pressure_psi: 36.4,
    flow_rate_m3h: 3.0,
    leak_probability: 0.38,
    material: 'Cast Iron',
    install_date: '2010-03-05',
    last_maintenance: '2025-10-17',
    sensor_id: 'SNS-MXCO-015',
  },
];

// Generate 24 hours of mock telemetry data
function generateTelemetryData(): TelemetryReading[] {
  const readings: TelemetryReading[] = [];
  const now = new Date();
  for (let i = 23; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
    // Simulate a pressure dip around hours 8-10 (leak scenario)
    const isLeakWindow = i >= 14 && i <= 16;
    const basePressure = isLeakWindow ? 35 : 50;
    const baseFlow = isLeakWindow ? 2.5 : 5.5;
    readings.push({
      timestamp: timestamp.toISOString(),
      pressure_psi: basePressure + (Math.random() - 0.5) * 8,
      flow_rate_m3h: baseFlow + (Math.random() - 0.5) * 2,
    });
  }
  return readings;
}

export const mockTelemetryData: TelemetryReading[] = generateTelemetryData();

// Mock incidents
export const mockIncidents: Incident[] = [
  {
    id: 'INC-001',
    pipe_id: 'PIPE-004',
    pipe_name: 'Kazanchis Branch',
    severity: 'critical',
    status: 'active',
    leak_probability: 0.92,
    source: 'ml_model',
    created_at: '2026-09-27T08:15:00Z',
    resolved_at: null,
  },
  {
    id: 'INC-002',
    pipe_id: 'PIPE-013',
    pipe_name: 'Gerji Residential',
    severity: 'critical',
    status: 'investigating',
    leak_probability: 0.87,
    source: 'heuristic_fallback',
    created_at: '2026-09-27T06:42:00Z',
    resolved_at: null,
  },
  {
    id: 'INC-003',
    pipe_id: 'PIPE-002',
    pipe_name: 'Merkato Junction',
    severity: 'high',
    status: 'investigating',
    leak_probability: 0.45,
    source: 'ml_model',
    created_at: '2026-09-26T22:30:00Z',
    resolved_at: null,
  },
  {
    id: 'INC-004',
    pipe_id: 'PIPE-007',
    pipe_name: 'Arat Kilo Supply',
    severity: 'high',
    status: 'active',
    leak_probability: 0.55,
    source: 'ml_model',
    created_at: '2026-09-26T18:10:00Z',
    resolved_at: null,
  },
  {
    id: 'INC-005',
    pipe_id: 'PIPE-015',
    pipe_name: 'Mexico Square',
    severity: 'medium',
    status: 'active',
    leak_probability: 0.38,
    source: 'ml_model',
    created_at: '2026-09-26T14:55:00Z',
    resolved_at: null,
  },
  {
    id: 'INC-006',
    pipe_id: 'PIPE-001',
    pipe_name: 'Bole District Main',
    severity: 'low',
    status: 'resolved',
    leak_probability: 0.12,
    source: 'ml_model',
    created_at: '2026-09-25T10:20:00Z',
    resolved_at: '2026-09-25T14:45:00Z',
  },
  {
    id: 'INC-007',
    pipe_id: 'PIPE-005',
    pipe_name: 'Megenagna Hub',
    severity: 'medium',
    status: 'resolved',
    leak_probability: 0.30,
    source: 'heuristic_fallback',
    created_at: '2026-09-24T09:00:00Z',
    resolved_at: '2026-09-24T16:30:00Z',
  },
  {
    id: 'INC-008',
    pipe_id: 'PIPE-010',
    pipe_name: 'Lideta Main',
    severity: 'high',
    status: 'resolved',
    leak_probability: 0.68,
    source: 'ml_model',
    created_at: '2026-09-23T07:15:00Z',
    resolved_at: '2026-09-23T19:00:00Z',
  },
];
