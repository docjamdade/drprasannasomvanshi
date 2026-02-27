import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["400", "600", "700", "800"] });

const BASE_URL = "https://drprasannasomvanshi.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr. Prasanna Somvanshi | Plastic & Reconstructive Surgeon in Mumbai",
    template: "%s | Dr. Prasanna Somvanshi",
  },
  description:
    "Dr. Prasanna Somvanshi is a leading Plastic & Reconstructive Surgeon in Mumbai (MCh, JJ Hospital). Expert in rhinoplasty, liposuction, cleft lip & palate repair, burn reconstruction, craniofacial surgery, hand surgery & more. Practising at NH SRCC, SevenHills, Surya, HN Reliance & MRR Hospital.",
  keywords: [
    "plastic surgeon Mumbai",
    "best plastic surgeon in Mumbai",
    "reconstructive surgeon Mumbai",
    "rhinoplasty Mumbai",
    "liposuction Mumbai",
    "breast surgery Mumbai",
    "tummy tuck Mumbai",
    "burn treatment Mumbai",
    "cleft lip repair Mumbai",
    "cleft palate surgery Mumbai",
    "hand surgery Mumbai",
    "craniofacial surgery Mumbai",
    "cosmetic surgery Mumbai",
    "Dr Prasanna Somvanshi",
    "plastic surgery NH SRCC Mumbai",
    "SevenHills Hospital plastic surgeon",
    "onco reconstruction Mumbai",
    "diabetic foot treatment Mumbai",
    "trauma repair plastic surgery",
    "complex wound management Mumbai",
    "VPI surgery Mumbai",
    "paediatric plastic surgery Mumbai",
    "cleft surgeon Mumbai",
  ],
  authors: [{ name: "Dr. Prasanna Somvanshi" }],
  creator: "Dr. Prasanna Somvanshi",
  publisher: "Dr. Prasanna Somvanshi",
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Dr. Prasanna Somvanshi | Plastic & Reconstructive Surgeon in Mumbai",
    description:
      "MCh Plastic Surgery (JJ Hospital). Expert in cosmetic & reconstructive surgery — rhinoplasty, cleft repair, burn reconstruction & more. Practising at NH SRCC, SevenHills, Surya, HN Reliance & MRR Hospital.",
    url: BASE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Prasanna Somvanshi",
    images: [
      {
        url: "/images/doctor.png",
        width: 512,
        height: 512,
        alt: "Dr. Prasanna Somvanshi — Plastic Surgeon Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dr. Prasanna Somvanshi | Plastic Surgeon Mumbai",
    description:
      "Expert plastic & reconstructive surgery in Mumbai. Rhinoplasty, cleft repair, burn reconstruction & more at top Mumbai hospitals.",
    images: ["/images/doctor.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Prasanna Somvanshi",
  url: BASE_URL,
  image: `${BASE_URL}/images/doctor.png`,
  telephone: "+919819691487",
  email: "prasannasomvanshi@gmail.com",
  description:
    "Dr. Prasanna Somvanshi is a leading Plastic & Reconstructive Surgeon in Mumbai specialising in cosmetic and reconstructive procedures.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  medicalSpecialty: "PlasticSurgery",
  alumniOf: [
    { "@type": "EducationalOrganization", name: "RCSM Government Medical College, Kolhapur" },
    { "@type": "EducationalOrganization", name: "SNDH, Aurangabad" },
    { "@type": "EducationalOrganization", name: "Grant Medical College & Sir JJ Group of Hospitals, Mumbai" },
  ],
  memberOf: {
    "@type": "Organization",
    name: "Association of Plastic Surgeons of India (APSI)",
  },
  hospitalAffiliation: [
    { "@type": "Hospital", name: "NH SRCC Children's Hospital, Mumbai" },
    { "@type": "Hospital", name: "SevenHills Hospital, Andheri, Mumbai" },
    { "@type": "Hospital", name: "Surya Hospital, Santacruz West, Mumbai 400054" },
    { "@type": "Hospital", name: "H.N. Reliance Foundation Hospital, Mumbai" },
    { "@type": "Hospital", name: "MRR Hospital, Thane West, Thane 400606" },
    { "@type": "Hospital", name: "Sushrusha Hospital, Dadar West, Mumbai 400028" },
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Rhinoplasty" },
    { "@type": "MedicalProcedure", name: "Liposuction" },
    { "@type": "MedicalProcedure", name: "Breast Surgery" },
    { "@type": "MedicalProcedure", name: "Tummy Tuck (Abdominoplasty)" },
    { "@type": "MedicalProcedure", name: "Burn & Scar Treatment" },
    { "@type": "MedicalProcedure", name: "Cleft Lip Repair" },
    { "@type": "MedicalProcedure", name: "Cleft Palate Repair" },
    { "@type": "MedicalProcedure", name: "Craniofacial Surgery" },
    { "@type": "MedicalProcedure", name: "Trauma Repair" },
    { "@type": "MedicalProcedure", name: "Onco Reconstruction" },
    { "@type": "MedicalProcedure", name: "Hand Surgery" },
    { "@type": "MedicalProcedure", name: "Complex Wound Management" },
    { "@type": "MedicalProcedure", name: "Diabetic Foot Treatment" },
    { "@type": "MedicalProcedure", name: "VPI Surgery" },
  ],
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
