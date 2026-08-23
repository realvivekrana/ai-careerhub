import {
  Quote,
  Star,
} from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    initials: 'PS',
    quote:
      'Having applications, interview dates and career progress in one place makes my job search much less stressful.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Product Designer',
    initials: 'AM',
    quote:
      'The resume insights give me a much clearer idea of what recruiters could notice before I apply.',
  },
  {
    name: 'Rahul Verma',
    role: 'Software Engineer',
    initials: 'RV',
    quote:
      'The tracker completely replaced my spreadsheet. I can instantly see what needs my attention next.',
  },
]

function Testimonials() {
  return (
    <section className="border-b border-default py-20 sm:py-24">
      <div className="page-container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
            Loved by job seekers
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built around real career workflows
          </h2>

          <p className="mt-4 text-base leading-7 text-secondary">
            A focused workspace can make a huge difference when
            you're applying consistently and preparing seriously.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="card card-hover p-6"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="mt-6">
                <Quote
                  size={25}
                  className="text-indigo-200 dark:text-indigo-500/30"
                />

                <p className="mt-3 text-sm leading-7 text-secondary">
                  “{testimonial.quote}”
                </p>
              </div>

              {/* User */}
              <div className="mt-6 flex items-center gap-3 border-t border-default pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-bold">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials