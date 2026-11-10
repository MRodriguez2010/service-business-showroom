/** Primary references checked September 20, 2026. Educational sources, never endorsements. */
export const careGuidance: Record<
  string,
  {
    page: string;
    eyebrow: string;
    title: string;
    text: string;
    ask: string;
    source: string;
    publisher: string;
    sourceTitle: string;
    context?: string;
  }
> = {
  hvac: {
    page: 'care',
    eyebrow: 'COMFORT BETWEEN VISITS',
    title: 'A small habit. A more comfortable home.',
    text: 'Filter care belongs in the maintenance conversation. The Department of Energy explains how filters, coils, and airflow affect air-conditioner performance. Follow the equipment instructions for the right filter and schedule.',
    ask: 'Ask which filter your system needs and which maintenance tasks belong with a qualified technician.',
    source: 'https://www.energy.gov/sites/prod/files/HomeCooling101-final.pdf',
    publisher: 'U.S. Department of Energy',
    sourceTitle: 'Energy Saver 101: Home Cooling (PDF)',
  },
  'lawn-care': {
    page: 'seasons',
    eyebrow: 'FROM THE FIELD NOTES',
    title: 'The calendar is a starting point. Your lawn tells the rest.',
    text: 'Colorado State University Extension explains how mowing, grass type, soil, and water work together. A fixed watering schedule cannot account for every lawn or changing weather.',
    ask: 'Bring your grass type, shade patterns, and local watering restrictions into the care-plan conversation.',
    source: 'https://extension.colostate.edu/resource/basic-turf-management/',
    publisher: 'Colorado State University Extension',
    sourceTitle: 'Basic Turf Management',
    context:
      'Colorado guidance is a regional example. Check your own municipality and local extension office.',
  },
  cleaning: {
    page: 'checklist',
    eyebrow: 'A LITTLE HOME KNOW-HOW',
    title: 'Clean, sanitized, disinfected. They mean different things.',
    text: 'CDC guidance distinguishes everyday cleaning from sanitizing and disinfecting. The right choice depends on the surface and the situation, including whether someone at home is ill.',
    ask: 'Mention surface finishes and product sensitivities before a visit so the scope can be discussed.',
    source:
      'https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html',
    publisher: 'Centers for Disease Control and Prevention',
    sourceTitle: 'When and How to Clean and Disinfect Your Home',
  },
  janitorial: {
    page: 'standards',
    eyebrow: 'A STANDARD YOU CAN UNDERSTAND',
    title: 'Good cleaning starts with the right questions.',
    text: 'CDC guidance for community facilities puts attention on frequently touched surfaces, appropriate products, and cleaning before disinfection. A useful program considers how each space is used.',
    ask: 'Ask how the scope accounts for high-touch areas, product instructions, access, and changing occupancy.',
    source:
      'https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-a-facility.html',
    publisher: 'Centers for Disease Control and Prevention',
    sourceTitle: 'When and How to Clean and Disinfect a Facility',
    context:
      'This reference covers community settings. Healthcare and other regulated facilities need their own protocols.',
  },
  'pressure-washing': {
    page: 'process',
    eyebrow: 'THINK PAST THE SURFACE',
    title: 'Where the water goes matters, too.',
    text: 'Seattle Public Utilities explains how runoff carries pollutants from streets, sidewalks, and other surfaces into waterways. Drainage belongs in the project discussion alongside the material, condition, and nearby planting.',
    ask: 'Ask how washwater will be managed and which local requirements apply to your property.',
    source:
      'https://www.seattle.gov/utilities/protecting-our-environment/sustainability-tips/green-business-program/prevent-water-pollution',
    publisher: 'Seattle Public Utilities',
    sourceTitle: 'Prevent Water Pollution',
    context:
      'Seattle is a municipal example, not a statement of rules everywhere. Confirm requirements with your local utility.',
  },
  handyman: {
    page: 'visit-guide',
    eyebrow: 'SMALL DETAILS. IMPORTANT QUESTIONS.',
    title: 'A good installation starts before the drill.',
    text: 'The U.S. Consumer Product Safety Commission’s Anchor It! guidance explains furniture and television tip-over prevention. Furniture assembly and anchoring should be discussed together when relevant.',
    ask: 'Keep the manufacturer’s instructions and supplied hardware, and identify the wall construction before planning an anchoring task.',
    source:
      'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/AnchorItgov',
    publisher: 'U.S. Consumer Product Safety Commission',
    sourceTitle: 'Anchor It! furniture safety',
  },
  painting: {
    page: 'process',
    eyebrow: 'BEFORE THE FIRST BRUSHSTROKE',
    title: 'Older paint deserves a careful conversation.',
    text: 'EPA guidance explains why renovation and surface preparation in older homes can require lead-safe practices. A beautiful finish begins with knowing what is already on the wall.',
    ask: 'Share the property’s age and any known coating history before scraping, sanding, or preparation is planned.',
    source:
      'https://www.epa.gov/lead/steps-lead-safe-renovation-repair-and-painting',
    publisher: 'U.S. Environmental Protection Agency',
    sourceTitle: 'Steps to Lead Safe Renovation, Repair and Painting',
    context:
      'This sample does not claim lead-safe certification. Confirm applicable requirements and the qualifications of your actual contractor.',
  },
  detailing: {
    page: 'mobile-visit',
    eyebrow: 'CARE BEYOND THE SHINE',
    title: 'The setting is part of the detail.',
    text: 'Seattle Public Utilities explains how vehicle washwater can carry soap and grime into storm drains. Parking permission and washwater handling are practical parts of planning a mobile visit.',
    ask: 'Share the parking surface, drainage, and property permissions so a suitable approach can be discussed.',
    source:
      'https://www.seattle.gov/utilities/protecting-our-environment/sustainability-tips/pollution-prevention/car-washing',
    publisher: 'Seattle Public Utilities',
    sourceTitle: 'The Problem with Car Washing',
    context:
      'This is a municipal example. Water use and disposal arrangements must fit your location.',
  },
  'pet-grooming': {
    page: 'coat-care',
    eyebrow: 'GOOD CARE GOES HOME WITH YOU',
    title: 'Comfort is something you can practice.',
    text: 'Cornell’s Riney Canine Health Center discusses routine grooming and cooperative care. Short, positive introductions to handling can help build familiarity with grooming tasks.',
    ask: 'Ask your groomer about a manageable brushing routine for your dog’s coat, and involve your veterinarian for skin, pain, or health concerns.',
    source:
      'https://riney.vet.cornell.edu/member-benefits-health-tips/grooming-cooperative-care-february-2026',
    publisher: 'Cornell Riney Canine Health Center',
    sourceTitle: 'Grooming — Cooperative Care',
  },
  'food-trucks': {
    page: 'event-menu',
    eyebrow: 'GOOD HOSTING STARTS HERE',
    title: 'Planning the party? Think beyond the menu.',
    text: 'The FDA’s outdoor-food guidance covers hand cleaning, temperature control, and serving safely outside. These are useful topics to include when discussing a private event.',
    ask: 'Share the venue, serving time, guest count, and food allergies early so the real operator can confirm the setup.',
    source:
      'https://www.fda.gov/food/buy-store-serve-safe-food/handling-food-safely-while-eating-outdoors',
    publisher: 'U.S. Food and Drug Administration',
    sourceTitle: 'Handling Food Safely While Eating Outdoors',
  },
  catering: {
    page: 'occasions',
    eyebrow: 'THE THOUGHTFUL HOST',
    title: 'A memorable meal is carefully planned.',
    text: 'FDA buffet guidance explains safe holding, serving, and handling of leftovers. The event timeline and venue setup matter alongside the menu.',
    ask: 'Discuss temperature control, service timing, dietary needs, and a plan for leftovers with your actual caterer.',
    source:
      'https://www.fda.gov/food/buy-store-serve-safe-food/serving-safe-buffets',
    publisher: 'U.S. Food and Drug Administration',
    sourceTitle: 'Serving Up Safe Buffets',
  },
  barbershop: {
    page: 'cuts',
    eyebrow: 'BETWEEN THE CHAIRS',
    title: 'Keep the good hair day going.',
    text: 'The American Academy of Dermatology recommends choosing care for your hair type and washing based on how dirty or oily it gets. A routine should fit the person, not just the cut.',
    ask: 'Ask for a simple styling routine and product guidance for your hair. A dermatologist is the right contact for persistent scalp concerns.',
    source:
      'https://www.aad.org/public/everyday-care/hair-scalp-care/hair/healthy-hair-tips',
    publisher: 'American Academy of Dermatology',
    sourceTitle: 'Tips for Healthy Hair',
  },
};
