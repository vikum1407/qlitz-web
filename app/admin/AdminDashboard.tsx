'use client';

import { useState, useEffect, useCallback } from 'react';

type Period = 'today' | '3days' | 'week' | 'month' | 'year';

interface AnalyticsData {
  total_views: number;
  countries: Array<{ country: string; visits: number }> | null;
  pages:     Array<{ path: string;    visits: number }> | null;
}

interface ApiResponse {
  data: AnalyticsData;
}

const PERIODS: { key: Period; label: string }[] = [
  { key: 'today',  label: 'Today'     },
  { key: '3days',  label: '3 Days'    },
  { key: 'week',   label: 'This Week' },
  { key: 'month',  label: 'Month'     },
  { key: 'year',   label: 'Year'      },
];

function flag(code: string) {
  return code.toUpperCase().replace(/./g, c => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

function countryName(code: string) {
  try { return new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? code; }
  catch { return code; }
}

function fmt(n?: number) {
  if (n == null) return '—';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-sm text-slate-500 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function Bar({ pct }: { pct: number }) {
  return (
    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF]"
        style={{ width: `${Math.max(pct, 2)}%` }}
      />
    </div>
  );
}

export function AdminDashboard() {
  const [inputKey,      setInputKey]      = useState('');
  const [adminKey,      setAdminKey]      = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [period,        setPeriod]        = useState<Period>('week');
  const [data,          setData]          = useState<AnalyticsData | null>(null);
  const [loading,       setLoading]       = useState(false);
  const [loginLoading,  setLoginLoading]  = useState(false);
  const [error,         setError]         = useState('');
  const [loginError,    setLoginError]    = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('qlitz_admin_key');
    if (stored) { setAdminKey(stored); setAuthenticated(true); }
  }, []);

  const fetchStats = useCallback(async (key: string, p: Period) => {
    setLoading(true);
    setError('');
    try {
      const res  = await fetch(`/api/admin/stats?period=${p}&key=${encodeURIComponent(key)}`);
      const json = await res.json() as ApiResponse & { error?: string };
      if (res.status === 401) {
        sessionStorage.removeItem('qlitz_admin_key');
        setAuthenticated(false);
        setLoginError('Incorrect password.');
      } else if (!res.ok) {
        setError(json.error || 'Failed to load analytics.');
      } else {
        setData(json.data);
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authenticated && adminKey) fetchStats(adminKey, period);
  }, [authenticated, adminKey, period, fetchStats]);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    try {
      const res = await fetch(`/api/admin/stats?period=today&key=${encodeURIComponent(inputKey)}`);
      if (res.status === 401) {
        setLoginError('Incorrect password.');
      } else if (!res.ok) {
        setLoginError('Server error. Please try again.');
      } else {
        sessionStorage.setItem('qlitz_admin_key', inputKey);
        setAdminKey(inputKey);
        setAuthenticated(true);
      }
    } catch {
      setLoginError('Network error. Please try again.');
    }
    setLoginLoading(false);
  };

  const logout = () => {
    sessionStorage.removeItem('qlitz_admin_key');
    setAuthenticated(false);
    setAdminKey('');
    setData(null);
    setInputKey('');
  };

  /* ── LOGIN SCREEN ── */
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex w-14 h-14 rounded-full bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] items-center justify-center mb-4 shadow-[0_0_20px_rgba(138,58,255,0.3)]">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Qlitz Admin</h1>
            <p className="text-slate-500 text-sm mt-1">Enter your admin password to view analytics.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={inputKey}
              onChange={e => setInputKey(e.target.value)}
              required
              autoFocus
              className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#3A7BFF] focus:ring-1 focus:ring-[#3A7BFF] outline-none transition"
            />
            {loginError && <p className="text-sm text-red-600">{loginError}</p>}
            <button type="submit" disabled={loginLoading} className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_18px_rgba(138,58,255,0.25)] disabled:opacity-60 disabled:cursor-not-allowed">
              {loginLoading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const countries = data?.countries ?? [];
  const pages     = data?.pages ?? [];
  const maxC      = countries[0]?.visits ?? 1;
  const maxP      = pages[0]?.visits ?? 1;
  const totalC    = countries.reduce((s, c) => s + c.visits, 0) || 1;
  const totalP    = pages.reduce((s, p) => s + p.visits, 0) || 1;

  /* ── DASHBOARD ── */
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF]" />
          <h1 className="text-lg font-bold text-slate-900">Qlitz Analytics</h1>
        </div>
        <button onClick={logout} className="text-sm text-slate-500 hover:text-slate-800 transition">
          Sign out
        </button>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">

        {/* Period selector */}
        <div className="flex gap-2 flex-wrap">
          {PERIODS.map(p => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                period === p.key
                  ? 'bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white shadow-[0_0_12px_rgba(138,58,255,0.3)]'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {p.label}
            </button>
          ))}
          {loading && <span className="text-sm text-slate-400 self-center ml-2">Loading…</span>}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-sm text-red-700">
            <p className="font-semibold mb-1">Could not load analytics</p>
            <p>{error}</p>
            <p className="mt-2 text-red-500">
              Make sure <code className="font-mono bg-red-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
              <code className="font-mono bg-red-100 px-1 rounded">SUPABASE_ANON_KEY</code> are set and the{' '}
              <code className="font-mono bg-red-100 px-1 rounded">get_analytics</code> function exists in Supabase.
            </p>
          </div>
        )}

        {/* Stat cards */}
        {!error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard label="Total Page Views" value={fmt(data?.total_views)} icon="📄" />
            <StatCard label="Countries Reached" value={fmt(countries.length)} icon="🌍" />
          </div>
        )}

        {/* Countries */}
        {!error && countries.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-900">Visitors by Country</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {countries.map(c => (
                <div key={c.country} className="px-6 py-3 flex items-center gap-4">
                  <span className="text-xl w-7 text-center">{flag(c.country)}</span>
                  <span className="flex-1 text-sm text-slate-700">{countryName(c.country)}</span>
                  <Bar pct={(c.visits / maxC) * 100} />
                  <span className="text-sm font-semibold text-slate-900 w-12 text-right">{fmt(c.visits)}</span>
                  <span className="text-xs text-slate-400 w-10 text-right">
                    {((c.visits / totalC) * 100).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top pages */}
        {!error && pages.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-semibold text-slate-900">Top Pages</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {pages.map(p => (
                <div key={p.path} className="px-6 py-3 flex items-center gap-4">
                  <span className="flex-1 text-sm text-slate-700 font-mono truncate">{p.path || '/'}</span>
                  <Bar pct={(p.visits / maxP) * 100} />
                  <span className="text-sm font-semibold text-slate-900 w-12 text-right">{fmt(p.visits)}</span>
                  <span className="text-xs text-slate-400 w-10 text-right">
                    {((p.visits / totalP) * 100).toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!error && !loading && data?.total_views === 0 && (
          <div className="text-center py-16 text-slate-400">No visits recorded yet for this period.</div>
        )}

      </div>
    </div>
  );
}
