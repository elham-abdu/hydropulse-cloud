'use client';

import { useState } from 'react';
import { Droplets, Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('technician');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock registration — redirect after a brief delay
    setTimeout(() => {
      window.location.href = '/login';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        
        {/* Back to Login */}
        <Link href="/login" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Login
        </Link>

        {/* Register Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-500 rounded-xl shadow-lg shadow-sky-500/30">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Request Access</h2>
              <p className="text-sky-300 text-xs mt-1">HydroPulse Employee Portal</p>
            </div>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-sky-200 block mb-1.5">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Abebe"
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-sky-200 block mb-1.5">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Kebede"
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-sky-200 block mb-1.5">Employee ID</label>
              <input
                type="text"
                required
                placeholder="AAWSA-0042"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm uppercase"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-sky-200 block mb-1.5">Department Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm appearance-none cursor-pointer"
              >
                <option value="technician" className="text-slate-800">Field Technician</option>
                <option value="director" className="text-slate-800">Regional Director</option>
                <option value="dispatcher" className="text-slate-800">HQ Dispatcher</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-sky-200 block mb-1.5">Official Email</label>
              <input
                type="email"
                required
                placeholder="abebe@aawsa.gov.et"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-sky-200 block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-sky-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                </>
              ) : (
                'Submit Access Request'
              )}
            </button>
          </form>

          <p className="text-[10px] text-slate-400 text-center mt-6">
            New accounts must be approved by IT administration before access is granted to the Huawei Cloud environment.
          </p>
        </div>
      </div>
    </div>
  );
}
