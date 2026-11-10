export type SampleReview = {
  platform: 'Google' | 'Yelp' | 'Facebook' | 'Glassdoor';
  name: string;
  context: string;
  quote: string;
  rating?: 4 | 5;
  portrait?: number;
};

export type IndustryReviews = {
  title: string;
  customers: SampleReview[];
  team: SampleReview;
};

// Original fictional copy for the showroom. Never treat these as platform data.
export const sampleReviews: Record<string, IndustryReviews> = {
  'food-trucks': {
    title: 'Good food. A few good words.',
    customers: [
      {
        platform: 'Google',
        name: 'Maya R.',
        portrait: 0,
        context: 'Lunch at the truck',
        rating: 5,
        quote:
          'The mushroom tacos had just as much character as the carne asada. Loved being able to check the stop and menu before heading out for lunch.',
      },
      {
        platform: 'Yelp',
        name: 'Theo M.',
        context: 'Saturday street-food stop',
        rating: 4,
        quote:
          'The salsa verde was the highlight. There was a little line at lunchtime, but the crew gave us a clear wait estimate and everything came out hot.',
      },
      {
        platform: 'Facebook',
        name: 'Elena P.',
        portrait: 1,
        context: 'Backyard birthday',
        quote:
          'We booked the truck for a birthday and chose a mix of tacos for the group. The serving plan made hosting feel easy, and the vegetarian option was a hit.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Jordan K.',
      context: 'Truck crew member',
      rating: 4,
      quote:
        'Prep lists and clearly assigned stations help on a busy service. Weekend shifts move quickly, but the team makes time to show new crew members how the line works.',
    },
  },
  hvac: {
    title: 'Comfort starts with being heard.',
    customers: [
      {
        platform: 'Google',
        name: 'Avery L.',
        portrait: 2,
        context: 'Cooling repair visit',
        rating: 5,
        quote:
          'Our upstairs was warm even with the air running. The technician explained what they were checking, walked through the options, and left us with a clear next step.',
      },
      {
        platform: 'Yelp',
        name: 'Marcus D.',
        context: 'Seasonal maintenance',
        rating: 4,
        quote:
          'The maintenance checklist was easy to follow, and I appreciated the filter-size note. The arrival window was a little broad, but the update before the visit helped.',
      },
      {
        platform: 'Facebook',
        name: 'Nina S.',
        portrait: 3,
        context: 'Replacement consultation',
        quote:
          'We had questions about replacing an older system. They talked through comfort, sizing, and maintenance without rushing us into a decision.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Cameron T.',
      context: 'Service technician',
      rating: 4,
      quote:
        'The morning schedule includes time to review job notes and parts. Summer calls can stack up, so the dispatch check-ins and ride-along training make a difference.',
    },
  },
  'lawn-care': {
    title: 'A yard worth talking about.',
    customers: [
      {
        platform: 'Google',
        name: 'Lena W.',
        portrait: 4,
        context: 'Recurring lawn care',
        rating: 5,
        quote:
          'The edges around the walk look tidy, and the clippings are cleared before they leave. Having a regular mowing rhythm has made the yard much easier to enjoy.',
      },
      {
        platform: 'Yelp',
        name: 'Owen H.',
        portrait: 5,
        context: 'Seasonal cleanup',
        rating: 4,
        quote:
          'The spring cleanup covered the beds and the leaves under the hedge. Rain moved our date, but the revised plan was explained and the gate was latched afterward.',
      },
      {
        platform: 'Facebook',
        name: 'Priya B.',
        context: 'Care-plan consultation',
        quote:
          'We wanted a manageable plan for a small yard, not every service on the list. The conversation about mowing frequency and seasonal tasks was exactly what we needed.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Alex F.',
      context: 'Landscape crew member',
      rating: 4,
      quote:
        'Route notes include gate access and the areas each client wants protected. Weather can reshape a week, but the equipment checks and crew briefings keep expectations clear.',
    },
  },
  cleaning: {
    title: 'The little details people notice.',
    customers: [
      {
        platform: 'Google',
        name: 'Sofia C.',
        portrait: 6,
        context: 'Recurring home clean',
        rating: 5,
        quote:
          'Coming home to a reset kitchen and bathrooms felt wonderful. We agreed on the rooms beforehand, and the small details around the taps and mirrors were noticed.',
      },
      {
        platform: 'Yelp',
        name: 'Ben A.',
        portrait: 7,
        context: 'First deep clean',
        rating: 4,
        quote:
          'The room checklist made it easy to explain our priorities. Our first visit needed extra time, but they discussed that with us before adding anything to the scope.',
      },
      {
        platform: 'Facebook',
        name: 'Iris M.',
        context: 'Move-out cleaning',
        quote:
          'The empty-home checklist helped us coordinate with the movers. We knew what to leave accessible and which appliance interiors to add before the cleaning day.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Riley N.',
      context: 'Residential cleaning specialist',
      rating: 4,
      quote:
        'Room-by-room notes and labeled supplies make starting a new home less stressful. The work is physical, and realistic travel time between visits is something the team talks about.',
    },
  },
  janitorial: {
    title: 'Details that make a workplace work.',
    customers: [
      {
        platform: 'Google',
        name: 'Daniel V.',
        portrait: 8,
        context: 'Office cleaning program',
        rating: 5,
        quote:
          'The walkthrough turned our vague request into a clear schedule for restrooms, desks, and shared areas. Having one written scope makes our weekly check-in much simpler.',
      },
      {
        platform: 'Yelp',
        name: 'Keisha R.',
        portrait: 9,
        context: 'Retail facility care',
        rating: 4,
        quote:
          'We needed cleaning around opening hours and deliveries. It took a little coordination to settle the schedule, but the entry and high-touch-area checklist is useful.',
      },
      {
        platform: 'Facebook',
        name: 'Morgan E.',
        context: 'Shared-office management',
        quote:
          'The access notes and supply responsibilities were agreed before the first visit. That attention to the handoff matters when several businesses share the same building.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Taylor G.',
      context: 'Evening cleaning crew member',
      rating: 4,
      quote:
        'Each facility has a scope sheet and clear key-handling instructions. Evening work requires a steady routine; the site walkthrough and supply training helped me get comfortable.',
    },
  },
  'pressure-washing': {
    title: 'A fresh look, thoughtfully done.',
    customers: [
      {
        platform: 'Google',
        name: 'Drew P.',
        context: 'Driveway and walkway',
        rating: 5,
        quote:
          'They checked the surface and pointed out an older stain before starting. The walkway looks refreshed, and I appreciated knowing what cleaning could and could not change.',
      },
      {
        platform: 'Yelp',
        name: 'Amara J.',
        portrait: 10,
        context: 'Patio cleaning',
        rating: 4,
        quote:
          'The patio furniture and nearby plants were part of the preparation conversation. We moved the date for weather, but the scope stayed clear from the first message.',
      },
      {
        platform: 'Facebook',
        name: 'Luis C.',
        context: 'Exterior-care consultation',
        quote:
          'I assumed every surface would get the same treatment. The explanation about siding, concrete, and the condition of our deck helped us choose the right project.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Jamie S.',
      portrait: 11,
      context: 'Exterior cleaning technician',
      rating: 4,
      quote:
        'Surface checks and setup are treated as part of the job. There is a lot of equipment to manage, and practicing hose routing and shutdown routines before a visit helps.',
    },
  },
  handyman: {
    title: 'Small projects. Lasting impressions.',
    customers: [
      {
        platform: 'Google',
        name: 'Caleb B.',
        portrait: 12,
        context: 'A list of small repairs',
        rating: 5,
        quote:
          'A sticking door, a loose handle, and shelves we had been putting off finally had a plan. The checklist helped us group the jobs into one sensible visit.',
      },
      {
        platform: 'Yelp',
        name: 'Zoe H.',
        portrait: 13,
        context: 'Shelf installation',
        rating: 4,
        quote:
          'We discussed the wall type and shelf load before the appointment. One fixing needed a different part, but I appreciated the explanation instead of a rushed workaround.',
      },
      {
        platform: 'Facebook',
        name: 'Elliot N.',
        context: 'Home project planning',
        quote:
          'Sending a few photos first made the conversation useful. They helped separate the small repairs from work that needed a specialist, which made our project list manageable.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Sam D.',
      context: 'Maintenance technician',
      rating: 4,
      quote:
        'The variety keeps the work interesting. Clear photos and a materials review help with preparation, and it is encouraged to flag work that belongs with a specialist.',
    },
  },
  painting: {
    title: 'How a new finish feels.',
    customers: [
      {
        platform: 'Google',
        name: 'Grace F.',
        portrait: 14,
        context: 'Living-room repaint',
        rating: 5,
        quote:
          'We tested the color in different light before choosing. The preparation around trim and the tidy end-of-day setup made it easier to live at home during the work.',
      },
      {
        platform: 'Yelp',
        name: 'Noah W.',
        context: 'Exterior estimate',
        rating: 4,
        quote:
          'The estimate explained the surface preparation as well as the paint. Weather affected the proposed timing, but the stages were clear and the finish options were useful.',
      },
      {
        platform: 'Facebook',
        name: 'Tessa K.',
        context: 'Bedrooms and hallway',
        quote:
          'The conversation about sheen was something we had overlooked. Seeing how a washable finish would work in the hallway helped us make a choice we feel good about.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Robin L.',
      portrait: 15,
      context: 'Painting crew member',
      rating: 4,
      quote:
        'Prep and protection get their own space in the schedule. There are long days on larger jobs, but reviewing the finish standard together gives the crew a shared target.',
    },
  },
  detailing: {
    title: 'The details, from the driver’s seat.',
    customers: [
      {
        platform: 'Google',
        name: 'Miles T.',
        portrait: 16,
        context: 'Interior reset',
        rating: 5,
        quote:
          'The family car needed attention around the seats and cargo area. We talked through the condition first, and the package description helped me choose without guessing.',
      },
      {
        platform: 'Yelp',
        name: 'Jade R.',
        portrait: 17,
        context: 'Exterior detail',
        rating: 4,
        quote:
          'The finish looked clean and carefully dried. A few older marks were still visible, just as discussed during the inspection; I liked having realistic expectations.',
      },
      {
        platform: 'Facebook',
        name: 'Adrian M.',
        context: 'Mobile detailing visit',
        quote:
          'The parking-space and access checklist made the mobile appointment easy to prepare for. We added pet-hair attention after reviewing the interior together.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Casey V.',
      context: 'Detailing technician',
      rating: 4,
      quote:
        'Condition photos and a package checklist help define each job. Interior work takes patience, and the team encourages a careful final inspection before packing away.',
    },
  },
  'pet-grooming': {
    title: 'Good words from the other end of the leash.',
    customers: [
      {
        platform: 'Google',
        name: 'Ruby A.',
        portrait: 18,
        context: 'First grooming visit',
        rating: 5,
        quote:
          'Our dog takes time to warm up to new places. The intake conversation covered that, and the groomer explained a comfortable plan instead of promising a dramatic first cut.',
      },
      {
        platform: 'Yelp',
        name: 'Felix S.',
        portrait: 19,
        context: 'Bath and brush',
        rating: 4,
        quote:
          'The coat-length guidance helped us book the right visit. Pickup was a little later than expected, but we received an update and a helpful brushing tip afterward.',
      },
      {
        platform: 'Facebook',
        name: 'Harper D.',
        context: 'Coat-care consultation',
        quote:
          'We appreciated talking about tangles and our dog’s comfort before choosing a style. The between-visit care notes were simple enough for us to keep up with at home.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Quinn E.',
      context: 'Grooming assistant',
      rating: 4,
      quote:
        'The team shares handling notes before each appointment and gives new assistants time to learn the routine. Busy days need flexibility, but the pet’s comfort stays central.',
    },
  },
  catering: {
    title: 'The table is only the beginning.',
    customers: [
      {
        platform: 'Google',
        name: 'Clara P.',
        portrait: 20,
        context: 'Family celebration',
        rating: 5,
        quote:
          'We wanted a generous meal that still felt relaxed. The menu discussion covered our guests’ preferences, serving style, and the flow of the evening without overwhelming us.',
      },
      {
        platform: 'Yelp',
        name: 'Isaac G.',
        context: 'Office lunch',
        rating: 4,
        quote:
          'The guest-count and dietary notes were easy to organize. We adjusted one dish before the event, and the final brief made the delivery and setup expectations clear.',
      },
      {
        platform: 'Facebook',
        name: 'Naomi L.',
        portrait: 21,
        context: 'Anniversary gathering',
        quote:
          'Choosing the menu by occasion helped us get started. The attention to table space, serving equipment, and cleanup responsibilities made the planning feel considered.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Devon B.',
      context: 'Event service team member',
      rating: 4,
      quote:
        'The event brief includes guest count, dietary notes, and who owns each part of setup. Event hours can run late, but a shared service plan helps the team work together.',
    },
  },
  barbershop: {
    title: 'Word travels, chair to chair.',
    customers: [
      {
        platform: 'Google',
        name: 'Leon H.',
        portrait: 22,
        context: 'Cut and beard shape',
        rating: 5,
        quote:
          'We talked through how I wear my hair before the first cut. The beard shape felt like it belonged with the haircut, and I left knowing how to style it at home.',
      },
      {
        platform: 'Yelp',
        name: 'Mateo C.',
        portrait: 23,
        context: 'First appointment',
        rating: 4,
        quote:
          'The barber profiles helped me choose a chair. The previous appointment ran a little long, but the consultation was unrushed and the neckline finish was careful.',
      },
      {
        platform: 'Facebook',
        name: 'Rowan J.',
        context: 'Regular maintenance cut',
        quote:
          'I like being able to choose the service and appointment together. The conversation about keeping a shape between visits made the next booking an easy decision.',
      },
    ],
    team: {
      platform: 'Glassdoor',
      name: 'Blake F.',
      context: 'Barber',
      rating: 4,
      quote:
        'There is room to build your own approach while keeping consultation and station-care routines consistent. Saturdays stay busy, and a thoughtful booking schedule really matters.',
    },
  },
};
