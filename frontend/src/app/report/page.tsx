'use client';

import { useState } from 'react';
import { Camera, MapPin, CheckCircle2, Droplets, UploadCloud } from 'lucide-react';
import Link from 'next/link';

export default function CitizenReportPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-2">Thank You!</h1>
        <p className="text-slate-500 mb-8 max-w-sm">
          Your report has been securely sent to the Addis Ababa Water Authority. Our field technicians will investigate shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-sky-600 font-bold hover:underline"
        >
          Submit another report
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Public Header */}
      <header className="bg-sky-600 text-white p-4 shadow-md flex items-center gap-3">
        <Droplets className="w-6 h-6" />
        <div>
          <h1 className="font-bold text-lg leading-tight">AddisWater Public Portal</h1>
          <p className="text-[10px] text-sky-200">Powered by HydroPulse</p>
        </div>
      </header>

      <main className="flex-1 max-w-md w-full mx-auto p-4 flex flex-col pt-8">
        <h2 className="text-2xl font-black text-slate-800 mb-2">Report a Water Leak</h2>
        <p className="text-sm text-slate-500 mb-8">
          Help us save water! If you see a burst pipe or pooling water on the street, let us know.
        </p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          
          {/* Location */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
              <MapPin className="w-4 h-4 text-sky-500" /> Location of Leak
            </label>
            <input 
              type="text" 
              placeholder="E.g., Near Bole Medhanialem Church"
              required
              className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-sky-500 text-sm"
            />
            <button type="button" className="text-xs text-sky-600 font-bold mt-3 flex items-center gap-1 hover:underline">
              <MapPin className="w-3 h-3" /> Use my current GPS location
            </button>
          </div>

          {/* Photo Upload */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
              <Camera className="w-4 h-4 text-sky-500" /> Upload a Photo
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors">
              <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
              <p className="text-sm font-bold text-slate-600">Tap to take a photo</p>
              <p className="text-xs text-slate-400 mt-1">or choose from gallery</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3">
              Description (Optional)
            </label>
            <textarea 
              rows={3}
              placeholder="How bad is the leak? Is it affecting traffic?"
              className="w-full border border-slate-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-600/30 transition-all text-lg"
          >
            Submit Report
          </button>
        </form>

        <div className="mt-8 text-center pb-8">
          <Link href="/login" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
            Employee Login
          </Link>
        </div>
      </main>
    </div>
  );
}
