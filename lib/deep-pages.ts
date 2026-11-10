export type DeepPage = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  quote: string;
  chapters: { title: string; text: string }[];
  checklist: string[];
};
const page = (
  id: string,
  label: string,
  eyebrow: string,
  title: string,
  intro: string,
  quote: string,
  chapters: [string, string][],
  checklist: string[],
): DeepPage => ({
  id,
  label,
  eyebrow,
  title,
  intro,
  quote,
  chapters: chapters.map(([title, text]) => ({ title, text })),
  checklist,
});
export const deepPages: Record<string, DeepPage[]> = {
  'food-trucks': [
    page(
      'story',
      'Our little kitchen',
      'THE STORY BEHIND THE WINDOW',
      'A little kitchen. A long lunch break.',
      'Ember & Masa is an imagined neighborhood truck built around a simple idea: good street food deserves the same care as a sit-down meal. The menu stays short so the important things get our attention.',
      'Start with the tortilla. End with good company.',
      [
        [
          'The first bite',
          'A warm corn tortilla carries charred chicken or earthy mushrooms, a bright salsa, and something fresh for crunch. The balance matters more than a long list of toppings. Our sample menu gives each taco a clear identity and leaves room for a seasonal special.',
        ],
        [
          'Made for the street',
          'Food needs to travel a few steps without losing its character. Plates are easy to carry, sauces stay on the side when requested, and the service window keeps ordering simple. Take a seat nearby or bring a few friends back to the office.',
        ],
        [
          'A familiar face in a different place',
          'The sample weekly route balances weekday lunch stops with evening markets. For private gatherings, the same kitchen can become a hosted taco service with a menu, arrival plan, and serving window agreed in advance.',
        ],
      ],
      [
        'Short seasonal menu',
        'Made-to-order service model',
        'Neighborhood lunch & market stops',
        'Private-event planning',
      ],
    ),
    page(
      'event-menu',
      'Feed a gathering',
      'BRING THE KITCHEN TO YOU',
      'Your people. Our whole little kitchen.',
      'From an office lunch to a backyard milestone, a truck gives your gathering a natural place to meet. Start with a guest count and a service window; then build a spread everyone can find their way around.',
      'A great party has somewhere good to gather.',
      [
        [
          'Choose the main event',
          'Mixed favorites pairs charred chicken with mushroom tacos. The plant-based menu brings mushrooms, beans, and roasted vegetables to the center of the plate. A trio per guest is the starting point in the sample planner; appetites and the length of the event shape the final menu.',
        ],
        [
          'Build the spread',
          'Street corn, chips and salsa, and fruit agua fresca can be added separately. The planner shows how each choice changes an illustrative per-person estimate. Dietary requests remain part of the brief so a real kitchen could discuss ingredients and shared preparation.',
        ],
        [
          'Give the truck room',
          'A real event needs a permitted level parking area, access for arrival and departure, and a queue that does not block the venue. The host and operator would confirm space, power arrangements, weather backup, service timing, and waste collection before accepting the event.',
        ],
      ],
      [
        'Guest count and serving time',
        'A place to park and queue',
        'Dietary conversations',
        'Rain or venue backup',
      ],
    ),
    page(
      'kitchen-notes',
      'Kitchen notes',
      'BEFORE YOU ORDER',
      'Good food starts with a good conversation.',
      'This sample kitchen keeps the menu readable: what is in the dish, what can be left off, and what needs a conversation. These notes show how a food business can make guests feel considered before they reach the window.',
      'Ask us about the little things. They matter.',
      [
        [
          'A little heat, your way',
          'Salsas sit alongside the main ingredients instead of hiding them. The sample menu ranges from bright and mild to smoky and warming. Ask for sauce on the side if you want to build the bite yourself; a real menu should describe heat clearly without promising an exact tolerance.',
        ],
        [
          'Dietary needs',
          'Plant-based recipe labels describe the sample ingredients. They do not establish an allergen-free preparation environment. A real operator would review allergies, ingredient changes, and shared surfaces with the guest before confirming that a dish is suitable.',
        ],
        [
          'Order for the moment',
          'At public stops, the menu can change when a fresh batch sells through. Private events work from an agreed menu and headcount. For group orders, identify your service window and any dietary portions before the event so the kitchen can plan the pace.',
        ],
      ],
      [
        'Ask about today’s salsa',
        'Review ingredients with the kitchen',
        'Tell us about dietary portions',
        'Allow time for made-to-order food',
      ],
    ),
  ],
  hvac: [
    page(
      'repairs',
      'Repair & diagnosis',
      'COMFORT / RESTORED',
      'Let’s get to the reason.',
      'Warm air from a cooling vent, an unfamiliar sound, or a room that never feels right: each is a starting point for a conversation. A good service visit explains the problem before asking you to choose a repair.',
      'Understand the issue before you decide on the work.',
      [
        [
          'Tell us what changed',
          'Note when the issue started, which rooms are affected, and whether the thermostat shows an alert. You do not need to identify a failed part. The sample service builder accepts “not sure” for the system type because a homeowner should not have to diagnose equipment to request help.',
        ],
        [
          'A visit with a sequence',
          'A real technician would discuss the symptom, inspect the relevant equipment, and explain findings. The proposed scope and price should be reviewed before approved work begins. Our example uses a diagnostic allowance only; parts and repairs are not included in that sample estimate.',
        ],
        [
          'Make room for the visit',
          'Keep the thermostat and equipment accessible, secure pets, and gather any recent service information. For urgent hazards, use appropriate local emergency guidance rather than a demonstration form. This showroom cannot dispatch a technician.',
        ],
      ],
      [
        'What you noticed',
        'When it began',
        'Equipment access',
        'Recent service notes',
      ],
    ),
    page(
      'replacement',
      'Replacement planning',
      'THE NEXT SYSTEM',
      'A better fit for the way you live.',
      'Replacing equipment is a home-planning decision. Comfort goals, the existing layout, installation constraints, and ongoing care all deserve attention before comparing systems. This example makes that conversation easier to start.',
      'The right conversation comes before the equipment choice.',
      [
        [
          'Describe the home',
          'Which rooms run warm or cool? Has the space changed since the current system was installed? An addition, converted room, or changing use can affect the discussion. The sample brief captures the type of home and system without pretending to calculate a final equipment size.',
        ],
        [
          'Compare complete scopes',
          'A useful proposal describes equipment, installation work, controls, commissioning, and what happens to the old system. Ask how existing ducts or electrical requirements affect the work. Model-specific performance and eligibility for incentives should be verified by a real provider.',
        ],
        [
          'Plan the transition',
          'Discuss lead time, access, work hours, and likely interruption to heating or cooling. Agree on a walkthrough and a handover that includes control settings, filter information, and maintenance needs. The showroom provides an inquiry brief, not a replacement price or technical design.',
        ],
      ],
      [
        'Comfort priorities',
        'Existing equipment & space',
        'Installation access',
        'Handover and care plan',
      ],
    ),
    page(
      'air-quality',
      'Airflow & indoor air',
      'THE EVERYDAY DETAILS',
      'Comfort is more than a number.',
      'Air movement, filtration, and the way rooms are used all affect how a home feels. Start with the specific room or everyday concern and explore what belongs in a thoughtful service conversation.',
      'Start with the room that does not feel right.',
      [
        [
          'Uneven rooms',
          'A sunny upstairs room and a shaded downstairs room may experience the day differently. Note the time, room use, and whether doors are usually open or closed. A service visit can examine the situation; this website does not diagnose the cause from a few answers.',
        ],
        [
          'Filters and access',
          'Know where the filter belongs and record the size and guidance supplied with your equipment. Filter compatibility and replacement intervals depend on the system and conditions. A real provider can explain the intended setup rather than offering a single rule for every home.',
        ],
        [
          'Care without guesswork',
          'Include unusual odors, dust concerns, or recent renovation in the visit notes. A qualified provider can discuss appropriate next steps and any specialist assessment needed. The sample care plan prioritizes clear observations and equipment-specific guidance over broad health promises.',
        ],
      ],
      [
        'Rooms and time of day',
        'Filter details if known',
        'Recent home changes',
        'Questions for a service visit',
      ],
    ),
  ],
  'lawn-care': [
    page(
      'weekly-care',
      'Weekly lawn care',
      'A RHYTHM FOR YOUR YARD',
      'Keep the weekend for yourself.',
      'Recurring care is about consistency: an agreed scope, sensible access, and a yard that feels ready to use. Build a mowing rhythm around your property size and the condition of the lawn.',
      'A familiar rhythm. A little more outside time.',
      [
        [
          'What a routine visit covers',
          'The sample mowing service includes the mow, trimming around accessible edges, and clearing loose clippings from hard surfaces. Beds, shrub work, and leaf collection are separate choices so the scope remains understandable. The care-plan builder itemizes those additions instead of hiding them in a bundle.',
        ],
        [
          'Frequency follows growth',
          'Weekly and every-two-week options are useful planning rhythms, not universal prescriptions. Growth, weather, and lawn condition affect the actual schedule. Overgrown areas may need an initial reset before settling into recurring work; the sample estimate shows that additional effort separately.',
        ],
        [
          'A simple arrival routine',
          'Agree on gate access, secure pets, and move loose items from the work area. Mention delicate borders or areas you want left alone. A real provider would communicate weather changes and access issues rather than marking an incomplete visit as finished.',
        ],
      ],
      [
        'Accessible mowing area',
        'Trimming and surface cleanup',
        'Gate and pet arrangements',
        'Weather communication',
      ],
    ),
    page(
      'landscape',
      'Beds & borders',
      'THE FRAME AROUND THE LAWN',
      'The little edges make the whole place.',
      'A neat border, a clear path, and beds with room to breathe change the way a yard reads. This example keeps garden maintenance separate from landscape construction so the work stays clear.',
      'Care for what is already growing.',
      [
        [
          'Start with the existing garden',
          'Identify the beds you want maintained and any plants you want protected or left alone. Routine weeding and bed cleanup begin with recognizing what belongs. A real walkthrough is the place to discuss unfamiliar plants and any specialist work.',
        ],
        [
          'Mulch with a purpose',
          'Mulch refresh is scoped by the area, existing material, access, and disposal needs. A photograph may help begin the conversation, but depth and material choices need a site-specific review. The sample builder uses an allowance rather than presenting every garden as the same job.',
        ],
        [
          'Give the paths their place',
          'Edges and borders connect the lawn to the rest of the property. Note where clippings, leaves, or encroaching growth collect. Small recurring tasks can be planned alongside mowing, while larger alterations or installations belong in a separate proposal.',
        ],
      ],
      [
        'Beds to include',
        'Plants to preserve',
        'Material preferences',
        'Access and waste removal',
      ],
    ),
    page(
      'property-guide',
      'Property guide',
      'BEFORE THE FIRST VISIT',
      'A better plan starts at the gate.',
      'A little property context prevents a lot of uncertainty. Use this guide to prepare for a first visit and to understand what the example care-plan price can—and cannot—tell you.',
      'Measure the work area, not the whole street address.',
      [
        [
          'Estimate the lawn area',
          'Choose the range that best describes the accessible grass area. Do not include the house, driveway, or large planted beds. If you are unsure, use the closest sample range and flag that measurement should be confirmed during a real property review.',
        ],
        [
          'Describe the starting point',
          'A regularly maintained lawn and a yard with heavy leaf cover need different amounts of work. Tell the provider about overgrowth, steep sections, fragile edging, and limited access. The sample builder shows a condition adjustment so that the estimate reflects the choices you make.',
        ],
        [
          'Set expectations together',
          'Discuss weather postponements, how the gate is secured, where green waste goes, and how changes are approved. A useful recurring service agreement explains these details before the first visit. All prices and schedules here are illustrative and create no service commitment.',
        ],
      ],
      [
        'Accessible lawn area',
        'Current condition',
        'Gates, slopes, and delicate edges',
        'Green-waste arrangements',
      ],
    ),
  ],
  cleaning: [
    page(
      'recurring',
      'Recurring care',
      'LESS ON YOUR LIST',
      'A home that stays easier to live in.',
      'Weekly, every-two-week, or monthly: choose a rhythm that makes sense for your household. The regular reset focuses on the rooms and tasks you use most, with the details agreed before a visit.',
      'The nicest part is not having to think about it.',
      [
        [
          'Find your rhythm',
          'Busy kitchens and shared bathrooms may need attention more frequently than spare bedrooms. Start with how the home is used, then choose a recurring interval. The sample planner makes the frequency adjustment visible and keeps the room count in view as you make choices.',
        ],
        [
          'Keep the scope familiar',
          'A regular reset covers accessible surfaces, routine kitchen and bathroom cleaning, and appropriate floor care. Interior appliances, inside cabinets, or extensive buildup are discussed separately. A stable checklist helps both the household and the cleaner know what a completed visit looks like.',
        ],
        [
          'Make small adjustments',
          'Tell a real provider when a room is out of use, guests are arriving, or product sensitivities need discussion. Changes should be agreed before the visit. The sample summary brings those preferences together without collecting your address or sending a booking.',
        ],
      ],
      [
        'A recurring interval',
        'Bedrooms and bathrooms',
        'Priority rooms',
        'Product or access notes',
      ],
    ),
    page(
      'deep-clean',
      'The deeper clean',
      'ROOM TO BEGIN AGAIN',
      'For the corners that waited.',
      'A deeper clean creates a starting point when routine upkeep is no longer enough. It makes room for extra attention to accessible detail areas and a slower, more deliberate pass through the home.',
      'A reset is a different job from a routine.',
      [
        [
          'Choose the important rooms',
          'A whole-home deep clean and a kitchen-and-bathroom reset have different scopes. List the rooms and describe the buildup rather than assuming a single package covers every condition. The planner separates room count, cleaning type, and frequency to make those differences visible.',
        ],
        [
          'Look at the detail work',
          'Accessible baseboards, fixture surrounds, door surfaces, and reachable dusting are examples of details a real provider could include. Work at height, specialist restoration, hazardous materials, and pest-related cleanup require separate assessment. Confirm the exact checklist before booking.',
        ],
        [
          'Leave time for the finish',
          'Clear loose personal items where practical so the cleaner can reach the intended surfaces. A real walkthrough or intake conversation would confirm time, supplies, access, and any exclusions. The sample estimate is a planning allowance, not a guaranteed duration or price.',
        ],
      ],
      [
        'Room-level priorities',
        'Reachable detail surfaces',
        'Loose items cleared',
        'Scope and exclusions confirmed',
      ],
    ),
    page(
      'move-out',
      'Moving clean',
      'A CLEARER HANDOVER',
      'One less thing between here and there.',
      'An empty home has its own cleaning rhythm. With rooms clear, attention can shift to the surfaces left behind and the handover you are preparing for. This service example can support a move-in or move-out brief.',
      'Leave a fresh starting point.',
      [
        [
          'Time it after the boxes',
          'A cleaning visit is easier to scope once belongings have been removed and other work is complete. Coordinate keys, parking, and utilities. If movers or contractors are still using the space, discuss whether a final touch-up will be needed.',
        ],
        [
          'Work from the handover list',
          'Rental or sale requirements may name specific areas. Share the list with the provider and confirm what is included, especially appliance interiors, cabinet interiors, and window details. Cleaning cannot guarantee a deposit outcome or replace repairs to damaged surfaces.',
        ],
        [
          'Close the loop',
          'Agree on who will inspect the finished work and how access is returned. A clear checklist helps the handover feel organized. The example summary records your preferences only; it does not accept keys, collect a property address, or schedule a real visit.',
        ],
      ],
      [
        'Empty rooms and clear access',
        'Power and water available',
        'Required handover checklist',
        'Key return and inspection',
      ],
    ),
  ],
  janitorial: [
    page(
      'offices',
      'Office programs',
      'WORKPLACES / 01',
      'Ready before the first meeting.',
      'An office program should follow the building’s daily rhythm. Workstations, meeting rooms, restrooms, and shared kitchens need different tasks and frequencies, with access and reporting kept clear.',
      'A building is many spaces, not one checklist.',
      [
        [
          'Map the working day',
          'Record occupancy, opening hours, meeting patterns, and areas that cannot be interrupted. A real walkthrough separates occupied work zones from common areas and restricted rooms. This gives the cleaning schedule a practical foundation instead of relying on floor area alone.',
        ],
        [
          'Define recurring tasks',
          'Restroom replenishment, kitchen surfaces, floor care, and waste collection belong in a written scope. Desk policies should explain what may be moved and what stays untouched. Periodic tasks such as deeper floor work are scheduled separately from the routine shift.',
        ],
        [
          'Make the handover visible',
          'Agree on a contact, access method, alarm procedure, and a simple record of completed work and exceptions. The sample facility brief collects priorities and access preferences but makes no claim of a certified process or verified business performance.',
        ],
      ],
      [
        'Occupancy and work hours',
        'Restricted and shared areas',
        'Routine versus periodic tasks',
        'Access and reporting contact',
      ],
    ),
    page(
      'retail',
      'Retail & studios',
      'CUSTOMER SPACES / 02',
      'A space that is ready to welcome.',
      'The entry, floor, fitting room, or studio can shape the first impression of a business. Cleaning needs to fit around opening hours, displays, customer traffic, and the materials in the space.',
      'Take care of the welcome.',
      [
        [
          'Follow the customer route',
          'Start at the entrance and trace the areas visitors actually use. Entry glass, touchpoints, floors, and restrooms may need attention at different times. A walkthrough can distinguish public areas from storage and staff-only spaces.',
        ],
        [
          'Respect the display',
          'Agree on what can be moved, what requires staff handling, and which finishes need particular products or methods. Fragile merchandise, equipment, and specialist surfaces should be identified in advance. A standard checklist is a starting point, not permission to treat every material alike.',
        ],
        [
          'Schedule around trading',
          'Before opening, after closing, and weekend visits each have access implications. Discuss delivery days, busy periods, and occasional events. The example program builder converts those choices into a readable scope for a real provider to review.',
        ],
      ],
      [
        'Customer route and entry',
        'Display handling rules',
        'Material and floor inventory',
        'Opening and delivery hours',
      ],
    ),
    page(
      'day-porter',
      'Daytime support',
      'OCCUPIED BUILDINGS / 03',
      'Keep the day moving.',
      'Some spaces need attention while people are using them. A daytime support plan defines what gets checked, how issues are reported, and how service stays considerate of an occupied building.',
      'Visible care. Minimal interruption.',
      [
        [
          'Agree on the rounds',
          'A real plan may include common-area checks, restroom replenishment, litter collection, and entry attention. Set the frequency around occupancy and events rather than leaving the role open-ended. Larger cleaning tasks remain part of the separately scheduled program.',
        ],
        [
          'Define the boundaries',
          'Identify who can request extra work, how spills or maintenance issues are escalated, and which tasks require a specialist. Supply restocking and equipment use need an agreed process. A clear boundary prevents a porter role from becoming an undefined maintenance service.',
        ],
        [
          'Record what matters',
          'The handover can capture completed checks, supply needs, and issues for the property contact. Our sample brief demonstrates that structure without inventing audit scores, certifications, employee credentials, or client outcomes.',
        ],
      ],
      [
        'Rounds and service windows',
        'Supply responsibilities',
        'Escalation contact',
        'End-of-shift handover',
      ],
    ),
  ],
  'pressure-washing': [
    page(
      'house-washing',
      'House washing',
      'MATERIAL FIRST',
      'A fresh face for a familiar home.',
      'Exterior siding deserves a method chosen for the material and its condition. A careful project starts with the surface, nearby planting, and the places water should not enter.',
      'The right method matters more than maximum pressure.',
      [
        [
          'Identify the exterior',
          'Painted timber, vinyl, masonry, and mixed facades do not all respond the same way. A real provider should inspect soundness, joints, coatings, and existing damage before proposing a method. The surface selector is a planning guide, not a substitute for that assessment.',
        ],
        [
          'Prepare the surroundings',
          'Discuss windows, doors, outdoor outlets, vents, fixtures, and planting. The provider should explain the intended protection and runoff plan. Let them know about leaks, loose finishes, or previous surface repairs before work is accepted.',
        ],
        [
          'Set a realistic finish',
          'General dirt and green growth are different from permanent discoloration or failing paint. Results depend on material and condition. This example uses stock photography and a labeled visual demonstration, never presenting an edited picture as evidence of a completed job.',
        ],
      ],
      [
        'Exterior material',
        'Existing surface damage',
        'Fixtures and planting',
        'Drainage and access',
      ],
    ),
    page(
      'hardscape',
      'Driveways & patios',
      'GROUND LEVEL / DETAILS MATTER',
      'Bring the outside back into view.',
      'A driveway, paved path, or patio is part of how you use the home. Start with its material, size, and drainage so the scope can be considered before the equipment arrives.',
      'See the surface. Understand the condition.',
      [
        [
          'Concrete is not every surface',
          'Pavers, poured concrete, natural stone, and coated surfaces need their own assessment. Jointing material and existing sealants may influence the work. The project builder asks for surface type and area rather than assuming a driveway is always one standard job.',
        ],
        [
          'Describe the marks',
          'General dirt, organic growth, oil, and other staining may need different approaches and may not disappear completely. A real provider would discuss expected limits and any test area. The sample estimate does not promise restoration or stain removal.',
        ],
        [
          'Plan water and access',
          'Identify an available water source, vehicle movement, nearby doors, and where runoff can be managed. Allow space for the provider to work safely and explain when the surface can be used again. Local requirements and site conditions need a real review.',
        ],
      ],
      [
        'Surface and approximate area',
        'Existing sealant or coating',
        'Staining and expectations',
        'Water, vehicles, and drainage',
      ],
    ),
    page(
      'property-prep',
      'Prepare the property',
      'BEFORE WE BEGIN',
      'A smoother day starts here.',
      'A short preparation conversation makes exterior cleaning easier to organize. Use these notes to outline the space and the things you want the provider to pay attention to.',
      'Nothing delicate should be a surprise.',
      [
        [
          'Walk the project boundary',
          'Mark which surfaces are included and which are not. A driveway job can easily be confused with paths, retaining walls, or a patio unless the boundary is clear. The example brief separates material, area, condition, and access for that reason.',
        ],
        [
          'Identify the delicate details',
          'Move loose outdoor items where practical and point out fragile fittings, loose paint, recently treated surfaces, and nearby plants. The real provider should confirm how those details will be handled. Do not disconnect equipment or attempt unfamiliar preparation based on a demo.',
        ],
        [
          'Agree on the return to use',
          'Discuss weather changes, arrival timing, water arrangements, and any drying or curing considerations relevant to the method. A final walkthrough should revisit the agreed scope and note any limits. This website creates a sample summary only.',
        ],
      ],
      [
        'Project boundaries',
        'Loose outdoor items',
        'Delicate details',
        'Timing and final walkthrough',
      ],
    ),
  ],
  handyman: [
    page(
      'repairs',
      'Everyday repairs',
      'THE THINGS YOU NOTICE',
      'Make the everyday work again.',
      'The door that catches, the loose handle, the trim that never quite got finished. A small repair list becomes easier to manage when the tasks are described and grouped into a considered visit.',
      'Small does not mean unimportant.',
      [
        [
          'Describe the symptom',
          'A photo and a clear description can help a real provider understand the starting point. What moves, catches, rattles, or feels loose? Tell them when it began and whether previous repairs were attempted. You do not need to decide on the solution first.',
        ],
        [
          'Group compatible jobs',
          'Door adjustments, cabinet hardware, and minor trim work may fit a shared visit. The sample work-order builder lets you select several tasks and shows a planning time allowance. Hidden damage, missing parts, and unfamiliar materials can change the real scope.',
        ],
        [
          'Know when to refer',
          'Structural work, specialist systems, permits, and regulated trades may need another professional. This example does not imply that every listed task is suitable for every handyman or location. A real provider should confirm their scope before accepting the job.',
        ],
      ],
      [
        'A concise task description',
        'Known parts or materials',
        'Related jobs to group',
        'Scope confirmed before work',
      ],
    ),
    page(
      'installation',
      'Assembly & installation',
      'READY TO PUT TOGETHER',
      'From the box to the right place.',
      'Furniture assembly, shelves, and small fittings go more smoothly when the product, surface, and placement are understood. A useful brief tells the provider what is ready and what still needs a decision.',
      'Measure first. Then make it feel at home.',
      [
        [
          'Start with the item',
          'Have the model, instructions, and supplied hardware available. Note whether all boxes have arrived and where they will be assembled. A real estimate may depend on the number of pieces, access, and whether packaging removal is part of the visit.',
        ],
        [
          'Understand the surface',
          'A shelf or fixture needs appropriate placement and fastening for the actual wall or substrate. The provider must assess the surface and intended load; this sample site does not supply a universal installation method. Share any building rules or known concealed services.',
        ],
        [
          'Finish with the details',
          'Agree on alignment, door operation, remaining packaging, and a final check with the homeowner. If parts are missing or the product is damaged, the next step should be clear before work continues. The sample visit summary leaves room for those questions.',
        ],
      ],
      [
        'Item model and instructions',
        'All parts present',
        'Placement and access',
        'Packaging and final check',
      ],
    ),
    page(
      'visit-guide',
      'Plan a better visit',
      'THE WORK ORDER',
      'Turn the list into a plan.',
      'An organized visit starts with priorities. Put the most important task first, identify the materials, and allow a real provider to confirm what is practical within the available time.',
      'A short list, properly understood.',
      [
        [
          'Set the order',
          'Choose the tasks in the example work-order builder, then think about which one matters most. A repair that affects everyday use may come before a decorative installation. A real provider can explain which tasks belong together and which need another visit.',
        ],
        [
          'Materials can change the day',
          'Tell the provider whether you already have the parts, need help identifying them, or have a mixture of both. Travel, procurement, and specialist materials may sit outside the labor allowance. Our sample estimate keeps a visible assessment note rather than hiding those uncertainties.',
        ],
        [
          'Be ready for the handover',
          'Clear the work area, secure pets, and arrange a person who can answer scope questions. Before the visit ends, review completed tasks and any follow-up. Nothing entered in the demo is transmitted, and no tradesperson is scheduled.',
        ],
      ],
      [
        'Priority order',
        'Parts and materials',
        'Clear work area',
        'A contact for decisions',
      ],
    ),
  ],
  painting: [
    page(
      'interiors',
      'Interior painting',
      'SPACES / INSIDE',
      'A different light on everyday life.',
      'Paint changes how a room feels at every hour. Interior planning brings color, preparation, sheen, and the way you live in the space into one conversation.',
      'The finish begins long before the final coat.',
      [
        [
          'Read the room',
          'Natural light, neighboring colors, furniture, and the surfaces already in place affect the impression of a color. View real samples in the room over the day. The digital color studio is an illustrative aid; screens and photographs cannot reproduce the final painted result exactly.',
        ],
        [
          'Give preparation a scope',
          'Discuss repairs, existing coatings, trim, and what needs moving or protecting. Preparation can include cleaning, patching, sanding, and suitable priming, depending on the surface. A real proposal should identify these steps instead of using “prep included” as an undefined promise.',
        ],
        [
          'Live around the work',
          'Agree on room order, furniture access, ventilation guidance, and when the space can be used again. Follow the product-specific instructions supplied by the real painter. Our example quote allows a room count and finish preference, then leaves final measurement and suitability for assessment.',
        ],
      ],
      [
        'Rooms and surfaces',
        'Sample colors in real light',
        'Repairs and protection',
        'Work sequence and access',
      ],
    ),
    page(
      'exteriors',
      'Exterior painting',
      'SPACES / OUTSIDE',
      'A first impression, carefully made.',
      'An exterior project starts with the building beneath the color. Substrate condition, existing coatings, access, and weather all influence the scope and timing of the work.',
      'Color is the visible part of a considered process.',
      [
        [
          'Look below the color',
          'Peeling finishes, damaged trim, gaps, and moisture-related concerns should be assessed before coating work is planned. Some repairs may need a specialist. A real painter can explain what belongs in the paint scope and what should be resolved first.',
        ],
        [
          'Coordinate the whole facade',
          'Main surfaces, trim, doors, and surrounding materials should work together. The inspiration gallery shows stock settings, not completed projects. Use it to discuss proportion and contrast, then confirm physical samples against the actual building and any applicable property rules.',
        ],
        [
          'Plan around conditions',
          'Surface preparation, drying, and application requirements depend on the products and environment. The real provider should communicate weather delays, access arrangements, and protection for nearby areas. The showroom offers a planning brief rather than a weather-dependent completion promise.',
        ],
      ],
      [
        'Substrate and existing coatings',
        'Repair responsibilities',
        'Facade, trim, and door colors',
        'Weather and access plan',
      ],
    ),
    page(
      'color-studio',
      'Color studio',
      'PALETTE / MATERIAL / LIGHT',
      'Find a feeling. Then find the color.',
      'Explore a small set of mood palettes and finish notes before choosing physical samples. A digital room is a conversation starter, not a paint specification or a color-matching service.',
      'Quiet, warm, grounded, or a little unexpected.',
      [
        [
          'Begin with what stays',
          'Flooring, stone, timber, and furniture can anchor a palette. Choose the elements you will keep before narrowing wall colors. A restrained palette can create connection between rooms while allowing doors, trim, or a single wall to carry a different tone.',
        ],
        [
          'Compare in context',
          'The studio lets you switch a simplified room palette and compare matte, eggshell, and satin descriptions. Screen settings and lighting change color appearance. Always review manufacturer samples in the real space before making a final paint decision.',
        ],
        [
          'Write a useful brief',
          'Record the room, preferred mood, surfaces, and any finish priorities. Easy cleaning, low visual sheen, and architectural emphasis can lead to different conversations. The project builder carries those preferences into a sample summary for a real painter to assess.',
        ],
      ],
      [
        'Elements that stay',
        'A small sample shortlist',
        'Real-room lighting',
        'Finish priorities',
      ],
    ),
  ],
  detailing: [
    page(
      'interior',
      'Interior reset',
      'TREATMENT / 01',
      'A fresh start behind the wheel.',
      'Everyday driving leaves its trace in the cabin. An interior treatment is scoped around materials, buildup, and the details you notice most when you get into the vehicle.',
      'The cabin is part of the drive.',
      [
        [
          'Read the condition',
          'Routine dust and crumbs are different from heavy pet hair, staining, or persistent odors. The sample booking flow asks about the starting condition and optional areas of attention. A real detailer would inspect materials and confirm what is achievable before agreeing on a treatment.',
        ],
        [
          'Work through the cabin',
          'Accessible surfaces, mats, seats, and touchpoints form the core of the sample interior reset. Storage compartments should be cleared of personal items. Delicate finishes, aftermarket components, and child-seat handling need an explicit discussion with the real provider.',
        ],
        [
          'Know the boundaries',
          'Stains and wear may not be fully removable. Moisture-sensitive materials and existing damage influence the method. The example avoids guaranteed restoration claims and shows an assessment note when heavy use or special treatment is selected.',
        ],
      ],
      [
        'Material and condition',
        'Personal items removed',
        'Priority areas',
        'Treatment limits reviewed',
      ],
    ),
    page(
      'exterior',
      'Exterior care',
      'TREATMENT / 02',
      'Good light finds the details.',
      'Exterior care can be a routine refresh or a more involved treatment. Paint condition, wheels, trim, and existing protection shape the conversation before a product or process is chosen.',
      'Choose the treatment for the finish you have.',
      [
        [
          'Start with a closer look',
          'Discuss existing scratches, failing coatings, repaired areas, and any special finishes. A real detailer should assess the vehicle before recommending correction or protection. The example package comparison shows inclusions without implying that one treatment repairs all paint defects.',
        ],
        [
          'Separate cleaning from correction',
          'A maintenance clean removes everyday buildup. Paint correction and specialist protection are distinct work with their own suitability and preparation needs. The sample finish-protection extra is an allowance for discussion, not a promise of a particular branded coating or lifespan.',
        ],
        [
          'Carry the care forward',
          'Ask for product-appropriate guidance after the visit and agree on future maintenance based on use and storage. A vehicle that lives outside or carries heavy daily use may need a different rhythm from a garaged weekend car.',
        ],
      ],
      [
        'Current finish and coatings',
        'Existing damage',
        'Cleaning or specialist treatment',
        'Aftercare guidance',
      ],
    ),
    page(
      'mobile-visit',
      'The mobile visit',
      'AT YOUR PLACE',
      'The studio comes to the driveway.',
      'A mobile appointment needs a workable space as much as a time on the calendar. The example booking preview brings vehicle details, treatment, access, and a sample slot together.',
      'A little preparation makes room for good work.',
      [
        [
          'Choose the location',
          'A private driveway or approved parking area should give the operator enough room around the vehicle. Building rules, drainage, access, and power or water arrangements need confirmation with a real provider. The sample planner lets you flag access that needs a conversation.',
        ],
        [
          'Prepare the vehicle',
          'Remove valuables and loose personal items, and identify the areas that need attention. Let the provider know about modifications or delicate equipment. Confirm responsibility for items such as child seats rather than assuming they will be removed and refitted.',
        ],
        [
          'Allow for the conditions',
          'Weather, shade, material drying, and the chosen treatment can affect timing. A real provider should explain rescheduling and handover expectations. Sample calendar slots here are interactive demonstration data and do not reserve a visit.',
        ],
      ],
      [
        'An approved work area',
        'Access and utility arrangements',
        'Personal belongings removed',
        'Weather and handover plan',
      ],
    ),
  ],
  'pet-grooming': [
    page(
      'coat-care',
      'Coat care',
      'EVERY COAT HAS A CHARACTER',
      'A plan for the dog in front of us.',
      'Coat texture, condition, size, and comfort all belong in a grooming conversation. A breed name is useful context, but it cannot describe every dog’s needs or preferences.',
      'Comfort first. The haircut follows.',
      [
        [
          'Start with the coat',
          'Short, long, double, curly, and mixed coats call for different discussions. Tell the groomer about tangles, changes, and the routine between visits. A real assessment is needed before agreeing on a style, particularly where coat condition limits the comfortable options.',
        ],
        [
          'Set a realistic style',
          'Bring a reference if it helps explain the length or shape you like. The groomer can discuss what suits the actual coat and the dog’s tolerance. This example makes no veterinary assessment and does not promise that every inspiration style can be achieved.',
        ],
        [
          'Build a comfortable rhythm',
          'The interval between visits depends on the dog, coat, chosen style, and home routine. Ask a real groomer to explain the care that fits your pet. The sample appointment flow records coat and comfort preferences before presenting demonstration times.',
        ],
      ],
      [
        'Coat type and condition',
        'A style reference if useful',
        'Comfort and handling notes',
        'Between-visit routine',
      ],
    ),
    page(
      'puppy-visits',
      'Puppy introductions',
      'SMALL STEPS / GOOD EXPERIENCES',
      'The first visit can be a gentle one.',
      'An introduction is about meeting the space, the tools, and the person at a pace that can be discussed with the owner. It does not have to begin with a complete haircut.',
      'A little familiarity goes a long way.',
      [
        [
          'Talk before the appointment',
          'A real groomer will discuss age, relevant care requirements, previous handling experiences, and any concerns. Vaccination and health requirements belong with the provider and the pet’s veterinary guidance. This fictional example does not set medical eligibility rules.',
        ],
        [
          'Make the plan flexible',
          'An introduction might focus on a short meet-and-greet and selected handling or grooming steps that the dog is comfortable with. The actual scope should be agreed with the groomer. The sample service option is deliberately separate from the full-groom package.',
        ],
        [
          'Continue the conversation',
          'After a real visit, ask what went comfortably and what to work on before returning. A gradual routine should be specific to the dog and guided by the appropriate professionals. No appointment or pet information is submitted through this demonstration.',
        ],
      ],
      [
        'Owner and groomer conversation',
        'Provider requirements reviewed',
        'A flexible first scope',
        'A plan for the next visit',
      ],
    ),
    page(
      'between-visits',
      'Between visits',
      'THE LITTLE ROUTINES',
      'Good care continues at home.',
      'A grooming visit is one part of a pet’s routine. Clear aftercare helps an owner understand what was done and which questions to bring to the next appointment.',
      'Care should feel understandable.',
      [
        [
          'Ask for a demonstration',
          'A real groomer can show an owner appropriate coat-care tools and techniques for their dog. Ask where tangles tend to begin and how to recognize when help is needed. Do not force unfamiliar handling or attempt to remove difficult matting based on a website guide.',
        ],
        [
          'Notice changes',
          'Changes in coat, skin, behavior, or tolerance should be discussed with the relevant professional. Grooming guidance does not replace veterinary advice. The example site keeps grooming preferences separate from health assessment and does not collect sensitive pet medical details.',
        ],
        [
          'Plan the next conversation',
          'Keep a note of the style, length, and any comfort preferences that worked well. A real provider can suggest a suitable return interval after seeing the dog. Our calendar shows how a booking experience could work without creating a live reservation.',
        ],
      ],
      [
        'A demonstrated home routine',
        'Appropriate tools',
        'Questions for the next visit',
        'Professional guidance for concerns',
      ],
    ),
  ],
  catering: [
    page(
      'weddings',
      'Wedding tables',
      'AN OCCASION TO REMEMBER',
      'The meal at the heart of the day.',
      'A wedding meal connects the room. Thoughtful planning brings the guest count, venue, service style, and timing together so hospitality can feel generous and unhurried.',
      'Make space for the people you brought together.',
      [
        [
          'Start with the kind of gathering',
          'A long shared table, a staffed buffet, and a relaxed welcome party create different experiences. The sample menu collection gives you a starting point. A real caterer would discuss the guest mix, dietary needs, and the atmosphere before finalizing the dishes.',
        ],
        [
          'Build the run of the day',
          'Venue access, ceremony timing, speeches, and other suppliers affect service. Agree on setup, kitchen facilities, staffing, equipment, clearing, and the end-of-service plan. A written scope should make responsibilities clear rather than leaving them implied by a per-person menu price.',
        ],
        [
          'Bring the details into one brief',
          'The event planner combines guest count, date, menu, dietary notes, and service style with an illustrative estimate. It does not include a contract, tasting reservation, venue booking, or payment. A real proposal follows discussion and confirmation.',
        ],
      ],
      [
        'Guest count and dietary needs',
        'Venue facilities',
        'Run of day',
        'Staffing, equipment, and clearing',
      ],
    ),
    page(
      'corporate',
      'Working lunches',
      'GOOD FOOD / GOOD COMPANY',
      'Give the meeting a better middle.',
      'A workplace meal needs to fit the schedule and the space. Clear portions, accessible menu descriptions, and a considered setup help guests find what they need without losing the rhythm of the day.',
      'Feed the room. Keep the day moving.',
      [
        [
          'Choose the format',
          'An individually portioned working lunch is different from a buffet for a team celebration. Consider where guests will eat, how long the break lasts, and whether service happens in one wave. The sample menus show a working-lunch option alongside more leisurely shared meals.',
        ],
        [
          'Make the dietary plan clear',
          'Collect dietary requests through an appropriate real event process and confirm ingredient and preparation questions with the caterer. Labels should be useful and accurate. This showroom demonstrates menu planning without collecting employees’ names or personal dietary records.',
        ],
        [
          'Coordinate the delivery',
          'Agree on a contact, arrival window, building access, setup surface, serving equipment, and clearing responsibility. The sample brief records delivery or staffed service so those choices remain visible in the summary. All pricing is illustrative USD, before unquoted extras.',
        ],
      ],
      [
        'Meeting and serving times',
        'Portion and service format',
        'Dietary coordination',
        'Delivery and clearing contact',
      ],
    ),
    page(
      'service-styles',
      'Ways to gather',
      'THE HOSPITALITY',
      'Same good table. Different ways to serve.',
      'How food reaches the guest is part of the occasion. Choose a service model that fits the venue, pace, and amount of support you want through the event.',
      'The service should suit the gathering.',
      [
        [
          'Delivery and setup',
          'A prepared spread can be delivered and arranged for a host-led event. Confirm serving equipment, holding arrangements, labels, and collection or disposal responsibilities. A real caterer must explain the relevant food-handling guidance for the actual menu and service conditions.',
        ],
        [
          'A staffed buffet',
          'A buffet can give guests choice while staff manage the service area. The scope should identify staffing time, setup, replenishment, equipment, and clearing. The sample planner adds a visible service allowance rather than implying that menu pricing includes an unlimited team.',
        ],
        [
          'Family-style service',
          'Shared platters at the table create a slower, conversational meal. Table space, guest numbers, service routes, and dish sequencing need attention. A real proposal would coordinate those details with the venue and host before confirming the menu and staffing.',
        ],
      ],
      [
        'Guest experience',
        'Venue space and facilities',
        'Service responsibilities',
        'Equipment and collection',
      ],
    ),
  ],
  barbershop: [
    page(
      'cuts',
      'Cuts & restyles',
      'THE CHAIR / THE CRAFT',
      'A cut that feels like you.',
      'Bring the look you have in mind, the time you spend styling it, and the things that have not worked before. A useful consultation connects the cut to everyday life.',
      'Good shape. Your own character.',
      [
        [
          'Start with the conversation',
          'Length, texture, growth patterns, and the way you usually wear your hair all matter. A reference photo can communicate a direction, while the barber can discuss what is practical for your hair. The sample service menu separates routine cuts from a longer restyle appointment.',
        ],
        [
          'Choose the right time',
          'The cut is shown as a 45-minute sample service; a restyle allows 60 minutes. These durations illustrate how a booking system can reserve appropriate time. A real shop would confirm the appointment length and scope for the specific service.',
        ],
        [
          'Leave with a routine',
          'Ask how the cut is intended to sit and what everyday styling involves. A real barber can demonstrate suitable techniques and explain when a tidy-up may be useful. The showroom records the selected service and barber but makes no live reservation.',
        ],
      ],
      [
        'Preferred length and shape',
        'Everyday styling routine',
        'Reference images if useful',
        'Time for a consultation',
      ],
    ),
    page(
      'beard-care',
      'Beard & detail',
      'THE FINISHING WORK',
      'Bring the whole look together.',
      'A beard shape should work with the haircut and the way you prefer to maintain it. The cut-and-beard service leaves time for the smaller details instead of treating them as an afterthought.',
      'The detail is part of the cut.',
      [
        [
          'Talk about the shape',
          'Explain the length you want to keep and the areas you would like to define. A barber can discuss the actual growth pattern and the tools or methods appropriate for the service. The sample site shows a consultation-led experience without assuming one shape suits everyone.',
        ],
        [
          'Allow the extra time',
          'The combined service is listed as a 60-minute sample appointment at $52. That gives the booking preview a clear duration and price to carry through barber and time selection. Actual scope, products, and optional treatments would be confirmed by the real shop.',
        ],
        [
          'Keep it comfortable',
          'Mention product preferences or handling concerns before the service begins. Ask for suitable maintenance guidance at the end of a real appointment. Any skin-related concerns should be directed to an appropriate professional; this example does not provide medical advice.',
        ],
      ],
      [
        'Length to keep',
        'Shape and detail preferences',
        'Service duration',
        'Product preferences',
      ],
    ),
    page(
      'shop',
      'Around the shop',
      'YOUR NEIGHBORHOOD CHAIR',
      'Come in. Take a little time.',
      'Common Ground is a fictional neighborhood barbershop with an easygoing approach: a clear menu, a conversation before the cut, and enough room in the appointment to do the details well.',
      'A good place to reset.',
      [
        [
          'Choose your person',
          'The sample team introduces Alex, Jordan, and Sam with different service interests. These are fictional profiles, not claims about real credentials. “First available” remains an option for visitors who value the next suitable time over a named barber.',
        ],
        [
          'Know the rhythm',
          'The demonstration calendar offers a small set of sample time slots and makes the service duration visible. A real shop would manage availability, late arrivals, cancellations, and accessibility questions through its actual booking policy and contact channel.',
        ],
        [
          'Bring a direction',
          'A reference, a familiar style, or simply “I want something easier to maintain” can begin the conversation. The example is designed to show how a polished website can prepare someone for a visit while keeping the booking process straightforward.',
        ],
      ],
      [
        'A service that fits',
        'A barber or first available',
        'Time for a conversation',
        'A clear appointment summary',
      ],
    ),
  ],
};
