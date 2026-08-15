/**
 * Lucin Medical Centre — single source of truth for site content.
 * Data sourced from the brief: Kasarani Mwiki Road, Nairobi
 * (Lat -1.22075°, Long 36.91354°), general outpatient clinic.
 */

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
};

export type Doctor = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
};

export const clinic = {
  name: "Lucin Medical Centre",
  shortName: "Lucin",
  tagline: "Compassionate care, close to home.",
  description:
    "A trusted outpatient clinic serving the Kasarani community with general consultations, diagnostics, maternal & child health, pharmacy and laboratory services.",
  phone: "+254 701 234 567",
  phoneHref: "tel:+254701234567",
  whatsapp: "+254 701 234 567",
  whatsappHref: "https://wa.me/254701234567",
  email: "care@lucinmedical.co.ke",
  emailHref: "mailto:care@lucinmedical.co.ke",
  address: {
    line1: "Kasarani Mwiki Road",
    line2: "Kasarani, Nairobi",
    country: "Kenya",
    full: "Kasarani Mwiki Road, Kasarani, Nairobi, Kenya",
  },
  // Real GPS coordinates from the brief
  maps: {
    lat: -1.22075,
    lng: 36.91354,
    query: "-1.22075,36.91354",
    link: "https://maps.google.com/?q=-1.22075,36.91354",
    embed:
      "https://www.google.com/maps?q=-1.22075,36.91354&z=15&output=embed",
  },
  landmarks: [
    "Adjacent to Muscle Beach Gym, Kasarani",
    "~700 m from Kasarani Maternity & Nursing Home",
    "~2.5 km from Moi International Sports Centre",
  ],
  hours: [
    { day: "Monday – Friday", time: "7:30 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday & Public Holidays", time: "9:00 AM – 2:00 PM" },
  ],
  emergencyNote: "For life-threatening emergencies, dial 999 or visit the nearest ER.",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  stats: [
    { label: "Patients cared for", value: "12,000+" },
    { label: "Years in Kasarani", value: "8" },
    { label: "Service lines", value: "6" },
    { label: "Patient satisfaction", value: "97%" },
  ],
} as const;

export const services: Service[] = [
  {
    id: "general-consultation",
    title: "General Consultation",
    description:
      "Routine GP and pediatric consultations for everyday illnesses, chronic disease management and preventive check-ups for the whole family.",
    icon: "Stethoscope",
    features: [
      "Adult & pediatric GP",
      "Chronic disease management",
      "Preventive health checks",
    ],
  },
  {
    id: "diagnostics",
    title: "Diagnostics & Lab",
    description:
      "On-site laboratory for complete blood counts, blood chemistry, malaria and HIV screening, urinalysis and pregnancy tests with same-day results.",
    icon: "TestTube2",
    features: [
      "Hematology & chemistry",
      "Malaria & HIV screening",
      "Urinalysis & pregnancy tests",
    ],
  },
  {
    id: "maternal-child",
    title: "Maternal & Child Health",
    description:
      "Antenatal check-ups, child immunizations, growth monitoring and postnatal care, delivered with a gentle, family-first approach.",
    icon: "Baby",
    features: [
      "Antenatal check-ups",
      "Child immunizations",
      "Growth & developmental monitoring",
    ],
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description:
      "An in-house dispensary stocked with quality prescription medicines, over-the-counter remedies and essential medical consumables.",
    icon: "Pill",
    features: [
      "Prescription dispensing",
      "Over-the-counter medicines",
      "Medical consumables",
    ],
  },
  {
    id: "minor-procedures",
    title: "Minor Procedures",
    description:
      "Wound care, dressings, suturing, incision & drainage and other minor outpatient procedures performed in a clean, sterile environment.",
    icon: "Syringe",
    features: [
      "Wound dressing & suturing",
      "Incision & drainage",
      "Tetanus & injections",
    ],
  },
  {
    id: "telehealth",
    title: "Telehealth & Follow-up",
    description:
      "Virtual consultations and follow-up reviews for chronic conditions, repeat prescriptions and lab result discussions from anywhere.",
    icon: "Video",
    features: [
      "Virtual consultations",
      "Chronic care follow-ups",
      "Lab result reviews",
    ],
  },
];

