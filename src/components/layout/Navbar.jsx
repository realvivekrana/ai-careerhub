import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

import useTheme from '../../hooks/useTheme'

const navItems = [
  {
    label: 'Features',
    href: '#features',
  },
  {
    label: 'How It Works',
    href: '#how-it-works',
  },
  {
    label: 'Pricing',
    href: '#pricing',
  },
]

const resourceItems = [
  {
    label: 'Career Tools',
    description: 'Explore smart career features',
    href: '#features',
  },
  {
    label: 'Getting Started',
    description: 'Learn how CareerHub works',
    href: '#how-it-works',
  },
  {
    label: 'Help Center',
    description: 'Frequently asked questions',
    href: '#faq',
  },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const {
    resolvedTheme,
    toggleTheme,
  } = useTheme()

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      )
    }
  }, [])

  /* =========================================================
     CLOSE MOBILE MENU WHEN SCREEN GETS LARGE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
        setResourcesOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener(
        'resize',
        handleResize,
      )
    }
  }, [])

  /* =========================================================
     BODY SCROLL LOCK ON MOBILE MENU
  ========================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  /* =========================================================
     NAVIGATION HANDLER
  ========================================================= */

  const handleNavClick = () => {
    setMobileOpen(false)
    setResourcesOpen(false)
  }

  /* =========================================================
     THEME HANDLER
  ========================================================= */

  const handleThemeToggle = () => {
    toggleTheme()
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-default bg-white/95 shadow-sm backdrop-blur-xl dark:bg-slate-950/95'
            : 'border-default bg-white/90 backdrop-blur-xl dark:bg-slate-950/90'
        }`}
      >
        <div className="page-container">
          <div className="flex h-[72px] items-center justify-between">
            {/* =================================================
                LOGO
            ================================================== */}

            <a
              href="#top"
              onClick={handleNavClick}
              className="group flex items-center gap-3"
              aria-label="AI CareerHub home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition duration-300 group-hover:scale-105">
                <BriefcaseBusiness
                  size={21}
                  strokeWidth={2.2}
                />
              </div>

              <div>
                <p className="font-[var(--font-heading)] text-[17px] font-extrabold tracking-tight text-primary">
                  AI CareerHub
                </p>

                <p className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-muted sm:block">
                  Career Intelligence
                </p>
              </div>
            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="inline-flex h-10 items-center rounded-lg px-4 text-sm font-semibold text-secondary transition hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setResourcesOpen(
                      (value) => !value,
                    )
                  }
                  aria-expanded={resourcesOpen}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg px-4 text-sm font-semibold text-secondary transition hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800"
                >
                  Resources

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      resourcesOpen
                        ? 'rotate-180'
                        : ''
                    }`}
                  />
                </button>

                {resourcesOpen && (
                  <div className="absolute right-0 top-12 w-64 rounded-2xl border border-default bg-surface p-2 shadow-[var(--shadow-dropdown)]">
                    {resourceItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={handleNavClick}
                        className="block rounded-xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <p className="text-sm font-semibold text-primary">
                          {item.label}
                        </p>

                        <p className="mt-1 text-xs text-muted">
                          {item.description}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================== */}

            <div className="hidden items-center gap-2 lg:flex">
              {/* Theme Button */}
              <button
                type="button"
                onClick={handleThemeToggle}
                aria-label={
                  resolvedTheme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                title={
                  resolvedTheme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-default bg-surface text-secondary transition hover:border-slate-300 hover:text-primary dark:hover:border-slate-600"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              {/* Login */}
              <a
                href="#login"
                onClick={handleNavClick}
                className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-secondary transition hover:text-primary"
              >
                Log in
              </a>

              {/* Get Started */}
              <a
                href="#signup"
                onClick={handleNavClick}
                className="btn-primary h-10 px-5"
              >
                Get Started

                <ArrowRight size={16} />
              </a>
            </div>

            {/* =================================================
                MOBILE ACTIONS
            ================================================== */}

            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Theme */}
              <button
                type="button"
                onClick={handleThemeToggle}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-default bg-surface text-secondary transition hover:text-primary"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              {/* Menu */}
              <button
                type="button"
                onClick={() =>
                  setMobileOpen(
                    (value) => !value,
                  )
                }
                aria-label={
                  mobileOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={mobileOpen}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-default bg-surface text-secondary transition hover:text-primary"
              >
                {mobileOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}

          {mobileOpen && (
            <div className="border-t border-default py-4 lg:hidden">
              <nav className="space-y-1">
                {/* Mobile Main Links */}
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-secondary transition hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Resources */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setResourcesOpen(
                        (value) => !value,
                      )
                    }
                    aria-expanded={resourcesOpen}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-secondary transition hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800"
                  >
                    Resources

                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        resourcesOpen
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  {resourcesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-default pl-3">
                      {resourceItems.map(
                        (item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={
                              handleNavClick
                            }
                            className="block rounded-lg px-3 py-2.5 text-sm text-muted transition hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800"
                          >
                            {item.label}
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-default pt-4">
                <a
                  href="#login"
                  onClick={handleNavClick}
                  className="btn-secondary"
                >
                  Log in
                </a>

                <a
                  href="#signup"
                  onClick={handleNavClick}
                  className="btn-primary"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Navbar