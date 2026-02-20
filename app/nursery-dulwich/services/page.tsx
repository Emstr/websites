import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Rooms & Programmes | Baby Room to Forest School",
  description:
    "Explore our nursery rooms and programmes: Baby Room, Toddler Room, Pre-School, After-School Club, Holiday Club and Forest School sessions in Dulwich.",
  openGraph: {
    title: "Our Rooms & Programmes | Dulwich Day Nursery",
    description: "Childcare for every stage from 3 months to school age. Baby room, toddler room, pre-school, after-school and forest school in Dulwich.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "baby-room",
      title: "Baby Room",
      subtitle: "Ages 3 to 12 Months",
      description: "Our baby room is a calm, nurturing haven designed to mirror the routines and warmth of home. With a maximum of eight babies and a dedicated team of three practitioners, your little one receives attentive, individualised care throughout the day. We follow each baby's unique feeding, sleeping and play patterns, working closely with parents to ensure consistency.",
      features: ["Maximum 1:3 staff-to-baby ratio", "Sensory play and tummy time activities", "Individual sleep and feeding routines", "Daily diary shared with parents via app", "Calm, home-from-home environment", "Secure outdoor garden time in warm weather"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    },
    {
      id: "toddler-room",
      title: "Toddler Room",
      subtitle: "Ages 1 to 2 Years",
      description: "The toddler room is a vibrant, active space where little explorers begin to discover the world around them. Through messy play, water play, early mark-making and lots of singing, toddlers develop language, motor skills and confidence. Our practitioners gently support the transition from baby to independent learner, celebrating every milestone.",
      features: ["Maximum 1:4 staff-to-child ratio", "Messy play, water play and sensory activities", "Early language and communication focus", "Outdoor play in our secure garden daily", "Healthy, freshly prepared meals and snacks", "Gentle settling-in programme for new starters"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      id: "pre-school",
      title: "Pre-School",
      subtitle: "Ages 2 to 4 Years",
      description: "Our pre-school room prepares children for the exciting transition to Reception class. Through a rich curriculum based on the Early Years Foundation Stage (EYFS), children develop literacy, numeracy, creative and social skills. We work closely with local primary schools to ensure a smooth transition, and our children consistently arrive at school confident, curious and ready to learn.",
      features: ["Phonics and early reading programme", "Early mathematics and problem-solving", "Creative arts, music and movement", "School-readiness skills and social development", "Funded 15 and 30-hour places available", "Strong links with local primary schools"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    },
    {
      id: "after-school-club",
      title: "After-School Club",
      subtitle: "Ages 4 to 11 Years",
      description: "Our after-school club provides a safe, stimulating environment for primary school children from 3:30pm until 6:30pm. We collect from local schools including Dulwich Hamlet, Herne Hill and Rosendale. Children enjoy a healthy snack, homework support and a range of creative and physical activities, giving working parents peace of mind.",
      features: ["Collection from local primary schools", "Homework support and quiet study time", "Creative activities, cooking and crafts", "Outdoor play in our garden and park visits", "Healthy afternoon snack included", "Flexible booking: daily, weekly or termly"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      id: "holiday-club",
      title: "Holiday Club",
      subtitle: "School Holiday Care",
      description: "Our holiday club runs during every school holiday, offering fun-filled days packed with themed activities, trips and outdoor adventures. Each week has a different theme — from science week to sports week — keeping children engaged and entertained. Available for children aged 4 to 11, our holiday club is the perfect solution for working families during school breaks.",
      features: ["Full-day care from 8am to 6pm", "Weekly themed programmes and activities", "Trips to local parks, museums and attractions", "Arts, crafts, cooking and sports", "All meals and snacks included", "Sibling discounts available"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      id: "forest-school",
      title: "Forest School Sessions",
      subtitle: "Outdoor Learning in Nature",
      description: "Our forest school sessions take place weekly in Dulwich Park, led by our Level 3 Forest School trained practitioner. Children explore nature through hands-on activities including den building, fire circle cooking, wildlife observation and seasonal crafts. Forest school develops resilience, creativity, confidence and a deep connection with the natural world.",
      features: ["Weekly sessions in Dulwich Park", "Led by qualified Forest School practitioner", "Den building, fire circle and nature crafts", "Bug hunts and wildlife observation", "All-weather outdoor learning (we provide wellies!)", "Develops confidence, resilience and teamwork"],
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
  ];

  return (
    <>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Rooms &amp; Programmes</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Childcare for Every Stage</h1>
            <p className="text-xl text-gray-200 leading-relaxed">From our nurturing baby room to adventurous forest school sessions, we provide age-appropriate care and learning for children from 3 months to 11 years.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Six Programmes, One Nurturing Setting</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every room and programme is designed around the EYFS framework, ensuring children receive the highest quality early years education alongside loving care.</p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-[var(--accent)] mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">{service.title}</h3>
                  <p className="text-[var(--accent)] font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/nursery-dulwich/contact" className="bg-[var(--accent)] text-[var(--primary)] px-6 py-3 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors inline-block">Enquire About This Room</Link>
                </div>
                <div className={`bg-gray-50 p-8 lg:p-12 rounded-sm ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-sm flex items-center justify-center">
                    <div className="text-white opacity-20 scale-150">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mt-4 mb-4">Your Child&apos;s Journey With Us</h2>
            <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">1</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Visit Us</h3>
              <p className="text-gray-600">Book a visit to see our nursery, meet the team and ask any questions about your child&apos;s care.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">2</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Settling In</h3>
              <p className="text-gray-600">A gentle settling-in programme helps your child feel safe and happy before their full start date.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">3</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Learning &amp; Growing</h3>
              <p className="text-gray-600">Your child enjoys a rich curriculum of play, learning and outdoor exploration tailored to their stage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif">4</div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">School Ready</h3>
              <p className="text-gray-600">Children leave our pre-school confident, curious and fully prepared for the transition to primary school.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find the Perfect Room for Your Child?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a visit to see our nursery in person. We would love to show you around and discuss the best options for your family.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/nursery-dulwich/contact" className="bg-[var(--accent)] text-[var(--primary)] px-8 py-4 font-semibold rounded-sm hover:bg-[var(--accent-light)] transition-colors">Book a Visit</Link>
            <a href="tel:02079462290" className="border-2 border-white text-white px-8 py-4 font-semibold rounded-sm hover:bg-white hover:text-[var(--primary)] transition-colors">Call 020 7946 2290</a>
          </div>
        </div>
      </section>
    </>
  );
}
