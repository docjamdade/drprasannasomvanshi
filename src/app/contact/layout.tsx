import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr. Prasanna Somvanshi | Plastic Surgeon Mumbai",
  description:
    "Get in touch with Dr. Prasanna Somvanshi, Plastic & Reconstructive Surgeon in Mumbai. Book a consultation via WhatsApp, phone, or email. Multiple hospital locations across Mumbai & Thane.",
  alternates: { canonical: "https://drprasannasomvanshi.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
