import { useState } from 'react'
import {
  ChevronDown,
  HelpCircle,
} from 'lucide-react'

const questions = [
  {
    question: 'Is AI CareerHub free to use?',
    answer:
      'Yes. AI CareerHub includes a free plan concept for users who want to organize their job search. Premium plans are also available for users who want advanced career features.',
  },
  {
    question: 'Can I track all my job applications?',
    answer:
      'Yes. The Job Tracker is designed to organize applications by stages such as Saved, Applied, Interview, Offer and Rejected.',
  },
  {
    question: 'Does the resume analyzer actually use AI?',
    answer:
      'This frontend-only version uses realistic demo data to demonstrate the AI experience. A real AI API can be connected later without redesigning the interface.',
  },
  {
    question: 'Can I practice interviews?',
    answer:
      'Yes. The AI Interview area is designed for role-based questions, answer submission, feedback and scoring.',
  },
  {
    question: 'Will my data remain after refreshing the page?',
    answer:
      'The frontend architecture is designed to use localStorage for selected user preferences and demo application data. A production version can later connect to a database.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index,
    )
  }

  return (
    <section
      id="faq"
      className="border-b border-default py-20 sm:py-24"
    >
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Left Content */}
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <HelpCircle size={21} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-indigo-600 dark:text-indigo-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Questions, answered.
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-secondary">
              Everything you need to know about the AI CareerHub
              experience.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {questions.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-default bg-surface"
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-slate-50 dark:hover:bg-slate-900/60"
                  >
                    <span className="text-sm font-bold sm:text-base">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-default px-5 pb-5 pt-4">
                      <p className="text-sm leading-6 text-secondary">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