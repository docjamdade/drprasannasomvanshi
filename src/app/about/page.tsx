import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { messages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Dr. Prasanna Somvanshi | MCh Plastic Surgery, JJ Hospital Mumbai",
  description:
    "Learn about Dr. Prasanna Somvanshi — MBBS, DNB (General Surgery), MCh (Plastic Surgery, JJ Hospital Mumbai), Cleft Fellowship (Smile Train). Practising at NH SRCC, SevenHills, Surya, HN Reliance & MRR Hospital.",
  alternates: { canonical: "https://drprasannasomvanshi.com/about" },
};

const timeline = [
  { year: "", title: "MBBS", institution: "RCSM Government Medical College, Kolhapur" },
  { year: "", title: "DNB (General Surgery)", institution: "SNDH, Aurangabad" },
  { year: "", title: "MCh (Plastic & Reconstructive Surgery)", institution: "Grant Medical College & Sir JJ Group of Hospitals, Mumbai" },
  { year: "", title: "Comprehensive Cleft Fellowship (Smile Train India)", institution: "Lucknow" },
];

const hospitals = [
  { name: "NH SRCC Children's Hospital", location: "Haji Ali Park, Mahalakshmi, Mumbai 400034" },
  { name: "SevenHills Hospital", location: "Marol Maroshi Road, Andheri East, Mumbai 400059" },
  { name: "Surya Hospital", location: "Mangal Ashirwad, 101-102, Swami Vivekanand Rd, Santacruz West, Mumbai 400054" },
  { name: "H.N. Reliance Foundation Hospital", location: "Girgaon, Mumbai" },
  { name: "MRR Hospital", location: "1st, Pokhran Rd, Shastri Nagar, Vartak Nagar, Thane West, Thane 400606" },
  { name: "Sushrusha Hospital", location: "Shivaji Park, Dadar West, Mumbai 400028" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-cream to-secondary/5 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-shrink-0">
              <div className="relative h-[350px] w-[280px] rounded-3xl border-4 border-white shadow-xl overflow-hidden sm:h-[400px] sm:w-[320px]">
                <Image
                  src="/images/doctor.png"
                  alt="Dr. Prasanna Somvanshi — Plastic & Reconstructive Surgeon"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 280px, 320px"
                />
              </div>
            </div>

            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
                About <span className="text-primary">Dr. Prasanna Somvanshi</span>
              </h1>
              <p className="mt-1 text-lg font-medium text-secondary">
                MBBS, DNB (General Surgery), MCh (Plastic &amp; Reconstructive Surgery)
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Life Member, Association of Plastic Surgeons of India (APSI)
              </p>
              <p className="mt-5 leading-relaxed text-gray-600">
                Dr. Prasanna Somvanshi is a Plastic &amp; Reconstructive Surgeon based in Mumbai
                with extensive training in both cosmetic and reconstructive surgery. He completed
                his MBBS from RCSM Government Medical College, Kolhapur, followed by DNB in
                General Surgery from SNDH, Aurangabad, and MCh in Plastic &amp; Reconstructive
                Surgery from the prestigious Grant Medical College &amp; Sir JJ Group of Hospitals,
                Mumbai. He further honed his expertise through a Comprehensive Cleft Fellowship
                under Smile Train India at Lucknow.
              </p>
              <p className="mt-3 leading-relaxed text-gray-600">
                Dr. Somvanshi is associated with leading hospitals across Mumbai including NH SRCC
                Children&apos;s Hospital, SevenHills Hospital (Andheri), Surya Hospital (Santacruz),
                H.N. Reliance Foundation Hospital (Girgaon), MRR Hospital (Thane), and Sushrusha
                Hospital (Dadar). His areas of
                special interest include cleft lip and palate repair, craniofacial surgery, burn and
                scar reconstruction, hand surgery, complex wound management, and cosmetic procedures
                including rhinoplasty, liposuction, and body contouring.
              </p>
              <p className="mt-3 leading-relaxed text-gray-600">
                He is a Life Member of the Association of Plastic Surgeons of India (APSI) and is
                committed to delivering safe, natural-looking results with a compassionate,
                patient-first approach.
              </p>
              <div className="mt-6">
                <Link
                  href="/book"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-text font-[family-name:var(--font-heading)]">
            Education &amp; <span className="text-primary">Training</span>
          </h2>
          <div className="mt-10 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 sm:left-1/2 sm:-translate-x-px" />
            {timeline.map((item, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className={`flex items-start gap-4 sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="absolute left-[19px] sm:left-1/2 sm:-translate-x-1/2 mt-1.5">
                    <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                  </div>
                  <div className={`ml-14 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <h3 className="text-lg font-bold text-text">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Affiliations */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text font-[family-name:var(--font-heading)]">
            Hospital <span className="text-primary">Affiliations</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hospitals.map((h) => (
              <div key={h.name} className="rounded-2xl border border-cream-dark bg-cream/50 p-5 text-left">
                <p className="font-bold text-text">{h.name}</p>
                <p className="mt-1 text-sm text-gray-500">{h.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-text font-[family-name:var(--font-heading)]">
            Publications &amp; <span className="text-primary">Presentations</span>
          </h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-cream-dark bg-white p-5">
              <h3 className="font-bold text-text">&ldquo;Nerve Repair and Grafting&rdquo;</h3>
              <p className="mt-1 text-sm text-gray-600">
                Academic presentation on nerve injury classification, repair techniques, and grafting methods.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-dark bg-white p-5">
              <h3 className="font-bold text-text">&ldquo;Post-Operative Pain Management&rdquo;</h3>
              <p className="mt-1 text-sm text-gray-600">
                Presentation on multimodal pain management approaches in surgical patients, presented
                during DNB training at SNDH, Aurangabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text font-[family-name:var(--font-heading)]">
            Our <span className="text-primary">Philosophy</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 italic">
            &ldquo;I believe that every patient deserves to feel heard, valued, and confident in
            their treatment journey. My approach combines meticulous surgical precision with genuine
            compassion — because the best results come when patients and their surgeon work together
            with trust and transparency.&rdquo;
          </p>
          <p className="mt-4 font-semibold text-primary">— Dr. Prasanna Somvanshi</p>
        </div>
      </section>
    </>
  );
}
