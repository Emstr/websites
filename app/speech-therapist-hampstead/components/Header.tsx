"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/speech-therapist-hampstead" },
  { label: "Services", href: "/speech-therapist-hampstead/services" },
  { label: "About", href: "/speech-therapist-hampstead/about" },
  { label: "FAQ", href: "/speech-therapist-hampstead/faq" },
  { label: "Contact", href: "/speech-therapist-hampstead/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full z-50 relative">
      <div className="bg-primary text-white/80 text-sm py-2 no-print">
        <div className="container-width flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:02079464450" className="hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              020 7946 4450
            </a>
            <a href="mailto:clinic@hampsteadspeech.co.uk" className="hover:text-white transition-colors hidden md:flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              clinic@hampsteadspeech.co.uk
            </a>
          </div>
          <span className="hidden lg:block">HCPC Registered &amp; RCSLT Members</span>
        </div>
      </div>
      <nav className="bg-white shadow-sm">
        <div className="container-width flex items-center justify-between h-20">
          <Link href="/speech-therapist-hampstead" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </div>
            <div>
              <span className="text-xl font-bold text-primary leading-none">Hampstead Speech Therapy</span>
              <span className="text-xs text-accent block tracking-wider">Finding Your Voice</span>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-gray-700 hover:text-accent transition-colors font-medium text-sm tracking-wide">
                {n.label}
              </Link>
            ))}
            <Link href="/speech-therapist-hampstead/contact" className="btn-accent text-sm">Book Consultation</Link>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-white border-t">
            <div className="container-width py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-gray-700 hover:text-accent transition-colors font-medium py-2">
                  {n.label}
                </Link>
              ))}
              <Link href="/speech-therapist-hampstead/contact" onClick={() => setOpen(false)} className="btn-accent text-center mt-2">Book Consultation</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
