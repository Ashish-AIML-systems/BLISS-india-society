export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  target: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  videoPath: string
  eyebrow: string
  titleLine: string
  titleEmphasis: string
  subtitleLine1: string
  subtitleLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface ManifestoConfig {
  sectionLabel: string
  points: string[]
}

export interface AnatomyPillar {
  label: string
  title: string
  body: string
}

export interface AnatomyConfig {
  sectionLabel: string
  title: string
  pillars: AnatomyPillar[]
}

export interface TierConfig {
  name: string
  price: string
  frequency: string
  journeys: string
  image: string
  description: string
  amenities: string[]
  ctaText: string
  ctaHref: string
}

export interface TiersConfig {
  sectionLabel: string
  title: string
  tiers: TierConfig[]
}

export interface ImpactStat {
  number: string
  label: string
  suffix: string
}

export interface ImpactConfig {
  sectionLabel: string
  title: string
  stats: ImpactStat[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface DonateConfig {
  sectionLabel: string
  title: string
  taxExemptionNotice: string
  bankDetails: {
    accountName: string
    accountNumber: string
    bankName: string
    branch: string
    ifscCode: string
  }
}

export interface FooterConfig {
  ageGateText: string
  brandName: string
  brandTaglineLines: string[]
  columns: FooterColumn[]
  copyright: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "BLISS INDIA SOCIETY | Transforming Lives Across Karnataka",
  siteDescription: "BLISS INDIA SOCIETY is a non-profit organization uplifting underserved communities through education, awareness, and social development initiatives across Karnataka.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "BLISS INDIA",
  links: [
    { label: "Mission", target: "#manifesto" },
    { label: "Vision", target: "#anatomy" },
    { label: "Programs", target: "#tiers" },
    { label: "Impact", target: "#impact" },
    { label: "Support", target: "#footer" },
  ],
}

export const heroConfig: HeroConfig = {
  videoPath: "videos/hero.mp4",
  eyebrow: "A Non-Profit Organization",
  titleLine: "BLISS INDIA",
  titleEmphasis: "SOCIETY",
  subtitleLine1: "Uplifting underserved communities through education,",
  subtitleLine2: "awareness, and social development across Karnataka.",
  ctaText: "Instagram",
  ctaTargetId: "https://www.instagram.com/grace_oldage_home",
}

export const manifestoConfig: ManifestoConfig = {
  sectionLabel: "Our Mission",
  points: [
    "To reach poor of the poorest Children by providing education support, food and shelter.",
    "To start training and de-addiction programs to youth.",
    "To conduct seminar on social evils such as dowry, female infanticide.",
    "To give adult literacy to illiterate people.",
    "To up lifting poor and aged mothers by providing them adequate food and shelter and help them to stay in our home with full peace of mind until their late breath of death."
  ],
}

export const anatomyConfig: AnatomyConfig = {
  sectionLabel: "Our Vision & Reach",
  title: "Our vision is to give proper education, awareness by conducting different programs and seminars to Children, Youth and Aged people. Mainly those who are living in village as well slum areas and motivate them to live and make them to understand about value of their life.",
  pillars: [
    {
      label: "Education First",
      title: "Knowledge is the foundation of freedom",
      body: "We believe education transforms lives. Our programs reach children in villages and slum areas, ensuring no child is left behind. Through adult literacy initiatives, we empower illiterate individuals to become self-reliant, bridging the gap where literacy rates range between 50% to 70%.",
    },
    {
      label: "Grassroots Action",
      title: "Working where help is needed most",
      body: "Our operations span 6 districts across Karnataka: Kolar, Hassan, Tumkur, Uttara Kannada, Chikkaballapura, and more. We cover 5 taluks, 27 hoblis, 156 gram panchayats, and 1,797 villages in Kolar alone, including Mulbagal, Srinivasapura, and KGF.",
    },
    {
      label: "Holistic Care",
      title: "Dignity for every generation",
      body: "From children to youth, women to elderly, we address the full spectrum of community needs. Our old age homes provide shelter and care for abandoned mothers, while our skill development and healthcare initiatives create sustainable pathways out of poverty.",
    },
  ],
}

export const tiersConfig: TiersConfig = {
  sectionLabel: "Programs & Initiatives",
  title: "Comprehensive Community Development",
  tiers: [
    {
      name: "Education Support",
      price: "",
      frequency: "",
      journeys: "Core Program",
      image: "/images/Slum%20Ministry/Screenshot%202026-04-27%20154951.png",
      description: "Providing educational assistance and support to children from underprivileged backgrounds, ensuring access to books, supplies, and learning environments.",
      amenities: [
        "School supplies and books for children",
        "Tuition assistance for underprivileged students",
        "Community learning centers",
        "Teacher training and volunteer support",
        "Educational outreach in rural schools",
      ],
      ctaText: "",
      ctaHref: "",
    },
    {
      name: "Adult Literacy",
      price: "",
      frequency: "",
      journeys: "Empowerment",
      image: "/images/Adult%20Literacy%20Program/Screenshot%202026-04-27%20155308.png",
      description: "Educating illiterate adults to help them become self-reliant and aware, enabling them to navigate daily life with confidence and independence.",
      amenities: [
        "Basic reading and writing classes",
        "Numeracy and financial literacy",
        "Government scheme awareness",
        "Village-level learning circles",
        "Trained volunteer instructors",
      ],
      ctaText: "",
      ctaHref: "",
    },
    {
      name: "Skill Development",
      price: "",
      frequency: "",
      journeys: "Livelihood",
      image: "/images/Tailoring%20Training/Screenshot%202026-04-27%20155109.png",
      description: "Tailoring training and vocational programs that empower individuals economically, enabling them to build sustainable livelihoods for their families.",
      amenities: [
        "Tailoring and garment-making training",
        "Vocational skill workshops",
        "Entrepreneurship guidance",
        "Market linkage support",
        "Women-focused self-help groups",
      ],
      ctaText: "",
      ctaHref: "",
    },
    {
      name: "Youth Development",
      price: "",
      frequency: "",
      journeys: "Leadership",
      image: "/images/Leaders%20Training/Screenshot%202026-04-27%20154857.png",
      description: "Leadership training and de-addiction programs that channel young energy toward positive community contribution and personal growth.",
      amenities: [
        "Leadership and personality development",
        "De-addiction counseling and camps",
        "Career guidance workshops",
        "Sports and cultural activities",
        "Youth volunteer networks",
      ],
      ctaText: "",
      ctaHref: "",
    },
    {
      name: "Women & Awareness",
      price: "",
      frequency: "",
      journeys: "Social Change",
      image: "/images/SIDDI%20Tribe/Screenshot%202026-04-27%20155158.png",
      description: "Organizing seminars to address critical social issues such as dowry, female infanticide, and gender equality in rural and slum communities.",
      amenities: [
        "Awareness seminars on social issues",
        "Legal rights education for women",
        "Health and hygiene workshops",
        "Community mobilization programs",
        "Anti-dowry and gender sensitization",
      ],
      ctaText: "",
      ctaHref: "",
    },
    {
      name: "Old Age Care",
      price: "",
      frequency: "",
      journeys: "Dignity",
      image: "/images/Grace%20Old%20Age%20Home/Screenshot%202026-04-27%20154626.png",
      description: "Running old age homes to provide shelter, care, and dignity to elderly individuals, especially poor and abandoned mothers who deserve peace in their golden years.",
      amenities: [
        "Safe shelter and nutritious meals",
        "Medical care and health checkups",
        "Emotional companionship programs",
        "Recreational and spiritual activities",
        "Dignified end-of-life care support",
      ],
      ctaText: "",
      ctaHref: "",
    },
  ],
}

export const impactConfig: ImpactConfig = {
  sectionLabel: "Our Impact By Numbers",
  title: "Measurable Change, Lasting Results",
  stats: [
    { number: "6", label: "Districts Across Karnataka", suffix: "+" },
    { number: "1,797", label: "Villages Reached in Kolar", suffix: "" },
    { number: "156", label: "Gram Panchayats Covered", suffix: "" },
    { number: "50", label: "Average Literacy Rate Before", suffix: "%" },
    { number: "27", label: "Hoblis Under Our Care", suffix: "" },
    { number: "5", label: "Taluks Actively Served", suffix: "" },
  ],
}

export const donateConfig: DonateConfig = {
  sectionLabel: "Support Our Cause",
  title: "Bank Transfer Details",
  taxExemptionNotice: "Registered under 12A & 80G. CSR eligible. All donations are tax-exempt.",
  bankDetails: {
    accountName: "Blissindiasociety",
    accountNumber: "3880919360",
    bankName: "Central Bank of India",
    branch: "Kolar Branch",
    ifscCode: "CBIN0284483",
  },
}

export const footerConfig: FooterConfig = {
  ageGateText: "Together, we can bring dignity, stability, and hope to those who need it most.",
  brandName: "BLISS INDIA",
  brandTaglineLines: [
    "Uplifting Communities Since Inception",
    "Karnataka, India",
  ],
  columns: [],
  copyright: "BLISS INDIA SOCIETY. All rights reserved. Registered Non-Profit Organization.",
}
