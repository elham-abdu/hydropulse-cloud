import { Droplets } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Animated Water Drop */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-100 rounded-full mb-6">
          <Droplets className="w-10 h-10 text-sky-500 animate-bounce" />
        </div>

        <h1 className="text-7xl font-black text-slate-800 mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-700 mb-3">Page Not Found</h2>
        <p className="text-slate-500 mb-8">
          Looks like this pipe leads nowhere. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-sky-500/20"
          >
            Back to Map View
          </Link>
          <Link
            href="/incidents"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            View Incidents
          </Link>
        </div>

        <p className="text-xs text-slate-400 mt-10">
          HydroPulse Cloud • Addis Ababa Water & Sewerage Authority
        </p>
      </div>
    </div>
  );
}
