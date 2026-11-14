export interface HeroSlide {
  id: string;
  title: string;
  sector: string;
  bgImage: string;
  bgVideo?: string;
  previewBrand: string;
  previewEyebrow: string;
  previewHeadline: string;
  previewSub: string;
  previewCta: string;
  previewImage: string;
  previewTheme: "cream" | "stone" | "dark" | "linen";
  slug: string;
}

export interface DisciplineSlide {
  id: string;
  tab: string;
  number: string;
  title: string;
  description: string;
  bgImage: string;
  mockupSite: string;
  mockupNav: string[];
  mockupHeading: string;
  mockupImage: string;
  mockupRows: string[];
  floatingLeft: {
    label: string;
    value: string;
    meta: string;
    action: string;
  };
  floatingRight: {
    title: string;
    items: { name: string; tag: string }[];
  };
}

export interface CaseStudy {
  slug: string;
  index: string;
  title: string;
  client: string;
  sector: string;
  category:
    | "Brand Identity"
    | "Digital Experiences"
    | "Creative Direction"
    | "Packaging & Print"
    | "Production";
  year: string;
  location: string;
  deliverables: string[];
  heroImage: string;
  summary: string;
  challenge: string;
  thesis: string;
  metrics: { value: string; label: string }[];
  palette: { name: string; hex: string }[];
  typeSpecimen: {
    displayFont: string;
    accentFont: string;
    sampleLine: string;
  };
  galleryImages: { src: string; caption: string }[];
}

export interface JournalArticle {
  slug: string;
  category: "Design Culture" | "Brand Strategy" | "Studio Craft" | "Digital Systems";
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  author: string;
  coverImage: string;
  excerpt: string;
  body: string[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "kora",
    title: "Talk with Sir AJ",
    sector: "Brand Identity & Digital Media",
    bgImage: "/images/hero-botanical.jpg",
    bgVideo: "/videos/atelier27_interactive_logo_design.mp4",
    previewBrand: "TALK",
    previewEyebrow: "BRAND IDENTITY & MEDIA",
    previewHeadline: "TALK WITH SIR AJ",
    previewSub: "Digital media platform, podcast branding & tactile merchandise identity.",
    previewCta: "explore archive",
    previewImage: "/images/showcase-1.jpg",
    previewTheme: "dark",
    slug: "kora-botanicals",
  },
  {
    id: "osu",
    title: "Youthgraph Studio",
    sector: "Visual Identity & Spatial Systems",
    bgImage: "/images/hero-craft.jpg",
    bgVideo: "/videos/atelier27_interactive_web_design.mp4",
    previewBrand: "YOUTHGRAPH",
    previewEyebrow: "GRID IDENTITY & SIGNAGE",
    previewHeadline: "PRECISION IDENTITY SYSTEMS",
    previewSub: "Geometric logo construction, outdoor billboard systems & studio typography.",
    previewCta: "view system",
    previewImage: "/images/showcase-2.jpg",
    previewTheme: "stone",
    slug: "nyla-atelier",
  },
  {
    id: "balance",
    title: "Atelier Monograph & Print",
    sector: "Editorial Direction & Book Design",
    bgImage: "/images/hero-movement.jpg",
    bgVideo: "/videos/atelier27_interactive_studio_set.mp4",
    previewBrand: "MONOGRAPH",
    previewEyebrow: "PRINT & TACTILE CRAFT",
    previewHeadline: "BESPOKE EDITORIAL ARTIFACTS",
    previewSub: "Curated risograph print catalogs, foil embossed stationery & Pantone swatch systems.",
    previewCta: "read study",
    previewImage: "/images/showcase-3.jpg",
    previewTheme: "cream",
    slug: "zuri-sanctuary",
  },
  {
    id: "monograph",
    title: "Oasis & Vibe Packaging",
    sector: "Packaging Design & Product Direction",
    bgImage: "/images/hero-editorial.jpg",
    bgVideo: "/videos/atelier27_interactive_packaging.mp4",
    previewBrand: "OASIS & VIBE",
    previewEyebrow: "PACKAGING & ARCHITECTURE",
    previewHeadline: "SCULPTURAL PACKAGING SYSTEMS",
    previewSub: "Custom beverage cartons, cylindrical tins & tactile retail packaging.",
    previewCta: "view platform",
    previewImage: "/images/showcase-4.jpg",
    previewTheme: "dark",
    slug: "osu-modernist",
  },
];

export const STUDIO_STATS = [
  { value: 2021, suffix: "", label: "Founded in Accra, Ghana" },
  { value: 48, suffix: "+", label: "Distinct Brand Systems Delivered" },
  { value: 14, suffix: "+", label: "Global Markets Reached" },
];

export const DISCIPLINE_SLIDES: DisciplineSlide[] = [
  {
    id: "brand-strategy",
    tab: "Brand Strategy",
    number: "01",
    title: "Brand Strategy & Identity",
    description:
      "Market positioning, verbal architecture, custom logotypes, and enduring identity systems.",
    bgImage: "/images/work-talk-sir-aj.jpg",
    mockupSite: "Talk with Sir AJ",
    mockupNav: ["EPISODES", "EDITORIAL", "ARCHIVE"],
    mockupHeading: "Voice & Authority",
    mockupImage: "/images/work-talk-sir-aj.jpg",
    mockupRows: [
      "BRAND POSITIONING THESIS",
      "CUSTOM TYPOGRAPHIC LOCKUP",
      "MULTI-SURFACE GUIDELINES",
    ],
    floatingLeft: {
      label: "PHASE 01 DELIVERABLE",
      value: "48 Pages",
      meta: "Identity Guidelines & Tokens",
      action: "INSPECT SYSTEM",
    },
    floatingRight: {
      title: "Core Architecture",
      items: [
        { name: "Naming & Verbal Voice", tag: "Week 1–2" },
        { name: "Primary Emblem & System", tag: "Week 3–5" },
      ],
    },
  },
  {
    id: "digital-experiences",
    tab: "Digital Experience",
    number: "02",
    title: "Digital Experiences",
    description:
      "Bespoke web platforms, interactive storytelling, UI/UX systems, and flagship commerce.",
    bgImage: "/images/work-nexus.png",
    mockupSite: "Nexus Capital",
    mockupNav: ["THESIS", "PORTFOLIO", "DIALOGUE"],
    mockupHeading: "Digital Flagships",
    mockupImage: "/images/work-nexus.png",
    mockupRows: [
      "NEXT.JS + CUSTOM MOTION",
      "RESPONSIVE DESIGN SYSTEMS",
      "FRICTIONLESS CONVERSION",
    ],
    floatingLeft: {
      label: "PERFORMANCE TARGET",
      value: "60 fps",
      meta: "Lenis + GSAP Motion Core",
      action: "VIEW PROTOTYPE",
    },
    floatingRight: {
      title: "Engineering Stack",
      items: [
        { name: "Interactive Architecture", tag: "Custom Code" },
        { name: "CMS & Commerce Ready", tag: "Headless" },
      ],
    },
  },
  {
    id: "creative-direction",
    tab: "Creative Direction",
    number: "03",
    title: "Creative Direction & Campaigns",
    description:
      "Multi-channel art direction, campaign visual narratives, and styling for bold launches.",
    bgImage: "/images/work-vitalisse.png",
    mockupSite: "Maison Vitalisse",
    mockupNav: ["LOOKBOOK", "ATELIER", "PRESS"],
    mockupHeading: "Seasonal Narratives",
    mockupImage: "/images/work-vitalisse.png",
    mockupRows: [
      "CAMPAIGN THESIS & CASTING",
      "SET & LIGHTING DIRECTION",
      "GLOBAL LAUNCH ROLLOUT",
    ],
    floatingLeft: {
      label: "CAMPAIGN REACH",
      value: "+140%",
      meta: "Qualified Press & Inquiries",
      action: "OPEN DECK",
    },
    floatingRight: {
      title: "Direction Scope",
      items: [
        { name: "Editorial Storyboard", tag: "Art Dir." },
        { name: "Launch Film & Stills", tag: "Multi-Ch." },
      ],
    },
  },
  {
    id: "visual-production",
    tab: "Visual Production",
    number: "04",
    title: "Visual & Content Production",
    description:
      "Architectural photography, product cinematography, 2D/3D motion graphics, and portraiture.",
    bgImage: "/images/work-soundstage.png",
    mockupSite: "Atelier Production",
    mockupNav: ["STILLS", "CINEMA", "MOTION"],
    mockupHeading: "Light & Materiality",
    mockupImage: "/images/work-soundstage.png",
    mockupRows: [
      "MEDIUM FORMAT STILLS",
      "SILENT LOOP HERO REELS",
      "3D PRODUCT RENDERS",
    ],
    floatingLeft: {
      label: "STUDIO CAPTURE",
      value: "4K RAW",
      meta: "Accra Studio & On-Location",
      action: "VIEW REEL",
    },
    floatingRight: {
      title: "Production Units",
      items: [
        { name: "Architectural Stills", tag: "Editorial" },
        { name: "Kinetic Type & 3D", tag: "Motion" },
      ],
    },
  },
  {
    id: "print-physical",
    tab: "Print & Physical",
    number: "05",
    title: "Print & Physical Experiences",
    description:
      "Tactile luxury packaging, editorial monographs, letterpress stationery, and spatial signage.",
    bgImage: "/images/work-oasis-vibe.jpg",
    mockupSite: "Oasis & Vibe",
    mockupNav: ["EDITIONS", "PACKAGING", "SPATIAL"],
    mockupHeading: "Tactile Monographs",
    mockupImage: "/images/work-oasis-vibe.jpg",
    mockupRows: [
      "UNCOATED COTTON STOCKS",
      "BLIND DEBOSS & FOIL SPEC",
      "EXHIBITION WAYFINDING",
    ],
    floatingLeft: {
      label: "TACTILE FINISH",
      value: "420 gsm",
      meta: "Cotton Rag & Foil Press",
      action: "PRINT SPECS",
    },
    floatingRight: {
      title: "Physical Touchpoints",
      items: [
        { name: "Structural Packaging", tag: "Die-line" },
        { name: "Hardcover Books", tag: "Edition" },
      ],
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "vitalisse-luxury",
    index: "01 / 26",
    title: "Maison Vitalisse",
    client: "Maison Vitalisse",
    sector: "Luxury Beauty & Fashion House",
    category: "Brand Identity",
    year: "2025",
    location: "Accra & Paris",
    deliverables: [
      "Brand Identity Architecture",
      "Campaign Art Direction",
      "Packaging & Studio Stills",
      "Digital Flagship & Guidelines",
    ],
    heroImage: "/images/work-vitalisse.png",
    summary:
      "A monolithic brand identity architecture, studio presentation system, and high-fashion editorial campaign direction for Maison Vitalisse.",
    challenge:
      "To redefine contemporary luxury through beauty, fashion, and storytelling — synthesizing refined typography, champagne tones, and tactile print artifacts into global prominence.",
    thesis:
      "Harmonizing modern architectural type with classical serif authority, elevated studio staging, and uncompromising material execution across physical and digital surfaces.",
    metrics: [
      { value: "48 Pages", label: "Brand Identity & Guidelines" },
      { value: "+310%", label: "Private Salon Inquiries" },
      { value: "100%", label: "Concept-to-Shelf Delivery" },
    ],
    palette: [
      { name: "Deep Onyx", hex: "#0E0E10" },
      { name: "Brushed 18K Gold", hex: "#CFB53B" },
      { name: "Alabaster Bone", hex: "#F5F2EB" },
      { name: "Smoked Quartz", hex: "#4A453F" },
    ],
    typeSpecimen: {
      displayFont: "Playfair Display / Cormorant",
      accentFont: "Montserrat / DM Sans",
      sampleLine: "Elevated, feminine, timeless. Confident beauty shaped in Paris and Accra.",
    },
    galleryImages: [
      {
        src: "/images/work-vitalisse.png",
        caption: "Studio presentation whiteboard and brand identity tokens for Maison Vitalisse.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224429.png",
        caption: "Editorial magazine feature and seasonal luxury packaging architecture.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224705.png",
        caption: "Macro studio craftsmanship and fine object formulation detail.",
      },
    ],
  },
  {
    slug: "talk-sir-aj",
    index: "02 / 26",
    title: "Talk with Sir AJ",
    client: "Sir AJ Media Group",
    sector: "Media & Digital Culture",
    category: "Brand Identity",
    year: "2025",
    location: "Accra & London",
    deliverables: [
      "Logotype Design",
      "Broadcast Motion Package",
      "App Icons & Thumbnails",
      "Merchandise Identity",
    ],
    heroImage: "/images/work-talk-sir-aj.jpg",
    summary:
      "Comprehensive podcast and broadcast media brand identity, bespoke letterform mark, motion graphics package, and tactile editorial merchandise.",
    challenge:
      "Establish a bold, authoritative broadcast identity that transitions seamlessly from YouTube video overlays to audio streaming apps and physical merchandise.",
    thesis:
      "Geometric serif typography fused with a monolithic speech silhouette mark and high-contrast editorial monochrome layout.",
    metrics: [
      { value: "+380%", label: "Channel Audience Growth" },
      { value: "180K+", label: "Monthly Listeners" },
      { value: "100%", label: "Bespoke Typographic System" },
    ],
    palette: [
      { name: "Deep Pitch Black", hex: "#0B0B0C" },
      { name: "Crimson Accent", hex: "#E63946" },
      { name: "Bone Paper", hex: "#F4F1EA" },
      { name: "Warm Slate", hex: "#8E9099" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Bold",
      accentFont: "JetBrains Mono",
      sampleLine: "UNFILTERED DIALOGUE ON LEADERSHIP, DESIGN & POWER.",
    },
    galleryImages: [
      {
        src: "/images/work-talk-sir-aj.jpg",
        caption: "Primary logotype architecture and bold typographic identity system.",
      },
      {
        src: "/images/work-logo-sketch.png",
        caption: "Initial geometric grid drafting and proportional vector construction.",
      },
      {
        src: "/images/work-digital-drafting.jpg",
        caption: "Digital workspace vectorization and multi-scale legibility testing.",
      },
    ],
  },
  {
    slug: "youthgraph-studio",
    index: "03 / 26",
    title: "Youthgraph Studio",
    client: "Youthgraph Collective",
    sector: "Design & Spatial Architecture",
    category: "Brand Identity",
    year: "2025",
    location: "Accra & Berlin",
    deliverables: [
      "Brand Architecture",
      "Geometric Monogram",
      "Signage Guidelines",
      "Collateral Suite",
    ],
    heroImage: "/images/work-youthgraph.jpg",
    summary:
      "Modular brand identity system, geometric monogram mark, and large-format spatial signage for a contemporary creative studio.",
    challenge:
      "Create a timeless symbol that functions at 16px as a favicon and at 20 meters across architectural studio facades.",
    thesis:
      "Strict architectural grid alignment, circular interlocking geometry, and Swiss neo-grotesque typography.",
    metrics: [
      { value: "1.618", label: "Golden Ratio Grid Strictness" },
      { value: "4", label: "International Design Awards" },
      { value: "12", label: "Spatial Wayfinding Systems" },
    ],
    palette: [
      { name: "Obsidian Matte", hex: "#111112" },
      { name: "Klein Blue", hex: "#0047FF" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Cool Concrete", hex: "#E5E7EB" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans SemiBold",
      accentFont: "JetBrains Mono",
      sampleLine: "SPATIAL PURITY THROUGH MATHEMATICAL GEOMETRY.",
    },
    galleryImages: [
      {
        src: "/images/work-youthgraph.jpg",
        caption: "Mathematical logotype drafting on precision geometric millimeter grid.",
      },
      {
        src: "/images/work-bratus.png",
        caption: "Brand collateral system, business cards, and stationery print layout.",
      },
      {
        src: "/images/work-antiestatico.png",
        caption: "Spatial signage and studio exterior application.",
      },
    ],
  },
  {
    slug: "corps-africa-summit",
    index: "04 / 26",
    title: "CorpsAfrica Summit",
    client: "CorpsAfrica Development Foundation",
    sector: "Global Development & Culture",
    category: "Brand Identity",
    year: "2024",
    location: "Accra, Kigali & Washington D.C.",
    deliverables: [
      "Summit Visual Identity",
      "Environmental Stage Design",
      "Delegate Kit & Badges",
      "Digital Livestream Assets",
    ],
    heroImage: "/images/editorial-corps-africa.png",
    summary:
      "Comprehensive summit brand identity, environmental stage design, and digital publication system uniting fellows across 10 African nations.",
    challenge:
      "Harmonize sovereign visual traditions across 10 nations into a cohesive, hopeful, and modern identity without visual cliché.",
    thesis:
      "Warm earth-toned color blocking, modern interlocking ribbon geometry symbolizing unity, and crisp bilingual editorial typography.",
    metrics: [
      { value: "10", label: "African Nations Represented" },
      { value: "1,200+", label: "Summit Delegates" },
      { value: "48", label: "Physical Environmental Assets" },
    ],
    palette: [
      { name: "Terracotta Sun", hex: "#D95D39" },
      { name: "Forest Evergreen", hex: "#1B4332" },
      { name: "Ochre Gold", hex: "#E9C46A" },
      { name: "Savanna Sand", hex: "#F8F9FA" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Bold",
      accentFont: "DM Sans Regular",
      sampleLine: "EMPOWERING COMMUNITY-LED CHANGE ACROSS AFRICA.",
    },
    galleryImages: [
      {
        src: "/images/editorial-corps-africa.png",
        caption: "Summit stage backdrop, badge accreditation system, and banner architecture.",
      },
      {
        src: "/images/work-studio-sketch.png",
        caption: "Concept sketching and ribbon emblem motif iterations.",
      },
      {
        src: "/images/work-tabletop-workshop.png",
        caption: "Delegate welcome gift boxes and letterpress stationery suites.",
      },
    ],
  },
  {
    slug: "bratus-identity",
    index: "05 / 26",
    title: "Bratus Studio Identity",
    client: "Bratus Design Collective",
    sector: "Visual Culture & Spatial Branding",
    category: "Brand Identity",
    year: "2024",
    location: "Accra & Lisbon",
    deliverables: [
      "Visual Identity",
      "Foil Print Collateral",
      "Monogram Emblem",
      "Studio Stationery",
    ],
    heroImage: "/images/Screenshot 2026-11-13 223906.png",
    summary:
      "Clean minimalist identity system and letterpress business cards exploring tactile cotton paper, blind deboss, and gold foil accents.",
    challenge:
      "Establish an understated, quiet studio mark that reflects tactile craft and balances digital agility with physical permanence.",
    thesis:
      "High-contrast monochromatic typographic hierarchy paired with heavy 600gsm duplex paper stocks and precision micro-embossing.",
    metrics: [
      { value: "600gsm", label: "Cotton Letterpress Stock" },
      { value: "Gold", label: "Micro-Foil Edge Gilding" },
      { value: "3", label: "International Design Features" },
    ],
    palette: [
      { name: "Studio Charcoal", hex: "#141416" },
      { name: "Metallic Gold", hex: "#D4AF37" },
      { name: "Crisp Cotton", hex: "#FAF9F6" },
      { name: "Muted Slate", hex: "#7E828B" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Medium",
      accentFont: "JetBrains Mono",
      sampleLine: "TACTILE RIGOR AND STRUCTURAL EMBOSSING.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 223906.png",
        caption: "Letterpress business cards with blind deboss and metallic gold foil stamp.",
      },
      {
        src: "/images/work-logo-sketch.png",
        caption: "Monogram emblem vector geometry and grid exploration.",
      },
      {
        src: "/images/work-digital-drafting.jpg",
        caption: "Digital drafting workstation testing multi-scale resolution.",
      },
    ],
  },
  {
    slug: "antiestatico-systems",
    index: "06 / 26",
    title: "Antiestático Visual Engine",
    client: "Antiestático Creative Agency",
    sector: "Motion & Contemporary Branding",
    category: "Brand Identity",
    year: "2025",
    location: "Accra & Madrid",
    deliverables: [
      "Dynamic Visual Engine",
      "Grid Guidelines",
      "Kinetic Typography",
      "Studio Collateral",
    ],
    heroImage: "/images/Screenshot 2026-11-13 224632.png",
    summary:
      "High-contrast brutalist identity system utilizing kinetic type grids, bold modular framing, and bespoke signage for a creative studio.",
    challenge:
      "Create a visual system dynamic enough to govern live broadcast graphics, website transitions, and physical architectural plaques.",
    thesis:
      "Bold neo-grotesque letterforms set in high-density Swiss columns, framed by hairline bounding boxes and stark black-on-white polarity.",
    metrics: [
      { value: "4K", label: "Kinetic Motion Package" },
      { value: "100%", label: "Modular Design Tokens" },
      { value: "18", label: "Spatial Applications" },
    ],
    palette: [
      { name: "Pure Pitch", hex: "#000000" },
      { name: "Studio Bone", hex: "#F3F2EE" },
      { name: "Safety Orange", hex: "#FF5E14" },
      { name: "Concrete Grey", hex: "#9E9E9E" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Bold",
      accentFont: "JetBrains Mono",
      sampleLine: "MODULAR KINETIC SYSTEMS ENGINEERED FOR IMPACT.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 224632.png",
        caption: "Modular studio graphic system and brutalist typographic layout.",
      },
      {
        src: "/images/work-bratus.png",
        caption: "Complementary brand collateral and stationery print layout.",
      },
      {
        src: "/images/work-studio-sketch.png",
        caption: "Initial typographic sketching and spatial signage concepts.",
      },
    ],
  },
  {
    slug: "sankofa-ventures",
    index: "07 / 26",
    title: "Nexus Capital & Sankofa",
    client: "Nexus Capital & Sankofa Partners",
    sector: "Venture Capital & Fintech",
    category: "Digital Experiences",
    year: "2025",
    location: "Accra, Lagos & New York",
    deliverables: [
      "Web Architecture",
      "Design System Tokens",
      "Next.js Engineering",
      "Interactive Data Maps",
    ],
    heroImage: "/images/work-nexus.png",
    summary:
      "Institutional web flagship, live portfolio dashboard, and interactive investment mapping for an African cross-border venture fund.",
    challenge:
      "Replace traditional static venture pages with high-performance edge web architecture and interactive deal-flow data visualizations.",
    thesis:
      "High-contrast dark mode interfaces, precision micro-interactions, sub-50ms page transitions, and tabular typography.",
    metrics: [
      { value: "$85M", label: "Fund Capital Deployed" },
      { value: "0.32s", label: "Worldwide Edge Load Time" },
      { value: "100/100", label: "Lighthouse Performance Score" },
    ],
    palette: [
      { name: "Deep Basalt", hex: "#0B0B0C" },
      { name: "Precision Lime", hex: "#39FF14" },
      { name: "Slate Grey", hex: "#86868B" },
      { name: "Pure White", hex: "#FFFFFF" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Medium",
      accentFont: "JetBrains Mono",
      sampleLine: "CAPITAL FOR GENERATIONAL AFRICAN INFRASTRUCTURE.",
    },
    galleryImages: [
      {
        src: "/images/work-nexus.png",
        caption: "Institutional web experience featuring realtime capital deployment graphs.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223656.png",
        caption: "Desktop portal interface and founder application workflow.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223245.png",
        caption: "Mobile responsiveness and responsive dark surface hierarchy.",
      },
    ],
  },
  {
    slug: "five-keys-hospitality",
    index: "08 / 26",
    title: "Five Keys Hospitality",
    client: "Five Keys Hotels & Estates",
    sector: "Boutique Hospitality & Real Estate",
    category: "Digital Experiences",
    year: "2025",
    location: "Cape Coast & Accra",
    deliverables: [
      "Digital Flagship UI/UX",
      "Custom Booking Engine",
      "Inertial Scroll Choreography",
      "Mobile Concierge Web App",
    ],
    heroImage: "/images/work-five-keys.png",
    summary:
      "Immersive booking flagship and digital concierge experience for five architect-designed coastal villas.",
    challenge:
      "Translate the sensory tactile luxury of coastal architecture into an unhurried, frictionless digital reservation flow.",
    thesis:
      "Generous editorial whitespace, smooth Lenis inertial scroll physics, full-bleed architectural cinematography, and clean booking drawers.",
    metrics: [
      { value: "+240%", label: "Direct Web Bookings" },
      { value: "4.2 min", label: "Average Time on Site" },
      { value: "0%", label: "Third-Party OTA Commission" },
    ],
    palette: [
      { name: "Travertine White", hex: "#F9F8F6" },
      { name: "Sea Mist Clay", hex: "#D8D3C8" },
      { name: "Espresso Wood", hex: "#2B231D" },
      { name: "Bronze Accent", hex: "#A68058" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Light",
      accentFont: "DM Sans Regular",
      sampleLine: "Coastal quietude, master architecture, private sanctuary.",
    },
    galleryImages: [
      {
        src: "/images/work-five-keys.png",
        caption: "Villas portfolio directory with dynamic date-picker reservation integration.",
      },
      {
        src: "/images/work-resort-sanctuary.png",
        caption: "Villa suite overview and high-resolution spatial photo carousel.",
      },
      {
        src: "/images/work-persion.png",
        caption: "Concierge dining experiences and private excursion booking interface.",
      },
    ],
  },
  {
    slug: "persion-tea-room",
    index: "09 / 26",
    title: "Persion Artisan Tea Room",
    client: "Persion Tea Merchants",
    sector: "Culinary & High-End E-Commerce",
    category: "Digital Experiences",
    year: "2024",
    location: "Accra & Kyoto",
    deliverables: [
      "E-Commerce Platform",
      "Interactive Brew Guide",
      "Subscription Architecture",
      "Packaging Visuals",
    ],
    heroImage: "/images/work-persion.png",
    summary:
      "Sensory digital tea room and subscription storefront celebrating rare single-origin harvests from West Africa and East Asia.",
    challenge:
      "Communicate aroma, brew temperature, and harvest elevation through intuitive visual UI elements without overwhelming buyers.",
    thesis:
      "Muted earth tones, delicate hairline dividers, ritual timing interactive widgets, and seamless Apple Pay checkout.",
    metrics: [
      { value: "68%", label: "Recurring Subscription Rate" },
      { value: "3.4x", label: "Average Order Value" },
      { value: "18", label: "Rare Micro-Lot Releases Sold Out" },
    ],
    palette: [
      { name: "Match Wood", hex: "#ECE6DC" },
      { name: "Steamed Jade", hex: "#4F5D4E" },
      { name: "Roasted Charcoal", hex: "#1E1E1E" },
      { name: "Warm Ochre", hex: "#C28B53" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Regular",
      accentFont: "JetBrains Mono",
      sampleLine: "HARVEST ELEVATION 1,420M — RITUAL INFUSION NOTES.",
    },
    galleryImages: [
      {
        src: "/images/work-persion.png",
        caption: "Sensory e-commerce shop view with harvest origin filters and brewing timers.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224124.png",
        caption: "Editorial visual story chronicling organic harvest methods.",
      },
      {
        src: "/images/Gemini_Generated_Image_ntg4ajntg4ajntg4.jpg",
        caption: "Tablet tasting guide and digital pairing menu.",
      },
    ],
  },
  {
    slug: "unveil-studios-flagship",
    index: "10 / 26",
    title: "Unveil Digital Showcase",
    client: "Unveil Creative Technology",
    sector: "Web Platforms & Digital Products",
    category: "Digital Experiences",
    year: "2025",
    location: "Accra & New York",
    deliverables: [
      "Digital Flagship",
      "3D WebGL Interaction",
      "UI Component Library",
      "Motion Architecture",
    ],
    heroImage: "/images/Screenshot 2026-11-13 223245.png",
    summary:
      "Immersive web flagship engineered for fluid micro-interactions, responsive typography, and tactile digital storytelling.",
    challenge:
      "Build a cutting-edge web flagship that achieves 60fps animations while loading under 1 second on mobile devices globally.",
    thesis:
      "GPU-accelerated WebGL canvas transitions blended into minimalist typography and modular dark canvas components.",
    metrics: [
      { value: "60fps", label: "Smooth GPU Animation" },
      { value: "0.45s", label: "Interactive Edge Load" },
      { value: "+320%", label: "Inbound Client Inquiries" },
    ],
    palette: [
      { name: "Void Black", hex: "#09090B" },
      { name: "Neon Violet", hex: "#7C3AED" },
      { name: "Graphite", hex: "#27272A" },
      { name: "Silver Ash", hex: "#E4E4E7" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Bold",
      accentFont: "JetBrains Mono",
      sampleLine: "INTERACTIVE EXPERIENCES SHAPED IN REAL TIME.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 223245.png",
        caption: "Digital showcase hero screen showing interactive portfolio grid.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223656.png",
        caption: "Media card layouts and interactive project inspection drawer.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223305.png",
        caption: "Responsive mobile breakpoint testing and typography hierarchy.",
      },
    ],
  },
  {
    slug: "visionary-digital-portal",
    index: "11 / 26",
    title: "Visionary Media Platform",
    client: "Visionary Media Global",
    sector: "Digital Publishing & Streaming",
    category: "Digital Experiences",
    year: "2024",
    location: "Accra & Johannesburg",
    deliverables: [
      "Content Streaming Platform",
      "Custom Audio Player UI",
      "Interactive Editorial Feed",
      "Mobile Experience",
    ],
    heroImage: "/images/Screenshot 2026-11-13 223656.png",
    summary:
      "Dark-mode digital flagship engineered with high-contrast typography, live media streaming cards, and frictionless navigation.",
    challenge:
      "Organize hundreds of hours of editorial video and audio into a lightning-fast browsing experience that feels like a luxury gallery.",
    thesis:
      "Monolithic dark cards, razor-thin luminous borders, persistent bottom audio dock, and instant search indexing.",
    metrics: [
      { value: "2.4M", label: "Monthly Video Plays" },
      { value: "48ms", label: "Search Index Latency" },
      { value: "99.9%", label: "Uptime Across Africa" },
    ],
    palette: [
      { name: "Obsidian Core", hex: "#080809" },
      { name: "Luminous Aqua", hex: "#00F0FF" },
      { name: "Carbon Slate", hex: "#222326" },
      { name: "White Smoke", hex: "#F5F5F7" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans SemiBold",
      accentFont: "JetBrains Mono",
      sampleLine: "CURATED SOUND AND CINEMA FOR MODERN AFRICA.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 223656.png",
        caption: "Streaming portal home view with curated video modules.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223124.png",
        caption: "Interactive analytics dashboard and audience engagement views.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223417.png",
        caption: "Episode detail view and persistent audio player controller.",
      },
    ],
  },
  {
    slug: "alec-tear-interactive",
    index: "12 / 26",
    title: "Alec Tear Typographic Flagship",
    client: "Alec Tear Studio",
    sector: "Typography & Digital Portfolios",
    category: "Digital Experiences",
    year: "2025",
    location: "London & Accra",
    deliverables: [
      "Interactive Type Specimen Site",
      "Variable Font Playground",
      "Kinetic Scroll Effects",
      "Custom CMS",
    ],
    heroImage: "/images/Screenshot 2026-11-13 223510.png",
    summary:
      "Bespoke interactive lettering and digital portfolio archive celebrating custom letterforms, variable weights, and tactile hover physics.",
    challenge:
      "Showcase high-resolution custom letterforms without compromising page load speeds or mobile interactivity.",
    thesis:
      "Strict Swiss column grids paired with interactive slider controls that let visitors test variable font weights in real time.",
    metrics: [
      { value: "100%", label: "Custom SVG Font Specimen" },
      { value: "0.3s", label: "Initial Viewport Render" },
      { value: "Awwwards", label: "Site of the Day Nominee" },
    ],
    palette: [
      { name: "Paper Bone", hex: "#F7F5EE" },
      { name: "Dark Indigo", hex: "#1B1D28" },
      { name: "Rust Terracotta", hex: "#C84B31" },
      { name: "Warm Grey", hex: "#8D8D92" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Italic",
      accentFont: "DM Sans Regular",
      sampleLine: "Sculpted letterforms balancing heritage and digital speed.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 223510.png",
        caption: "Custom lettering specimen hero view and interactive grid canvas.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223348.png",
        caption: "Detail view of variable glyph parameters and ligature testing.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223434.png",
        caption: "Mobile view showing responsive typographic scaling.",
      },
    ],
  },
  {
    slug: "guidelines-digital-spec",
    index: "13 / 26",
    title: "Digital Design Guidelines Engine",
    client: "Atelier Brand Infrastructure",
    sector: "Enterprise Design Systems",
    category: "Digital Experiences",
    year: "2025",
    location: "Accra Studio",
    deliverables: [
      "Web Brand Guidelines",
      "Design Token Generator",
      "Component Specimen Engine",
      "Figma Sync API",
    ],
    heroImage: "/images/Gemini_Generated_Image_ntg4ajntg4ajntg4.jpg",
    summary:
      "Living digital brand guidelines platform delivering synced design tokens, color harmonies, and typography rules directly to development teams.",
    challenge:
      "Bridge the gap between 200-page static PDF brand books and live codebase implementation.",
    thesis:
      "Interactive tablet-optimized web guidelines with one-click CSS/JSON token export and live interactive component previews.",
    metrics: [
      { value: "100%", label: "Code-Synced Tokens" },
      { value: "14", label: "Corporate Partners Deployed" },
      { value: "85%", label: "Faster Dev Handoff" },
    ],
    palette: [
      { name: "Oat Sand", hex: "#EDE8DD" },
      { name: "Charcoal Lead", hex: "#1C1C1F" },
      { name: "Forest Tint", hex: "#2A4736" },
      { name: "Gold Ochre", hex: "#D4973B" },
    ],
    typeSpecimen: {
      displayFont: "JetBrains Mono",
      accentFont: "DM Sans Regular",
      sampleLine: "EXPORT TOKENS: --font-display: 'Cormorant Garamond';",
    },
    galleryImages: [
      {
        src: "/images/Gemini_Generated_Image_ntg4ajntg4ajntg4.jpg",
        caption: "Living tablet guidelines engine displaying live typography tokens.",
      },
      {
        src: "/images/work-nexus.png",
        caption: "Live dashboard component integration and token testing.",
      },
      {
        src: "/images/work-digital-drafting.jpg",
        caption: "Studio development workbench testing cross-platform scaling.",
      },
    ],
  },
  {
    slug: "zuri-sanctuary",
    index: "14 / 26",
    title: "Zuri Sanctuary",
    client: "Zuri Hospitality Group",
    sector: "Hospitality & Architecture",
    category: "Brand Identity",
    year: "2025",
    location: "Labone, Accra",
    deliverables: [
      "Brand Strategy",
      "Visual Identity System",
      "Architectural Signage",
      "Booking Flagship",
    ],
    heroImage: "/images/work-resort-sanctuary.png",
    summary:
      "An architectural wellness sanctuary in Accra requiring an unhurried identity system that translates raw travertine, coastal light, and tactile linen into digital serenity.",
    challenge:
      "Luxury hospitality across West Africa often relies on ornate visual clichés. Zuri wanted quiet architectural authority that stood shoulder-to-shoulder with leading sanctuaries in Kyoto, Lisbon, and Marrakesh.",
    thesis:
      "We stripped the visual language down to sculptural stone proportions, warm gallery-bone whitespace, and high-contrast editorial serif typography paired with whisper-quiet spatial wayfinding.",
    metrics: [
      { value: "+140%", label: "Direct Retreat Bookings" },
      { value: "3.8x", label: "Average Session Depth" },
      { value: "12", label: "Physical Touchpoints Crafted" },
    ],
    palette: [
      { name: "Travertine Bone", hex: "#F5F4F0" },
      { name: "Basalt Shadow", hex: "#0B0B0C" },
      { name: "Sunlit Sandstone", hex: "#C6A989" },
      { name: "Clay Ochre", hex: "#9E6444" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Light",
      accentFont: "DM Sans Medium",
      sampleLine: "Stillness shaped in stone, light, and deliberate silence.",
    },
    galleryImages: [
      {
        src: "/images/work-resort-sanctuary.png",
        caption: "Architectural villa retreat and quiet spatial brand atmosphere.",
      },
      {
        src: "/images/work-five-keys.png",
        caption: "Digital reservation platform and guest experience architecture.",
      },
      {
        src: "/images/work-tabletop-workshop.png",
        caption: "Tactile ceramic amenities and in-room print identity.",
      },
    ],
  },
  {
    slug: "nyla-atelier",
    index: "15 / 26",
    title: "Nyla Atelier & Unmade",
    client: "Nyla Menswear & Object Studio",
    sector: "Fashion & Artisanal Objects",
    category: "Creative Direction",
    year: "2024",
    location: "Accra & Milan",
    deliverables: [
      "Creative Direction",
      "Editorial Lookbook",
      "Runway Video Direction",
      "Digital Capsule Store",
    ],
    heroImage: "/images/work-unmade.png",
    summary:
      "Creative direction, seasonal runway cinematography, and tactile lookbook editorial for an Accra-Milan menswear atelier.",
    challenge:
      "Capture the raw structural weight of hand-spun organic cotton and hand-hammered brass buttons across print and screen.",
    thesis:
      "Sculptural silhouette framing, natural equatorial daylight, and unretouched textile materiality celebrate authentic African tailoring.",
    metrics: [
      { value: "Milan", label: "Fashion Week Presentation" },
      { value: "24", label: "Bespoke Garment Silhouettes" },
      { value: "+115%", label: "International Stockist Orders" },
    ],
    palette: [
      { name: "Terracotta Dust", hex: "#C85B3B" },
      { name: "Basalt Charcoal", hex: "#1B1A19" },
      { name: "Molten Bronze", hex: "#A8875B" },
      { name: "Raw Cotton Ecru", hex: "#EDE8DF" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Regular",
      accentFont: "DM Sans Regular",
      sampleLine: "Woven earth, molten bronze, timeless silhouette.",
    },
    galleryImages: [
      {
        src: "/images/work-unmade.png",
        caption: "Editorial campaign hero visual celebrating hand-tailored structural blazer.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224124.png",
        caption: "Model casting and silhouette movement study under natural raking light.",
      },
      {
        src: "/images/Gemini_Generated_Image_vlbqevlbqevlbqev (1).jpg",
        caption: "Accra studio atelier and fabric cutting tables.",
      },
    ],
  },
  {
    slug: "hitomi-kakuno-editorial",
    index: "16 / 26",
    title: "Hitomi Kakuno Editorial",
    client: "Hitomi Kakuno Agency",
    sector: "Editorial Fashion & Fine Art",
    category: "Creative Direction",
    year: "2025",
    location: "Accra & Tokyo",
    deliverables: [
      "Casting Direction",
      "Chiaroscuro Lighting Setups",
      "Exhibition Hardcover",
      "Digital Monograph",
    ],
    heroImage: "/images/Screenshot 2026-11-13 224124.png",
    summary:
      "Seasonal editorial campaign balancing high-contrast shadows against raw linen textures and intimate model portraiture.",
    challenge:
      "Merge Japanese minimalist stillness with Accra equatorial sun and warm clay textures in a single cohesive campaign.",
    thesis:
      "Single-source directional strobe lighting mimicking late afternoon louvered sun, paired with warm monochromatic styling.",
    metrics: [
      { value: "32", label: "Campaign Frames Selected" },
      { value: "Tokyo", label: "Gallery Exhibition Premiere" },
      { value: "100%", label: "Medium Format Capture" },
    ],
    palette: [
      { name: "Shadow Obsidian", hex: "#0D0D0E" },
      { name: "Linen Warm", hex: "#F3EFE6" },
      { name: "Ochre Sand", hex: "#B88E58" },
      { name: "Deep Amber", hex: "#633B1E" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Light",
      accentFont: "DM Sans Regular",
      sampleLine: "Light cutting through silence, revealing true form.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 224124.png",
        caption: "Chiaroscuro editorial portrait exploring sunlight through window louvers.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224429.png",
        caption: "Full-page magazine spreads and editorial typographic layout.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224454.png",
        caption: "Silhouette detail study showing fabric drape and edge highlights.",
      },
    ],
  },
  {
    slug: "luxuriy-campaign",
    index: "17 / 26",
    title: "Luxuriy Atelier Series",
    client: "Luxuriy Fine Objects",
    sector: "Contemporary Craft & Sculpture",
    category: "Creative Direction",
    year: "2024",
    location: "Accra & Paris",
    deliverables: [
      "Creative Direction",
      "Campaign Stills",
      "Video Art Direction",
      "Printed Capsule Book",
    ],
    heroImage: "/images/Screenshot 2026-11-13 224429.png",
    summary:
      "High-fashion campaign exploring monolithic African stone sculptures, reflective surfaces, and directional equatorial sunlight.",
    challenge:
      "Present sculptural lifestyle objects as museum-grade art rather than transient consumer products.",
    thesis:
      "Tight macro compositions on polished black granite and cast brass surfaces, set against stark white museum pedestals.",
    metrics: [
      { value: "18", label: "Sculptural Objects Featured" },
      { value: "+180%", label: "Gallery Inquiries" },
      { value: "Paris", label: "Design Week Showcase" },
    ],
    palette: [
      { name: "Granite Black", hex: "#111113" },
      { name: "Brushed Brass", hex: "#C5A059" },
      { name: "Gallery Plaster", hex: "#F7F6F2" },
      { name: "Cool Stone", hex: "#95948F" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Light",
      accentFont: "Cormorant Garamond Regular",
      sampleLine: "Sculptural stillness immortalized in granite and brass.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 224429.png",
        caption: "Editorial layout showing bronze object still life and typographic columns.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224102.png",
        caption: "Sculptural casting process and molten metal in atelier.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224206.png",
        caption: "Final polished objects resting on carved limestone plinths.",
      },
    ],
  },
  {
    slug: "kora-botanicals",
    index: "18 / 26",
    title: "Oasis & Vibe Botanical Elixirs",
    client: "Oasis & Vibe / Kora Formulation Labs",
    sector: "Luxury Beverage & Wellness",
    category: "Packaging & Print",
    year: "2025",
    location: "Accra & London",
    deliverables: [
      "Structural Die-lines",
      "Custom Canister & Carton Specs",
      "Foil Deboss Typography",
      "Retail Shelf POS Display",
    ],
    heroImage: "/images/work-oasis-vibe.jpg",
    summary:
      "Structural packaging engineering, custom debossed tin architecture, and tactile beverage cartons for artisanal cold-pressed elixirs.",
    challenge:
      "Eliminate plastic entirely and design 100% recyclable tins and unbleached cotton fiber cartons that look striking on luxury retail shelves.",
    thesis:
      "Cylindrical aluminum canisters paired with uncoated recycled fiber cartons, metallic foil accent lines, and botanical linocut illustrations.",
    metrics: [
      { value: "0%", label: "Single-Use Plastics" },
      { value: "34", label: "Luxury Boutique Stockists" },
      { value: "+210%", label: "Retail Shelf Velocity" },
    ],
    palette: [
      { name: "Forest Evergreen", hex: "#1B3B2B" },
      { name: "Sandstone White", hex: "#F4EFE6" },
      { name: "Warm Copper Foil", hex: "#B87333" },
      { name: "Herbal Sage", hex: "#8A9A86" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Italic",
      accentFont: "JetBrains Mono",
      sampleLine: "COLD-PRESSED PURITY & TACTILE BOTANICAL CRAFT.",
    },
    galleryImages: [
      {
        src: "/images/work-oasis-vibe.jpg",
        caption: "Complete structural carton and tin packaging family on stone counter.",
      },
      {
        src: "/images/download (21).jpg",
        caption: "Complementary artisanal cookie and confectionery retail boxes.",
      },
      {
        src: "/images/Gemini_Generated_Image_5acjj55acjj55acj.jpg",
        caption: "Matte black luxury gift box with custom foam insert and foil stamp.",
      },
    ],
  },
  {
    slug: "osu-modernist",
    index: "19 / 26",
    title: "Studio Origin & Osu Modernist",
    client: "Osu Architecture Foundation & Studio Origin",
    sector: "Culture & Hardcover Publishing",
    category: "Packaging & Print",
    year: "2024",
    location: "Osu, Accra",
    deliverables: [
      "Hardcover Book Design",
      "Bespoke Typography Grid",
      "Pre-Press Print Management",
      "Custom Archival Slipcase",
    ],
    heroImage: "/images/work-studio-origin.jpg",
    summary:
      "320-page hardcover archival monograph, exposed Swiss stitch binding, and custom slipcase documenting 60 years of Ghanaian architecture.",
    challenge:
      "Balance hundreds of vintage monochrome photographs, architectural sketches, and dual-language essays into a collectible art object.",
    thesis:
      "Cloth-bound cover with blind debossing, heavy 170gsm Fedrigoni archival paper, and strict modernist baseline grids.",
    metrics: [
      { value: "2,500", label: "Copies Sold Out in 30 Days" },
      { value: "170gsm", label: "Fedrigoni Archival Cotton Paper" },
      { value: "4", label: "Permanent Museum Collections" },
    ],
    palette: [
      { name: "Linen Oatmeal", hex: "#EFECE4" },
      { name: "Ink Black", hex: "#111112" },
      { name: "Travertine Grey", hex: "#9B9890" },
      { name: "Burnished Bronze", hex: "#8C6D47" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans SemiBold",
      accentFont: "JetBrains Mono",
      sampleLine: "LAT 05.5560° N — TROPICAL CONCRETE MONOGRAPH",
    },
    galleryImages: [
      {
        src: "/images/work-studio-origin.jpg",
        caption: "Hardcover archival volume resting on raw travertine monolith.",
      },
      {
        src: "/images/Gemini_Generated_Image_t2phnxt2phnxt2ph.jpg",
        caption: "Deluxe boxed edition featuring linen ribbon pull and certificate of authenticity.",
      },
      {
        src: "/images/Gemini_Generated_Image_5cbf5f5cbf5f5cbf.jpg",
        caption: "Black-on-black matte presentation slipcase with precision edge beveling.",
      },
    ],
  },
  {
    slug: "strikers-artisanal-cookie",
    index: "20 / 26",
    title: "Strikers Artisanal Cookie Packaging",
    client: "Strikers Confectionery Co.",
    sector: "Artisan Food & Retail Packaging",
    category: "Packaging & Print",
    year: "2024",
    location: "Accra & London",
    deliverables: [
      "Retail Box Architecture",
      "Custom Die-lines",
      "Illustration System",
      "Eco-Stock Specification",
    ],
    heroImage: "/images/download (21).jpg",
    summary:
      "Playful yet refined packaging architecture combining vintage confectionery typography, warm kraft stocks, and vibrant color bands.",
    challenge:
      "Stand out on upscale supermarket and café shelves without sacrificing compostability or freshness sealing.",
    thesis:
      "Recycled kraft folding cartons paired with plant-based greaseproof barrier lining, bold sans serifs, and nostalgic character motifs.",
    metrics: [
      { value: "100%", label: "Biodegradable Materials" },
      { value: "4", label: "Flavor SKUs Packaged" },
      { value: "+165%", label: "Café Distribution Growth" },
    ],
    palette: [
      { name: "Kraft Ochre", hex: "#D69F54" },
      { name: "Espresso Bean", hex: "#2C1D11" },
      { name: "Berry Scarlet", hex: "#D9383A" },
      { name: "Cream Butter", hex: "#F8F1E0" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Bold",
      accentFont: "JetBrains Mono",
      sampleLine: "ARTISANAL BUTTER CRUST & BURNT HONEY COMB.",
    },
    galleryImages: [
      {
        src: "/images/download (21).jpg",
        caption: "Individual retail boxes and stackable carton display architecture.",
      },
      {
        src: "/images/Gemini_Generated_Image_5acjj55acjj55acj.jpg",
        caption: "Rigid gift box presentation edition with gold foil accents.",
      },
      {
        src: "/images/work-oasis-vibe.jpg",
        caption: "Complementary tin canister prototypes on display counter.",
      },
    ],
  },
  {
    slug: "brandmill-luxury-box",
    index: "21 / 26",
    title: "Brandmill Presentation Architecture",
    client: "Brandmill Enterprise Group",
    sector: "Executive Gifting & Luxury Boxes",
    category: "Packaging & Print",
    year: "2025",
    location: "Accra & Zurich",
    deliverables: [
      "Rigid Box Die-lines",
      "Foil Stamping Specs",
      "Custom Foam Inserts",
      "Ribbon Pull Architecture",
    ],
    heroImage: "/images/Gemini_Generated_Image_t2phnxt2phnxt2ph.jpg",
    summary:
      "Bespoke rigid gift boxes finished in matte midnight charcoal, tactile blind deboss, and satin pull ribbons for executive corporate releases.",
    challenge:
      "Create an unboxing experience with airtight hydraulic resistance that creates a sensory pause before the product is revealed.",
    thesis:
      "Thick greyboard construction wrapped in fine Japanese paper, calibrated lid air-release tolerances, and laser-cut high-density EVA foam.",
    metrics: [
      { value: "1,200", label: "Hand-Crafted Boxes" },
      { value: "Zero", label: "Visible Glue Seams" },
      { value: "450gsm", label: "Japanese Washi Wrap" },
    ],
    palette: [
      { name: "Midnight Charcoal", hex: "#161719" },
      { name: "Warm Champagne", hex: "#E8D8B8" },
      { name: "Raw Slate", hex: "#5C5E64" },
      { name: "Pure Black", hex: "#080809" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Regular",
      accentFont: "DM Sans Medium",
      sampleLine: "Tactile hydraulic resistance crafted in unhurried precision.",
    },
    galleryImages: [
      {
        src: "/images/Gemini_Generated_Image_t2phnxt2phnxt2ph.jpg",
        caption: "Executive presentation box with matte foil deboss and satin pull ribbon.",
      },
      {
        src: "/images/Gemini_Generated_Image_5cbf5f5cbf5f5cbf.jpg",
        caption: "Precision beveled edges and black-on-black matte carton sleeve.",
      },
      {
        src: "/images/Gemini_Generated_Image_rdrh86rdrh86rdrh.jpg",
        caption: "Hot foil stamping press test sheets in Accra packaging workshop.",
      },
    ],
  },
  {
    slug: "monolith-black-packaging",
    index: "22 / 26",
    title: "Noir Botanical Monolith Boxes",
    client: "Noir Apothecary Labs",
    sector: "High-End Skincare Packaging",
    category: "Packaging & Print",
    year: "2025",
    location: "Accra & Paris",
    deliverables: [
      "Monolith Box Design",
      "Black-on-Black Spot UV",
      "Foil Deboss",
      "Recycled Pulp Tray",
    ],
    heroImage: "/images/Gemini_Generated_Image_5cbf5f5cbf5f5cbf.jpg",
    summary:
      "Minimalist obsidian monolithic cartons featuring subtle tactile varnish, sharp edge bevels, and sustainable molded fiber trays.",
    challenge:
      "Achieve deep rich blacks on uncoated recycled pulp stock without ink bleed or surface scuffing during transit.",
    thesis:
      "Quadruple-pass carbon black ink with soft-touch protective aqueous varnish and deep blind debossed technical formulas.",
    metrics: [
      { value: "100%", label: "Post-Consumer Waste Stock" },
      { value: "4-Pass", label: "Carbon Pigment Inks" },
      { value: "Paris", label: "Packaging Innovation Award" },
    ],
    palette: [
      { name: "Obsidian Velvet", hex: "#0A0A0B" },
      { name: "Charcoal Tint", hex: "#1E1E22" },
      { name: "Silver Starlight", hex: "#E1E2E6" },
      { name: "Deep Lichen", hex: "#3A4038" },
    ],
    typeSpecimen: {
      displayFont: "JetBrains Mono",
      accentFont: "DM Sans Regular",
      sampleLine: "FORMULA 04 // 100% ORGANIC RECYCLED PULP MONOLITH.",
    },
    galleryImages: [
      {
        src: "/images/Gemini_Generated_Image_5cbf5f5cbf5f5cbf.jpg",
        caption: "Black-on-black monolithic presentation boxes resting on dark slate.",
      },
      {
        src: "/images/Gemini_Generated_Image_5acjj55acjj55acj.jpg",
        caption: "Rigid interior structure and custom velvet die-cut formulation tray.",
      },
      {
        src: "/images/Gemini_Generated_Image_bka4gmbka4gmbka4.jpg",
        caption: "Complete skincare collection displayed in flagship retail lighting.",
      },
    ],
  },
  {
    slug: "atelier-soundstage-production",
    index: "23 / 26",
    title: "Atelier Soundstage & Cinema",
    client: "Atelier 27 Soundstage & Cinema Productions",
    sector: "Film & Commercial Cinematography",
    category: "Production",
    year: "2025",
    location: "Accra Studio & On-Location",
    deliverables: [
      "Cinematography & Lighting",
      "Set Architecture & Staging",
      "Spatial Sound Recording",
      "Color Grading & Mastering",
    ],
    heroImage: "/images/work-soundstage.png",
    summary:
      "In-house production studio capturing 4K anamorphic cinema campaigns, spatial audio soundscapes, and high-fashion set design.",
    challenge:
      "Provide an end-to-end cinema production pipeline in Accra that matches the rigorous technical standards of London and Los Angeles soundstages.",
    thesis:
      "Precision lighting grids, custom cyclorama set builds, anamorphic prime lenses, and seamless post-production color grading.",
    metrics: [
      { value: "4K", label: "Arri Alexa Mini LF Capture" },
      { value: "18", label: "Commercial Campaigns Shot" },
      { value: "350 sqm", label: "Acoustic Soundstage" },
    ],
    palette: [
      { name: "Soundstage Shadow", hex: "#080809" },
      { name: "Tungsten Warmth", hex: "#FFB347" },
      { name: "Cinema Teal", hex: "#008080" },
      { name: "Pure White Cyc", hex: "#FFFFFF" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Medium",
      accentFont: "JetBrains Mono",
      sampleLine: "24 FPS ANAMORPHIC LIGHTING & SPATIAL ACOUSTICS.",
    },
    galleryImages: [
      {
        src: "/images/work-soundstage.png",
        caption: "Full cyclorama studio setup with overhead softbox array and camera dolly.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224737.png",
        caption: "On-set production crew framing high-contrast commercial shot.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223656.png",
        caption: "Live monitor color grading suite and edit review in real time.",
      },
    ],
  },
  {
    slug: "cinema-set-commercial",
    index: "24 / 26",
    title: "Accra Cinema Set & Commercial Film",
    client: "Accra Commercial Cinema Unit",
    sector: "Commercial Motion & Advertising",
    category: "Production",
    year: "2025",
    location: "Accra Studio Soundstage",
    deliverables: [
      "Studio Set Lighting",
      "High-Speed Camera Rigs",
      "Commercial Storyboarding",
      "Color Grading",
    ],
    heroImage: "/images/Screenshot 2026-11-13 224737.png",
    summary:
      "On-set cinematic production capturing narrative commercial films, high-contrast actor lighting, and spatial audio in Accra.",
    challenge:
      "Coordinate multi-camera rigs, specialized motion control dollies, and live video village monitoring in an acoustically treated space.",
    thesis:
      "Sculptural tungsten lighting arrays focused through large diffusion sails create flattering skin tones and rich background falloff.",
    metrics: [
      { value: "1,000fps", label: "Phantom Flex 4K High Speed" },
      { value: "12", label: "Commercial Broadcast Spots" },
      { value: "Dolby Atmos", label: "Spatial Mix Mastering" },
    ],
    palette: [
      { name: "Studio Black", hex: "#0D0D0F" },
      { name: "Tungsten Glow", hex: "#FFA733" },
      { name: "Slate Diffuse", hex: "#61646B" },
      { name: "Direct Daylight", hex: "#FAF9F5" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Bold",
      accentFont: "JetBrains Mono",
      sampleLine: "DIRECTIONAL SINGLE-SOURCE LIGHTING & 4K RAW CAPTURE.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 224737.png",
        caption: "Director and camera operators framing dramatic lighting on studio set.",
      },
      {
        src: "/images/work-soundstage.png",
        caption: "Cyclorama acoustics and overhead softbox array ready for shooting.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224705.png",
        caption: "Tabletop high-speed product capture station.",
      },
    ],
  },
  {
    slug: "tabletop-craft-production",
    index: "25 / 26",
    title: "Tactile Object & Cosmetic Stills",
    client: "Atelier Surface Labs",
    sector: "Macro Still Life & Product Direction",
    category: "Production",
    year: "2025",
    location: "Accra Studio",
    deliverables: [
      "Macro Lens Direction",
      "Surface Styling",
      "Light Shaping",
      "Editorial Color Science",
    ],
    heroImage: "/images/Screenshot 2026-11-13 224705.png",
    summary:
      "Tabletop product photography capturing the tactile materiality of glass, brushed brass, raw travertine, and organic skincare formulations.",
    challenge:
      "Eliminate clinical plastic reflections and render translucent serum liquids with warmth and organic depth.",
    thesis:
      "Single raking strobe paired with large scrim diffusion, real limestone plinths, and zero synthetic post-processing.",
    metrics: [
      { value: "100mm", label: "Macro Prime Lens Spec" },
      { value: "48", label: "High-Res Hero Stills" },
      { value: "Zero", label: "Synthetic CGI Shortcuts" },
    ],
    palette: [
      { name: "Raw Travertine", hex: "#EBE5D8" },
      { name: "Liquid Amber", hex: "#7B461E" },
      { name: "Basalt Dark", hex: "#151518" },
      { name: "Pure White Plinth", hex: "#FAFAFA" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Regular",
      accentFont: "DM Sans Regular",
      sampleLine: "Materiality revealed through optical light and glass refraction.",
    },
    galleryImages: [
      {
        src: "/images/Screenshot 2026-11-13 224705.png",
        caption: "Macro cosmetic formulation still life with single-source directional light.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224541.png",
        caption: "Studio testing station and precision camera arm alignment.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224609.png",
        caption: "Monochrome surface study and shadow falloff exploration.",
      },
    ],
  },
  {
    slug: "atelier-foil-workshop",
    index: "26 / 26",
    title: "Atelier Printmaking & Foil Press",
    client: "Atelier Printmaking Guild",
    sector: "Artisanal Print & Editioning",
    category: "Production",
    year: "2024",
    location: "Accra Workshop",
    deliverables: [
      "Letterpress Production",
      "Custom Copper Dies",
      "Gilded Edge Finishing",
      "Hand-Numbered Editions",
    ],
    heroImage: "/images/Gemini_Generated_Image_rdrh86rdrh86rdrh.jpg",
    summary:
      "Physical printmaking workshop utilizing vintage Heidelberg cylinder presses, hand-mixed Pantone inks, and hot foil debossing.",
    challenge:
      "Maintain microscopic registration tolerances across heavy 600gsm cotton rag paper stocks and dual-foil passes.",
    thesis:
      "Traditional platen press engineering combined with custom CNC-milled brass dies for razor-sharp edge debossing.",
    metrics: [
      { value: "600gsm", label: "Cotton Rag Heavyweight" },
      { value: "0.1mm", label: "Die Registration Strictness" },
      { value: "500", label: "Limited Edition Box Sets" },
    ],
    palette: [
      { name: "Foil Copper", hex: "#C36B3D" },
      { name: "Printer Black", hex: "#121214" },
      { name: "Rag Paper Bone", hex: "#F6F3EB" },
      { name: "Blind Deboss Grey", hex: "#A8A59E" },
    ],
    typeSpecimen: {
      displayFont: "JetBrains Mono",
      accentFont: "DM Sans Regular",
      sampleLine: "HEIDELBERG PLATEN // 180°C HOT FOIL DIE REGISTRATION.",
    },
    galleryImages: [
      {
        src: "/images/Gemini_Generated_Image_rdrh86rdrh86rdrh.jpg",
        caption: "Hot foil debossing test sheets on 600gsm uncoated cotton rag.",
      },
      {
        src: "/images/Gemini_Generated_Image_t2phnxt2phnxt2ph.jpg",
        caption: "Finished limited edition presentation boxes in packaging workshop.",
      },
      {
        src: "/images/work-tabletop-workshop.png",
        caption: "Hand-finishing and edge gilding process under direct studio light.",
      },
    ],
  },
  {
    slug: "kin-collaborative",
    index: "27 / 29",
    title: "KIN Collaborative Studio",
    client: "KIN Collaborative Agency",
    sector: "Collaborative Brand & Digital Systems",
    category: "Digital Experiences",
    year: "2025",
    location: "London & Accra",
    deliverables: [
      "Brand Strategy & Positioning",
      "Collaborative Agency Platform",
      "Editorial UI/UX Architecture",
      "Multi-Surface Project Showcases",
    ],
    heroImage: "/images/editorial-kin.png",
    summary:
      "A Swiss-inspired collaborative agency platform pairing brutalist grid clarity with high-conversion project showcases and seamless multi-device responsiveness.",
    challenge:
      "Unify multi-disciplinary client engagements across brand identity, film, and digital flagships into one cohesive, high-performance agency flagship.",
    thesis:
      "Strict Swiss typographic architecture, minimal chrome, and editorial project cards built on a 12-column mathematical grid.",
    metrics: [
      { value: "3.2x", label: "Inbound Client Enquiries" },
      { value: "60fps", label: "Inertial Scroll Performance" },
      { value: "100%", label: "Responsive Grid Purity" },
    ],
    palette: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Deep Charcoal", hex: "#0B0B0C" },
      { name: "Slate Grey", hex: "#6E6E73" },
      { name: "Warm Alabaster", hex: "#F5F4F0" },
    ],
    typeSpecimen: {
      displayFont: "DM Sans Medium",
      accentFont: "JetBrains Mono",
      sampleLine: "Making brands & businesses stronger through collaboration.",
    },
    galleryImages: [
      {
        src: "/images/editorial-kin.png",
        caption: "KIN collaborative homepage and widescreen project showcases.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223245.png",
        caption: "Responsive multi-device layout scaling across desktop and mobile.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223434.png",
        caption: "Detail view of project case study and typography scale.",
      },
    ],
  },
  {
    slug: "incite-identity-matrix",
    index: "28 / 29",
    title: "Incite Brand Architecture Matrix",
    client: "Incite Global Strategy Group",
    sector: "Comprehensive Brand Guidelines & Architecture",
    category: "Brand Identity",
    year: "2025",
    location: "Accra & International",
    deliverables: [
      "24-Panel Design Matrix",
      "Adaptive Logo System",
      "Color Harmony Architecture",
      "Modular Grid Rules",
    ],
    heroImage: "/images/editorial-incite.png",
    summary:
      "A complete 24-panel modular brand architecture codifying symbols, color palettes, geometric typography, photographic chiaroscuro, and editorial copywriting.",
    challenge:
      "Consolidate an evolving multi-national consulting brand into an unambiguous, highly visual design matrix accessible across international offices.",
    thesis:
      "A modular 24-panel visual index that treats identity not as static guidelines, but as an interactive mathematical system.",
    metrics: [
      { value: "24", label: "Modular Design Panels" },
      { value: "100%", label: "Consistent Multi-Territory Rollout" },
      { value: "8", label: "Core Identity Disciplines" },
    ],
    palette: [
      { name: "Incite Cyan", hex: "#1A4BFF" },
      { name: "Electric Yellow", hex: "#F3CD38" },
      { name: "Crimson Pink", hex: "#EE4266" },
      { name: "Emerald Green", hex: "#2EBD6E" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond",
      accentFont: "DM Sans Regular",
      sampleLine: "Interrogate, Invent, Integrate, Influence, Incite.",
    },
    galleryImages: [
      {
        src: "/images/editorial-incite.png",
        caption: "24-panel comprehensive brand guidelines matrix.",
      },
      {
        src: "/images/Screenshot 2026-11-13 223906.png",
        caption: "Embossed stationery and print debossing applications.",
      },
      {
        src: "/images/Gemini_Generated_Image_ntg4ajntg4ajntg4.jpg",
        caption: "Digital token generator and typography scaling specifications.",
      },
    ],
  },
  {
    slug: "nous-studio-materials",
    index: "29 / 29",
    title: "Nous Studio Identity & Palette",
    client: "Nous Design Studio",
    sector: "Color Architecture & Material Systems",
    category: "Packaging & Print",
    year: "2025",
    location: "Accra Studio",
    deliverables: [
      "Color Architecture System",
      "Typographic Poster Suites",
      "Tactile Print & Embossed Samples",
      "Digital Surface Tokens",
    ],
    heroImage: "/images/editorial-nous.png",
    summary:
      "A chromatic and tactile material identity system defined by Soft Lemon, Daintree, Philippine Grey, and Matte Black with halftone textures and bespoke typographic emblems.",
    challenge:
      "Define an unforgettable visual identity that bridges digital screens with tactile, physical studio artifacts and unboxing experiences.",
    thesis:
      "A dual-personality identity balancing high-energy Soft Lemon against deep Daintree green, unified with industrial halftone printing and debossed cotton stock.",
    metrics: [
      { value: "4", label: "Precision Color Formulations" },
      { value: "420gsm", label: "Cotton Tactile Board" },
      { value: "100%", label: "Multi-Surface Harmony" },
    ],
    palette: [
      { name: "Soft Lemon", hex: "#FFFAA0" },
      { name: "Daintree", hex: "#0B2427" },
      { name: "Philippine Grey", hex: "#8D9091" },
      { name: "Matte Black", hex: "#171717" },
    ],
    typeSpecimen: {
      displayFont: "Cormorant Garamond Light",
      accentFont: "DM Sans Regular",
      sampleLine: "Delivering Impactful Digital Solutions through Collaboration.",
    },
    galleryImages: [
      {
        src: "/images/editorial-nous.png",
        caption: "Color architecture, typographic poster and tactile print samples.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224429.png",
        caption: "Fine linen and tactile studio packaging details.",
      },
      {
        src: "/images/Screenshot 2026-11-13 224609.png",
        caption: "Printed editorial posters with halftone dots and metallic foils.",
      },
    ],
  },
];

export const PLATFORM_PILLARS = [
  {
    id: "editorial-systems",
    title: "Editorial Design Systems",
    description:
      "Precision typography, grid architecture, and adaptable visual rules engineered for longevity.",
    theme: "dark-taupe",
  },
  {
    id: "brand-intelligence",
    title: "Strategic Brand Intelligence",
    description:
      "Research-grounded positioning and visual tokens tailored to elevate ambitious ventures.",
    theme: "pure-black",
  },
  {
    id: "verbal-visual",
    title: "Verbal & Seal Architecture",
    description:
      "Cohesive naming, distinctive marks, and luxury collateral crafted for immediate recognition.",
    theme: "warm-stone",
  },
  {
    id: "digital-launch",
    title: "Global Digital Launch",
    description:
      "Custom web flagships, bespoke motion choreography, and seamless international deployment.",
    theme: "deep-slate",
  },
];

export const STUDIO_PORTRAITS = [
  {
    src: "/images/portrait-1.jpg",
    name: "Kwame Mensah",
    role: "Brand Strategist",
    objectPosition: "object-center",
  },
  {
    src: "/images/portrait-2.jpg",
    name: "Ama Boateng",
    role: "Creative Director",
    objectPosition: "object-center",
  },
  {
    src: "/images/hero-editorial.jpg",
    name: "Kofi Asante",
    role: "Digital Experience Lead",
    objectPosition: "object-[60%_20%]",
  },
  {
    src: "/images/work-nyla.jpg",
    name: "Esi Quaye",
    role: "Print & Material Lead",
    objectPosition: "object-center",
  },
  {
    src: "/images/portrait-5.jpg",
    name: "Abena Osei",
    role: "Production Lead",
    objectPosition: "object-center",
  },
];

export const CLIENT_VERTICALS = [
  {
    id: "startups",
    label: "Startups & Ventures",
    heading: "Zero-to-one category positioning",
    description:
      "Fast-scaling African and global ventures requiring comprehensive identity systems, investor-grade digital flagships, and launch collateral that immediately earns institutional trust.",
    deliverables: ["Naming & Thesis", "Visual System", "Launch Flagship"],
  },
  {
    id: "enterprises",
    label: "Established Enterprises",
    heading: "Strategic modernization & clarity",
    description:
      "Corporate leaders, financial institutions, and multi-market organizations undergoing brand repositioning, digital overhaul, and annual editorial publication design.",
    deliverables: ["Brand Audit", "Digital Overhaul", "Monograph Reports"],
  },
  {
    id: "hospitality",
    label: "Hospitality & Lifestyle",
    heading: "Sensory worldbuilding across surfaces",
    description:
      "Boutique sanctuaries, culinary spaces, fashion houses, and consumer labels demanding tactile packaging, architectural signage, and bespoke art direction.",
    deliverables: ["Packaging Architecture", "Editorial Shoots", "Spatial Signage"],
  },
  {
    id: "institutions",
    label: "Cultural & Foundations",
    heading: "Archival rigor & lasting prestige",
    description:
      "Cultural foundations, contemporary galleries, and public thinkers requiring enduring typographic systems, exhibition identities, and digital archives.",
    deliverables: ["Exhibition Identity", "Hardcover Books", "Digital Archives"],
  },
];

export const PRINCIPLES = [
  {
    number: "01",
    title: "Strategy before aesthetics",
    description:
      "Understand the commercial, cultural, and human problem before shaping a single visual solution.",
  },
  {
    number: "02",
    title: "Originality over imitation",
    description:
      "Create distinctive, timeless work rooted in conviction rather than borrowing fleeting global trends.",
  },
  {
    number: "03",
    title: "Collaboration over transactions",
    description:
      "Treat every founder and team as a co-architect in a long-term dialogue rather than an order ticket.",
  },
  {
    number: "04",
    title: "Craft over shortcuts",
    description:
      "Treat every kerning pair, stone texture, margin, and animation curve as a direct reflection of studio standards.",
  },
  {
    number: "05",
    title: "Purpose over decoration",
    description:
      "Every typographic shift, color token, and interactive transition must clarify meaning and serve the brand.",
  },
  {
    number: "06",
    title: "Consistency over isolated visuals",
    description:
      "Build cohesive design systems engineered to hold their poise across digital platforms and physical touchpoints.",
  },
];

export const TEAM_DISCIPLINES = [
  {
    index: "01",
    role: "Creative Director",
    focus: "Guardians of studio thesis, design integrity, and cross-disciplinary cohesion.",
  },
  {
    index: "02",
    role: "Brand Strategist",
    focus: "Leading market discovery, category positioning, and sharp verbal architectures.",
  },
  {
    index: "03",
    role: "Brand & Graphic Designers",
    focus: "Crafting enduring marks, editorial typography, packaging, and comprehensive guidelines.",
  },
  {
    index: "04",
    role: "Digital Experience Designers",
    focus: "Architecting responsive UI systems, motion choreography, and high-craft websites.",
  },
  {
    index: "05",
    role: "Production Creatives",
    focus: "Photographers, cinematographers, and 2D/3D motion artists capturing materiality.",
  },
  {
    index: "06",
    role: "Project & Client Lead",
    focus: "Orchestrating clear milestones, transparent budgets, and effortless studio communication.",
  },
];

export const SERVICES_DETAILED = [
  {
    number: "01",
    id: "brand-strategy",
    title: "Brand Strategy & Identity",
    lead: "Turning raw commercial ambition into unshakeable positioning and unforgettable visual distinction.",
    deliverables: [
      "Brand Audit & Competitive Category Positioning",
      "Naming & Verbal Identity Architecture",
      "Custom Logo Marks & Adaptive Identity Systems",
      "Bespoke Typography & Color Psychology Systems",
      "Comprehensive Brand Guidelines & Design Tokens",
    ],
    application:
      "Ideal for venture-backed launches, institutional transformations, and luxury lifestyle repositioning.",
  },
  {
    number: "02",
    id: "digital-experiences",
    title: "Digital Experiences",
    lead: "Flagship web platforms engineered for sensory storytelling, fluid motion, and decisive conversion.",
    deliverables: [
      "Custom Website Design & Headless / Next.js / Squarespace Build",
      "UI/UX Architecture & Interactive Prototyping",
      "Mobile Application Interface Design",
      "Editorial Landing Pages & Campaign Micro-sites",
      "Digital Product Design & Frictionless Onboarding Flows",
    ],
    application:
      "Built with Lenis inertial scrolling, GPU-accelerated motion, and clean architectural code.",
  },
  {
    number: "03",
    id: "creative-direction",
    title: "Creative Direction & Campaigns",
    lead: "Unified art direction that commands attention across physical billboards, press editorials, and social feeds.",
    deliverables: [
      "Multi-Channel Campaign Concepts & Visual Theses",
      "Editorial Art Direction, Casting & Shoot Styling",
      "Brand Storytelling & Commercial Video Narratives",
      "Social Media Creative Direction & Modular Grid Systems",
      "Print & Digital Launch Advertising Assets",
    ],
    application:
      "Designed for seasonal fashion capsules, product debuts, and institutional cultural moments.",
  },
  {
    number: "04",
    id: "visual-production",
    title: "Visual & Content Production",
    lead: "Tactile studio photography, architectural stills, and 2D/3D motion crafted in-house from our Accra studio.",
    deliverables: [
      "Architectural & Hospitality Space Photography",
      "Commercial Cinematography & Product Film Loops",
      "2D/3D Motion Graphics & Typographic Animation",
      "Editorial Portraiture & Executive Imagery",
      "High-Resolution Packaging & Surface Renders",
    ],
    application:
      "Eliminates sterile stock photography by anchoring every brand in original visual assets.",
  },
  {
    number: "05",
    id: "print-physical",
    title: "Print & Physical Experiences",
    lead: "Enduring material artifacts—from embossed cotton packaging to architectural wayfinding and monographs.",
    deliverables: [
      "Custom Luxury Packaging & Unboxing Architecture",
      "Editorial Books, Annual Reports & Brand Monographs",
      "Corporate Stationery Suites (Letterpress, Foil, Deboss)",
      "Architectural Signage & Spatial Environmental Wayfinding",
      "Exhibition & Event Spatial Branding",
    ],
    application:
      "Specifying real paper weights, blind debossing tolerances, and structural prototypes.",
  },
];

export const ENGAGEMENT_MODELS = [
  {
    index: "A",
    title: "Project-Based Engagements",
    duration: "6 – 14 Weeks",
    description:
      "Fixed-scope partnerships for end-to-end brand identity systems, custom website flagships, or seasonal product launches with clear milestone deliverables.",
  },
  {
    index: "B",
    title: "Ongoing Creative Retainers",
    duration: "Quarterly / Annual",
    description:
      "Dedicated senior creative direction, campaign production, and continuous digital iteration for fast-scaling brands requiring an embedded studio partner.",
  },
  {
    index: "C",
    title: "Strategic Advisory Sprints",
    duration: "2 – 3 Weeks",
    description:
      "Focused executive workshops covering category positioning, verbal narrative, and design audit blueprints before full-scale execution.",
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "renaissance-west-african-typography",
    category: "Design Culture",
    title: "The Renaissance of Contemporary West African Typography",
    subtitle:
      "How Accra's new wave of studios is moving beyond nostalgic ornamentation toward timeless geometric precision.",
    readTime: "6 min read",
    date: "October 2025",
    author: "Ama Boateng — Creative Director",
    coverImage: "/images/journal-typography.png",
    excerpt:
      "Across Lagos, Accra, and Dakar, independent designers are forging a visual grammar that honors archival heritage through disciplined Swiss clarity and bold proportion.",
    body: [
      "For decades, commercial graphic design representing West Africa abroad was trapped between two narrow expectations: either overly literal folkloric ornamentation or sterile multinational templates stripped of local cadence.",
      "Inside studios across Accra today, a deeper shift is underway. Designers are studying 1960s tropical modernist architecture, hand-painted signage traditions, and sculpted brass forms—distilling their underlying proportions and rhythms rather than copying surface motifs.",
      "At ATELIER 27, typography begins with architecture. Just as Accra's brutalist civic structures balance shaded deep overhangs against blazing equatorial sun, strong visual identities balance generous bone whitespace against deliberate dark typographic weight.",
      "When a contemporary brand pairs tight neo-grotesque letterforms with refined serif editorial inflection and disciplined monospace coordinates, it doesn't ask for global relevance—it commands it effortlessly.",
    ],
  },
  {
    slug: "identity-systems-outlast-funnels",
    category: "Brand Strategy",
    title: "Why Identity Systems Outlast Fleeting Marketing Funnels",
    subtitle:
      "Performance campaigns buy temporary attention. Cohesive design systems build compounding cultural equity.",
    readTime: "5 min read",
    date: "September 2025",
    author: "Kwame Mensah — Brand Strategist",
    coverImage: "/images/journal-strategy.png",
    excerpt:
      "Ad costs rise every quarter while attention fragments. Only brands anchored by unmistakable identity systems retain pricing power and organic recall.",
    body: [
      "Founders frequently approach creative work backwards—investing heavily in paid acquisition creative before resolving the core thesis of who they are and why their product deserves to exist.",
      "Without a coherent strategic and visual system, every new product launch, investor deck, and landing page drifts into visual inconsistency. Trust erodes in small, subtle ways: mismatched typography, generic stock imagery, and vague messaging.",
      "A true identity system acts as an operating thesis. It gives teams clear typography tokens, material standards, photography principles, and verbal guardrails that accelerate every decision for years.",
      "When every touchpoint speaks with the same calm, recognizable precision, marketing becomes compounding recognition rather than an exhausting sprint for clicks.",
    ],
  },
  {
    slug: "capturing-light-and-materiality",
    category: "Studio Craft",
    title: "Behind the Lens: Capturing Light and Materiality in Studio Photography",
    subtitle:
      "Why chiaroscuro lighting and raw natural surfaces communicate luxury more honestly than sterile CGI.",
    readTime: "4 min read",
    date: "August 2025",
    author: "Abena Osei — Production Lead",
    coverImage: "/images/journal-lighting.png",
    excerpt:
      "In an era flooded with frictionless synthetic imagery, tactile texture—chiseled limestone, beeswax, raw linen—restores human trust.",
    body: [
      "When digital interfaces feel weightless, the brain craves physical proof. How light grazes unpolished travertine or catches the subtle weave of raw cotton immediately signals care and permanence.",
      "In our Accra production space, we shoot predominantly with directional single-source lighting—mimicking afternoon sun slicing through louvered shutters. Deep shadows aren't empty voids; they frame negative space where typography can breathe.",
      "Every frame is composed with web layouts in mind from the first test shot, ensuring focal subjects sit naturally alongside editorial headlines without clutter.",
    ],
  },
  {
    slug: "scarcity-speed-and-elegance-web",
    category: "Digital Systems",
    title: "Designing for Scarcity, Speed, and Elegance on the Modern Web",
    subtitle:
      "Why restraint, fast loading, and tactile scroll physics remain the ultimate digital luxury.",
    readTime: "7 min read",
    date: "July 2025",
    author: "Kofi Asante — Digital Experience Lead",
    coverImage: "/images/journal-scarcity.png",
    excerpt:
      "Heavy gimmicks slow down perception. Thoughtful inertial scrolling, fluid typographic scaling, and crisp contrast create effortless authority.",
    body: [
      "True digital craft is felt in the milliseconds between wheel scroll and pixel settle. When a page moves with smooth inertial deceleration and transitions from stark obsidian darkness to warm gallery bone without jarring flickers, users instinctively slow down and read.",
      "We treat motion not as fireworks, but as editorial choreography: lines rising cleanly out of invisible masks, images scaling smoothly inside strict frames, and interactive cursors offering subtle confirmation.",
      "Whether building on custom Next.js pipelines or refined fluid platforms, restraint is what separates an enduring digital flagship from a forgettable template.",
    ],
  },
  {
    slug: "materiality-and-tactile-packaging-engineering",
    category: "Studio Craft",
    title: "The Weight of Paper: Tactical Packaging Engineering in a Screen-First Era",
    subtitle:
      "Why unboxing rituals, tactile debossing, and cotton fiber stocks command higher brand affinity than any digital advert.",
    readTime: "5 min read",
    date: "November 2025",
    author: "Esi Quaye — Print & Material Lead",
    coverImage: "/images/journal-packaging.jpg",
    excerpt:
      "When every product claims luxury, the hand confirms what the eye doubts. How physical weight and paper texture anchor brand truth.",
    body: [
      "Digital ads disappear with a single flick of a thumb. But a custom embossed rigid box, crafted from 400gsm cotton rag with crisp bevel edges, lives on dining credenzas, vanity shelves, and studio desks for years.",
      "When designing structural packaging for our partners, our first conversations rarely focus on graphics. We start with haptic feedback: the acoustic resistance of a lid lifting against vacuum friction, the fibrous tooth of uncoated paper stocks, and the heat-stamped foil tolerances under direct daylight.",
      "In our Accra packaging workshop, every die-line is tested in physical card mockups before steel dies are forged. When a customer opens a package and pauses before touching the contents, the brand has already achieved distinction.",
    ],
  },
  {
    slug: "spatial-cinema-and-soundstage-direction",
    category: "Design Culture",
    title: "Soundstage Geometry: Directing Light, Silence and Motion in Accra",
    subtitle:
      "Inside ATELIER 27's soundstage: creating cinematic campaign worlds without artificial digital shortcuts.",
    readTime: "6 min read",
    date: "December 2025",
    author: "Abena Osei — Production Lead",
    coverImage: "/images/journal-soundstage.png",
    excerpt:
      "Commercial cinematography thrives on intentional physics—single tungsten sources, negative space, and unhurried anamorphic lenses.",
    body: [
      "In a media landscape overwhelmed by generic AI renderings and quick phone reels, the human eye instinctively craves genuine optical depth. You cannot fake the soft falloff of an anamorphic prime lens or the tangible dust motes dancing through a focused tungsten beam on an acoustic cyclorama.",
      "Inside our studio soundstage, we treat physical sets as architectural sculptures. Every backdrop is constructed to reflect light with intentional texture—matte plaster, weathered timber, or brushed brass.",
      "When motion, sound, and spatial light are aligned under a single directorial vision, the resulting films transcend standard promotional content and become enduring brand cinema.",
    ],
  },
];

export const FAQS = [
  {
    question: "How ATELIER 27 works with partners",
    answer:
      "Every engagement begins with a focused strategic dialogue—uncovering commercial goals, cultural nuances, and category whitespace before any visual exploration begins. We collaborate directly with founders, creative leaders, and executive teams from our Accra studio across all global time zones.",
  },
  {
    question: "Engagement models, timelines & investment",
    answer:
      "Comprehensive Brand Strategy & Identity sprints typically span 6 to 8 weeks; full Brand + Custom Digital Flagship engagements run 8 to 14 weeks. Project investments begin at $5,000 (GH₵ 75,000) for targeted brand or digital builds, scaling to $25,000+ for multi-surface identity, production, and web ecosystems.",
  },
  {
    question: "Frequently asked questions",
    answer:
      "Do you work with clients outside Ghana? Yes—over half our partnerships span Lagos, London, New York, Nairobi, and Paris. Do you build custom code websites as well as Squarespace/Webflow? Yes—we architect custom Next.js/GSAP flagships alongside tailored Squarespace 7.1 Fluid Engine builds depending on your team's publishing workflow.",
  },
  {
    question: "Accra Studio & Global Collaboration (UTC+0)",
    answer:
      "Operating from Accra (UTC+0) places ATELIER 27 in real-time alignment with London, Lagos, Paris, and Europe, with generous morning-to-afternoon overlap for New York and North America. Reach our new partnerships desk directly at partnerships@atelier27studio.com.",
  },
];

