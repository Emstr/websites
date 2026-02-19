import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Meet Our Physiotherapy Team",
  description:
    "Learn about Richmond Physiotherapy Clinic — HCPC registered and CSP member physiotherapists in Richmond, TW9. Over 15 years of experience helping patients recover, move, and thrive.",
  openGraph: {
    title: "About Us | Richmond Physiotherapy Clinic",
    description:
      "Meet our experienced physiotherapy team in Richmond. HCPC registered, CSP members, self-referral welcome. Early morning and evening appointments.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-serif">Meet Our Physiotherapy Team</h1>
            <p className="text-xl text-gray-200 leading-relaxed">HCPC registered physiotherapists with a shared passion for helping people move better, recover faster, and live without pain.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">Helping Richmond Move Since 2010</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Richmond Physiotherapy Clinic was founded by a team of physiotherapists who believed that expert, personalised care should be accessible to everyone — not just elite athletes. We set up on Hill Street with the goal of bringing the highest standards of evidence-based physiotherapy to our local community.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, our clinic has grown from two treatment rooms to a fully equipped facility with five specialist physiotherapists, each bringing their own area of expertise. From sports injuries and spinal conditions to women&apos;s health and post-operative rehabilitation, our breadth of knowledge means we can treat the whole person, not just the injury.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re proud to be part of the Richmond community. Many of our patients have been with us for years, returning not just for treatment but for prevention and performance. That trust is something we never take for granted.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">15+</div>
                  <p className="text-gray-600 mt-2 font-medium">Years Established</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">8,000+</div>
                  <p className="text-gray-600 mt-2 font-medium">Patients Treated</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">5</div>
                  <p className="text-gray-600 mt-2 font-medium">Specialist Physios</p>
                </div>
                <div className="text-center p-6 bg-white rounded-sm shadow-sm">
                  <div className="text-4xl font-bold text-[var(--accent)]">4.9/5</div>
                  <p className="text-gray-600 mt-2 font-medium">Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">What Sets Us Apart</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Evidence-Based Practice", desc: "Every treatment we provide is grounded in the latest research and clinical evidence. We stay current through continuous professional development and regularly review our methods to ensure you get the most effective care.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { title: "Patient-Centred Care", desc: "You are at the centre of everything we do. We listen, we explain, and we involve you in every decision about your treatment. Your goals are our goals, whether that's running a marathon or climbing the stairs without pain.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Hands-On Expertise", desc: "While exercise and education are crucial, skilled manual therapy remains at the heart of what we do. Our physiotherapists are trained in a wide range of hands-on techniques to relieve pain, restore movement, and accelerate healing.", icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" },
              { title: "Accessibility", desc: "Self-referral means you don't need to wait for a GP appointment before seeing us. We also offer early morning and evening slots so treatment fits around your life, not the other way around.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Specialist Knowledge", desc: "Our team includes specialists in sports injuries, spinal conditions, post-surgical rehabilitation, and women's health. Whatever your condition, there's a physiotherapist here with the specific expertise to help.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Long-Term Wellbeing", desc: "We don't just treat your symptoms — we address the underlying cause and give you the tools to prevent recurrence. Our goal is to make you independent and resilient, not reliant on ongoing treatment.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-[var(--accent)]">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3 font-serif">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4 font-serif">In the Heart of Richmond</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our modern, well-equipped clinic is conveniently located on Hill Street, just minutes from Richmond station. We serve patients from across Richmond, Twickenham, Kew, East Sheen, and the wider South West London area.</p>
          </div>
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 lg:p-12 rounded-sm text-white max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold text-sm">Our Clinic</span>
                <h3 className="text-2xl font-bold font-serif">Richmond, South West London</h3>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">Our purpose-built clinic features spacious treatment rooms, a dedicated rehabilitation gym, and a welcoming reception area. We&apos;re a short walk from Richmond station (District line, Overground, and South Western Railway).</p>
            <address className="not-italic text-gray-200 mb-6">14 Hill Street<br />Richmond, London TW9 1TN</address>
            <ul className="space-y-2 text-gray-200">
              {["5 minutes from Richmond station", "Serving Richmond, Twickenham, Kew & East Sheen", "On-street parking and nearby car parks available"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 font-serif">HCPC Registered &amp; CSP Members</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">All physiotherapists at Richmond Physiotherapy Clinic are registered with the Health and Care Professions Council (HCPC), the statutory regulator for physiotherapists in the UK. We are also proud members of the Chartered Society of Physiotherapy (CSP), the professional body representing the physiotherapy profession.</p>
            <p className="text-gray-600 leading-relaxed">These registrations mean you can be confident that our team has met rigorous educational and professional standards and continues to develop their skills through ongoing CPD. We carry full professional indemnity insurance for your peace of mind.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Ready to Start Your Recovery?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your appointment today. Self-referral welcome — no GP letter needed. Early morning and evening appointments available.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/physio-richmond/contact" className="bg-[var(--accent)] text-white px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Book Appointment</Link>
            <a href="tel:02079465678" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors inline-block">Call 020 7946 5678</a>
          </div>
        </div>
      </section>
    </>
  );
}
