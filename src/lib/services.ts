export interface Service {
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: "cosmetic" | "reconstructive";
  detail: string;
  image: string;
}

export const services: Service[] = [
  // Cosmetic Procedures
  {
    name: "Rhinoplasty",
    slug: "rhinoplasty",
    description: "Nose reshaping for improved appearance and function.",
    icon: "✦",
    category: "cosmetic",
    image: "/images/services/rhinoplasty.jpg",
    detail:
      "Rhinoplasty, or nose reshaping surgery, is designed to improve the appearance and proportion of the nose, enhancing facial harmony and self-confidence. It can also correct breathing difficulties caused by structural defects. The procedure is tailored to each patient's unique facial structure and aesthetic goals.",
  },
  {
    name: "Liposuction",
    slug: "liposuction",
    description: "Body contouring to remove stubborn fat deposits.",
    icon: "✦",
    category: "cosmetic",
    image: "/images/services/liposuction.jpg",
    detail:
      "Liposuction is a body contouring procedure that removes stubborn fat deposits resistant to diet and exercise. Using advanced techniques, it sculpts and reshapes specific areas of the body for a smoother, more proportioned silhouette. Ideal for patients close to their target weight seeking refined body contours.",
  },
  {
    name: "Breast Surgery",
    slug: "breast-surgery",
    description: "Augmentation, reduction, and reconstruction options.",
    icon: "✦",
    category: "cosmetic",
    image: "/images/services/breast-surgery.jpg",
    detail:
      "Breast surgery encompasses augmentation, reduction, and lift procedures tailored to individual needs. Whether enhancing size, reducing discomfort from overly large breasts, or restoring shape after weight loss or pregnancy, the goal is to achieve natural-looking results that boost confidence.",
  },
  {
    name: "Tummy Tuck",
    slug: "tummy-tuck",
    description: "Abdominoplasty for a firmer, flatter abdomen.",
    icon: "✦",
    category: "cosmetic",
    image: "/images/services/tummy-tuck.jpg",
    detail:
      "A tummy tuck (abdominoplasty) removes excess skin and fat from the abdomen while tightening the underlying muscles. This procedure is especially beneficial for patients who have experienced significant weight loss or post-pregnancy changes, restoring a firmer, more toned abdominal profile.",
  },
  // Reconstructive Procedures
  {
    name: "Burn & Scar Treatment",
    slug: "burn-scar-treatment",
    description: "Restoring form and function after burns or injuries.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/burn-scar-treatment.jpg",
    detail:
      "Burn and scar treatment involves advanced surgical techniques to restore both form and function to areas affected by burns or traumatic injuries. Using skin grafts, flaps, and tissue expansion, the goal is to improve mobility, reduce scarring, and enhance quality of life.",
  },
  {
    name: "Cleft Lip Repair",
    slug: "cleft-lip-repair",
    description: "Corrective surgery for cleft lip deformities.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/cleft-lip-repair.jpg",
    detail:
      "Cleft lip repair is a surgical procedure to correct the split or gap in the upper lip present from birth. The surgery restores normal lip structure and function, improving feeding, speech, and appearance. Timing and technique are carefully planned for optimal outcomes.",
  },
  {
    name: "Cleft Palate Repair",
    slug: "cleft-palate-repair",
    description: "Surgical correction to restore palate function.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/cleft-palate-repair.jpg",
    detail:
      "Cleft palate repair closes the gap in the roof of the mouth, restoring the ability to eat and speak properly. This procedure is typically performed in infancy and may involve multiple stages to achieve the best functional and aesthetic results.",
  },
  {
    name: "Craniofacial Surgery",
    slug: "craniofacial-surgery",
    description: "Complex surgery for skull and facial deformities.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/craniofacial-surgery.jpg",
    detail:
      "Craniofacial surgery addresses congenital and acquired deformities of the skull, face, and jaws. These complex procedures require specialized expertise to correct structural abnormalities, improve function, and enhance appearance for both pediatric and adult patients.",
  },
  {
    name: "Trauma Repair",
    slug: "trauma-repair",
    description: "Reconstruction after facial or body trauma.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/trauma-repair.jpg",
    detail:
      "Trauma repair involves reconstructive surgery following injuries from accidents, falls, or other traumatic events. The focus is on restoring anatomy, function, and aesthetics, including fracture repair, soft tissue reconstruction, and scar revision.",
  },
  {
    name: "Onco Reconstruction",
    slug: "onco-reconstruction",
    description: "Rebuilding after cancer surgery for restored appearance.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/onco-reconstruction.jpg",
    detail:
      "Onco reconstruction (cancer reconstruction) restores form and function after tumor removal surgery. Using microsurgical techniques and advanced flap procedures, it aims to rebuild affected areas, helping patients regain confidence and quality of life during their recovery journey.",
  },
  {
    name: "Hand Surgery",
    slug: "hand-surgery",
    description: "Treating injuries, deformities, and conditions of the hand.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/hand-surgery.jpg",
    detail:
      "Hand surgery addresses a wide range of conditions including traumatic injuries, congenital deformities, nerve compression, and degenerative diseases. The goal is to restore hand function, strength, and dexterity through precise surgical techniques and comprehensive rehabilitation.",
  },
  {
    name: "Complex Wound Management",
    slug: "complex-wound-management",
    description: "Advanced care for chronic and difficult wounds.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/complex-wound-management.jpg",
    detail:
      "Complex wound management involves advanced surgical and non-surgical techniques to treat chronic, non-healing, or complicated wounds. Using flaps, grafts, and modern wound care protocols, the aim is to achieve complete healing and prevent recurrence.",
  },
  {
    name: "Diabetic Foot Treatment",
    slug: "diabetic-foot",
    description: "Specialized care for diabetes-related foot complications.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/diabetic-foot.jpg",
    detail:
      "Diabetic foot treatment provides specialized surgical care for foot complications arising from diabetes, including ulcers, infections, and deformities. Early intervention and comprehensive management help prevent amputation and restore mobility.",
  },
  {
    name: "VPI Surgery",
    slug: "vpi-surgery",
    description: "Correcting velopharyngeal insufficiency for improved speech.",
    icon: "◈",
    category: "reconstructive",
    image: "/images/services/vpi-surgery.jpg",
    detail:
      "VPI (Velopharyngeal Insufficiency) surgery corrects the incomplete closure of the velopharyngeal valve, which affects speech quality. This procedure improves nasal resonance and speech clarity, often performed as part of comprehensive cleft care.",
  },
];

export const cosmeticServices = services.filter((s) => s.category === "cosmetic");
export const reconstructiveServices = services.filter((s) => s.category === "reconstructive");
