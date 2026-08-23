import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    setEmail(event.target.value)
    setError('')
    setIsSubmitted(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setError('Email address is required.')
      return
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email,
      )
    ) {
      setError(
        'Please enter a valid email address.',
      )
      return
    }

    setIsSubmitting(true)

    // Frontend demo password reset request
    await new Promise((resolve) =>
      setTimeout(resolve, 1000),
    )

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =====================================================
            LEFT — BRAND PANEL
        ====================================================== */}

        <section className="relative hidden overflow-hidden bg-slate-950 lg:flex">
          {/* Background Effects */}
          <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-10 xl:p-14">
            {/* Logo */}
            <a
              href="#top"
              className="inline-flex w-fit items-center gap-3 text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/20">
                <BriefcaseBusiness
                  size={21}
                  strokeWidth={2.2}
                />
              </div>

              <div>
                <p className="text-[17px] font-extrabold tracking-tight">
                  AI CareerHub
                </p>

                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Career Intelligence
                </p>
              </div>
            </a>

            {/* Main Content */}
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-indigo-200">
                <Sparkles size={14} />

                Account recovery
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white xl:text-5xl">
                Get back to your
                <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  career workspace.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 xl:text-base">
                Don't worry if you forgot your password. Enter
                your email and we'll guide you through the recovery
                process.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  'Quick account recovery',
                  'Secure reset workflow',
                  'Your career data stays protected',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-emerald-400"
                    />

                    <span className="text-sm font-semibold text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={15} />

              Your account security matters to us.
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT — FORM
        ====================================================== */}

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 lg:hidden">
              <a
                href="#top"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                  <BriefcaseBusiness
                    size={21}
                    strokeWidth={2.2}
                  />
                </div>

                <div>
                  <p className="text-[17px] font-extrabold tracking-tight text-primary">
                    AI CareerHub
                  </p>

                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                    Career Intelligence
                  </p>
                </div>
              </a>
            </div>

            {/* Back */}
            <a
              href="#login"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
            >
              <ArrowLeft size={16} />

              Back to login
            </a>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
                    Password recovery
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                    Forgot your password?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-secondary">
                    Enter the email address associated with your
                    account and we'll send you a password reset
                    link.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-8"
                >
                  <label
                    htmlFor="forgot-email"
                    className="mb-2 block text-sm font-semibold text-primary"
                  >
                    Email address
                  </label>

                  <div
                    className={`flex h-12 items-center gap-3 rounded-xl border bg-surface px-4 transition ${
                      error
                        ? 'border-red-400 ring-2 ring-red-500/10'
                        : 'border-default focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/10'
                    }`}
                  >
                    <Mail
                      size={18}
                      className="shrink-0 text-muted"
                    />

                    <input
                      id="forgot-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="min-w-0 flex-1 bg-transparent text-sm font-medium text-primary outline-none placeholder:text-muted"
                    />
                  </div>

                  {error && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary mt-5 min-h-12 w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        Sending reset link...
                      </>
                    ) : (
                      <>
                        Send reset link

                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* =================================================
                 SUCCESS STATE
              ================================================== */

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <CheckCircle2 size={30} />
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                  Request received
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary">
                  Check your inbox
                </h2>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-secondary">
                  If an account exists for{' '}
                  <span className="font-bold text-primary">
                    {email}
                  </span>
                  , a password reset link has been sent to that
                  address.
                </p>

                <div className="mt-6 rounded-2xl border border-default bg-surface p-4 text-left">
                  <div className="flex gap-3">
                    <Mail
                      size={18}
                      className="mt-0.5 shrink-0 text-indigo-500"
                    />

                    <div>
                      <p className="text-sm font-bold">
                        Didn't receive the email?
                      </p>

                      <p className="mt-1 text-xs leading-5 text-secondary">
                        Check your spam folder or wait a few minutes
                        before requesting another reset link.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false)
                    setEmail('')
                    setError('')
                  }}
                  className="btn-secondary mt-5 w-full"
                >
                  Try another email
                </button>
              </div>
            )}

            {/* Bottom Navigation */}
            <div className="mt-8 flex flex-col items-center gap-3 text-sm sm:flex-row sm:justify-center">
              <a
                href="#login"
                className="font-semibold text-secondary transition hover:text-primary"
              >
                Back to login
              </a>

              <span className="hidden text-muted sm:block">
                •
              </span>

              <a
                href="#register"
                className="font-bold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Create an account
              </a>
            </div>

            {/* Security */}
            <div className="mt-8 flex items-center justify-center gap-2 text-center text-[11px] text-muted">
              <ShieldCheck size={14} />

              Your information is protected and secure.
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ForgotPassword