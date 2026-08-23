import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]:
        type === 'checkbox'
          ? checked
          : value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email,
      )
    ) {
      newErrors.email =
        'Please enter a valid email address.'
    }

    if (!formData.password) {
      newErrors.password =
        'Password is required.'
    } else if (formData.password.length < 6) {
      newErrors.password =
        'Password must contain at least 6 characters.'
    }

    return newErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    // Frontend demo login
    await new Promise((resolve) =>
      setTimeout(resolve, 900),
    )

    setIsSubmitting(false)

    alert(
      'Demo login successful! Backend authentication will be connected later.',
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =====================================================
            LEFT — BRAND / VISUAL PANEL
        ====================================================== */}

        <section className="relative hidden overflow-hidden bg-slate-950 lg:flex">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

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

            {/* Main Visual */}
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-indigo-200">
                <Sparkles size={14} />

                Welcome back
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white xl:text-5xl">
                Your next career move starts with
                <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  better decisions.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 xl:text-base">
                Keep your applications organized, understand your
                progress, improve your resume and prepare for
                interviews — all from one intelligent workspace.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  'Track every application',
                  'Analyze your career progress',
                  'Prepare smarter for interviews',
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

              Your career workspace, designed for focus.
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT — LOGIN FORM
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
              href="#top"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
            >
              <ArrowLeft size={16} />

              Back to home
            </a>

            {/* Header */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
                Welcome back
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-secondary">
                Continue managing your career journey with AI
                CareerHub.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Email address
                </label>

                <div
                  className={`flex h-12 items-center gap-3 rounded-xl border bg-surface px-4 transition ${
                    errors.email
                      ? 'border-red-400 ring-2 ring-red-500/10'
                      : 'border-default focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/10'
                  }`}
                >
                  <Mail
                    size={18}
                    className="shrink-0 text-muted"
                  />

                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-primary outline-none placeholder:text-muted"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-semibold text-primary"
                  >
                    Password
                  </label>

                  <a
                    href="#forgot-password"
                    className="text-xs font-bold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>

                <div
                  className={`flex h-12 items-center gap-3 rounded-xl border bg-surface px-4 transition ${
                    errors.password
                      ? 'border-red-400 ring-2 ring-red-500/10'
                      : 'border-default focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/10'
                  }`}
                >
                  <LockKeyhole
                    size={18}
                    className="shrink-0 text-muted"
                  />

                  <input
                    id="login-password"
                    name="password"
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-primary outline-none placeholder:text-muted"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (value) => !value,
                      )
                    }
                    aria-label={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                    className="shrink-0 text-muted transition hover:text-primary"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
                  />

                  <span className="text-xs font-medium text-secondary">
                    Remember me
                  </span>
                </label>

                <span className="text-xs text-muted">
                  Secure login
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary min-h-12 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in

                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-default" />

              <span className="text-xs font-medium text-muted">
                OR
              </span>

              <div className="h-px flex-1 bg-default" />
            </div>

            {/* Demo Login */}
            <button
              type="button"
              onClick={() => {
                setFormData({
                  email: 'demo@aicareerhub.com',
                  password: 'password123',
                  remember: true,
                })

                setErrors({})
              }}
              className="btn-secondary min-h-11 w-full"
            >
              <Sparkles size={16} />

              Use demo account
            </button>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-secondary">
              Don't have an account?

              <a
                href="#register"
                className="ml-1 font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Create one
              </a>
            </p>

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

export default Login