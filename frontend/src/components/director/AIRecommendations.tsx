import { BrainCircuit, Lightbulb, TrendingDown, AlertTriangle } from 'lucide-react';

export default function AIRecommendations() {
  const recommendations = [
    {
      type: 'Optimization',
      text: 'Reduce output pressure at Megenagna pump by 12% during off-peak hours to minimize pipe stress.',
      icon: TrendingDown,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      type: 'Predictive Alert',
      text: 'Historical data suggests Pipe-004 (Bole) is prone to micro-fractures during heavy rain. Dispatch inspection.',
      icon: AlertTriangle,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      type: 'Energy Saving',
      text: 'Route water through Valve C instead of Valve B to save estimated $45/day in pumping costs.',
      icon: Lightbulb,
      color: 'text-sky-600 bg-sky-50 border-sky-200',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 rounded-lg">
          <BrainCircuit className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">ModelArts Insights</h3>
          <p className="text-sm text-slate-500">AI-generated recommendations for network optimization.</p>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {recommendations.map((rec, i) => {
          const Icon = rec.icon;
          return (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className={`p-2 rounded-lg border flex-shrink-0 h-fit ${rec.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{rec.type}</span>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed font-medium">
                  {rec.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
