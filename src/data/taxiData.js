export const PHONE_NUMBER = "+91 80721 22591";
export const PHONE_NUMBER_RAW = "918072122591";
export const EMAIL_ADDRESS = "prasannataximadurai@gmail.com";
export const ADDRESS = "295/2, Santhosh Nagar, Nethaji Street, Vallananthapuram, Avaniapuram, Madurai, Tamil Nadu - 625012";
export const ADDRESS_TA = "295/2, சந்தோஷ் நகர், நேதாஜி தெரு, வல்லானந்தபுரம், அவனியாபுரம், மதுரை, தமிழ்நாடு - 625012";

export const LOCATIONS = [
  "Madurai",
  "Chennai",
  "Bangalore",
  "Coimbatore",
  "Rameswaram",
  "Kanyakumari",
  "Pondicherry",
  "Salem",
  "Trichy",
  "Trivandrum",
  "Kodaikanal",
  "Munnar",
  "Palani",
  "Thiruchendur",
  "Thekkady",
  "Ooty"
];

// Exact Popular Outstation Routes & Fares
export const POPULAR_ROUTES = [
  {
    id: "madurai-chennai",
    from: "Madurai",
    to: "Chennai",
    distance: "493 km",
    duration: "7 hr 30 min",
    price: "₹6,782",
    popular: true,
    image: "/assets/prasanna/Chennai-1kd7Iv3A.jpg",
    sedanPrice: "₹6,782",
    suvPrice: "₹8,874",
    innovaPrice: "₹10,353",
    highlights: ["Marina Beach", "Kapaleeshwarar Temple", "Chennai Airport Drop"]
  },
  {
    id: "madurai-bangalore",
    from: "Madurai",
    to: "Bangalore",
    distance: "435 km",
    duration: "8 hr",
    price: "₹6,307",
    popular: false,
    image: "/assets/prasanna/Bangalor-BrJY6plI.jpg",
    sedanPrice: "₹6,307",
    suvPrice: "₹7,830",
    innovaPrice: "₹9,135",
    highlights: ["Electronic City Drop", "Majestic Junction", "Bangalore Airport (BLR)"]
  },
  {
    id: "madurai-salem",
    from: "Madurai",
    to: "Salem",
    distance: "229 km",
    duration: "4 hr 30 min",
    price: "₹3,714",
    popular: false,
    image: "/assets/prasanna/salem-Bp65Qpy5.jpg",
    sedanPrice: "₹3,714",
    suvPrice: "₹4,122",
    innovaPrice: "₹4,809",
    highlights: ["Yercaud Foothills", "Salem Junction", "Direct Highway Drop"]
  },
  {
    id: "madurai-coimbatore",
    from: "Madurai",
    to: "Coimbatore",
    distance: "228 km",
    duration: "5 hr",
    price: "₹3,349",
    popular: true,
    image: "/assets/prasanna/coimbatore-CpqKmhvw.jpeg",
    sedanPrice: "₹3,349",
    suvPrice: "₹4,104",
    innovaPrice: "₹4,788",
    highlights: ["Isha Yoga Center", "Marudhamalai Murugan", "Coimbatore Airport"]
  },
  {
    id: "madurai-trichy",
    from: "Madurai",
    to: "Trichy",
    distance: "135 km",
    duration: "2 hr 15 min",
    price: "₹2,220",
    popular: false,
    image: "/assets/prasanna/trichy-BU8SulDe.jpg",
    sedanPrice: "₹2,220",
    suvPrice: "₹2,700",
    innovaPrice: "₹3,150",
    highlights: ["Rockfort Temple", "Srirangam Temple", "Trichy Airport (TRZ)"]
  },
  {
    id: "madurai-pondicherry",
    from: "Madurai",
    to: "Pondicherry",
    distance: "330 km",
    duration: "6 hr 30 min",
    price: "₹4,969",
    popular: false,
    image: "/assets/prasanna/pondicherry-D2XN-h2F.jpg",
    sedanPrice: "₹4,969",
    suvPrice: "₹5,940",
    innovaPrice: "₹6,930",
    highlights: ["Promenade Beach", "Auroville Dome", "French Colony"]
  },
  {
    id: "madurai-rameswaram",
    from: "Madurai",
    to: "Rameswaram",
    distance: "173 km",
    duration: "3 hr 30 min",
    price: "₹2,816",
    popular: true,
    image: "/assets/prasanna/rameswaram-D0F7-Yji.jpg",
    sedanPrice: "₹2,816",
    suvPrice: "₹3,460",
    innovaPrice: "₹4,037",
    highlights: ["Ramanathaswamy Temple", "Pamban Sea Bridge", "Dhanushkodi Point"]
  },
  {
    id: "madurai-kanyakumari",
    from: "Madurai",
    to: "Kanyakumari",
    distance: "245 km",
    duration: "5 hr",
    price: "₹3,817",
    popular: true,
    image: "/assets/prasanna/Kanyakumari-CLnULnXd.jpg",
    sedanPrice: "₹3,817",
    suvPrice: "₹4,410",
    innovaPrice: "₹5,145",
    highlights: ["Vivekananda Rock", "Thiruvalluvar Statue", "Triveni Sangam Sunset"]
  },
  {
    id: "madurai-trivandrum",
    from: "Madurai",
    to: "Trivandrum",
    distance: "305 km",
    duration: "6 hr",
    price: "₹4,851",
    popular: false,
    image: "/assets/prasanna/tirunelveli-CsAhgv4y.jpg",
    sedanPrice: "₹4,851",
    suvPrice: "₹5,490",
    innovaPrice: "₹6,405",
    highlights: ["Padmanabhaswamy Temple", "Kovalam Beach", "Trivandrum Airport (TRV)"]
  }
];

// Exact Vehicles & Tariffs with Standardized High-Definition Uniform Fleet Cutouts
export const VEHICLES = [
  {
    id: "dzire",
    name: "Swift Dzire AC",
    category: "Sedan",
    seats: "Up to 4 passengers",
    seatsCount: "4 Seats",
    luggage: "2 Large Bags",
    bagsCount: "2 Bags",
    ac: "Air conditioning",
    price: "₹13/km",
    carPhoto: "/assets/fleet/dzire.png",
    recommended: false,
    outstation: {
      rate: "₹13/km (Round Trip)",
      oneWay: "₹14/km (One Way)",
      minKm: "250 km / Day",
      driverBatta: "₹300 / Day",
      notes: "Tollgate, parking, permit charges borne by customer"
    },
    dayRental: {
      perDay: "₹1,600/day",
      runningKm: "₹11/km",
      minKm: "250 km",
      kmCharges: "₹13/km",
      terms: "Tollgate, parking, driver allowance, hills, state permit extra"
    },
    features: ["Up to 4 passengers", "Air conditioning", "Sedan comfort", "Clean & sanitized"]
  },
  {
    id: "etios",
    name: "Toyota Etios AC",
    category: "Sedan",
    seats: "Up to 4 passengers",
    seatsCount: "4 Seats",
    luggage: "Extra Large Boot",
    bagsCount: "3 Bags",
    ac: "Air conditioning",
    price: "₹13/km",
    carPhoto: "/assets/fleet/etios.png",
    recommended: false,
    outstation: {
      rate: "₹13/km (Round Trip)",
      oneWay: "₹14/km (One Way)",
      minKm: "250 km / Day",
      driverBatta: "₹300 / Day",
      notes: "Tollgate, parking, permit charges borne by customer"
    },
    dayRental: {
      perDay: "₹1,600/day",
      runningKm: "₹11/km",
      minKm: "250 km",
      kmCharges: "₹13/km",
      terms: "Tollgate, parking, driver allowance, hills, state permit extra"
    },
    features: ["Up to 4 passengers", "Spacious legroom", "Huge luggage space", "Smooth highway drive"]
  },
  {
    id: "suv",
    name: "Maruti Ertiga AC",
    category: "Family SUV",
    seats: "Up to 6-7 passengers",
    seatsCount: "6-7 Seats",
    luggage: "3 Bags",
    bagsCount: "3 Bags",
    ac: "Dual AC",
    price: "₹19/km",
    carPhoto: "/assets/fleet/ertiga.png",
    recommended: false,
    outstation: {
      rate: "₹19/km (Round Trip)",
      oneWay: "₹18/km (One Way)",
      minKm: "300 km / Day",
      driverBatta: "₹400 / Day",
      notes: "Tollgate, parking, permit charges borne by customer"
    },
    dayRental: {
      perDay: "₹2,200/day",
      runningKm: "₹12/km",
      minKm: "300 km",
      kmCharges: "₹17/km"
    },
    features: ["Up to 6-7 passengers", "Dual air conditioning", "Foldable 3rd row", "Family trip favorite"]
  },
  {
    id: "innova",
    name: "Toyota Innova AC",
    category: "Luxury MPV",
    seats: "7 Passengers",
    seatsCount: "7 Seats",
    luggage: "4 Bags",
    bagsCount: "4 Bags",
    ac: "Climate AC",
    price: "₹17/km",
    carPhoto: "/assets/fleet/innova.png",
    recommended: false,
    outstation: {
      rate: "₹17/km (Round Trip)",
      oneWay: "₹19/km (One Way)",
      minKm: "300 km / Day",
      driverBatta: "₹500 / Day",
      notes: "Tollgate, parking, permit charges borne by customer"
    },
    dayRental: {
      perDay: "₹2,200/day",
      runningKm: "₹12/km",
      minKm: "300 km",
      kmCharges: "₹17/km"
    },
    features: ["Captain seats", "Long journey comfort", "High highway stability", "Ample boot space"]
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "VIP Luxury",
    seats: "7 Passengers",
    seatsCount: "7 Seats",
    luggage: "Large Luggage Room",
    bagsCount: "4 Bags",
    ac: "High power dual AC",
    price: "₹20/km",
    carPhoto: "/assets/fleet/crysta.png",
    recommended: true,
    outstation: {
      rate: "₹20/km (Round Trip)",
      oneWay: "₹22/km (One Way)",
      minKm: "300 km / Day",
      driverBatta: "₹500 / Day",
      notes: "Tollgate, parking, permit charges borne by customer"
    },
    dayRental: {
      perDay: "₹2,600/day",
      runningKm: "₹16/km",
      minKm: "300 km",
      kmCharges: "₹20/km",
      terms: "Tollgate, parking, driver allowance, hills, state permit extra"
    },
    features: ["VIP Reclining seats", "Premium interiors", "Ultra silent cabin", "Long distance king"]
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller AC",
    category: "Group Minibus",
    seats: "12 - 18 Passengers",
    seatsCount: "12-18 Seats",
    luggage: "Heavy duty top carrier",
    bagsCount: "10+ Bags",
    ac: "Pushback AC",
    price: "₹22/km",
    carPhoto: "/assets/fleet/tempo.png",
    recommended: false,
    outstation: {
      rate: "₹22/km (Round Trip)",
      oneWay: "₹24/km (One Way)",
      minKm: "350 km / Day",
      driverBatta: "₹600 / Day",
      notes: "Tollgate, parking, permit charges borne by customer"
    },
    dayRental: {
      perDay: "₹2,700/day (14s) / ₹2,900/day (18s)",
      runningKm: "₹17/km (14s) / ₹18/km (18s)",
      minKm: "350 km",
      kmCharges: "₹22/km",
      terms: "Tollgate, parking, driver allowance, hills, state permit extra"
    },
    features: ["Pushback luxury seats", "Group pilgrimage & marriage", "Ample luggage space", "Audio/LED setup"]
  }
];

// Multi-Day Outstation Tour Packages (4-Day, 5-Day & Holiday Tours)
export const OUTSTATION_PACKAGES = [
  {
    id: "sedan",
    name: "Sedan AC (Swift Dzire / Etios)",
    capacity: "4+1 Capacity",
    seatsCount: "4+1 Seats",
    perDay: "₹1,600",
    perDayRent: 1600,
    runningKm: "₹11/km",
    runningKmRate: 11,
    image: "/assets/fleet/dzire.png",
    category: "Sedan AC",
    badge: "Budget Friendly",
    idealFor: "Ideal for 4-day / 5-day small family tours & temple visits",
    terms: "Tollgate, parking, driver allowance, hills & state permit extra"
  },
  {
    id: "innova",
    name: "Toyota Innova AC",
    capacity: "7+1 Capacity",
    seatsCount: "7+1 Seats",
    perDay: "₹2,200",
    perDayRent: 2200,
    runningKm: "₹12/km",
    runningKmRate: 12,
    image: "/assets/fleet/innova.png",
    category: "Family SUV AC",
    badge: "Most Popular",
    idealFor: "Family pilgrimage & comfortable outstation holiday circuits",
    terms: "Tollgate, parking, driver allowance, hills & state permit extra"
  },
  {
    id: "crysta",
    name: "Innova Crysta AC",
    capacity: "7+1 Capacity",
    seatsCount: "7+1 Seats",
    perDay: "₹2,600",
    perDayRent: 2600,
    runningKm: "₹16/km",
    runningKmRate: 16,
    image: "/assets/fleet/crysta.png",
    category: "VIP Luxury",
    badge: "Premium Comfort",
    idealFor: "VIP luxury outstation travel with plush pushback seats",
    terms: "Tollgate, parking, driver allowance, hills & state permit extra"
  },
  {
    id: "tempo-14",
    name: "14 Seater Tempo Traveller AC",
    capacity: "14 Seater Pushback",
    seatsCount: "14 Seats",
    perDay: "₹2,700",
    perDayRent: 2700,
    runningKm: "₹17/km",
    runningKmRate: 17,
    image: "/assets/fleet/tempo.png",
    category: "Group Minibus",
    badge: "Group Tour Special",
    idealFor: "Perfect for 4-5 days group temple & hill station tours",
    terms: "Tollgate, parking, driver allowance, hills & state permit extra"
  },
  {
    id: "tempo-18",
    name: "18 Seater Tempo Traveller AC",
    capacity: "18 Seater Pushback",
    seatsCount: "18 Seats",
    perDay: "₹2,900",
    perDayRent: 2900,
    runningKm: "₹18/km",
    runningKmRate: 18,
    image: "/assets/fleet/tempo.png",
    category: "Large Group Luxury",
    badge: "Maximum Capacity",
    idealFor: "Large family celebrations, spiritual circuits & group holidays",
    terms: "Tollgate, parking, driver allowance, hills & state permit extra"
  }
];

