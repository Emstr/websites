import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Paul Dodd Asset Management | Independent Financial Advisers Leeds",
  description: "Paul Dodd Asset Management Limited - Independent Financial Advisers in Leeds serving clients since 1992. Pensions, Wealth Management, Investment Advice, ISAs & Retirement Planning. FCA Authorised.",
  keywords: "financial adviser Leeds, wealth management Leeds, pension advice, investment adviser, ISAs, retirement planning, FCA authorised, Paul Dodd",
  openGraph: {
    title: "Paul Dodd Asset Management | Independent Financial Advisers Leeds",
    description: "Established 1992. Expert financial advice for pensions, wealth management and retirement planning in Leeds.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
