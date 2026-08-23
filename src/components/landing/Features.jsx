import {
  BarChart3,
  BriefcaseBusiness,
  FileSearch,
  MessageSquareText,
  Search,
  Sparkles,
  Target,
} from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Smart Job Discovery',
    description:
      'Find relevant opportunities faster with powerful search, filters, locations, skills and job preferences.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Job Application Tracker',
    description:
      'Organize every application in one place and move opportunities through your personalized hiring pipeline.',
  },
  {
    icon: FileSearch,
    title: 'AI Resume Insights',
    description:
      'Understand your resume health, ATS readiness, missing skills and areas that could improve your applications.',
  },
  {
    icon: MessageSquareText,
    title: 'AI Interview Practice',
    description:
      'Practice technical and behavioral interviews with role-specific questions and structured feedback.',
  },
  {
    icon: BarChart3,
    title: 'Career Analytics',
    description:
      'Visualize application activity, interview rates, response rates and other important career metrics.',
  },
  {
    icon: Target,
    title: 'Career Goals',
    description:
      'Set meaningful career goals and keep your job search focused with actionable progress indicators.',
  },
]

function Features() {
  return (
    <section
      id="features"
      className="border-b border-default py-20 sm:py-24"
    >
      <div className="page-container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <Sparkles size={20} />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            Everything in one place
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tools designed for your next career move
          </h2>

          <p className="mt-4 text-base leading-7 text-secondary">
            From discovering opportunities to preparing for
            interviews, CareerHub gives you one focused workspace
            for your entire job search.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="card card-hover group relative overflow-hidden p-6"
              >
                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-indigo-500/5 blur-2xl transition duration-500 group-hover:bg-indigo-500/10" />

                {/* Top Row */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition duration-300 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:group-hover:bg-indigo-500 dark:group-hover:text-white">
                    <Icon
                      size={22}
                      strokeWidth={2}
                    />
                  </div>

                  <span className="text-xs font-bold text-slate-300 dark:text-slate-700">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mt-6 text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="relative mt-6 h-1 w-10 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-16" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features