// Airport & Local City Packages
export const CITY_AIRPORT_PACKAGES = [
  {
    id: "sedan_4",
    name: "Sedan Airport / Local (20 Km)",
    carType: "Swift Dzire / Etios AC",
    hours: 4,
    allowedKm: 20,
    baseFare: 800,
    extraKm: "₹15/km",
    extraHour: "₹300/hr",
    features: ["Pickup from Madurai Airport (IXM) or City", "Up to 4 passengers", "AC enabled", "Doorstep drop"]
  },
  {
    id: "suv_4",
    name: "SUV Airport / Local (20 Km)",
    carType: "Ertiga / Innova AC",
    hours: 4,
    allowedKm: 20,
    baseFare: 1500,
    extraKm: "₹20/km",
    extraHour: "₹600/hr",
    features: ["Madurai Airport to City Transfer", "Up to 6-7 passengers", "Spacious luggage room", "Direct chauffeur pickup"]
  }
];

// Curated Tour Packages
export const TOUR_PACKAGES = [
  {
    id: "madurai-local",
    title: "Madurai City Heritage Tour",
    tamilTitle: "மதுரை பாரம்பரிய சுற்றுலா",
    duration: "1 Day (8 Hrs / 80 Km)",
    price: "₹1,800",
    rating: "4.9",
    category: "Heritage Places",
    image: "/assets/prasanna/Madurai-C0l2zE-q.png",
    places: [
      "Meenakshi Amman Temple",
      "Thirumalai Nayak Palace",
      "Gandhi Memorial Museum",
      "Alagar Kovil (Azhagar Temple)",
      "Vandiyur Mariamman Teppakulam"
    ],
    desc: "Experience the historic temple city with hassle-free doorstep pickup, palace tour, and darshan guidance."
  },
  {
    id: "rameswaram-tour",
    title: "Madurai to Rameswaram Pilgrimage",
    tamilTitle: "ராமேஸ்வரம் புனித ஆன்மீகப் பயணம்",
    duration: "1 or 2 Days",
    price: "₹2,816",
    rating: "5.0",
    category: "Temple Tours",
    badge: "Most Popular",
    image: "/assets/prasanna/rameswaram-D0F7-Yji.jpg",
    places: [
      "Ramanathaswamy Temple (22 Theertham)",
      "Pamban Sea Bridge",
      "Dhanushkodi Ghost Town & Beach",
      "Dr. APJ Abdul Kalam National Memorial",
      "Agni Theertham"
    ],
    desc: "Sacred pilgrimage journey across the historical Pamban Sea Bridge and holy shore of Dhanushkodi."
  },
  {
    id: "kodaikanal-tour",
    title: "Madurai to Kodaikanal Hill Escape",
    tamilTitle: "கொடைக்கானல் குளிர் சுற்றுலா",
    duration: "2 Days / 1 Night",
    price: "₹4,500",
    rating: "4.9",
    category: "Hill Stations",
    image: "/assets/unique/kodaikanal_mist.jpg",
    places: [
      "Silver Cascade Waterfall",
      "Kodaikanal Star Lake & Boating",
      "Pillar Rocks & Guna Caves",
      "Bryant Park & Coaker's Walk",
      "Pine Forest"
    ],
    desc: "Relax in the Princess of Hill Stations. Crisp mountain air, mist, and scenic waterfalls."
  },
  {
    id: "kanyakumari-tour",
    title: "Madurai to Kanyakumari Coastal Tour",
    tamilTitle: "கன்னியாகுமரி முக்கடல் சங்கமம்",
    duration: "2 Days / 1 Night",
    price: "₹3,817",
    rating: "4.8",
    category: "Heritage Places",
    image: "/assets/prasanna/Kanyakumari-CLnULnXd.jpg",
    places: [
      "Vivekananda Rock Memorial",
      "Thiruvalluvar 133ft Statue",
      "Triveni Sangam Sunset & Sunrise",
      "Bhagavathy Amman Temple",
      "Padmanabhapuram Wooden Palace"
    ],
    desc: "Experience India's southernmost tip where Arabian Sea, Indian Ocean, and Bay of Bengal converge."
  },
  {
    id: "coimbatore-isha",
    title: "Madurai to Coimbatore & Isha Yoga",
    tamilTitle: "கோவை ஈஷா யோகா & மருதமலை சுற்றுலா",
    duration: "1 or 2 Days",
    price: "₹3,349",
    rating: "4.9",
    category: "Temple Tours",
    badge: "Spiritual Circuit",
    image: "/assets/unique/adiyogi_shiva_hero.jpg",
    places: [
      "Isha Yoga Center (Adiyogi 112ft)",
      "Marudhamalai Murugan Temple",
      "Dhyanalinga Meditation",
      "GD Naidu Museum",
      "Perur Pateeswarar Temple"
    ],
    desc: "Divine spiritual tour to Adiyogi and ancient temples of Coimbatore."
  },
  {
    id: "pondicherry-tour",
    title: "Madurai to Pondicherry French Heritage",
    tamilTitle: "பாண்டிச்சேரி பிரெஞ்சு பாரம்பரிய சுற்றுலா",
    duration: "2 Days / 1 Night",
    price: "₹4,969",
    rating: "4.9",
    category: "Heritage Places",
    image: "/assets/prasanna/pondicherry-D2XN-h2F.jpg",
    places: [
      "Promenade Beach & Rock Beach",
      "Auroville Matrimandir",
      "Sri Aurobindo Ashram",
      "French Quarter (White Town)",
      "Paradise Beach Boat Ride"
    ],
    desc: "Charming French villas, peaceful beaches, and spiritual retreat at Auroville."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "100% Sanitized Fleet",
    desc: "Every vehicle is thoroughly vacuumed and sanitized before every pickup for complete hygiene."
  },
  {
    icon: "BadgeIndianRupee",
    title: "Guaranteed Transparent Fares",
    desc: "No peak surge, no hidden driver fees. What you see is exactly what you pay."
  },
  {
    icon: "Clock",
    title: "Punctual Doorstep Pickup",
    desc: "Guaranteed on-time cab arrival at Madurai Airport, Railway Junction, or your hotel."
  },
  {
    icon: "UserCheck",
    title: "Verified Chauffeurs",
    desc: "Polite, background-verified local drivers who speak Tamil, English, and Hindi."
  },
  {
    icon: "Headset",
    title: "Dedicated Trip Manager",
    desc: "Live travel support throughout your holiday trip via WhatsApp and phone."
  },
  {
    icon: "Sparkles",
    title: "Customized Tour Schedules",
    desc: "Feel free to stop for temple darshan, coffee breaks, or photo spots on your way."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Priya Sharma",
    city: "Bangalore",
    rating: 5,
    date: "November 2024",
    car: "Innova Crysta",
    comment: "Booked Madurai to Rameswaram and Kanyakumari for 3 days. The Innova Crysta was spotless and the driver Murugan was exceptionally courteous and guided us through temple dharshan with ease. Highly recommended!"
  },
  {
    name: "Ramesh Kumar",
    city: "Chennai",
    rating: 5,
    date: "October 2024",
    car: "Swift Dzire",
    comment: "Best taxi service in Madurai! Flight landed at 11 PM and driver was already waiting outside with my name board. Very smooth ride and reasonable tariff without any hidden fees."
  },
  {
    name: "Arun Verma",
    city: "Mumbai",
    rating: 5,
    date: "January 2025",
    car: "Tempo Traveller (12 Seater)",
    comment: "We traveled as a family group of 10 to Kodaikanal. The Tempo Traveller was very comfortable with pushback seats and powerful AC. Superb hill driving skill by the driver."
  },
  {
    name: "Kavitha Krishnan",
    city: "Coimbatore",
    rating: 5,
    date: "December 2024",
    car: "Prime SUV Ertiga",
    comment: "Local Madurai sightseeing was covered effortlessly in a single day. The driver knew exact parking spots near Meenakshi Amman temple and Thirumalai Mahal. Will definitely book again!"
  }
];

export const FAQS = [
  {
    q: "How are outstation cab fares calculated?",
    a: "Outstation trips are calculated based on the per-kilometer rate with a minimum running distance (usually 250 km for sedans, 300 km for Innova/SUV per calendar day) plus driver batta. Fastag tolls, state permits, and parking are payable as per actual receipts."
  },
  {
    q: "What is the Day Rental / Local Package plan?",
    a: "Under the Day Rental plan, you pay a base rent per day (e.g. ₹1500 for Sedan, ₹2200 for Innova) plus running charge (₹10/km or ₹12/km). Ideal for local sightseeing, shopping, and family functions."
  },
  {
    q: "Can I book a cab for immediate Madurai airport or railway pickup?",
    a: "Yes! We operate 24/7. Call us directly or message on WhatsApp, and we will dispatch a cab to Madurai Airport (IXM) or Madurai Junction within minutes."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and Net Banking after completing your journey safely."
  }
];
