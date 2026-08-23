import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
          {/* Background Effects */}
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

          {/* Content */}
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-indigo-200">
                <Sparkles size={14} />

                Your next opportunity starts here
              </div>

              {/* Heading */}
              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Take control of your career journey.
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Build a smarter job-search workflow, stay organized,
                and prepare for your next opportunity with confidence.
              </p>

              {/* Benefits */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  'Free to get started',
                  'Modern career workspace',
                  'Built for ambitious professionals',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-emerald-400"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="lg:shrink-0">
              <a
                href="#signup"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Create free account

                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection