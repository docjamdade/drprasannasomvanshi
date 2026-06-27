"use client";

import { ReactNode } from "react";
import UnavailabilityGate from "./UnavailabilityModal";

export default function BookCTA({ href, whatsappUrl, children }: { href: string; whatsappUrl?: string; children: ReactNode }) {
  return (
    <UnavailabilityGate whatsappUrl={whatsappUrl}>
      {children}
    </UnavailabilityGate>
  );
}
