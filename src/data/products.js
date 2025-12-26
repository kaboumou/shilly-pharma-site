export const products = [
    // === PHASE 1: WOUND CARE ===
    {
        id: "exalt-t7",
        name: "Exalt T7",
        category: "phase1",
        description: "Antimicrobial protection for infected wounds throughout the healing process.",
        image: "/images/products/silver-alginate-real.png",
        imageAlt: "Exalt T7 Silver Alginate Dressing",
        imageSource: "provided",
        sizes: ["15 cm x 15 cm", "20 cm x 40 cm"],
        isPlaceholder: false
    },
    {
        id: "purilon-gel",
        name: "Purilon Gel",
        category: "phase1",
        description: "Gentle, sterile hydrogel for effective debridement.",
        image: "/images/products/purilon.jpeg",
        imageAlt: "Purilon Gel Tube",
        imageSource: "provided",
        sizes: ["8g Tube"],
        isPlaceholder: false
    },
    {
        id: "manuka-honey",
        name: "Manuka Honey",
        category: "phase1",
        description: "Promotes healing through osmotic action.",
        image: "/images/products/med-honey-1.jpeg",
        imageAlt: "Manuka Honey Medical Grade",
        imageSource: "provided",
        sizes: ["20 gram tube", "10 x 10 Tulle", "10 x 10 Alginate"],
        isPlaceholder: false
    },
    {
        id: "advazorb-border",
        name: "Advazorb Border",
        category: "phase1",
        description: "Hydrophilic foam dressing with soft silicone contact layer.",
        image: "/images/products/advazorb-border-1.jpeg",
        imageAlt: "Advazorb Border Dressing",
        imageSource: "provided",
        sizes: ["10x10cm", "10x20cm", "15x15cm"],
        isPlaceholder: false
    },
    {
        id: "eclypse-border",
        name: "Eclypse Border",
        category: "phase1",
        description: "Super absorbent dressing with CrystaLock technology.",
        image: "/images/products/eclypse-border.jpeg",
        imageAlt: "Eclypse Border Dressing",
        imageSource: "provided",
        sizes: ["15x15cm", "10x20cm"],
        isPlaceholder: false
    },

    // === PHASE 2: WELLNESS ===
    {
        id: "black-cohosh",
        name: "Black Cohosh",
        category: "phase2",
        description: "Supports women's health during life changes.",
        image: "/images/products/wellness/black-cohosh-1.jpg",
        imageAlt: "Black Cohosh Supplements",
        imageSource: "provided",
        sizes: ["60 Capsules / 540mg"],
        isPlaceholder: false
    },
    {
        id: "turmeric-ginger",
        name: "Turmeric Ginger",
        category: "phase2",
        description: "Natural anti-inflammatory and digestive support.",
        image: "/images/products/wellness/turmeric-ginger-1.jpg",
        imageAlt: "Turmeric Ginger Capsules",
        imageSource: "provided",
        sizes: ["120 Capsules"],
        isPlaceholder: false
    },
    {
        id: "white-mulberry",
        name: "White Mulberry",
        category: "phase2",
        description: "Supports healthy blood sugar levels.",
        image: "/images/products/wellness/white-mulberry.jpg",
        imageAlt: "White Mulberry Supplement Packaging",
        imageSource: "provided",
        sizes: [],
        isPlaceholder: false
    },
    {
        id: "beetroot",
        name: "Beetroot",
        category: "phase2",
        description: "Nitric oxide boost for circulation and stamina.",
        image: "/images/products/wellness/beetroot.jpg",
        imageAlt: "Beetroot Supplement Packaging",
        imageSource: "provided",
        sizes: [],
        isPlaceholder: false
    },
    {
        id: "cilantro",
        name: "Cilantro",
        category: "phase2",
        description: "Heavy metal detoxification support.",
        image: "/images/products/wellness/cilantro-1.jpg",
        imageAlt: "Cilantro Supplement",
        imageSource: "provided",
        sizes: [],
        isPlaceholder: false
    },
    {
        id: "menoforce",
        name: "Menoforce",
        category: "phase2",
        description: "Specialized nutritional support.",
        image: "/images/products/wellness/menoforce.jpg",
        imageAlt: "Menoforce Packaging",
        imageSource: "provided",
        sizes: [],
        isPlaceholder: false
    },
    {
        id: "relax",
        name: "Relax",
        category: "phase2",
        description: "Calming formula for stress and sleep.",
        image: "/images/products/wellness/relax.jpg",
        imageAlt: "Relax Supplement Packaging",
        imageSource: "provided",
        sizes: [],
        isPlaceholder: false
    },
    {
        id: "menosupport",
        name: "MenoSupport Complex 40+",
        category: "phase2",
        description: "Targeted support found in 40+ formulation.",
        image: "/images/products/wellness/menosupport.png",
        imageAlt: "MenoSupport Complex 40+ Packaging",
        imageSource: "provided",
        sizes: [],
        isPlaceholder: false
    },

    // === PHASE 3: OSTOMY (Services/Categories mostly, but making them products for grid consistency) ===
    {
        id: "colostomy-care",
        name: "Colostomy Care",
        category: "phase3",
        description: "High quality bags and accessories.",
        image: "/images/placeholder.svg", // Using placeholder for service-like items if no specific image
        imageAlt: "Colostomy Care Icon",
        imageSource: "placeholder", // Flagging for integrity check
        sizes: [],
        isPlaceholder: true,
        isService: true // Custom flag for UI to maybe show 'View Products' instead of 'Request Quote' if needed
    },
    {
        id: "ileostomy-care",
        name: "Ileostomy Care",
        category: "phase3",
        description: "Reliable and comfortable solutions.",
        image: "/images/placeholder.svg",
        imageAlt: "Ileostomy Care Icon",
        imageSource: "placeholder",
        sizes: [],
        isPlaceholder: true,
        isService: true
    },
    {
        id: "urostomy-care",
        name: "Urostomy Care",
        category: "phase3",
        description: "Secure management products.",
        image: "/images/placeholder.svg",
        imageAlt: "Urostomy Care Icon",
        imageSource: "placeholder",
        sizes: [],
        isPlaceholder: true,
        isService: true
    }
];
