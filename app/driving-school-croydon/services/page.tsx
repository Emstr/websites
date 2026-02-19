import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Driving Lessons & Courses | Manual, Automatic & Intensive",
  description:
    "Driving lesson courses in Croydon. Manual lessons, automatic lessons, intensive courses, Pass Plus, motorway lessons and refresher courses. DVSA approved instructors.",
  openGraph: {
    title: "Driving Lessons & Courses | Croydon Driving Academy",
    description: "DVSA approved driving lessons in Croydon. Manual, automatic, intensive and Pass Plus courses.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "manual-lessons",
      title: "Manual Lessons",
      subtitle: "The Full Driving Experience",
      description: "Our manual driving lessons teach you complete vehicle control, giving you a full driving licence that lets you drive both manual and automatic cars. Lessons are structured around the DVSA syllabus with a progressive approach that builds skills systematically.",
      features: ["Structured DVSA syllabus-based tuition", "Dual-controlled modern vehicles", "Pick-up and drop-off from your location", "Flexible 1 or 2-hour lesson options", "Mock test preparation included", "Test route familiarisation"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      id: "automatic-lessons",
      title: "Automatic Lessons",
      subtitle: "Simpler, Stress-Free Learning",
      description: "Automatic lessons remove the complexity of clutch control and gear changes, allowing you to focus entirely on the road. Increasingly popular as more cars become automatic, this is a brilliant option for nervous learners or those who simply prefer a smoother ride.",
      features: ["No clutch or gear changes to worry about", "Focus entirely on road awareness", "Modern automatic dual-control car", "Same structured learning approach", "Typically fewer lessons needed to pass", "Growing number of automatic cars on the road"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
    {
      id: "intensive-courses",
      title: "Intensive Courses",
      subtitle: "Pass in 1-2 Weeks",
      description: "Our intensive driving courses are designed for learners who want to pass quickly. With daily lessons over one to two weeks, you maintain momentum and progress rapidly. We include a test booking as part of the package.",
      features: ["20, 30 or 40-hour packages available", "Daily lessons for rapid progression", "Test booking included in the price", "Suitable for complete beginners", "Dedicated instructor throughout", "Theory test preparation support"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      id: "pass-plus",
      title: "Pass Plus",
      subtitle: "Beyond the Test",
      description: "The DVSA-designed Pass Plus course is a practical training programme for newly qualified drivers. It covers six modules including motorway driving, night driving and all-weather conditions, helping you become a safer, more confident driver.",
      features: ["DVSA-designed syllabus", "Motorway driving module", "Night driving practice", "All-weather condition training", "May reduce insurance premiums", "Certificate of completion issued"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    },
    {
      id: "motorway-lessons",
      title: "Motorway Lessons",
      subtitle: "Confident at Speed",
      description: "Since 2018, learner drivers can take motorway lessons with an approved instructor. Our motorway tuition covers joining, lane discipline, overtaking and exiting safely. Essential for any new driver who will be using motorways regularly.",
      features: ["Legal motorway tuition with ADI", "Joining and leaving motorways safely", "Lane discipline and overtaking", "Speed management and awareness", "Dealing with heavy traffic", "Building confidence at higher speeds"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h-3m3 0h7v-3a3 3 0 00-3-3h-1m-6 6H4m0 0v-3" /></svg>,
    },
    {
      id: "refresher-courses",
      title: "Refresher Courses",
      subtitle: "Get Your Confidence Back",
      description: "Whether it has been months or years since you last drove, our refresher courses will get you back behind the wheel with confidence. We assess your current level and tailor the lessons to address any areas where you need support.",
      features: ["Initial skills assessment", "Tailored lesson plan", "Flexible booking - take as many or few as needed", "Modern vehicle familiarisation", "Parking and manoeuvre practice", "Urban and rural driving refresher"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Courses</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Driving Lessons &amp; Courses</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From your very first lesson to advanced post-test training, we have the right course for you. All tuition is delivered by DVSA approved instructors.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Choose Your Course</h2>
            <div className="gold-line-center mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every learner is different. We&apos;ll help you find the right course and tailor your lessons to your individual pace and learning style.</p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-accent font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/driving-school-croydon/contact" className="btn-accent">Book This Course</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">Your Journey to Passing</h2>
            <div className="gold-line-center mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-primary mb-2">Get in Touch</h3>
              <p className="text-gray-600">Call or book online. We&apos;ll discuss your experience level and match you with the right instructor.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-primary mb-2">Start Learning</h3>
              <p className="text-gray-600">We pick you up and begin structured lessons tailored to your pace and goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Test Preparation</h3>
              <p className="text-gray-600">Mock tests, route familiarisation and manoeuvre practice to ensure you&apos;re fully ready.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Pass Your Test!</h3>
              <p className="text-gray-600">Walk out of the test centre with your licence and the confidence to drive safely for life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Driving Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book your first lesson today. We&apos;ll pick you up from home, work or college anywhere in the Croydon area.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/driving-school-croydon/contact" className="btn-accent">Book Your First Lesson</Link>
            <a href="tel:02079463678" className="btn-outline border-white text-white hover:bg-white hover:text-primary">Call 020 7946 3678</a>
          </div>
        </div>
      </section>
    </>
  );
}
