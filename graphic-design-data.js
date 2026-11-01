/**
 * Graphic Design Projects Case Studies Data
 * Easily editable data source for Section 02B: Graphic Design Projects
 */
const GRAPHIC_DESIGN_PROJECTS = [
  {
    id: "terra-stride",
    title: "Terra Stride",
    subtitle: "Poster Design · Sneaker Campaign",
    badge: "Personal Concept Work",
    role: "Graphic Designer",
    description: "An earth-toned promotional footwear campaign poster balancing kinetic suspended motion with warm vintage paper grain and bold condensed typography.",
    coverImage: "public/graphic-design/terra-stride.jpg",
    thumbImage: "public/graphic-design/terra-stride-thumb.jpg",
    alt: "Terra Stride sneaker campaign poster design in warm earth tones",
    isPackage: false,
    caseStudy: {
      concept: "A retro-modern athletic footwear campaign focused on movement, tactile nostalgia, and earth-rooted neutrals. The piece bridges vintage sports editorial styling with modern minimal composition, establishing a grounded yet aspirational tone.",
      colorPalette: [
        { name: "Mocha Espresso", hex: "#3B2317" },
        { name: "Warm Caramel", hex: "#7A4B2B" },
        { name: "Oatmeal Sand", hex: "#D4BE9B" },
        { name: "Linen Cream", hex: "#F3EDE2" },
        { name: "Deep Umber", hex: "#1F130B" }
      ],
      typography: "Set with heavy ultra-condensed grotesque display type anchored at the bottom baseline for massive visual weight, complemented by wide-tracked micro-capsule athletic mantras ('Push Further · Move Faster · Never Stop') above.",
      layout: "A structured two-tone vertical split framing an elevated card window. The suspended footwear breaks past the inner frame to create depth, with the central emblem serving as an optical focal bridge down to the headline.",
      tools: "Adobe Photoshop (Photo compositing, directional motion grading, authentic paper grain overlays, custom duotone mapping, and typographic layout)."
    }
  },
  {
    id: "ember-and-stack",
    title: "Ember & Stack",
    subtitle: "Poster Design · Food Promotion",
    badge: "Personal Concept Work",
    role: "Graphic Designer",
    description: "A high-energy culinary promotional poster celebrating artisan gourmet burgers with appetizing color saturation, playful 3D badges, and dynamic callouts.",
    coverImage: "public/graphic-design/ember-and-stack.jpg",
    thumbImage: "public/graphic-design/ember-and-stack-thumb.jpg",
    alt: "Ember & Stack gourmet burger promotional poster design with rich red background",
    isPackage: false,
    caseStudy: {
      concept: "An appetizing, high-conversion quick-service culinary poster designed to evoke immediate cravings. High-contrast crimson tones pair with golden cheddar accents and floating promotional badges to emphasize flavor, freshness, and immediate action.",
      colorPalette: [
        { name: "Fiery Crimson", hex: "#D71921" },
        { name: "Burgundy Maroon", hex: "#58141C" },
        { name: "Cheddar Gold", hex: "#F5A623" },
        { name: "Garden Green", hex: "#4A7C2D" },
        { name: "Pure White", hex: "#FFFFFF" }
      ],
      typography: "Chunky, organic rounded display serif and heavyweight slab styles convey warmth, indulgence, and fun. Clear call-to-action pills use bold geometric sans for immediate price and delivery comprehension.",
      layout: "Hero-centric vertical arrangement with realistic drop shadow ground plane. Dynamic curved indicator lines guide the eye directly to premium gourmet layers, while diagonal cutaway panels create visual excitement.",
      tools: "Adobe Photoshop (Macro food photo retouching, melted cheese rendering, multi-layer masking, floating 3D badge lighting, and commercial layout design)."
    }
  },
  {
    id: "silent-sky",
    title: "Silent Sky",
    subtitle: "Poster Design · Cinematic Concept",
    badge: "Personal Concept Work",
    role: "Graphic Designer",
    description: "A suspenseful cinematic concept poster exploring cosmic dread and human curiosity through hypnotic concentric line patterns and ominous high-contrast silhouettes.",
    coverImage: "public/graphic-design/silent-sky.jpg",
    thumbImage: "public/graphic-design/silent-sky-thumb.jpg",
    alt: "Silent Sky cinematic concept poster design with dramatic lighting and hypnotic sky vortex",
    isPackage: false,
    caseStudy: {
      concept: "A psychological thriller teaser poster capturing the eerie confrontation between humanity and the inexplicable cosmos. Concentric optical soundwave rings simulate hypnotic auditory distortion drawing all eyes to the ominous clouds above.",
      colorPalette: [
        { name: "Ominous Crimson", hex: "#E52521" },
        { name: "Terracotta Red", hex: "#C05342" },
        { name: "Abyssal Charcoal", hex: "#121417" },
        { name: "Storm Mist", hex: "#4A525A" },
        { name: "Stark Fog White", hex: "#F0F2F5" }
      ],
      typography: "Monumental condensed sans-serif title rendered with custom interior optical ripple patterns, creating an illusion of vibration. Cast and production billing follows tight Hollywood theatrical poster conventions.",
      layout: "Ascending vertical eye-path starting from the protagonist's illuminated upturned face, travelling through the dark atmospheric vortex, and culminating in the suspended scarlet silhouette against storm clouds.",
      tools: "Adobe Photoshop (Atmospheric cloud compositing, low-key dramatic lighting, frequency separation skin retouching, custom vector ripple texture mapping, and theatrical billing layout)."
    }
  },
  {
    id: "verdant-ritual",
    title: "Origin 108",
    subtitle: "Packaging · Wellness Brand System",
    badge: "Packaging & Brand System",
    role: "Graphic Designer",
    description: "A holistic botanical wellness identity spanning a precision pharmaceutical supplement label and an Amazon A+ conversion-focused listing gallery.",
    coverImage: "public/graphic-design/verdant-ritual-label-red.jpg",
    thumbImage: "public/graphic-design/verdant-ritual-label-red-thumb.jpg",
    alt: "Verdant Ritual botanical supplement packaging label and e-commerce gallery",
    isPackage: true,
    gallery: [
      {
        title: "Key Ingredients",
        image: "public/graphic-design/verdant-ritual-ingredients.jpg",
        thumb: "public/graphic-design/verdant-ritual-ingredients-thumb.jpg",
        caption: "Botanical flat-lay highlighting pure organic raw herbs, targeted biological actions, and clean bioavailability."
      },
      {
        title: "How It Works",
        image: "public/graphic-design/verdant-ritual-how-it-works.jpg",
        thumb: "public/graphic-design/verdant-ritual-how-it-works-thumb.jpg",
        caption: "Step-by-step cellular absorption breakdown and daily biological support timeline."
      },
      {
        title: "Benefits",
        image: "public/graphic-design/verdant-ritual-benefits.jpg",
        thumb: "public/graphic-design/verdant-ritual-benefits-thumb.jpg",
        caption: "Core health pillars: daily vitality, cellular renewal, and clean energy optimization."
      },
      {
        title: "Certifications",
        image: "public/graphic-design/verdant-ritual-certifications.jpg",
        thumb: "public/graphic-design/verdant-ritual-certifications-thumb.jpg",
        caption: "Official quality promise featuring PETA Cruelty-Free, 100% Vegan, ISO 22000, and HACCP standards."
      }
    ],
    caseStudy: {
      concept: "A premium dietary wellness system formulated to convey medical-grade trust through an organic apothecary aesthetic. Designed for seamless continuity between the physical unboxing experience and mobile-first e-commerce shopping touchpoints.",
      colorPalette: [
        { name: "Deep Oxblood", hex: "#6E1A24" },
        { name: "Botanical Sage", hex: "#4A6741" },
        { name: "Golden Turmeric", hex: "#E88F1F" },
        { name: "Linen Cream", hex: "#FBF6EF" },
        { name: "Slate Charcoal", hex: "#2D312E" }
      ],
      typography: "Refined high-contrast serif for the brand mark evoking heritage apothecaries, paired with high-legibility geometric sans for regulatory Supplement Facts, usage directions, and Amazon infographic callouts.",
      layout: "Packaging dieline strictly engineered around FDA supplement labeling standards with clear front display hierarchy. The Amazon listing suite utilizes modular 1:1 responsive cards optimized for rapid mobile scrolling.",
      tools: "Adobe Photoshop & Illustrator (Dieline vector engineering, botanical macro retouching, Amazon listing infographic iconography, badge certification vectors, and packaging visualization)."
    }
  }
];
