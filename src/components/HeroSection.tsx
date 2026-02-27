import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-cream to-secondary/5">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
              Dr. Prasanna
              <br />
              <span className="text-primary">Somvanshi</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-secondary">
              Plastic &amp; Reconstructive Surgeon, Mumbai
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Restoring confidence through compassionate care. Combining advanced
              surgical techniques with a patient-first approach to deliver safe,
              natural-looking results.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all hover:shadow-lg"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919819691487"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-secondary-dark transition-all hover:shadow-lg"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Doctor Photo — rounded rectangle, taller, face visible */}
          <div className="flex-shrink-0">
            <div className="relative h-[350px] w-[280px] rounded-3xl border-4 border-white shadow-xl overflow-hidden sm:h-[400px] sm:w-[320px]">
              <Image
                src="/images/doctor.png"
                alt="Dr. Prasanna Somvanshi — Plastic & Reconstructive Surgeon in Mumbai"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 280px, 320px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}
