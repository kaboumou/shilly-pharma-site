export const products = [
    // === PHASE 1: WOUND CARE ===
    {
        id: "exalt-t7",
        name: "Exsalt T7",
        category: "phase1",
        description: "Antimicrobial protection for infected wounds throughout the healing process.",
        image: "/images/products/exsalt-t7-main.png",
        secondaryImages: [
            "/images/products/exsalt-t7-secondary.png"
        ],
        highlights: [
            "Silver oxysalt technology",
            "Broad spectrum antimicrobial , yeast and fungi",
            "smooth, breathable, nonadherent"
        ],
        imageAlt: "Exsalt T7 Box",
        imageSource: "provided",
        sizes: ["15 cm x 15 cm", "20 cm x 40 cm"],
        isPlaceholder: false
    },
    {
        id: "purilon-gel",
        name: "Purilon Gel",
        category: "phase1",
        description: "Gentle hydrogel with natural ingredients for effective debridement of necrotic tissue and moist wound healing.",
        image: "/images/products/wound-care/purilon-main.png",
        secondaryImages: [
            "/images/products/wound-care/purilon-secondary.png"
        ],
        imageAlt: "Purilon Gel Tube",
        imageSource: "coloplast",
        sizes: ["8g Tube", "15g Tube"],
        highlights: [
            "Effective and gentle debridement of necrotic tissue",
            "Unique hydrating and absorbing properties",
            "Specialized applicator for controlled one-handed use",
            "Viscous texture prevents leakage and maceration"
        ],
        isPlaceholder: false
    },
    {
        id: "manuka-honey",
        name: "Manuka Honey",
        category: "phase1",
        description: "Promotes healing through osmotic action.",
        image: "/images/products/manuka-honey-new.jpg",
        imageAlt: "Manuka Honey Medical Grade",
        imageSource: "provided",
        sizes: ["20 gram tube", "10 x 10 Tulle", "10 x 10 Alginate"],
        isPlaceholder: false
    },
    {
        id: "triad-hydrophilic",
        name: "Triad Hydrophilic Wound Dressing",
        category: "phase1",
        description: "A sterile, zinc oxide-based coating for difficult-to-dress wounds. Adheres to wet or dry skin.",
        image: "/images/products/triad/triad-banner.png",
        secondaryImages: [
            "/images/products/triad/triad-2.5oz.jpg",
            "/images/products/triad/triad-6oz.jpg",
            "/images/products/triad/triad-apply-anywhere.png",
            "/images/products/triad/triad-wet-skin.png"
        ],
        highlights: [
            "Ideal for irregular surfaces (gluteal cleft, coccyx, face, etc.)",
            "Adheres to wet skin and stays in place",
            "Facilitates autolytic debridement",
            "Simplifies wound care, often eliminating secondary dressings"
        ],
        imageAlt: "Triad Hydrophilic Wound Dressing",
        imageSource: "coloplast",
        sizes: ["2.5 oz.", "6 oz."],
        isPlaceholder: false
    },
    {
        id: "bactigras-tulle",
        name: "Bactigras Antiseptic Tulle Gras",
        category: "phase1",
        description: "A soothing, antiseptic tulle gras dressing containing chlorhexidine acetate for infection prevention.",
        image: "/images/products/bactigras/bactigras-packaging.jpg",
        secondaryImages: [
            "/images/products/bactigras/bactigras-dressing.jpg"
        ],
        highlights: [
            "Broad-spectrum antiseptic (0.5% Chlorhexidine Acetate)",
            "Low-adherent and soothing for minor burns and lacerations",
            "Open-weave design facilitates wound drainage",
            "Sterile and individually wrapped",
            "Effective against MRSA"
        ],
        imageAlt: "Bactigras Packaging",
        imageSource: "smith-nephew",
        sizes: ["10cm x 10cm", "15cm x 20cm"],
        isPlaceholder: false
    },
    {
        id: "allevyn-life",
        name: "Allevyn Life Foam Dressing",
        category: "phase1",
        description: "Absorbent hydrocellular foam dressing with silicone adhesive.",
        image: "/images/products/allevyn-life.jpg",
        imageAlt: "Allevyn Life Foam Dressing",
        imageSource: "smith-nephew",
        sizes: ["15.4cm x 15.4cm", "Sacrum", "Heel", "21cm x 21cm"],
        highlights: [
            "Five-layer, bordered design with highly absorbent core",
            "Absorbs and locks away high levels of exudate (including viscous exudate)",
            "Unique masking technology to reduce visual impact of strikethrough",
            "Gentle silicone contact layer",
            "Shower proof top layer",
            "EXUMASK change indicator"
        ],
        secondaryImages: [
            "/images/products/allevyn-life-indications.jpg",
            {
                type: 'video',
                src: 'https://smith-nephew.stylelabs.cloud/api/public/content/2499c4c953f74bc6b51bd92a0e87bf4c?v=0df1f03e',
                thumbnail: '/images/products/allevyn-life.jpg'
            }
        ],
        isPlaceholder: false
    },

    // === PHASE 2: WELLNESS ===
    {
        id: "black-cohosh",
        name: "Black Cohosh",
        category: "phase2",
        description: "Supports women's health during life changes.",
        image: "/images/products/wellness/black-cohosh-bottle.jpg",
        secondaryImages: [
            "/images/products/wellness/black-cohosh-facts.jpg"
        ],
        imageAlt: "Black Cohosh Supplements",
        imageSource: "provided",
        sizes: ["60 Capsules / 540mg"],
        highlights: [],
        isPlaceholder: false
    },
    {
        id: "turmeric-ginger",
        name: "Turmeric Ginger",
        category: "phase2",
        description: "Natural anti-inflammatory and digestive support.",
        image: "/images/products/wellness/turmeric-ginger-bottle.jpg",
        secondaryImages: [
            "/images/products/wellness/turmeric-ginger-facts.jpg"
        ],
        imageAlt: "Turmeric Ginger Capsules",
        imageSource: "provided",
        sizes: ["120 Capsules"],
        highlights: [],
        isPlaceholder: false
    },
    {
        id: "white-mulberry",
        name: "White Mulberry",
        category: "phase2",
        description: "Supports healthy blood sugar levels.",
        image: "/images/products/wellness/white-mulberry-bottle.jpg",
        secondaryImages: [
            "/images/products/wellness/white-mulberry-facts.jpg"
        ],
        highlights: [
            "Improve glycemic control",
            "Improve glucose tolerance",
            "100% Mulberry leaves",
            "No fillers"
        ],
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
        image: "/images/products/wellness/beetroot-bottle.jpg",
        secondaryImages: [
            "/images/products/wellness/beetroot-facts.jpg"
        ],
        imageAlt: "Beetroot Supplement Packaging",
        imageSource: "provided",
        sizes: ["120 Capsules / 8000mg"],
        highlights: [],
        isPlaceholder: false
    },
    {
        id: "cilantro",
        name: "Cilantro",
        category: "phase2",
        description: "Heavy metal detoxification support.",
        image: "/images/products/wellness/cilantro-bottle.jpg",
        secondaryImages: [
            "/images/products/wellness/cilantro-facts.jpg"
        ],
        imageAlt: "Cilantro Supplement",
        imageSource: "provided",
        sizes: ["60 Capsules / 800mg"],
        highlights: [],
        isPlaceholder: false
    },
    {
        id: "menoforce",
        name: "Menoforce",
        category: "phase2",
        description: "Fresh sage tablet for relief of menopausal symptoms like hot flashes and night sweats.",
        image: "/images/products/wellness/menoforce-main.jpg",
        imageAlt: "Menoforce Packaging",
        imageSource: "avogel",
        sizes: ["30 Tablets"],
        highlights: [
            "Relieves hot flushes and night sweats",
            "100% organic fresh sage",
            "One-a-day convenience",
            "Clinically proven effectiveness",
            "Gluten and lactose free"
        ],
        isPlaceholder: false
    },
    {
        id: "stute-jam",
        name: "Stute No Sugar Added Strawberry Jam",
        category: "phase2",
        description: "A healthier jam alternative with 90% less sugar and 30% fewer calories. Perfect for diabetics and health-conscious individuals.",
        image: "/images/products/wellness/stute-jam-main.png",
        secondaryImages: [
            "/images/products/wellness/stute-jam-secondary.jpg"
        ],
        imageAlt: "Stute No Sugar Added Strawberry Jam",
        imageSource: "stute-foods",
        sizes: ["430g"],
        highlights: [
            "90% less sugar than traditional jams",
            "30% fewer calories for weight management",
            "Diabetic friendly and Sugar Wise certified",
            "Heritage recipe - market leader since 1969",
            "Sweetened with Sorbitol, contains 45g fruit per 100g"
        ],
        ingredients: "Sweetener (Sorbitol), Strawberries, Acidity Regulator: Citric Acid, Gelling Agent: Pectin. Prepared with 45g of fruit per 100g.",
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
        highlights: [],
        isPlaceholder: false
    },
    {
        id: "menosupport",
        name: "MenoSupport Complex 40+",
        category: "phase2",
        description: "Targeted support found in 40+ formulation.",
        image: "/images/products/wellness/menosupport-box.jpg",
        secondaryImages: [
            "/images/products/wellness/menosupport-facts.jpg"
        ],
        imageAlt: "MenoSupport Complex 40+ Packaging",
        imageSource: "provided",
        sizes: ["60 Tablets"],
        highlights: [
            "Relieves symptoms of perimenopause including hot flush, poor sleep, brain fog, anxiety and irritability",
            "Plant based ingredients"
        ],
        isPlaceholder: false
    },

    // === PHASE 3: OSTOMY CARE (SenSura 2-Piece Bags) ===
    {
        id: "sensura-mio-closed",
        name: "SenSura Mio Click Closed (Colostomy)",
        category: "phase3",
        description: "Secure 2-piece closed bag with improved click coupling. Designed for discretion and correct fit.",
        image: "/images/products/ostomy/sensura-mio-closed.png",
        imageAlt: "SenSura Mio Click Closed Pouch",
        imageSource: "coloplast",
        sizes: ["40mm", "50mm", "60mm", "70mm"],
        highlights: [
            "Audible 'click' coupling for reassurance",
            "BodyFit Technology for secure adhesion",
            "Neutral-grey textile for discretion",
            "Elastic adhesive moves with your body"
        ],
        isPlaceholder: false
    },
    {
        id: "sensura-mio-drainable",
        name: "SenSura Mio Click Drainable (Ileostomy)",
        category: "phase3",
        description: "Drainable 2-piece pouch with secure click coupling and full-circle filter.",
        image: "/images/products/ostomy/sensura-mio-drainable.png",
        imageAlt: "SenSura Mio Click Drainable Pouch",
        imageSource: "coloplast",
        sizes: ["40mm", "50mm", "60mm", "70mm"],
        highlights: [
            "Secure mechanical coupling with lock ring",
            "Full-circle filter reduces ballooning",
            "Gentle and easy application",
            "Discreet and comfortable textile"
        ],
        isPlaceholder: false
    },
    {
        id: "sensura-mio-urostomy",
        name: "SenSura Mio Click Urostomy",
        category: "phase3",
        description: "Specialized urostomy pouch with multi-chambers for quiet and discreet use.",
        image: "/images/products/ostomy/sensura-mio-urostomy.png",
        imageAlt: "SenSura Mio Click Urostomy Pouch",
        imageSource: "coloplast",
        sizes: ["40mm", "50mm"],
        highlights: [
            "Anti-reflux valves to prevent wash-back",
            "Soft outlet designed for Urostomy",
            "Mechanical coupling for extra security",
            "Mio Click baseplate compatibility"
        ],
        isPlaceholder: false
    },

    // === PHASE 4: OSTOMY ACCESSORIES (Baseplates & Barriers) ===
    {
        id: "sensura-mio-convex-soft",
        name: "SenSura Mio Convex Soft Baseplate",
        category: "phase4",
        description: "Secure, flexible convex ostomy baseplate designed for gentle support immediately after surgery and beyond. Features BodyFit Technology and integrated flexlines.",
        image: "/images/products/ostomy-accessories/convex-soft.png",
        imageAlt: "SenSura Mio Convex Soft Baseplate",
        imageSource: "coloplast",
        sizes: ["35mm", "40mm", "50mm", "70mm"],
        highlights: [
            "BodyFit Technology adapts to body contours",
            "Integrated flexlines for high flexibility",
            "Soft convexity for gentle support",
            "Compatible with Flex coupling system"
        ],
        isPlaceholder: false
    },
    {
        id: "sensura-mio-concave",
        name: "SenSura Mio Concave 2-Piece Baseplate",
        category: "phase4",
        description: "First product specially designed to fit bulges, hernias, and curves. Features a curved star-shaped baseplate that hugs the body without creasing.",
        image: "/images/products/ostomy-accessories/concave.png",
        imageAlt: "SenSura Mio Concave Baseplate",
        imageSource: "coloplast",
        sizes: ["40mm", "50mm", "70mm"],
        highlights: [
            "Curved star-shaped baseplate for bulges",
            "Stabilizing ring to support the stoma",
            "Elastic adhesive follows body movements",
            "Fit zones prevent creasing and folding"
        ],
        isPlaceholder: false
    },
    {
        id: "sensura-mio-convex-deep",
        name: "SenSura Mio Convex Deep Click Barrier",
        category: "phase4",
        description: "Features a curved shape that fits securely to uneven skin areas and deep-seated stomas. Adaptive convex with integrated flexlines for stability.",
        image: "/images/products/ostomy-accessories/convex-deep.png",
        imageAlt: "SenSura Mio Convex Deep Barrier",
        imageSource: "coloplast",
        sizes: ["40mm", "50mm", "60mm", "70mm"],
        highlights: [
            "Adaptive convex with integrated flexlines",
            "Elastic adhesive for secure fit",
            "New Click coupling for reassurance",
            "Ideal for deep-seated or retracted stomas"
        ],
        isPlaceholder: false
    },
    {
        id: "sensura-mio-baseplate-flat",
        name: "SenSura Mio Click Baseplate (Flat)",
        category: "phase4",
        description: "Flat baseplate with elastic adhesive, separate from the pouch. Allows pouch changes without changing the baseplate for extended wear.",
        image: "/images/products/ostomy-accessories/baseplate-flat.png",
        imageAlt: "SenSura Mio Flat Baseplate",
        imageSource: "coloplast",
        sizes: ["40mm", "50mm", "60mm", "70mm"],
        highlights: [
            "Elastic adhesive for individual body shapes",
            "Neutral grey textile for discretion",
            "Audible 'click' when securely locked",
            "Extended wear without frequent changes"
        ],
        isPlaceholder: false
    }
];
