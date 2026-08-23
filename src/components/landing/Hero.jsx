import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  Play,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-default"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="page-container relative">
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-xs font-bold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
              <Sparkles size={14} />

              AI-powered career intelligence
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your career,
              <br />

              <span className="gradient-text">
                intelligently managed.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-secondary sm:text-lg">
              Track applications, discover better opportunities,
              analyze your resume, and prepare for interviews —
              all from one intelligent career dashboard.
            </p>

            {/* =================================================
                SEARCH BAR
            ================================================== */}

            <div className="mt-8 rounded-2xl border border-default bg-surface p-2 shadow-[var(--shadow-card-hover)]">
              <div className="flex flex-col gap-2 sm:flex-row">
                {/* Job Search */}
                <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4 dark:bg-slate-900">
                  <Search
                    size={19}
                    className="shrink-0 text-muted"
                  />

                  <input
                    type="text"
                    placeholder="Job title, skill or keyword"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-primary outline-none placeholder:text-muted"
                  />
                </div>

                {/* Location Search */}
                <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4 dark:bg-slate-900">
                  <Target
                    size={19}
                    className="shrink-0 text-muted"
                  />

                  <input
                    type="text"
                    placeholder="Location or remote"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-primary outline-none placeholder:text-muted"
                  />
                </div>

                {/* Search Button */}
                <a
                  href="#signup"
                  className="btn-primary min-h-12 px-6"
                >
                  Find Jobs

                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Smart job tracking',
                'Resume insights',
                'Interview preparation',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-secondary"
                >
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />

                  {item}
                </div>
              ))}
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#signup"
                className="btn-primary min-h-11 px-6"
              >
                Start for free

                <ArrowRight size={17} />
              </a>

              <a
                href="#how-it-works"
                className="btn-secondary min-h-11 px-6"
              >
                <Play
                  size={15}
                  fill="currentColor"
                />

                See how it works
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT DASHBOARD PREVIEW
          ====================================================== */}

          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-transparent blur-2xl" />

            {/* Dashboard Window */}
            <div className="relative rounded-[28px] border border-default bg-surface p-3 shadow-[var(--shadow-card-hover)] sm:p-4">
              {/* Browser Header */}
              <div className="flex items-center justify-between border-b border-default px-2 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />

                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <div className="rounded-lg bg-slate-100 px-3 py-1 text-[10px] font-semibold text-muted dark:bg-slate-800">
                  dashboard.ai-careerhub
                </div>

                <div className="w-10" />
              </div>

              <div className="grid gap-3 p-2 sm:grid-cols-[115px_1fr]">
                {/* =================================================
                    MINI SIDEBAR
                ================================================== */}

                <div className="hidden rounded-2xl bg-slate-50 p-3 dark:bg-slate-900 sm:block">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white">
                      <BriefcaseIcon />
                    </div>

                    <div className="h-2 w-12 rounded-full bg-slate-200 dark:bg-slate-700" />
                  </div>

                  <div className="space-y-2">
                    {[true, false, false, false, false].map(
                      (active, index) => (
                        <div
                          key={index}
                          className={`h-7 rounded-lg ${
                            active
                              ? 'bg-indigo-100 dark:bg-indigo-500/15'
                              : ''
                          }`}
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* =================================================
                    DASHBOARD CONTENT
                ================================================== */}

                <div className="min-w-0">
                  {/* Dashboard Header */}
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold">
                        Good morning, Alex
                      </p>

                      <p className="mt-1 text-[10px] text-muted">
                        Here's your career overview
                      </p>
                    </div>

                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                    <PreviewStat
                      icon={FileSearch}
                      label="Applications"
                      value="48"
                      trend="+12%"
                    />

                    <PreviewStat
                      icon={TrendingUp}
                      label="Interviews"
                      value="12"
                      trend="+18%"
                    />

                    <PreviewStat
                      icon={Target}
                      label="Response"
                      value="28%"
                      trend="+5%"
                    />

                    <PreviewStat
                      icon={BarChart3}
                      label="Profile"
                      value="92%"
                      trend="+8%"
                    />
                  </div>

                  {/* =================================================
                      APPLICATION CHART
                  ================================================== */}

                  <div className="mt-3 rounded-2xl border border-default p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold">
                          Application activity
                        </p>

                        <p className="mt-0.5 text-[9px] text-muted">
                          Last 7 days
                        </p>
                      </div>

                      <div className="rounded-lg bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        +24.8%
                      </div>
                    </div>

                    <div className="mt-4 flex h-28 items-end gap-2">
                      {[
                        35,
                        50,
                        42,
                        70,
                        55,
                        82,
                        68,
                        92,
                        78,
                        96,
                        84,
                        100,
                      ].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-600 to-violet-400 opacity-80"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      BOTTOM CARDS
                  ================================================== */}

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {/* Upcoming Interview */}
                    <div className="rounded-2xl border border-default p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold">
                          Upcoming interview
                        </p>

                        <span className="rounded-md bg-indigo-50 px-2 py-1 text-[8px] font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                          Tomorrow
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-[10px] font-bold dark:bg-slate-800">
                          G
                        </div>

                        <div>
                          <p className="text-[10px] font-bold">
                            Frontend Developer
                          </p>

                          <p className="text-[9px] text-muted">
                            Google · 10:30 AM
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Resume Health */}
                    <div className="rounded-2xl border border-default p-3">
                      <p className="text-[10px] font-bold">
                        Resume health
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-indigo-100 dark:border-indigo-500/20">
                          <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300">
                            86
                          </span>
                        </div>

                        <div>
                          <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            Strong
                          </p>

                          <p className="mt-0.5 text-[9px] text-muted">
                            ATS optimized
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING NOTIFICATION
            ================================================== */}

            <div className="absolute -bottom-5 -left-3 hidden w-56 rounded-2xl border border-default bg-surface p-3 shadow-[var(--shadow-dropdown)] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold">
                    Application updated
                  </p>

                  <p className="mt-0.5 text-[9px] text-muted">
                    Your application moved to Interview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUSTED COMPANIES
        ====================================================== */}

        <div className="border-t border-default py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Built for ambitious professionals
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-4 lg:grid-cols-6">
            {[
              'Google',
              'Microsoft',
              'Amazon',
              'Meta',
              'Adobe',
              'Deloitte',
            ].map((company) => (
              <div
                key={company}
                className="text-sm font-bold text-slate-400 transition hover:text-slate-600 dark:text-slate-600 dark:hover:text-slate-400"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   DASHBOARD STAT
========================================================= */

function PreviewStat({
  icon: Icon,
  label,
  value,
  trend,
}) {
  return (
    <div className="rounded-xl border border-default p-2.5">
      <div className="flex items-center justify-between">
        <Icon
          size={13}
          className="text-indigo-500"
        />

        <span className="text-[8px] font-bold text-emerald-500">
          {trend}
        </span>
      </div>

      <p className="mt-2 text-sm font-extrabold">
        {value}
      </p>

      <p className="mt-0.5 text-[8px] text-muted">
        {label}
      </p>
    </div>
  )
}

/* =========================================================
   MINI SIDEBAR ICON
========================================================= */

function BriefcaseIcon() {
  return (
    <BriefcaseBusiness
      size={14}
      strokeWidth={2.4}
    />
  )
}

export default Hero