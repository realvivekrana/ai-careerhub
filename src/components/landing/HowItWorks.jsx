import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Search,
  Sparkles,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover opportunities',
    description:
      'Search and filter jobs based on your role, skills, location, experience and preferences.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Track your applications',
    description:
      'Save jobs and move applications through your hiring pipeline so nothing gets forgotten.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Prepare & improve',
    description:
      'Use resume insights, interview practice and career analytics to continuously improve your strategy.',
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-default py-20 sm:py-24"
    >
      <div className="page-container">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A simpler way to manage your job search
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-secondary">
              Stop switching between spreadsheets, job boards,
              notes and random documents. Keep your career workflow
              organized in one intelligent workspace.
            </p>

            {/* Benefits */}
            <div className="mt-7 space-y-3">
              {[
                'One organized workspace',
                'Actionable career insights',
                'Built for modern job seekers',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                  />

                  <span className="text-sm font-semibold text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#signup"
              className="btn-primary mt-8"
            >
              Create your workspace

              <ArrowRight size={16} />
            </a>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="relative"
                >
                  {/* Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-7 top-16 hidden h-10 w-px bg-indigo-100 sm:block dark:bg-indigo-500/20" />
                  )}

                  <div className="card card-hover flex gap-5 p-5 sm:p-6">
                    {/* Number / Icon */}
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                      <Icon
                        size={23}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Step Content */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400">
                          {step.number}
                        </span>

                        <h3 className="text-lg font-bold">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks