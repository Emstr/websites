import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Croydon's Trusted Flooring Specialists",
  description: "Learn about Croydon Carpet & Flooring - family-run flooring specialists with a showroom on London Road, 6 expert fitters and over 15 years experience.",
  openGraph: { title: "About Us | Croydon Carpet & Flooring", description: "Family-run flooring specialists in Croydon with 6 expert fitters and a London Road showroom since 2009." },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Quality Underfoot Since 2009</h1><p className="text-xl text-gray-200 leading-relaxed">A family-run flooring company that believes in honest advice, fair prices and expert craftsmanship.</p></div></div></section>

      <section className="section-padding bg-white">
        <div className="container-width"><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">From One Van to a Full Showroom</h2><div className="gold-line mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Croydon Carpet & Flooring started in 2009 with a single van, a set of tools and a determination to do things properly. Our founder had spent years fitting floors for large national chains and knew there was a better way: give customers honest advice, charge fair prices and do a first-class job every time.</p>
            <p className="text-gray-600 mb-6 leading-relaxed">Over the years, word spread. What began as a one-man operation grew into a team of six skilled fitters, and in 2014 we opened our showroom on London Road in Croydon. The showroom allows customers to see and feel hundreds of carpet, vinyl and wood samples before making a decision.</p>
            <p className="text-gray-600 leading-relaxed">Today, we fit flooring for homeowners, landlords, estate agents and businesses across South London. Our approach has not changed: we listen, we advise honestly, and we fit floors that last.</p>
          </div>
          <div className="bg-gray-50 p-8 lg:p-12 rounded-sm"><div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">16+</div><p className="text-gray-600 mt-2 font-medium">Years Experience</p></div>
            <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">6</div><p className="text-gray-600 mt-2 font-medium">Expert Fitters</p></div>
            <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">1000s</div><p className="text-gray-600 mt-2 font-medium">Floors Fitted</p></div>
            <div className="text-center p-6 bg-white rounded-sm shadow-sm"><div className="stat-number">5*</div><p className="text-gray-600 mt-2 font-medium">Google Reviews</p></div>
          </div></div>
        </div></div>
      </section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Values</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">What Makes Us Different</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Honest Advice", desc: "We will never upsell you flooring you do not need. If a budget option will do the job, we will tell you." },
            { title: "Expert Fitting", desc: "A beautiful floor is only as good as its installation. Our fitters are meticulous craftsmen who take pride in every room." },
            { title: "Fair Pricing", desc: "We buy direct from manufacturers and keep our margins reasonable. No inflated prices, no hidden extras." },
            { title: "No Pressure Sales", desc: "Our showroom and home visits are completely pressure-free. We provide information and let you decide in your own time." },
            { title: "Tidy Workmanship", desc: "We protect your home during fitting, clean up thoroughly afterwards and leave nothing behind but a perfect floor." },
            { title: "After-Care", desc: "We stand behind our work. If anything is not right, we come back and fix it. Your satisfaction is guaranteed." },
          ].map((value) => (
            <div key={value.title} className="card-premium p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3><p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-white"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Visit Us</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Our Croydon Showroom</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Come and see hundreds of samples in person. Our showroom is on London Road, just a short walk from East Croydon station.</p></div>
        <div className="bg-gray-50 p-8 lg:p-12 rounded-sm border-t-4 border-accent max-w-3xl mx-auto"><address className="not-italic text-gray-700 mb-6 text-lg"><strong>Croydon Carpet & Flooring</strong><br />146 London Road<br />Croydon, London CR0 2TD</address><div className="space-y-2 text-gray-600"><p><strong>East Croydon:</strong> 5-minute walk</p><p><strong>West Croydon:</strong> 7-minute walk</p></div></div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for New Flooring?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Visit our showroom or book a free home estimate. No obligation, just honest advice.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/carpet-fitter-croydon/contact" className="btn-accent">Book Free Estimate</Link><a href="tel:02079461170" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 1170</a></div>
      </div></section>
    </>
  );
}
