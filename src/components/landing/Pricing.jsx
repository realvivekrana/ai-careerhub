import {
  Check,
  Sparkles,
} from 'lucide-react'

const plans = [
  {
    name: 'Free',
    description:
      'For getting started with a focused job search.',
    price: '₹0',
    period: 'forever',
    features: [
      'Job search workspace',
      'Application tracking',
      'Saved jobs',
      'Basic career analytics',
      'Interview reminders',
    ],
    button: 'Start for free',
    featured: false,
  },
  {
    name: 'Pro',
    description:
      'For serious job seekers who want deeper insights.',
    price: '₹499',
    period: 'per month',
    features: [
      'Everything in Free',
      'AI resume insights',
      'AI interview practice',
      'Advanced analytics',
      'Priority career insights',
    ],
    button: 'Choose Pro',
    featured: true,
  },
  {
    name: 'Career',
    description:
      'For intensive career preparation and growth.',
    price: '₹999',
    period: 'per month',
    features: [
      'Everything in Pro',
      'Advanced interview preparation',
      'Detailed resume analysis',
      'Personal career goals',
      'Premium workspace features',
    ],
    button: 'Choose Career',
    featured: false,
  },
]

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-default py-20 sm:py-24"
    >
      <div className="page-container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            Simple pricing
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Start free. Upgrade when you need more.
          </h2>

          <p className="mt-4 text-base leading-7 text-secondary">
            Choose the workspace that matches the intensity of
            your career journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-6 ${
                plan.featured
                  ? 'border-indigo-500 bg-indigo-600 text-white shadow-xl shadow-indigo-500/20'
                  : 'card'
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-indigo-600 shadow-md">
                  <Sparkles size={12} />
                  Most popular
                </div>
              )}

              {/* Plan Name */}
              <p
                className={`text-sm font-bold ${
                  plan.featured
                    ? 'text-indigo-100'
                    : 'text-indigo-600 dark:text-indigo-400'
                }`}
              >
                {plan.name}
              </p>

              {/* Description */}
              <p
                className={`mt-3 min-h-12 text-sm leading-6 ${
                  plan.featured
                    ? 'text-indigo-100'
                    : 'text-secondary'
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-extrabold tracking-tight">
                  {plan.price}
                </span>

                <span
                  className={`ml-2 text-xs ${
                    plan.featured
                      ? 'text-indigo-200'
                      : 'text-muted'
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#signup"
                className={`mt-6 flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-bold transition ${
                  plan.featured
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'btn-primary'
                }`}
              >
                {plan.button}
              </a>

              {/* Divider */}
              <div
                className={`my-6 border-t ${
                  plan.featured
                    ? 'border-indigo-400/40'
                    : 'border-default'
                }`}
              />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={17}
                      className={`mt-0.5 shrink-0 ${
                        plan.featured
                          ? 'text-indigo-100'
                          : 'text-emerald-500'
                      }`}
                    />

                    <span
                      className={`text-sm ${
                        plan.featured
                          ? 'text-indigo-50'
                          : 'text-secondary'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing