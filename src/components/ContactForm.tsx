"use client";

import { useState } from "react";
import { buildWhatsAppUrl, messages } from "@/lib/whatsapp";
import { services } from "@/lib/services";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [
      "Hi Dr. Prasanna, I have a query.",
      name && `My name is ${name}.`,
      phone && `Phone: ${phone}.`,
      service && `I'm interested in ${service}.`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(buildWhatsAppUrl(parts), "_blank");
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)]">
        Send a <span className="text-primary">Message</span>
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Fill in your details and we&apos;ll connect with you on WhatsApp.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text">Name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required
            className="mt-1 block w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
            placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text">Phone</label>
          <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
            placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text">Service Interested In</label>
          <select id="service" value={service} onChange={(e) => setService(e.target.value)}
            className="mt-1 block w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition">
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
            className="mt-1 block w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm text-text shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
            placeholder="Tell us about your query..." />
        </div>
        <button type="submit"
          className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors">
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
