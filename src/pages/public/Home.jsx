import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

import Hero from '../../components/landing/Hero'
import Features from '../../components/landing/Features'
import HowItWorks from '../../components/landing/HowItWorks'
import Testimonials from '../../components/landing/Testimonials'
import Pricing from '../../components/landing/Pricing'
import FAQ from '../../components/landing/FAQ'
import CTASection from '../../components/landing/CTASection'

function Home() {
  return (
    <div className="app-background">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </div>
  )
}

export default Home