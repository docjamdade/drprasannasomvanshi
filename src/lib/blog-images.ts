/**
 * Maps blog post slugs to cover images.
 * Images are from Pexels (free license, no attribution required).
 */

const cosmeticImages = [
  "/images/blog/cosmetic-consultation.jpg",
  "/images/blog/skincare-beauty.jpg",
  "/images/blog/face-treatment.jpg",
  "/images/blog/woman-face.jpg",
  "/images/blog/body-fitness.jpg",
  "/images/blog/nose-profile.jpg",
  "/images/blog/cosmetic-mirror.jpg",
];

const reconstructiveImages = [
  "/images/blog/hospital-corridor.jpg",
  "/images/blog/doctor-consultation.jpg",
  "/images/blog/hand-bandage.jpg",
  "/images/blog/doctor-patient.jpg",
  "/images/blog/medical-team.jpg",
  "/images/blog/medical-equipment.jpg",
  "/images/blog/surgery-room.jpg",
  "/images/blog/hospital-room.jpg",
];

const generalImages = [
  "/images/blog/stethoscope.jpg",
  "/images/blog/doctor-portrait.jpg",
  "/images/blog/healthy-food.jpg",
  "/images/blog/patient-care.jpg",
  "/images/blog/recovery-rest.jpg",
  "/images/blog/checklist-prep.jpg",
  "/images/blog/surgery-prep.jpg",
  "/images/blog/consultation-desk.jpg",
];

// Specific slug-to-image overrides for best visual match
const slugOverrides: Record<string, string> = {
  "rhinoplasty-nose-job-mumbai": "/images/blog/nose-profile.jpg",
  "rhinoplasty-recovery-week-by-week": "/images/blog/nose-profile.jpg",
  "liposuction-mumbai-guide": "/images/blog/body-fitness.jpg",
  "liposuction-vs-tummy-tuck-comparison": "/images/blog/body-fitness.jpg",
  "tummy-tuck-abdominoplasty-mumbai": "/images/blog/body-fitness.jpg",
  "breast-surgery-options-mumbai": "/images/blog/cosmetic-consultation.jpg",
  "breast-reconstruction-after-mastectomy": "/images/blog/doctor-consultation.jpg",
  "gynecomastia-surgery-mumbai": "/images/blog/male-chest.jpg",
  "hand-surgery-plastic-surgeon": "/images/blog/hand-bandage.jpg",
  "hand-injuries-treatment-recovery": "/images/blog/hand-bandage.jpg",
  "congenital-hand-deformities-children": "/images/blog/hand-bandage.jpg",
  "burn-scar-treatment-mumbai": "/images/blog/hospital-room.jpg",
  "plastic-surgery-burn-rehabilitation": "/images/blog/hospital-room.jpg",
  "keloid-hypertrophic-scar-treatment": "/images/blog/medical-equipment.jpg",
  "pressure-garments-burn-surgery": "/images/blog/hospital-room.jpg",
  "cleft-lip-palate-parents-guide": "/images/blog/doctor-patient.jpg",
  "cleft-lip-revision-surgery": "/images/blog/doctor-patient.jpg",
  "cleft-care-speech-therapy-followup": "/images/blog/patient-care.jpg",
  "craniofacial-surgery-mumbai": "/images/blog/surgery-room.jpg",
  "facial-trauma-repair-mumbai": "/images/blog/surgery-room.jpg",
  "diabetic-foot-treatment-mumbai": "/images/blog/medical-equipment.jpg",
  "complex-wound-management-mumbai": "/images/blog/medical-team.jpg",
  "vpi-surgery-speech-problems": "/images/blog/doctor-patient.jpg",
  "nerve-repair-surgery-guide": "/images/blog/surgery-room.jpg",
  "microvascular-surgery-reconstruction": "/images/blog/surgery-room.jpg",
  "reconstructive-surgery-after-cancer": "/images/blog/hospital-corridor.jpg",
  "plastic-surgery-accident-victims-mumbai": "/images/blog/hospital-corridor.jpg",
  "paediatric-plastic-surgery-mumbai": "/images/blog/patient-care.jpg",
  "skin-grafts-flap-surgery-guide": "/images/blog/medical-team.jpg",
  "tissue-expansion-reconstructive-surgery": "/images/blog/medical-equipment.jpg",
  "facelift-surgery-mumbai-guide": "/images/blog/face-treatment.jpg",
  "blepharoplasty-eyelid-surgery-mumbai": "/images/blog/face-treatment.jpg",
  "jawline-contouring-facial-implants-mumbai": "/images/blog/face-treatment.jpg",
  "mommy-makeover-mumbai": "/images/blog/cosmetic-consultation.jpg",
  "fat-grafting-natural-enhancement": "/images/blog/cosmetic-consultation.jpg",
  "body-contouring-weight-loss-mumbai": "/images/blog/body-fitness.jpg",
  "ear-reconstruction-otoplasty-mumbai": "/images/blog/doctor-consultation.jpg",
  "male-cosmetic-surgery-mumbai": "/images/blog/male-chest.jpg",
  "scar-revision-surgery-mumbai": "/images/blog/medical-equipment.jpg",
  "what-is-plastic-surgery": "/images/blog/stethoscope.jpg",
  "board-certified-plastic-surgeon-mumbai": "/images/blog/doctor-portrait.jpg",
  "first-plastic-surgery-consultation": "/images/blog/consultation-desk.jpg",
  "post-surgical-recovery-tips": "/images/blog/recovery-rest.jpg",
  "cosmetic-surgery-safety-guide": "/images/blog/checklist-prep.jpg",
  "choosing-hospital-plastic-surgery-mumbai": "/images/blog/hospital-corridor.jpg",
  "non-surgical-vs-plastic-surgery": "/images/blog/skincare-beauty.jpg",
  "nutrition-surgical-recovery-guide": "/images/blog/healthy-food.jpg",
  "preparing-plastic-surgery-checklist": "/images/blog/checklist-prep.jpg",
  "wound-care-home-after-surgery": "/images/blog/recovery-rest.jpg",
  "plastic-surgery-costs-mumbai": "/images/blog/consultation-desk.jpg",
  "choose-best-plastic-surgeon-mumbai": "/images/blog/doctor-portrait.jpg",
  "advances-plastic-reconstructive-surgery": "/images/blog/surgery-prep.jpg",
};

export function getBlogCoverImage(
  slug: string,
  category: "cosmetic" | "reconstructive" | "general",
  index: number
): string {
  if (slugOverrides[slug]) return slugOverrides[slug];

  const pool =
    category === "cosmetic"
      ? cosmeticImages
      : category === "reconstructive"
        ? reconstructiveImages
        : generalImages;

  return pool[index % pool.length];
}
