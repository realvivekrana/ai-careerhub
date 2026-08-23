import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false)

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.password) {
      newErrors.password = 'New password is required.'
    } else if (formData.password.length < 8) {
      newErrors.password =
        'Password must contain at least 8 characters.'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        'Please confirm your new password.'
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        'Passwords do not match.'
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

    // Frontend demo password reset
    await new Promise((resolve) =>
      setTimeout(resolve, 1000),
    )

    setIsSubmitting(false)
    setIsReset(true)
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

                Secure password reset
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white xl:text-5xl">
                Protect your account,
                <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  protect your career data.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 xl:text-base">
                Create a strong new password and get back to managing
                your career workspace.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  'Use at least 8 characters',
                  'Mix letters, numbers and symbols',
                  'Avoid easily guessed passwords',
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

              Secure account recovery experience.
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT — RESET FORM
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
              href="#forgot-password"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
            >
              <ArrowLeft size={16} />

              Back to password recovery
            </a>

            {!isReset ? (
              <>
                {/* Header */}
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
                    New password
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                    Reset your password
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-secondary">
                    Choose a strong password that you don't use on
                    other websites.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* New Password */}
                  <div>
                    <label
                      htmlFor="reset-password"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      New password
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
                        id="reset-password"
                        name="password"
                        type={
                          showPassword
                            ? 'text'
                            : 'password'
                        }
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter new password"
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
                      htmlFor="reset-confirm-password"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      Confirm new password
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
                        id="reset-confirm-password"
                        name="confirmPassword"
                        type={
                          showConfirmPassword
                            ? 'text'
                            : 'password'
                        }
                        value={
                          formData.confirmPassword
                        }
                        onChange={handleChange}
                        placeholder="Confirm new password"
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

                  {/* Password Requirements */}
                  <div className="rounded-2xl border border-default bg-surface p-4">
                    <p className="text-xs font-bold text-primary">
                      Password requirements
                    </p>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <Requirement
                        met={
                          formData.password.length >=
                          8
                        }
                        label="8+ characters"
                      />

                      <Requirement
                        met={
                          /[A-Z]/.test(
                            formData.password,
                          )
                        }
                        label="Uppercase letter"
                      />

                      <Requirement
                        met={
                          /[0-9]/.test(
                            formData.password,
                          )
                        }
                        label="Number"
                      />

                      <Requirement
                        met={
                          /[^A-Za-z0-9]/.test(
                            formData.password,
                          )
                        }
                        label="Special character"
                      />
                    </div>
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

                        Updating password...
                      </>
                    ) : (
                      <>
                        Update password

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
                  Password updated
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary">
                  You're all set!
                </h2>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-secondary">
                  Your password has been updated successfully.
                  You can now sign in using your new password.
                </p>

                <a
                  href="#login"
                  className="btn-primary mt-7 min-h-12 w-full"
                >
                  Continue to login

                  <ArrowRight size={17} />
                </a>
              </div>
            )}

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

  let strength

  if (score <= 1) {
    strength = {
      label: 'Weak password',
      width: '25%',
      className: 'bg-red-500',
    }
  } else if (score === 2) {
    strength = {
      label: 'Fair password',
      width: '50%',
      className: 'bg-amber-500',
    }
  } else if (score === 3) {
    strength = {
      label: 'Good password',
      width: '75%',
      className: 'bg-blue-500',
    }
  } else {
    strength = {
      label: 'Strong password',
      width: '100%',
      className: 'bg-emerald-500',
    }
  }

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

/* =========================================================
   PASSWORD REQUIREMENT
========================================================= */

function Requirement({ met, label }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2
        size={14}
        className={
          met
            ? 'text-emerald-500'
            : 'text-slate-300 dark:text-slate-700'
        }
      />

      <span
        className={`text-[11px] font-medium ${
          met
            ? 'text-emerald-600 dark:text-emerald-400'
            : 'text-muted'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

export default ResetPassword