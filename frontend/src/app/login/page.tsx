'use client';

import { useState } from 'react';
import { Droplets, Eye, EyeOff, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login — redirect after a brief delay
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };

  const handleSSOLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/';
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
        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 rounded-2xl shadow-lg shadow-sky-500/30 mb-4">
            <Droplets className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">HydroPulse</h1>
          <p className="text-sky-300 text-sm mt-1">Smart Water Leak Detection Platform</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Sign in to your account</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-sky-200 block mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator@aawsa.gov.et"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-sky-200 block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm pr-12"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-sky-200 cursor-pointer">
                <input type="checkbox" className="rounded border-white/20 bg-white/10 text-sky-500 focus:ring-sky-500" />
                Remember me
              </label>
              <a href="#" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-sky-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-xs text-slate-400 uppercase tracking-wider">or continue with</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* SSO Button */}
          <button
            onClick={handleSSOLogin}
            disabled={isLoading}
            className="w-full bg-[#CF0A2C] hover:bg-[#E31837] text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-900/30 disabled:opacity-70"
          >
            <HuaweiLogo />
            Huawei Cloud IAM
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-xs text-slate-500">
            Protected by Huawei Cloud Security • End-to-end encrypted
          </p>
          <p className="text-xs text-slate-600">
            © 2026 HydroPulse Cloud — Addis Ababa Water & Sewerage Authority
          </p>
        </div>
      </div>
    </div>
  );
}

function HuaweiLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.009 9.735c-.78-.694-1.197-1.593-1.197-2.544 0-.834.327-1.627.924-2.238C6.738 3.904 8.35 3 10.149 3c.47 0 .929.064 1.37.19l.126.037C9.67 4.213 8.37 5.91 8.37 7.87c0 .592.13 1.157.367 1.67l-2.728.195zm11.982 0c.78-.694 1.197-1.593 1.197-2.544 0-.834-.327-1.627-.924-2.238C17.262 3.904 15.65 3 13.851 3c-.47 0-.929.064-1.37.19l-.126.037c1.975.986 3.275 2.683 3.275 4.643 0 .592-.13 1.157-.367 1.67l2.728.195zM12 6.063c-2.174 0-3.936 1.556-3.936 3.475 0 1.387.894 2.594 2.206 3.174l1.73 6.225 1.73-6.225c1.312-.58 2.206-1.787 2.206-3.174 0-1.919-1.762-3.475-3.936-3.475z" />
    </svg>
  );
}
