import {
  ArrowUp,
  BriefcaseBusiness,
  Globe,
  Mail,
  MessageCircle,
} from 'lucide-react'

const footerLinks = {
  Product: [
    {
      label: 'Features',
      href: '#features',
    },
    {
      label: 'Job Tracker',
      href: '#features',
    },
    {
      label: 'Resume Analyzer',
      href: '#features',
    },
    {
      label: 'AI Interview',
      href: '#features',
    },
  ],

  Resources: [
    {
      label: 'Career Guide',
      href: '#how-it-works',
    },
    {
      label: 'Interview Prep',
      href: '#how-it-works',
    },
    {
      label: 'Resume Tips',
      href: '#features',
    },
    {
      label: 'FAQ',
      href: '#faq',
    },
  ],

  Company: [
    {
      label: 'About',
      href: '#top',
    },
    {
      label: 'Contact',
      href: '#top',
    },
    {
      label: 'Privacy',
      href: '#top',
    },
    {
      label: 'Terms',
      href: '#top',
    },
  ],
}

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-default bg-slate-50 dark:bg-slate-950/40">
      <div className="page-container">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition duration-300 group-hover:scale-105">
                <BriefcaseBusiness
                  size={20}
                  strokeWidth={2.2}
                />
              </div>

              <div>
                <p className="font-[var(--font-heading)] text-[17px] font-extrabold tracking-tight text-primary">
                  AI CareerHub
                </p>

                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  Career Intelligence
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-secondary">
              A modern career workspace designed to help you
              discover opportunities, manage applications and
              prepare for what's next.
            </p>

            {/* Social / Contact */}
            <div className="mt-6 flex items-center gap-2">
              <SocialButton
                label="Website"
                icon={Globe}
              />

              <SocialButton
                label="Email"
                icon={Mail}
              />

              <SocialButton
                label="Community"
                icon={MessageCircle}
              />
            </div>
          </div>

          {/* =================================================
              LINK GROUPS
          ================================================== */}

          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-bold text-primary">
                  {title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={
                          link.href === '#top'
                            ? handleLinkClick
                            : undefined
                        }
                        className="text-sm text-secondary transition hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div className="flex flex-col gap-5 border-t border-default py-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <div>
            <p className="text-xs text-muted">
              © 2026 AI CareerHub. All rights reserved.
            </p>

            <p className="mt-1 text-[11px] text-muted">
              Built with React for modern career management.
            </p>
          </div>

          {/* Back To Top */}
          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-secondary transition hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-default bg-surface">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

/* =========================================================
   SOCIAL / CONTACT BUTTON
========================================================= */

function SocialButton({
  label,
  icon: Icon,
}) {
  return (
    <a
      href="#top"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-default bg-surface text-secondary transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:hover:border-indigo-500/40 dark:hover:text-indigo-400"
    >
      <Icon size={16} />
    </a>
  )
}

export default Footer