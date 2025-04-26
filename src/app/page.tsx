import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import ContactForm from '@/components/forms/ContactForm';
import LocalBusiness from '@/components/sections/LocalBusiness';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* LocalBusiness Schema for SEO */}
      <LocalBusiness />
    </>
  );
}
