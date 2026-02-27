export interface Hospital {
  name: string;
  slug: string;
  address: string;
  focus: string;
  timings: string;
  fee: string;
  whatsappMessage: string;
  website?: string;
  mapQuery: string;
}

export const hospitals: Hospital[] = [
  {
    name: "NH SRCC Children's Hospital",
    slug: "nh-srcc",
    address: "Haji Ali Park, Mahalakshmi, Mumbai 400034",
    focus: "Paediatric Plastic Surgery, Cleft Lip/Palate, Craniofacial Surgery",
    timings: "Contact for timings",
    fee: "As per hospital",
    whatsappMessage:
      "Hi Dr. Prasanna, I'd like to book an appointment at NH SRCC Children's Hospital.",
    website:
      "https://www.narayanahealth.org/c/mumbai/plastic-surgery/dr-prasanna-shrikant-gulabrao-somvanshi",
    mapQuery: "NH+SRCC+Children's+Hospital+Haji+Ali+Mumbai",
  },
  {
    name: "SevenHills Hospital",
    slug: "sevenhills",
    address: "Marol Maroshi Road, Andheri East, Mumbai 400059",
    focus: "General Plastic & Reconstructive Surgery, Cosmetic Surgery",
    timings: "Contact for timings",
    fee: "As per hospital",
    whatsappMessage:
      "Hi Dr. Prasanna, I'd like to book an appointment at SevenHills Hospital, Andheri.",
    mapQuery: "SevenHills+Hospital+Andheri+East+Mumbai",
  },
  {
    name: "Surya Hospital",
    slug: "surya",
    address: "Mangal Ashirwad, 101-102, Swami Vivekanand Rd, Santacruz West, Mumbai 400054",
    focus: "Paediatric Surgery, Reconstructive",
    timings: "Contact for timings",
    fee: "As per hospital",
    whatsappMessage:
      "Hi Dr. Prasanna, I'd like to book an appointment at Surya Hospital, Santacruz.",
    mapQuery: "Surya+Hospital+Santacruz+West+Mumbai",
  },
  {
    name: "H.N. Reliance Foundation Hospital",
    slug: "hn-reliance",
    address: "Girgaon, Mumbai",
    focus: "Advanced Reconstructive Surgery",
    timings: "Contact for timings",
    fee: "As per hospital",
    whatsappMessage:
      "Hi Dr. Prasanna, I'd like to book an appointment at H.N. Reliance Foundation Hospital.",
    website: "https://www.rfhospital.org",
    mapQuery: "HN+Reliance+Foundation+Hospital+Girgaon+Mumbai",
  },
  {
    name: "MRR Hospital",
    slug: "mrr",
    address: "1st, Pokhran Rd, Shastri Nagar, Vartak Nagar, Thane West, Thane 400606",
    focus: "General Plastic Surgery",
    timings: "Contact for timings",
    fee: "As per hospital",
    whatsappMessage:
      "Hi Dr. Prasanna, I'd like to book an appointment at MRR Hospital, Thane.",
    mapQuery: "MRR+Hospital+Thane+West",
  },
  {
    name: "Sushrusha Hospital",
    slug: "sushrusha",
    address: "Shivaji Park, Dadar West, Mumbai 400028",
    focus: "General Plastic & Reconstructive Surgery",
    timings: "Contact for timings",
    fee: "As per hospital",
    whatsappMessage:
      "Hi Dr. Prasanna, I'd like to book an appointment at Sushrusha Hospital, Dadar.",
    mapQuery: "Sushrusha+Hospital+Dadar+West+Mumbai",
  },
];
