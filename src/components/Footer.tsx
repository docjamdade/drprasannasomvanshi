import Link from "next/link";
import { buildWhatsAppUrl, messages } from "@/lib/whatsapp";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/book", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-text text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-white">
              Dr. Prasanna Somvanshi
            </h3>
            <p className="mt-1 text-sm text-cream-dark">
              MBBS, DNB (General Surgery), MCh (Plastic & Reconstructive Surgery)
            </p>
            <p className="mt-1 text-xs text-gray-300">
              Life Member, Association of Plastic Surgeons of India (APSI)
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Plastic &amp; Reconstructive Surgeon, Mumbai.
              <br />
              Restoring confidence through compassionate care.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-gray-300">
              <li>
                <a href="tel:+919819691487" className="block py-1.5 hover:text-white transition-colors">
                  Phone: +91 98196 91487
                </a>
              </li>
              <li>
                <a href="mailto:prasannasomvanshi@gmail.com" className="block py-1.5 hover:text-white transition-colors break-all">
                  Email: prasannasomvanshi@gmail.com
                </a>
              </li>
              <li className="py-1.5">Mumbai &amp; Thane, Maharashtra</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="tel:+919819691487"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-white hover:bg-secondary-dark transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                </svg>
                Call
              </a>
              <a
                href={buildWhatsAppUrl(messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.379-2.143l-.446-.345-2.898.972.972-2.898-.345-.446C1.798 15.607 1 13.387 1 11c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 11-10 11z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Hospital Trust Banner */}
        <div className="mt-10 border-t border-gray-600 pt-6">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-gray-300 mb-3">
            Practising At
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["NH SRCC", "SevenHills", "Surya Hospital", "HN Reliance", "MRR Thane", "Sushrusha"].map((h) => (
              <span key={h} className="text-sm text-gray-300 font-medium">{h}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-600 pt-6">
          <p className="text-center text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Dr. Prasanna Somvanshi. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs text-gray-400">
            This website is for informational purposes only. Please consult the doctor for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
