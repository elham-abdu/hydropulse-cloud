import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
      <div className="w-12 h-12 border-4 border-sky-100 border-t-sky-500 rounded-full animate-spin mb-4" />
      <h3 className="text-lg font-bold text-slate-800">Loading HydroPulse...</h3>
      <p className="text-sm text-slate-500 mt-1">Syncing with Huawei Cloud</p>
    </div>
  );
}