export const doctors: Doctor[] = [
  {
    id: "dr-awuor",
    name: "Dr. Amani Awuor",
    role: "Lead Physician",
    specialty: "Internal Medicine",
    image: "/images/doctor-1.jpg",
    bio: "Dr. Awuor brings over 12 years of experience in internal medicine and adult primary care, with a focus on chronic disease management and preventive health.",
  },
  {
    id: "dr-mwangi",
    name: "Dr. Kevin Mwangi",
    role: "Family Physician",
    specialty: "Family Medicine",
    image: "/images/doctor-2.jpg",
    bio: "Dr. Mwangi cares for patients of all ages, from children to seniors, with special interest in maternal & child health and minor outpatient procedures.",
  },
  {
    id: "nurse-ntinya",
    name: "Sr. Linet Ntinya",
    role: "Senior Nurse",
    specialty: "Midwifery & Public Health",
    image: "/images/doctor-3.jpg",
    bio: "Sr. Ntinya leads our maternal & child health unit, running immunization clinics and antenatal care with warmth and care for every mother and baby.",
  },
  {
    id: "dr-cherono",
    name: "Dr. Faith Cherono",
    role: "Clinical Officer",
    specialty: "Outpatient & Emergency Care",
    image: "/images/doctor-4.jpg",
    bio: "Dr. Cherono handles acute outpatient presentations and minor procedures, ensuring every patient is triaged and treated quickly and compassionately.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Grace W.",
    location: "Kasarani",
    rating: 5,
    text: "Took my daughter in for a fever on a Saturday afternoon. The team was calm, kind and thorough — we were out with the right prescription in under 40 minutes.",
  },
  {
    id: "t2",
    name: "Peter M.",
    location: "Mwiki",
    rating: 5,
    text: "The cleanest small clinic I've visited in Nairobi. Dr. Mwangi actually listened and explained everything. Lab results came back the same day.",
  },
  {
    id: "t3",
    name: "Aisha N.",
    location: "Kasarani",
    rating: 5,
    text: "Their antenatal clinic is wonderful. Sister Linet made me feel safe through every visit. I cannot recommend Lucin enough to other mothers.",
  },
  {
    id: "t4",
    name: "Brian K.",
    location: "Nairobi",
    rating: 5,
    text: "Booked a telehealth follow-up for my blood pressure meds. Quick, professional and saved me a trip across town. This is what modern care should look like.",
  },
];

export const whyChooseUs = [
  {
    icon: "Clock",
    title: "Open 7 Days a Week",
    text: "Evenings, weekends and holidays — we're here when your family actually needs care, not just during office hours.",
  },
  {
    icon: "HeartPulse",
    title: "Patient-First Care",
    text: "We listen, we explain, and we treat you like a person — never a queue number. Every consultation is unhurried.",
  },
  {
    icon: "Microscope",
    title: "On-Site Lab & Pharmacy",
    text: "Skip the multiple trips. Diagnostics, prescriptions and consumables are all under one roof, with same-day results.",
  },
  {
    icon: "Wallet",
    title: "Affordable & Transparent",
    text: "Clear, upfront pricing for consultations and procedures. No surprise bills — you'll always know what you're paying for.",
  },
  {
    icon: "MapPin",
    title: "Right in Kasarani",
    text: "On Mwiki Road, walking distance from Kasarani Maternity and Muscle Beach Gym. Easy matatu access and ample parking.",
  },
  {
    icon: "ShieldCheck",
    title: "Licensed & Safe",
    text: "KMPDC-compliant facility with trained clinical staff, sterile procedure rooms and proper pharmaceutical handling.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];
