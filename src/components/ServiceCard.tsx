import Image from "next/image";
import type { Service } from "@/lib/services";
import WhatsAppButton from "./WhatsAppButton";
import { messages } from "@/lib/whatsapp";

interface ServiceCardProps {
  service: Service;
  showDetail?: boolean;
}

export default function ServiceCard({ service, showDetail = false }: ServiceCardProps) {
  if (showDetail) {
    // Services page: side-by-side layout with larger image
    return (
      <div className="group flex flex-col sm:flex-row rounded-2xl border border-cream-dark bg-white shadow-sm transition-all hover:shadow-md hover:border-primary/30 overflow-hidden">
        <div className="relative h-44 w-full sm:h-auto sm:w-48 flex-shrink-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 192px"
          />
        </div>
        <div className="flex-1 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs">
              {service.icon}
            </span>
            <h3 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
              {service.name}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">{service.detail}</p>
          <div className="mt-3">
            <WhatsAppButton
              message={messages.service(service.name)}
              label="Enquire Now"
              variant="primary"
              className="text-xs px-4 py-2.5"
            />
          </div>
        </div>
      </div>
    );
  }

  // Homepage: compact card with small image on left
  return (
    <div className="group flex h-[88px] rounded-xl border border-cream-dark bg-white shadow-sm transition-all hover:shadow-md hover:border-primary/30 overflow-hidden">
      <div className="relative w-24 flex-shrink-0 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="96px"
        />
      </div>
      <div className="flex-1 p-3 flex flex-col justify-center">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-primary text-[10px] flex-shrink-0">
            {service.icon}
          </span>
          <h3 className="text-sm font-bold text-text font-[family-name:var(--font-heading)] line-clamp-1">
            {service.name}
          </h3>
        </div>
        <p className="text-xs leading-relaxed text-gray-600 line-clamp-2">
          {service.description}
        </p>
      </div>
    </div>
  );
}
