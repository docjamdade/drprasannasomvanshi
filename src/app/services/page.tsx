import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { cosmeticServices, reconstructiveServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Cosmetic & Reconstructive Surgery",
  description:
    "Rhinoplasty, liposuction, breast surgery, tummy tuck, burn & scar treatment, cleft lip & palate repair, craniofacial surgery, hand surgery, onco reconstruction & more — by Dr. Prasanna Somvanshi in Mumbai.",
  alternates: { canonical: "https://drprasannasomvanshi.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-cream to-secondary/5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-relaxed">
            Dr. Prasanna Somvanshi offers a comprehensive range of cosmetic and reconstructive
            procedures, each tailored to individual patient needs. Browse our services below and
            reach out to book a consultation.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="relative h-48 w-full overflow-hidden rounded-2xl md:h-40 md:w-72 flex-shrink-0">
              <Image
                src="/images/services-cosmetic.jpg"
                alt="Cosmetic surgery procedures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] sm:text-3xl">
                <span className="text-secondary">Cosmetic</span> Procedures
              </h2>
              <p className="mt-2 text-gray-600">
                Enhance your appearance with safe, advanced cosmetic surgery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cosmeticServices.map((s) => (
              <div key={s.slug} id={s.slug}>
                <ServiceCard service={s} showDetail />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="relative h-48 w-full overflow-hidden rounded-2xl md:h-40 md:w-72 flex-shrink-0">
              <Image
                src="/images/services-reconstructive.jpg"
                alt="Reconstructive surgery procedures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] sm:text-3xl">
                <span className="text-secondary">Reconstructive</span> Procedures
              </h2>
              <p className="mt-2 text-gray-600">
                Restoring form, function, and confidence through specialised reconstructive surgery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reconstructiveServices.map((s) => (
              <div key={s.slug} id={s.slug}>
                <ServiceCard service={s} showDetail />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-primary-dark py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
            Not sure which procedure is right for you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Book a consultation with Dr. Prasanna to discuss your concerns and explore the best
            options for you.
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
