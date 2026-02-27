import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ReviewCarousel from "@/components/ReviewCarousel";
import ServiceCard from "@/components/ServiceCard";
import { cosmeticServices, reconstructiveServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Dr. Prasanna Somvanshi | Plastic & Reconstructive Surgeon in Mumbai",
  description:
    "Dr. Prasanna Somvanshi — leading Plastic & Reconstructive Surgeon in Mumbai (MCh, JJ Hospital). Expert in rhinoplasty, liposuction, cleft lip & palate repair, burn reconstruction, hand surgery & more. Practising at NH SRCC, SevenHills, Surya, HN Reliance & MRR Hospital.",
  alternates: { canonical: "https://drprasannasomvanshi.com" },
};

const conditions = [
  { label: "Cleft lip in newborn", href: "/services#cleft-lip-repair" },
  { label: "Cleft palate in baby", href: "/services#cleft-palate-repair" },
  { label: "Burn scars & contractures", href: "/services#burn-scar-treatment" },
  { label: "Facial trauma / accident injury", href: "/services#trauma-repair" },
  { label: "Non-healing wounds", href: "/services#complex-wound-management" },
  { label: "Diabetic foot ulcer", href: "/services#diabetic-foot" },
  { label: "Cancer reconstruction", href: "/services#onco-reconstruction" },
  { label: "Hand injury / deformity", href: "/services#hand-surgery" },
  { label: "Speech problems (VPI)", href: "/services#vpi-surgery" },
  { label: "Skull / facial deformity", href: "/services#craniofacial-surgery" },
  { label: "Stubborn body fat", href: "/services#liposuction" },
  { label: "Nose reshaping", href: "/services#rhinoplasty" },
  { label: "Loose tummy skin", href: "/services#tummy-tuck" },
  { label: "Breast size concerns", href: "/services#breast-surgery" },
];

const faqs = [
  {
    q: "Is plastic surgery safe?",
    a: "Yes. Dr. Somvanshi operates at accredited hospitals like NH SRCC, SevenHills, Surya, H.N. Reliance, MRR & Sushrusha Hospital which follow the highest safety standards.",
  },
  {
    q: "How do I know if I need cosmetic or reconstructive surgery?",
    a: "Cosmetic surgery enhances appearance, while reconstructive surgery restores function after injury, burns, or birth defects. Dr. Somvanshi specialises in both.",
  },
  {
    q: "What is the recovery time?",
    a: "Varies by procedure. Minor procedures take a few days, major surgeries 2\u20134 weeks. A detailed recovery plan is provided during consultation.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. Dr. Somvanshi is associated with NH SRCC Children\u2019s Hospital and Surya Hospital, treating paediatric patients for cleft lip, cleft palate, burns, and craniofacial conditions.",
  },
  {
    q: "Which hospitals do you practice at?",
    a: "NH SRCC Children\u2019s Hospital, SevenHills Hospital (Andheri), Surya Hospital (Santacruz), H.N. Reliance Foundation Hospital (Girgaon), MRR Hospital (Thane), and Sushrusha Hospital (Dadar).",
  },
  {
    q: "Which insurance is accepted?",
    a: "Insurance acceptance varies by hospital. Please contact us for specific queries.",
  },
  {
    q: "What is the consultation fee?",
    a: "Fees vary by hospital. Please enquire while booking your appointment.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Hospital Trust Badges */}
      <section className="border-b border-cream-dark bg-white py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Practising at</span>
            {["NH SRCC", "SevenHills", "Surya Hospital", "HN Reliance", "MRR Thane", "Sushrusha"].map((h) => (
              <span key={h} className="text-sm font-medium text-text/70">{h}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] sm:text-3xl">
            Meet <span className="text-primary">Dr. Prasanna Somvanshi</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-relaxed">
            A highly skilled Plastic &amp; Reconstructive Surgeon based in Mumbai, Dr. Prasanna
            Somvanshi brings extensive training from Grant Medical College &amp; Sir JJ Group of
            Hospitals and a Comprehensive Cleft Fellowship under Smile Train India. His commitment
            to patient safety, personalised care, and natural-looking outcomes has earned the trust
            of patients across Mumbai and beyond.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["MBBS", "DNB (General Surgery)", "MCh (Plastic Surgery)"].map((q) => (
              <span
                key={q}
                className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {q}
              </span>
            ))}
            <span className="rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              APSI Life Member
            </span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Comprehensive cosmetic and reconstructive procedures tailored to your needs.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="mb-5 text-xl font-bold text-secondary font-[family-name:var(--font-heading)]">
              Cosmetic Procedures
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cosmeticServices.map((s) => (
                <Link key={s.slug} href={`/services#${s.slug}`}>
                  <ServiceCard service={s} />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-5 text-xl font-bold text-secondary font-[family-name:var(--font-heading)]">
              Reconstructive Procedures
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {reconstructiveServices.map((s) => (
                <Link key={s.slug} href={`/services#${s.slug}`}>
                  <ServiceCard service={s} />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-8 h-48 w-full overflow-hidden rounded-2xl sm:h-56">
            <Image
              src="/images/trust-banner.jpg"
              alt="Medical care and treatment at top Mumbai hospitals"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary-dark/50 flex items-center justify-center">
              <h2 className="text-center text-3xl font-bold text-white font-[family-name:var(--font-heading)] sm:text-4xl drop-shadow-lg">
                Conditions We <span className="text-secondary">Treat</span>
              </h2>
            </div>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Tap on a condition to learn more about how we can help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {conditions.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="rounded-full border border-cream-dark bg-white px-4 py-2.5 text-sm font-medium text-text shadow-sm hover:border-primary hover:text-primary hover:shadow-md transition-all"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Google Reviews */}
      <ReviewCarousel />

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-cream-dark bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-text select-none">
                  {faq.q}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)] sm:text-4xl">
            Ready to take the first step?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Book a consultation with Dr. Prasanna Somvanshi today. We&apos;re here to answer all your
            questions and help you feel confident in your decision.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-secondary-dark transition-all hover:shadow-xl"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
