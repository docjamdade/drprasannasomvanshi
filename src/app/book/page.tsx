import type { Metadata } from "next";
import { hospitals } from "@/lib/hospitals";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Book Appointment | Multiple Mumbai Hospitals",
  description:
    "Book an appointment with Dr. Prasanna Somvanshi at NH SRCC, SevenHills, Surya, H.N. Reliance, MRR or Sushrusha Hospital. Choose your preferred location in Mumbai or Thane.",
  alternates: { canonical: "https://drprasannasomvanshi.com/book" },
};

const accentColors = [
  "border-l-primary",
  "border-l-secondary",
  "border-l-accent",
  "border-l-primary-dark",
  "border-l-secondary-dark",
  "border-l-accent-light",
];

export default function BookPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-cream to-secondary/5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
            Book an <span className="text-primary">Appointment</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-relaxed">
            Dr. Prasanna Somvanshi consults at multiple hospitals across Mumbai. Choose your
            preferred location to book.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {hospitals.map((h, i) => (
              <div
                key={h.slug}
                className={`rounded-2xl border border-cream-dark ${accentColors[i]} border-l-4 bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
              >
                <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
                  {h.name}
                </h2>

                <div className="mt-3 flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                  </svg>
                  <p className="text-sm text-gray-600">{h.address}</p>
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 0 1-1.59.659H9.06a2.25 2.25 0 0 1-1.591-.659L5 14.5m14 0V17a2.25 2.25 0 0 1-2.25 2.25H7.25A2.25 2.25 0 0 1 5 17v-2.5" />
                  </svg>
                  <p className="text-sm text-gray-600">{h.focus}</p>
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
                  </svg>
                  <p className="text-sm text-gray-600">{h.timings}</p>
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <p className="text-sm text-gray-600">{h.fee}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppUrl(h.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.379-2.143l-.446-.345-2.898.972.972-2.898-.345-.446C1.798 15.607 1 13.387 1 11c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 11-10 11z" />
                    </svg>
                    Book via WhatsApp
                  </a>
                  <a
                    href="tel:+919819691487"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-secondary-dark transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                    Call to Book
                  </a>
                  {h.website && (
                    <a
                      href={h.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border-2 border-cream-dark px-5 py-2.5 text-sm font-medium text-text hover:border-primary hover:text-primary transition-colors"
                    >
                      Hospital Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Consultation fees vary by hospital. Please enquire while booking.
          </p>
        </div>
      </section>
    </>
  );
}
