const PHONE_NUMBER = "919819691487";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: "Hi Dr. Prasanna, I'd like to book a consultation.",
  service: (serviceName: string) =>
    `Hi Dr. Prasanna, I'm interested in ${serviceName}. Could I book a consultation?`,
  contact: (name: string, service: string) =>
    `Hi Dr. Prasanna, I have a query. My name is ${name} and I'm interested in ${service}.`,
};
