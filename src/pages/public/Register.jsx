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
  User,
} from 'lucide-react'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target

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

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name =
        'Name must contain at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email =
        'Email address is required.'
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
    } else if (formData.password.length < 8) {
      newErrors.password =
        'Password must contain at least 8 characters.'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        'Please confirm your password.'
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        'Passwords do not match.'
    }

    if (!formData.terms) {
      newErrors.terms =
        'Please accept the terms and privacy policy.'
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

    // Frontend demo registration
    await new Promise((resolve) =>
      setTimeout(resolve, 1000),
    )

    setIsSubmitting(false)

    alert(
      'Demo account created successfully! Backend authentication will be connected later.',
    )
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

                Build your career workspace
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white xl:text-5xl">
                One workspace for your
                <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  entire job search.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 xl:text-base">
                Create your CareerHub account and bring your job
                applications, resume preparation, interviews and
                career goals together.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  'Organize your applications',
                  'Improve your resume',
                  'Practice interviews',
                  'Track your career progress',
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

              Start your career journey with confidence.
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT — REGISTER FORM
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
                Get started
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-secondary">
                Build your personalized career workspace in just
                a few steps.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="register-name"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Full name
                </label>

                <div
                  className={`flex h-12 items-center gap-3 rounded-xl border bg-surface px-4 transition ${
                    errors.name
                      ? 'border-red-400 ring-2 ring-red-500/10'
                      : 'border-default focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/10'
                  }`}
                >
                  <User
                    size={18}
                    className="shrink-0 text-muted"
                  />

                  <input
                    id="register-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-primary outline-none placeholder:text-muted"
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="register-email"
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
                    id="register-email"
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
                <label
                  htmlFor="register-password"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Password
                </label>

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
                    id="register-password"
                    name="password"
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
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

                {!errors.password &&
                  formData.password.length > 0 && (
                    <PasswordStrength
                      password={formData.password}
                    />
                  )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="register-confirm-password"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Confirm password
                </label>

                <div
                  className={`flex h-12 items-center gap-3 rounded-xl border bg-surface px-4 transition ${
                    errors.confirmPassword
                      ? 'border-red-400 ring-2 ring-red-500/10'
                      : 'border-default focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/10'
                  }`}
                >
                  <LockKeyhole
                    size={18}
                    className="shrink-0 text-muted"
                  />

                  <input
                    id="register-confirm-password"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? 'text'
                        : 'password'
                    }
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-primary outline-none placeholder:text-muted"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (value) => !value,
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                    className="shrink-0 text-muted transition hover:text-primary"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-indigo-600"
                  />

                  <span className="text-xs leading-5 text-secondary">
                    I agree to the{' '}
                    <a
                      href="#terms"
                      className="font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href="#privacy"
                      className="font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.terms}
                  </p>
                )}
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

                    Creating account...
                  </>
                ) : (
                  <>
                    Create account

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

            {/* Demo Account */}
            <button
              type="button"
              onClick={() => {
                setFormData({
                  name: 'Alex Johnson',
                  email: 'demo@aicareerhub.com',
                  password: 'password123',
                  confirmPassword: 'password123',
                  terms: true,
                })

                setErrors({})
              }}
              className="btn-secondary min-h-11 w-full"
            >
              <Sparkles size={16} />

              Fill demo account
            </button>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-secondary">
              Already have an account?

              <a
                href="#login"
                className="ml-1 font-bold text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Sign in
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

/* =========================================================
   PASSWORD STRENGTH
========================================================= */

function PasswordStrength({ password }) {
  const getStrength = () => {
    let score = 0

    if (password.length >= 8) {
      score += 1
    }

    if (/[A-Z]/.test(password)) {
      score += 1
    }

    if (/[0-9]/.test(password)) {
      score += 1
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1
    }

    if (score <= 1) {
      return {
        label: 'Weak password',
        width: '25%',
        className: 'bg-red-500',
      }
    }

    if (score === 2) {
      return {
        label: 'Fair password',
        width: '50%',
        className: 'bg-amber-500',
      }
    }

    if (score === 3) {
      return {
        label: 'Good password',
        width: '75%',
        className: 'bg-blue-500',
      }
    }

    return {
      label: 'Strong password',
      width: '100%',
      className: 'bg-emerald-500',
    }
  }

  const strength = getStrength()

  return (
    <div className="mt-2">
      <div className="h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className={`h-full rounded-full transition-all duration-300 ${strength.className}`}
          style={{
            width: strength.width,
          }}
        />
      </div>

      <p className="mt-1.5 text-[11px] font-medium text-muted">
        {strength.label}
      </p>
    </div>
  )
}

export default Register