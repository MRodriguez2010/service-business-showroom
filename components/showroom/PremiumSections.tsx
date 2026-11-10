'use client';
import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  Circle,
  Leaf,
  Minus,
  Plus,
  Snowflake,
  Sun,
  Wind,
} from 'lucide-react';
import { Photo, SiteLink, Action, useSite } from './SiteParts';
import type { IndustryContent } from '@/lib/industry-types';

export function ColorStudio() {
  const palettes = [
    { name: 'Warm linen', wall: '#D9CDBA', trim: '#F7F0E4', accent: '#A67352' },
    {
      name: 'Garden quiet',
      wall: '#8B947D',
      trim: '#F0EBDD',
      accent: '#C2A384',
    },
    {
      name: 'Evening blue',
      wall: '#536575',
      trim: '#EAE5DD',
      accent: '#B8835F',
    },
    { name: 'Soft clay', wall: '#C79E8B', trim: '#F8EFDE', accent: '#6B7262' },
  ];
  const [selected, setSelected] = useState(0);
  const [finish, setFinish] = useState('Matte');
  const p = palettes[selected];
  return (
    <section className="section color-studio">
      <div className="studio-copy" data-reveal>
        <p className="eyebrow">THE COLOR STUDIO / TRY A MOOD</p>
        <h2>
          A little color.
          <br />
          <em>A whole new feeling.</em>
        </h2>
        <p>
          See how a palette changes a simple space. Choose a mood, then a
          finish. Confirm real paint samples in the room before deciding.
        </p>
        <div className="swatch-options" role="group" aria-label="Room palettes">
          {palettes.map((x, i) => (
            <button
              key={x.name}
              aria-pressed={i === selected}
              aria-label={x.name}
              onClick={() => setSelected(i)}
              style={{ background: x.wall, color: '#000' }}
            >
              {i === selected && <Check size={18} />}
            </button>
          ))}
        </div>
        <strong className="studio-name" aria-live="polite">
          {p.name}
        </strong>
        <div className="finish-options" role="group" aria-label="Paint finish">
          {['Matte', 'Eggshell', 'Satin'].map((f) => (
            <button
              key={f}
              aria-pressed={f === finish}
              onClick={() => setFinish(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="studio-note">
          {finish === 'Matte'
            ? 'A low-sheen appearance with a quiet, soft look. Product suitability depends on the surface.'
            : finish === 'Eggshell'
              ? 'A subtle sheen that catches a little light. Compare real product samples for the room.'
              : 'A more noticeable sheen. Ask about surface preparation and product-specific care.'}
        </p>
      </div>
      <figure
        className="room-scene"
        aria-label={`Illustrative room in ${p.name} with ${finish.toLowerCase()} finish`}
      >
        <svg
          viewBox="0 0 640 540"
          role="img"
          aria-label="Simplified living room color visualization"
        >
          <defs>
            <linearGradient id="room-light">
              <stop stopColor="#fff" stopOpacity=".32" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="640" height="470" fill={p.wall} />
          <path d="M0 420H640V540H0" fill="#A58C70" />
          <path d="M0 418H640" stroke={p.trim} strokeWidth="16" />
          <rect x="380" y="50" width="195" height="265" fill={p.trim} />
          <rect x="395" y="65" width="165" height="235" fill="#B5C4B4" />
          <path d="M395 65H560L290 418H135Z" fill="url(#room-light)" />
          <path d="M477 65V300M395 175H560" stroke={p.trim} strokeWidth="9" />
          <rect
            x="66"
            y="228"
            width="305"
            height="180"
            rx="28"
            fill="#E8DDC9"
          />
          <rect
            x="49"
            y="302"
            width="340"
            height="126"
            rx="18"
            fill="#DDD0B9"
          />
          <rect x="49" y="316" width="45" height="105" rx="15" fill="#F1E5D1" />
          <rect
            x="344"
            y="316"
            width="45"
            height="105"
            rx="15"
            fill="#F1E5D1"
          />
          <rect
            x="102"
            y="272"
            width="94"
            height="72"
            rx="10"
            fill={p.accent}
          />
          <rect x="211" y="268" width="96" height="77" rx="10" fill={p.trim} />
          <path d="M76 428V447M361 428V447" stroke="#5C4A3D" strokeWidth="9" />
          <ellipse cx="450" cy="453" rx="76" ry="22" fill="#5C4A3D" />
          <path d="M450 459V511" stroke="#5C4A3D" strokeWidth="9" />
          <rect x="430" y="412" width="24" height="38" rx="3" fill={p.accent} />
          <path d="M445 412Q390 357 439 370Q477 350 445 412" fill="#48583D" />
        </svg>
        <figcaption>Digital illustration · Colors are approximate</figcaption>
      </figure>
    </section>
  );
}
export function ComfortFinder() {
  const [choice, setChoice] = useState(0);
  const needs = [
    [
      'Not cooling',
      'A cooling concern starts with what changed. Note the rooms affected and when you first noticed it.',
      'repairs',
      Snowflake,
    ],
    [
      'Planning a replacement',
      'Begin with the home and your comfort priorities. A walkthrough comes before equipment selection.',
      'replacement',
      Wind,
    ],
    [
      'Uneven rooms',
      'Air movement, room use, and the existing setup all belong in the conversation.',
      'air-quality',
      Sun,
    ],
  ] as const;
  const selected = needs[choice];
  return (
    <section className="section comfort-finder">
      <div className="comfort-title" data-reveal>
        <p className="eyebrow">A CLEARER NEXT STEP</p>
        <h2>
          Start with how
          <br />
          your home <em>feels.</em>
        </h2>
        <p>No model numbers required. Choose what is on your mind.</p>
      </div>
      <div className="comfort-controls">
        <div role="group" aria-label="Comfort concern">
          {needs.map(([name, , , Icon], i) => (
            <button
              key={name}
              aria-pressed={choice === i}
              onClick={() => setChoice(i)}
            >
              <Icon size={24} />
              <span>{name}</span>
              <ArrowUpRight size={20} />
            </button>
          ))}
        </div>
        <div className="comfort-answer" key={choice}>
          <span className="eyebrow">YOUR STARTING POINT</span>
          <p>{selected[1]}</p>
          <SiteLink page={selected[2]} className="text-link">
            Explore this service <ArrowRight size={18} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
export function FacilityMatrix() {
  const [type, setType] = useState(0);
  const types = ['Office', 'Retail', 'Shared building'];
  const tasks = [
    ['Restrooms', 'Each service', 'Each service', 'Each service'],
    ['Entry glass', 'Weekly + spot care', 'Each service', 'Weekly + spot care'],
    ['Breakroom', 'Each service', 'If included', 'If included'],
    ['Common floors', 'Each service', 'Each service', 'Each service'],
    ['Detailed floor work', 'Periodic', 'Periodic', 'Periodic'],
  ];
  return (
    <section className="section facility-matrix">
      <div className="matrix-intro" data-reveal>
        <p className="eyebrow">THE SERVICE BLUEPRINT</p>
        <h2>
          Different rooms.
          <br />
          Different rhythms.
        </h2>
        <p>
          Explore a sample scope. A real walkthrough would set the tasks,
          materials, access, and frequency.
        </p>
        <div className="matrix-tabs" role="group" aria-label="Facility type">
          {types.map((t, i) => (
            <button
              aria-pressed={i === type}
              key={t}
              onClick={() => setType(i)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="matrix-sheet">
        <div className="matrix-sheet-top">
          <span>SCOPE / {types[type].toUpperCase()}</span>
          <span>ILLUSTRATIVE PROGRAM</span>
        </div>
        <table>
          <caption className="sr-only">
            Sample {types[type]} cleaning schedule
          </caption>
          <thead>
            <tr>
              <th>Area of attention</th>
              <th>Sample rhythm</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t[0]}>
                <th>{t[0]}</th>
                <td>
                  <span className="status-dot" />
                  {t[type + 1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <SiteLink page="book" className="matrix-action">
          Build a walkthrough brief <ArrowUpRight size={22} />
        </SiteLink>
      </div>
    </section>
  );
}
export function RoomExplorer() {
  const [room, setRoom] = useState('Kitchen');
  const details: Record<string, string[]> = {
    Kitchen: [
      'Accessible counters and backsplash',
      'Sink and fixtures',
      'Appliance exteriors',
      'Appropriate floor care',
    ],
    Bathrooms: [
      'Basin, fixtures, and mirror',
      'Shower and tub surfaces',
      'Toilet and surrounding area',
      'Appropriate floor care',
    ],
    'Living spaces': [
      'Accessible dusting',
      'Reachable surfaces',
      'Floor and rug care',
      'Agreed finishing touches',
    ],
    Bedrooms: [
      'Accessible surfaces',
      'Reachable dusting',
      'Floor care',
      'Agreed bed-making scope',
    ],
  };
  return (
    <section className="section room-explorer">
      <div
        className="room-plan"
        aria-label="Choose a room to see its sample cleaning scope"
      >
        {Object.keys(details).map((r, i) => (
          <button
            className={'plan-room room-' + i}
            key={r}
            aria-pressed={r === room}
            onClick={() => setRoom(r)}
          >
            <span className="room-furniture" aria-hidden="true" />
            <span>{r}</span>
            <Plus size={18} />
          </button>
        ))}
        <span className="plan-caption">A LITTLE LOOK INSIDE / TAP A ROOM</span>
      </div>
      <div className="room-details" data-reveal>
        <p className="eyebrow">ROOM BY ROOM</p>
        <h2>
          Thoughtfulness,
          <br />
          <em>in the details.</em>
        </h2>
        <p>
          Explore a sample regular reset. Your actual checklist would be agreed
          with the cleaner.
        </p>
        <div className="room-list" key={room}>
          <h3>{room}</h3>
          <ul>
            {details[room].map((x) => (
              <li key={x}>
                <Check size={17} />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <Action page="checklist" secondary>
          See the full approach
        </Action>
      </div>
    </section>
  );
}
export function WorkOrder() {
  const tasks = [
    'That door that catches',
    'The shelves still in the box',
    'The loose cabinet handle',
    'The trim that needs a finish',
  ];
  const [chosen, setChosen] = useState<number[]>([0]);
  return (
    <section className="section workshop-order">
      <div data-reveal>
        <p className="eyebrow">THE FRIDGE LIST, RECONSIDERED</p>
        <h2>
          One visit.
          <br />
          <em>A shorter list.</em>
        </h2>
        <p>
          Group the small jobs you keep walking past. A real provider would
          confirm the scope and materials before the visit.
        </p>
        <Action
          plan={{
            tasks: chosen.map(
              (i) =>
                [
                  'Adjust a door',
                  'Hang shelves',
                  'Replace cabinet hardware',
                  'Minor trim repair',
                ][i],
            ),
          }}
        >
          Build your work order
        </Action>
      </div>
      <div className="work-order-paper">
        <div className="paper-top">
          <span>GOOD MEASURE / WORK ORDER</span>
          <span>No. 001</span>
        </div>
        {tasks.map((t, i) => (
          <button
            key={t}
            aria-pressed={chosen.includes(i)}
            onClick={() =>
              setChosen(
                chosen.includes(i)
                  ? chosen.filter((x) => x !== i)
                  : [...chosen, i],
              )
            }
          >
            {chosen.includes(i) ? (
              <CheckCheck size={22} />
            ) : (
              <Circle size={22} />
            )}
            <span>{t}</span>
            <small>0{i + 1}</small>
          </button>
        ))}
        <div className="paper-bottom" aria-live="polite">
          <strong>
            {chosen.length} {chosen.length === 1 ? 'job' : 'jobs'} on your list
          </strong>
          <span>TRY THE PROJECT BUILDER ↗</span>
        </div>
      </div>
    </section>
  );
}
export function CoatSelector() {
  const [coat, setCoat] = useState(0);
  const coats = [
    [
      'Short & smooth',
      'A bath, careful drying, and a brush-through can form the starting point. A real groomer confirms products and handling for your dog.',
    ],
    [
      'Long & double',
      'Coat condition and undercoat needs shape the visit. Discuss tangles, seasonal shedding, and the desired finish with the groomer.',
    ],
    [
      'Curly & wavy',
      'Length, matting, and your home routine affect the comfortable options. Start with a coat assessment before choosing a style.',
    ],
  ];
  return (
    <section className="section coat-selector">
      <div className="coat-photo" data-parallax="16">
        <Photo variant="secondary" />
        <span className="coat-sticker">
          KINDNESS
          <br />
          LOOKS GOOD
          <br />
          ON EVERYONE.
        </span>
      </div>
      <div data-reveal>
        <p className="eyebrow">EVERY DOG IS THEIR OWN DOG</p>
        <h2>
          A little less fuss.
          <br />
          <em>A little more wag.</em>
        </h2>
        <p>Find a starting point for your best friend’s coat.</p>
        <div className="coat-tabs" role="group" aria-label="Coat type">
          {coats.map(([c], i) => (
            <button
              key={c}
              aria-pressed={i === coat}
              onClick={() => setCoat(i)}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="coat-answer" aria-live="polite">
          {coats[coat][1]}
        </p>
        <Action page="coat-care" secondary>
          Explore coat care
        </Action>
      </div>
    </section>
  );
}
export function ServiceStyles() {
  const [style, setStyle] = useState(0);
  const styles = [
    [
      '01',
      'Drop off. Set out. Gather.',
      'Delivery & setup',
      'A generous spread, prepared for a host-led occasion. Discuss equipment, food-handling guidance, and clearing.',
    ],
    [
      '02',
      'Let us take care of the table.',
      'Staffed buffet',
      'Choice and a little support through service. Staffing time, equipment, and guest flow belong in the brief.',
    ],
    [
      '03',
      'Pass the plates. Stay a while.',
      'Family-style',
      'Shared platters and conversation. Plan table space, service timing, and the rhythm of the meal.',
    ],
  ];
  return (
    <section className="section hospitality-styles">
      <p className="eyebrow">THE ART OF HOSTING</p>
      <h2>
        How will you <em>gather?</em>
      </h2>
      <div className="hospitality-layout">
        <div
          className="style-index"
          role="group"
          aria-label="Catering service style"
        >
          {styles.map(([n, , label], i) => (
            <button
              key={n}
              aria-pressed={style === i}
              onClick={() => setStyle(i)}
            >
              <small>{n}</small>
              <span>{label}</span>
              <ArrowUpRight size={21} />
            </button>
          ))}
        </div>
        <div className="style-feature" key={style}>
          <Photo variant="secondary" />
          <div>
            <h3>{styles[style][1]}</h3>
            <p>{styles[style][3]}</p>
            <SiteLink page="service-styles" className="text-link">
              Explore the hospitality <ArrowRight size={18} />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
export function PackageComparison() {
  const [selected, setSelected] = useState(2);
  const packages = ['The refresh', 'Interior reset', 'Complete detail'];
  const rows = [
    ['Exterior wash', '✓', '—', '✓'],
    ['Wheels & tires', '✓', '—', '✓'],
    ['Cabin surfaces', 'Light care', 'Detailed', 'Detailed'],
    ['Seats & mats', 'Light care', 'Detailed', 'Detailed'],
    ['Condition review', 'Included', 'Included', 'Included'],
  ];
  return (
    <section className="section treatment-comparison">
      <div className="treatment-heading" data-reveal>
        <p className="eyebrow">CHOOSE THE DEPTH</p>
        <h2>
          THE RIGHT
          <br />
          <em>LEVEL OF DETAIL.</em>
        </h2>
        <p>
          Compare the sample treatments. Vehicle size and condition influence
          the final scope.
        </p>
      </div>
      <div className="comparison-workspace">
        <div
          className="treatment-tabs"
          role="group"
          aria-label="Detailing treatments"
        >
          {packages.map((p, i) => (
            <button
              key={p}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <small>0{i + 1}</small>
              {p}
              <strong>${[95, 165, 245][i]}</strong>
            </button>
          ))}
        </div>
        <dl className="treatment-inclusions">
          {rows.map((r) => (
            <div key={r[0]}>
              <dt>{r[0]}</dt>
              <dd>{r[selected + 1]}</dd>
            </div>
          ))}
        </dl>
        <p className="sample-note">
          Illustrative starting prices for a maintained sedan. Extras and
          assessment may change the scope.
        </p>
        <Action
          plan={{
            package: [
              'The refresh',
              'The interior reset',
              'The complete detail',
            ][selected],
          }}
        >
          Configure this visit
        </Action>
      </div>
    </section>
  );
}
export function SurfaceAtlas() {
  const [selected, setSelected] = useState(0);
  const materials = [
    [
      'Concrete',
      'An area-based scope for driveways and paths. Staining, drainage, and existing coatings need a closer look.',
      'hardscape',
    ],
    [
      'Pavers',
      'Jointing material and surface condition influence the method. Review the area before choosing a treatment.',
      'hardscape',
    ],
    [
      'Siding',
      'Material, coatings, openings, and nearby planting shape a careful house-washing plan.',
      'house-washing',
    ],
  ];
  return (
    <section className="section surface-atlas">
      <div className="atlas-heading" data-reveal>
        <p className="eyebrow">THE SURFACE ATLAS</p>
        <h2>
          Not every surface
          <br />
          needs <em>the same care.</em>
        </h2>
        <p>Choose the material to see what belongs in the conversation.</p>
      </div>
      <div className="atlas-layout">
        <div
          className={`material-visual material-${selected}`}
          aria-hidden="true"
        >
          <span>0{selected + 1}</span>
          <div />
          <strong>{materials[selected][0]}</strong>
        </div>
        <div className="atlas-options">
          <div role="group" aria-label="Exterior material">
            {materials.map(([m], i) => (
              <button
                key={m}
                aria-pressed={i === selected}
                onClick={() => setSelected(i)}
              >
                {m}
                <ArrowUpRight size={20} />
              </button>
            ))}
          </div>
          <p aria-live="polite">{materials[selected][1]}</p>
          <SiteLink page={materials[selected][2]} className="text-link">
            Read the surface guide <ArrowRight size={18} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
export function LawnCalendar() {
  const [season, setSeason] = useState(0);
  const seasons = [
    [
      'Spring',
      'A thoughtful reset',
      'Clear winter debris, review the lawn and borders, and agree on the first growing-season priorities.',
      Leaf,
    ],
    [
      'Summer',
      'Room to enjoy',
      'A mowing rhythm shaped by growth, access, and weather, with care for the borders you use every day.',
      Sun,
    ],
    [
      'Fall',
      'A clean finish',
      'Plan leaf collection, seasonal cleanup, and a considered handover as growth slows.',
      Wind,
    ],
    [
      'Winter',
      'Plan what is next',
      'Review the year, note trouble areas, and discuss the priorities for the next growing season.',
      Snowflake,
    ],
  ] as const;
  return (
    <section className="section lawn-calendar">
      <div className="season-rail">
        <p className="eyebrow">THE FIELD NOTES</p>
        <h2>
          Good care has
          <br />
          <em>its seasons.</em>
        </h2>
        <div role="group" aria-label="Season">
          {seasons.map(([s, , , Icon], i) => (
            <button
              aria-pressed={i === season}
              key={s}
              onClick={() => setSeason(i)}
            >
              <Icon size={21} />
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="season-feature">
        <Photo variant="secondary" />
        <div key={season}>
          <span className="eyebrow">
            0{season + 1} / {seasons[season][0]}
          </span>
          <h3>{seasons[season][1]}</h3>
          <p>{seasons[season][2]}</p>
          <SiteLink page="seasons" className="text-link">
            The year in your yard <ArrowRight size={18} />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
export function MenuFeature() {
  return (
    <section className="section menu-feature">
      <div className="menu-feature-title" data-reveal>
        <p className="eyebrow">WHAT’S COOKING</p>
        <h2>
          SHORT MENU.
          <br />
          <em>LONG ON FLAVOR.</em>
        </h2>
        <Photo variant="secondary" />
      </div>
      <div className="menu-feature-list">
        {[
          [
            '01',
            'EMBER CHICKEN',
            'Charred chicken. Roasted tomato salsa. A squeeze of lime.',
            '$12',
          ],
          [
            '02',
            'MUSHROOM & MASA',
            'Seared mushrooms. Black beans. Something fresh and crunchy.',
            '$11',
          ],
          [
            '03',
            'THE WHOLE SPREAD',
            'A taco trio, street corn, and chips to share.',
            '$17',
          ],
        ].map(([n, t, d, p]) => (
          <article key={n} data-reveal>
            <span>{n}</span>
            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
            <strong>{p}</strong>
          </article>
        ))}
        <div className="menu-feature-foot">
          <p>Sample menu · Illustrative USD prices</p>
          <Action page="menu">Find your favorite</Action>
        </div>
      </div>
    </section>
  );
}
export function BarberRitual() {
  const [selected, setSelected] = useState(0);
  const services = [
    [
      'THE CUT',
      '45 MIN',
      '$38',
      'A consultation, a considered shape, and the finishing details.',
    ],
    [
      'CUT & BEARD',
      '60 MIN',
      '$52',
      'Bring the haircut and beard together with time for both.',
    ],
    [
      'THE RESTYLE',
      '60 MIN',
      '$48',
      'A bigger change begins with a little more conversation.',
    ],
  ];
  return (
    <section className="section barber-ritual">
      <div className="barber-ledger">
        <p className="eyebrow">THE MENU AT THE MIRROR</p>
        <h2>
          TAKE A LITTLE
          <br />
          <em>TIME FOR YOU.</em>
        </h2>
        <div role="group" aria-label="Barber service">
          {services.map(([name, time, price], i) => (
            <button
              aria-pressed={i === selected}
              onClick={() => setSelected(i)}
              key={name}
            >
              <span>{name}</span>
              <small>{time}</small>
              <strong>{price}</strong>
              <ArrowUpRight size={19} />
            </button>
          ))}
        </div>
        <p aria-live="polite">{services[selected][3]}</p>
        <span className="sample-note">
          Sample services, durations, and USD prices.
        </span>
        <Action
          plan={{
            service: [
              'The cut · 45 min',
              'Cut & beard · 60 min',
              'The restyle · 60 min',
            ][selected],
          }}
        >
          Find your chair
        </Action>
      </div>
      <div className="barber-ritual-photo" data-parallax="20">
        <Photo variant="secondary" />
        <span>
          GOOD CONVERSATION.
          <br />A BETTER HAIR DAY.
        </span>
      </div>
    </section>
  );
}
export const signatureScenes: Record<string, () => React.ReactNode> = {
  'food-trucks': MenuFeature,
  hvac: ComfortFinder,
  'lawn-care': LawnCalendar,
  cleaning: RoomExplorer,
  janitorial: FacilityMatrix,
  'pressure-washing': SurfaceAtlas,
  handyman: WorkOrder,
  painting: ColorStudio,
  detailing: PackageComparison,
  'pet-grooming': CoatSelector,
  catering: ServiceStyles,
  barbershop: BarberRitual,
};

export function ServiceCollection({ content }: { content: IndustryContent }) {
  const { meta } = useSite();
  const [open, setOpen] = useState(0);
  const mappings: Record<string, string[]> = {
    hvac: ['repairs', 'replacement', 'care'],
    'lawn-care': ['weekly-care', 'seasons', 'landscape'],
    cleaning: ['recurring', 'deep-clean', 'move-out'],
    janitorial: ['offices', 'retail', 'day-porter'],
    'pressure-washing': ['hardscape', 'house-washing', 'hardscape'],
    handyman: ['repairs', 'installation', 'visit-guide'],
    painting: ['interiors', 'exteriors', 'color-studio'],
    detailing: ['exterior', 'interior', 'packages'],
    'pet-grooming': ['coat-care', 'coat-care', 'puppy-visits'],
    catering: ['service-styles', 'occasions', 'corporate'],
    barbershop: ['cuts', 'beard-care', 'cuts'],
    'food-trucks': ['menu', 'menu', 'event-menu'],
  };
  return (
    <section className={`section service-collection collection-${meta.id}`}>
      <div className="collection-heading" data-reveal>
        <p className="eyebrow">EXPLORE THE SERVICES</p>
        <h2>{content.serviceTitle}</h2>
        <p>{content.serviceIntro}</p>
      </div>
      <div className="collection-layout">
        <div className="collection-image" data-parallax="16">
          <Photo variant="secondary" />
          <span>{content.story.eyebrow}</span>
        </div>
        <div className="collection-list">
          {content.offers.map((o, i) => (
            <article key={o.title} className={i === open ? 'is-open' : ''}>
              <button
                aria-expanded={i === open}
                onClick={() => setOpen(i === open ? -1 : i)}
              >
                <small>0{i + 1}</small>
                <h3>{o.title}</h3>
                {i === open ? <Minus size={22} /> : <Plus size={22} />}
              </button>
              {i === open && (
                <div className="collection-detail">
                  <p>{o.text}</p>
                  <ul>
                    {o.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  {o.price && (
                    <strong>
                      {o.price} <small>Illustrative pricing</small>
                    </strong>
                  )}
                  <SiteLink page={mappings[meta.id][i]} className="text-link">
                    Explore the details <ArrowRight size={17} />
                  </SiteLink>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
