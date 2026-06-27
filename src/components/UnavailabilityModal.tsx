"use client";

import { useState, useCallback, ReactNode } from "react";
import { buildWhatsAppUrl, messages } from "@/lib/whatsapp";

// Date-gated: auto-disables after September 2026
const UNAVAILABLE_FROM = new Date("2026-07-01T00:00:00+05:30");
const UNAVAILABLE_UNTIL = new Date("2026-10-01T00:00:00+05:30");

function isUnavailable() {
  const now = new Date();
  return now >= UNAVAILABLE_FROM && now < UNAVAILABLE_UNTIL;
}

interface UnavailabilityGateProps {
  children: ReactNode;
  /** If provided, the "Continue to WhatsApp" button uses this URL instead of the default */
  whatsappUrl?: string;
}

/**
 * Wraps any clickable element. If Dr. Prasanna is unavailable (Jul–Sep 2026),
 * intercepts the click and shows a notice modal with a WhatsApp fallback.
 * After October 2026, this wrapper becomes transparent — no modal, no interception.
 */
export default function UnavailabilityGate({ children, whatsappUrl }: UnavailabilityGateProps) {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isUnavailable()) return; // let the click pass through
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    },
    [],
  );

  const fallbackUrl = whatsappUrl ?? buildWhatsAppUrl(messages.general);

  return (
    <>
      <div onClick={handleClick} className="contents">
        {children}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25 21.75 6.615 21.75 12z" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="mt-4 text-center text-lg font-bold text-text font-[family-name:var(--font-heading)]">
              Currently Unavailable
            </h3>
            <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">
              Dr. Prasanna Somvanshi is currently pursuing an{" "}
              <span className="font-medium text-text">advanced fellowship programme</span> and
              will be unavailable for in-person consultations from{" "}
              <span className="font-medium text-text">July to September 2026</span>.
            </p>
            <p className="mt-2 text-center text-sm text-gray-500">
              For urgent queries, you may still reach out via WhatsApp.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-600 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.379-2.143l-.446-.345-2.898.972.972-2.898-.345-.446C1.798 15.607 1 13.387 1 11c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 11-10 11z" />
                </svg>
                Message on WhatsApp
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border-2 border-cream-dark px-6 py-3 text-sm font-medium text-gray-500 hover:border-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Thin banner for the top of pages. Only renders during the unavailability window.
 */
export function UnavailabilityBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (!isUnavailable() || dismissed) return null;

  return (
    <div className="relative bg-primary/10 px-4 py-2.5 text-center text-sm text-text">
      <span className="font-medium">Note:</span> Dr. Prasanna Somvanshi is currently away on
      a fellowship programme and unavailable for consultations (Jul–Sep 2026).
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        aria-label="Dismiss"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
