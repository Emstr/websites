import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services | Domestic, Deep Clean, End of Tenancy & Office",
  description: "Premium cleaning services in Mayfair. Regular domestic, deep cleaning, end of tenancy, office cleaning, after-party, and carpet & upholstery cleaning.",
  openGraph: { title: "Cleaning Services | Mayfair Cleaning Services", description: "Professional cleaning for homes and offices in Mayfair. DBS checked, eco-friendly, impeccable results." },
};

export default function ServicesPage() {
  const services = [
    { id: "regular-domestic", title: "Regular Domestic Cleaning", subtitle: "Your Home, Consistently Perfect", description: "Our regular cleaning service gives you a beautifully clean home every week or fortnight, without lifting a finger. You get a dedicated cleaner who learns your preferences and follows a detailed checklist tailored to your property. We bring our own eco-friendly products and equipment.", features: ["Dedicated cleaner assigned to your home", "Weekly or fortnightly schedules", "Personalised cleaning checklist", "All eco-friendly products supplied", "Kitchen, bathrooms, bedrooms, living areas", "Ironing and laundry add-ons available"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { id: "deep-cleaning", title: "Deep Cleaning", subtitle: "Every Corner, Every Surface", description: "Our deep cleaning service is a comprehensive, intensive clean that reaches every corner of your home. We clean behind and under appliances, degrease extractor fans, descale taps and showerheads, clean inside ovens, and wash all skirting boards. Perfect for spring cleans or preparing your home for a special occasion.", features: ["Inside oven and hob cleaning", "Behind and under all appliances", "Limescale and grease removal", "Window sills and frames", "Skirting boards and light switches", "All door handles and fixtures"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
    { id: "end-of-tenancy", title: "End of Tenancy Cleaning", subtitle: "Deposit Return Guaranteed", description: "Our end of tenancy clean is designed to meet the exacting standards of landlords and letting agents. We follow a comprehensive checklist covering every room, and our deposit-return guarantee means we will return to address any issues raised by your landlord at no extra cost.", features: ["Comprehensive room-by-room checklist", "Full oven and hob clean included", "Inside all cupboards and wardrobes", "Windows cleaned internally", "Deposit return guarantee", "Inventory-standard results"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
    { id: "office-cleaning", title: "Office Cleaning", subtitle: "A Professional Space, Every Day", description: "First impressions matter. Our office cleaning service keeps your workspace immaculate with daily, weekly, or bespoke schedules. We work around your business hours and provide everything from desk sanitisation to kitchen and washroom maintenance.", features: ["Daily, weekly, or custom schedules", "Desk and workstation sanitisation", "Kitchen and breakout area cleaning", "Washroom deep clean and restocking", "Reception and meeting room upkeep", "Key-holding and out-of-hours service"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { id: "after-party", title: "After-Party Cleaning", subtitle: "We Handle the Morning After", description: "Had a dinner party, birthday celebration, or corporate event? Our after-party cleaning team arrives the next morning to restore your home or venue to its former glory. We handle everything from stain removal to washing up and general tidying.", features: ["Next-morning availability", "Full kitchen clean and washing up", "Stain removal from fabrics and surfaces", "Bathroom and cloakroom deep clean", "Rubbish collection and recycling", "Available for homes and venues"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { id: "carpet-upholstery", title: "Carpet & Upholstery Cleaning", subtitle: "Deep Clean for Soft Furnishings", description: "Our professional carpet and upholstery cleaning uses hot water extraction technology to remove deep-seated dirt, stains, and allergens. We clean carpets, rugs, sofas, armchairs, curtains, and mattresses, leaving them fresh, clean, and rejuvenated.", features: ["Hot water extraction technology", "Effective stain and odour removal", "Carpets, rugs, and runners", "Sofas, armchairs, and dining chairs", "Mattress deep cleaning", "Fast drying times"], icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg> },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28"><div className="container-width"><div className="max-w-3xl"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span><h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Premium Cleaning Services</h1><p className="text-xl text-gray-200 leading-relaxed">From regular domestic cleans to specialist deep cleaning, every service is delivered by DBS checked professionals using eco-friendly products.</p></div></div></section>

      <section className="section-padding bg-white"><div className="container-width">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Cleaning Services</h2><div className="gold-line-center mb-6"></div><p className="text-lg text-gray-600 max-w-3xl mx-auto">Every service includes DBS checked staff, eco-friendly products, and our satisfaction guarantee.</p></div>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">{service.features.map((f, i) => (<li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-gray-700">{f}</span></li>))}</ul>
                <Link href="/cleaning-mayfair/contact" className="btn-accent">Book This Service</Link>
              </div>
              <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}><div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center"><div className="text-white opacity-20 scale-150">{service.icon}</div></div></div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-gray-50"><div className="container-width"><div className="text-center mb-16"><span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Process</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">How It Works</h2><div className="gold-line-center mb-6"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ n: "1", t: "Book Online or Call", d: "Tell us what you need and when. We will match you with the perfect cleaner." }, { n: "2", t: "We Send Your Cleaner", d: "Your dedicated, DBS checked cleaner arrives on time with all products and equipment." }, { n: "3", t: "Sparkling Results", d: "We clean to our detailed checklist and your personal preferences. Every time." }, { n: "4", t: "Quality Guaranteed", d: "Not happy? We will return within 24 hours to put it right, free of charge." }].map((s) => (
            <div key={s.n} className="text-center"><div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{s.n}</div><h3 className="text-xl font-bold text-primary mb-2">{s.t}</h3><p className="text-gray-600">{s.d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="section-padding bg-primary"><div className="container-width text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Sparkling Clean?</h2><p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book online or call us for a free quote. First-time customers receive 20% off their first clean.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/cleaning-mayfair/contact" className="btn-accent">Book a Clean</Link><a href="tel:02079460345" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 0345</a></div></div></section>
    </>
  );
}
