import type { Metadata } from "next";
import { buildWhatsAppUrl, messages } from "@/lib/whatsapp";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Dr. Prasanna Somvanshi | Plastic Surgeon Mumbai",
  description:
    "Get in touch with Dr. Prasanna Somvanshi for consultations, appointments, or queries. Call +91 98196 91487 or WhatsApp. Practising at NH SRCC, SevenHills, Surya, HN Reliance, MRR & Sushrusha Hospital.",
  alternates: { canonical: "https://drprasannasomvanshi.com/contact" },
};

const locations = [
  { name: "NH SRCC Children's Hospital", address: "Haji Ali Park, Mahalakshmi, Mumbai 400034", q: "NH+SRCC+Children's+Hospital+Mumbai" },
  { name: "SevenHills Hospital", address: "Marol Maroshi Rd, Andheri East, Mumbai 400059", q: "SevenHills+Hospital+Andheri+East+Mumbai" },
  { name: "Surya Hospital", address: "Swami Vivekanand Rd, Santacruz West, Mumbai 400054", q: "Surya+Hospital+Santacruz+West+Mumbai" },
  { name: "H.N. Reliance Foundation Hospital", address: "Girgaon, Mumbai", q: "HN+Reliance+Foundation+Hospital+Girgaon+Mumbai" },
  { name: "MRR Hospital", address: "Pokhran Rd, Thane West, Thane 400606", q: "MRR+Hospital+Thane+West" },
  { name: "Sushrusha Hospital", address: "Shivaji Park, Dadar West, Mumbai 400028", q: "Sushrusha+Hospital+Dadar+West+Mumbai" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-cream to-secondary/5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-relaxed">
            We&apos;d love to hear from you. Reach out for appointments, consultations, or any
            questions you may have.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)]">
                Contact <span className="text-primary">Information</span>
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text">Phone</p>
                    <a href="tel:+919819691487" className="text-sm text-gray-600 hover:text-primary transition-colors">
                      +91 98196 91487
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text">Email</p>
                    <a href="mailto:prasannasomvanshi@gmail.com" className="text-sm text-gray-600 hover:text-primary transition-colors">
                      prasannasomvanshi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text">Locations</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Practising at multiple hospitals across Mumbai &amp; Thane
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp + Call */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+919819691487"
                  className="inline-flex items-center gap-3 rounded-2xl bg-secondary px-6 py-4 text-white shadow-lg hover:bg-secondary-dark transition-colors"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="text-lg font-bold">Call Us</p>
                    <p className="text-sm text-white/80">+91 98196 91487</p>
                  </div>
                </a>
                <a
                  href={buildWhatsAppUrl(messages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-4 text-white shadow-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.379-2.143l-.446-.345-2.898.972.972-2.898-.345-.446C1.798 15.607 1 13.387 1 11c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 11-10 11z" />
                  </svg>
                  <div>
                    <p className="text-lg font-bold">WhatsApp</p>
                    <p className="text-sm text-white/80">Quick response, easy booking</p>
                  </div>
                </a>
              </div>

              {/* All Hospital Locations */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
                  Our <span className="text-primary">Locations</span>
                </h3>
                <div className="mt-3 space-y-3">
                  {locations.map((loc) => (
                    <a
                      key={loc.name}
                      href={`https://www.google.com/maps/search/?api=1&query=${loc.q}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-xl border border-cream-dark bg-cream/50 p-3 hover:border-primary/30 hover:shadow-sm transition-all"
                    >
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-text">{loc.name}</p>
                        <p className="text-xs text-gray-500">{loc.address}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl overflow-hidden border border-cream-dark">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120684.5!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a6affffffb%3A0x8b05a6a3c6f7b0!2sMumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Prasanna Somvanshi hospital locations in Mumbai & Thane"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form (Client Component) */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
