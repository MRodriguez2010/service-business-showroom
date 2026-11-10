'use client';
import { useState } from 'react';
import gallery from '@/lib/painting-gallery.json';
import { ArrowRight, Check, Leaf, Sun, Wind, Snowflake } from 'lucide-react';
import { SiteLink, Action, SectionTitle } from './SiteParts';
export function TruckSchedule() {
  return (
    <section className="truck-schedule">
      <div>
        <p className="eyebrow">FOLLOW THE GOOD FOOD</p>
        <h2>
          This week,
          <br />
          we’re around the corner.
        </h2>
        <SiteLink page="stops" className="text-link">
          See the sample schedule <ArrowRight size={16} />
        </SiteLink>
      </div>
      <div className="stop-cards">
        {[
          ['THU', 'Lunch at the Foundry', '11:30 AM – 2 PM'],
          ['FRI', 'Riverbend Market', '5 PM – 8:30 PM'],
          ['SAT', 'Cedar Park Commons', '12 PM – 4 PM'],
        ].map(([day, place, time]) => (
          <SiteLink page="stops" key={day} className="stop-card">
            <span className="day">{day}</span>
            <strong>{place}</strong>
            <span>{time}</span>
            <small>
              Sample stop <ArrowUpRightIcon />
            </small>
          </SiteLink>
        ))}
      </div>
    </section>
  );
}
function ArrowUpRightIcon() {
  return <span aria-hidden="true">↗</span>;
}
const dishes = [
  {
    name: 'Ember chicken',
    desc: 'Charred chicken, roasted tomato salsa, onion, cilantro.',
    price: '$12',
    category: 'Tacos',
    note: 'Dairy in crema',
  },
  {
    name: 'Mushroom & masa',
    desc: 'Seared mushrooms, black beans, crunchy cabbage, green salsa.',
    price: '$11',
    category: 'Tacos',
    note: 'Plant-based recipe',
  },
  {
    name: 'Roasted sweet potato',
    desc: 'Sweet potato, smoky black beans, pickled onion.',
    price: '$11',
    category: 'Tacos',
    note: 'Plant-based recipe',
  },
  {
    name: 'Street corn cup',
    desc: 'Warm corn, lime crema, cotija, and chili.',
    price: '$5',
    category: 'Sides & drinks',
    note: 'Contains dairy',
  },
  {
    name: 'Chips & house salsa',
    desc: 'Corn chips with a bright seasonal salsa.',
    price: '$4',
    category: 'Sides & drinks',
    note: 'Vegetarian',
  },
  {
    name: 'Agua fresca',
    desc: 'A changing fruit infusion, poured over ice.',
    price: '$4',
    category: 'Sides & drinks',
    note: 'Ask about today’s flavor',
  },
];
export function FoodMenu() {
  const [filter, setFilter] = useState('All');
  return (
    <>
      <section className="page-intro food-menu-intro">
        <p className="eyebrow">FRESH FROM OUR LITTLE KITCHEN</p>
        <h1>
          A short menu.
          <br />
          Big, happy flavors.
        </h1>
        <p>
          Three tacos to a plate. Salsa made for sharing. A little heat if you
          want it.
        </p>
      </section>
      <section className="section menu-section">
        <div className="menu-filters" role="group" aria-label="Menu categories">
          {['All', 'Tacos', 'Sides & drinks'].map((x) => (
            <button
              key={x}
              aria-pressed={x === filter}
              onClick={() => setFilter(x)}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="menu-dishes">
          {dishes
            .filter((d) => filter === 'All' || d.category === filter)
            .map((d) => (
              <article key={d.name}>
                <div>
                  <h2>{d.name}</h2>
                  <p>{d.desc}</p>
                  <span>{d.note}</span>
                </div>
                <strong>{d.price}</strong>
              </article>
            ))}
        </div>
        <p className="sample-note">
          Illustrative menu & prices. Dietary labels describe sample recipes;
          discuss allergies and shared preparation surfaces with a real food
          provider.
        </p>
      </section>
    </>
  );
}
export function HvacPaths() {
  return (
    <section className="hvac-paths">
      <div className="path-heading">
        <p className="eyebrow">LET’S START HERE</p>
        <h2>What does your home need?</h2>
      </div>
      {[
        ['01', 'Something isn’t right.', 'Repair & diagnosis'],
        ['02', 'Time for a change.', 'Replacement planning'],
        ['03', 'Keep it running well.', 'Seasonal maintenance'],
      ].map(([n, t, s]) => (
        <SiteLink page="book" key={n}>
          <span>{n}</span>
          <div>
            <strong>{t}</strong>
            <small>{s}</small>
          </div>
          <ArrowRight size={22} />
        </SiteLink>
      ))}
    </section>
  );
}
export function Seasons() {
  return (
    <section className="section seasons">
      <SectionTitle
        eyebrow="GROW WITH THE SEASONS"
        title="A little different, all year long."
      />
      <div className="season-grid">
        {[
          [Leaf, 'Spring', 'A thoughtful reset'],
          [Sun, 'Summer', 'Room to enjoy'],
          [Wind, 'Fall', 'A clean finish'],
          [Snowflake, 'Winter', 'Plan what’s next'],
        ].map(([Icon, name, note]) => {
          const I = Icon as typeof Leaf;
          return (
            <SiteLink page="seasons" key={String(name)}>
              <I size={24} />
              <strong>{String(name)}</strong>
              <span>{String(note)}</span>
              <ArrowRight size={17} />
            </SiteLink>
          );
        })}
      </div>
    </section>
  );
}
export function ScopeBoard() {
  return (
    <section className="scope-board">
      <div>
        <p className="eyebrow">BUILT AROUND YOUR BUILDING</p>
        <h2>
          Define the work.
          <br />
          Keep everyone aligned.
        </h2>
        <Action>Build a facility brief</Action>
      </div>
      <div className="scope-rows">
        {[
          ['01', 'The space', 'Rooms, surfaces, traffic & access'],
          ['02', 'The schedule', 'A rhythm around your operating hours'],
          ['03', 'The standard', 'A checklist with clear responsibilities'],
        ].map(([n, t, s]) => (
          <div key={n}>
            <span>{n}</span>
            <div>
              <h3>{t}</h3>
              <p>{s}</p>
            </div>
            <Check size={18} />
          </div>
        ))}
      </div>
    </section>
  );
}
export function SurfaceGuide() {
  const [active, setActive] = useState(0);
  const surfaces = [
    [
      'Concrete',
      'Start with condition.',
      'Review cracks, sealers, stains, and drainage before choosing the method. A real visit sets expectations for the result.',
    ],
    [
      'Siding',
      'Respect the finish.',
      'Identify material, existing coatings, and openings. A surface-aware plan is more useful than a blanket promise about pressure.',
    ],
    [
      'Timber',
      'A gentler conversation.',
      'Discuss age, coatings, and condition. Delicate or damaged material may need specialist advice before any cleaning.',
    ],
  ];
  return (
    <section className="section surface-guide">
      <SectionTitle
        eyebrow="MATERIAL MATTERS"
        title="Not every surface wants the same thing."
      />
      <div className="surface-tabs" role="group" aria-label="Surface materials">
        {surfaces.map(([n], i) => (
          <button
            key={n}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {n}
          </button>
        ))}
      </div>
      <article>
        <span>0{active + 1}</span>
        <div>
          <h3>{surfaces[active][1]}</h3>
          <p>{surfaces[active][2]}</p>
          <SiteLink page="surfaces" className="text-link">
            Explore surface care <ArrowRight size={16} />
          </SiteLink>
        </div>
      </article>
    </section>
  );
}
export function ProjectNote() {
  return (
    <section className="project-note">
      <div>
        <p className="eyebrow">ONE VISIT. A BETTER LIST.</p>
        <h2>
          Small jobs have a way
          <br />
          of making a big difference.
        </h2>
        <p>
          Start with the work you have in mind. We’ll help turn it into a clear,
          practical visit.
        </p>
        <Action>Make your project list</Action>
      </div>
      <div className="note-paper">
        <span className="eyebrow">THE WEEKEND LIST</span>
        {[
          'The door that sticks',
          'The shelf in the hallway',
          'The cabinet handle',
          'A little less to think about',
        ].map((t, i) => (
          <div key={t}>
            <Check size={19} />
            <span>{t}</span>
            <small>0{i + 1}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
export function PaintFinishes() {
  const [selected, setSelected] = useState(0);
  const finishes = [
    [
      'Matte',
      'A soft, low-sheen look for considered interiors. Discuss durability and care with the chosen product.',
    ],
    [
      'Satin',
      'A subtle sheen often considered for lived-in spaces. Surface preparation and product choice still matter.',
    ],
    [
      'Trim finish',
      'A more defined finish for doors and details. Confirm compatibility with the existing coating.',
    ],
  ];
  return (
    <section className="section finish-section">
      <div>
        <p className="eyebrow">MORE THAN COLOR</p>
        <h2>Consider the finish.</h2>
        <p>
          Light changes the way a surface feels. Explore a few starting points.
        </p>
      </div>
      <div>
        <div className="finish-options" role="group" aria-label="Paint finish">
          {finishes.map(([t], i) => (
            <button
              key={t}
              aria-pressed={i === selected}
              onClick={() => setSelected(i)}
            >
              <span className={`finish-sample sample-${i}`} />
              {t}
            </button>
          ))}
        </div>
        <p className="finish-description">{finishes[selected][1]}</p>
        <SiteLink page="spaces" className="text-link">
          Explore spaces & finishes <ArrowRight size={16} />
        </SiteLink>
      </div>
    </section>
  );
}
export function DetailStrip() {
  return (
    <section className="detail-strip">
      <span>01 / INTERIOR CLARITY</span>
      <span>02 / EXTERIOR CARE</span>
      <span>03 / CONSIDERED PROTECTION</span>
    </section>
  );
}
export function PetSteps() {
  return (
    <section className="section pet-steps">
      <SectionTitle
        eyebrow="A LITTLE LESS UNKNOWN"
        title="From hello to happy tail."
      />
      <div>
        {[
          [
            'Hello, friend.',
            'Share coat, comfort, and previous grooming experiences.',
          ],
          [
            'Make a plan.',
            'Talk through the service, style, and handling needs.',
          ],
          [
            'Home, looking good.',
            'Discuss the finish and an everyday care routine.',
          ],
        ].map(([t, d], i) => (
          <article key={t}>
            <span>{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function GatheringCards() {
  return (
    <section className="section gathering-cards">
      <SectionTitle
        eyebrow="AT HOME AROUND A TABLE"
        title="Every occasion has a flavor."
      />
      <div>
        {[
          ['An intimate dinner', 'A few favorite people. Room for one more.'],
          [
            'A shared celebration',
            'Generous food for a day worth remembering.',
          ],
          [
            'A thoughtful workday',
            'Bring the team together, away from the agenda.',
          ],
        ].map(([t, d], i) => (
          <SiteLink page="occasions" key={t}>
            <span>0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
            <ArrowRight size={21} />
          </SiteLink>
        ))}
      </div>
    </section>
  );
}
export function BarberBoard() {
  return (
    <section className="barber-board">
      <div>
        <p className="eyebrow">PICK YOUR PERSON</p>
        <h2>
          There’s a chair
          <br />
          with your name on it.
        </h2>
        <p>Different strengths. The same attention. Meet the sample team.</p>
        <Action page="barbers">Meet the barbers</Action>
      </div>
      <div className="barber-names">
        {[
          ['Alex', 'Classic & textured'],
          ['Jordan', 'Fades & detail'],
          ['Sam', 'Longer styles & restyles'],
        ].map(([n, s]) => (
          <SiteLink page="barbers" key={n}>
            <strong>{n}</strong>
            <span>{s}</span>
            <ArrowRight size={20} />
          </SiteLink>
        ))}
      </div>
    </section>
  );
}
export function CleaningRhythm() {
  const [rhythm, setRhythm] = useState('Every two weeks');
  return (
    <section className="cleaning-rhythm">
      <p className="eyebrow">FIND YOUR RHYTHM</p>
      <h2>
        Less catching up.
        <br />
        More keeping up.
      </h2>
      <div role="group" aria-label="Cleaning rhythm">
        {['Weekly', 'Every two weeks', 'Monthly'].map((t) => (
          <button
            key={t}
            aria-pressed={rhythm === t}
            onClick={() => setRhythm(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <p>
        {rhythm === 'Weekly'
          ? 'A regular reset for a busy home.'
          : rhythm === 'Every two weeks'
            ? 'A little breathing room between the everyday cleanups.'
            : 'A deeper reset alongside your own routine.'}
      </p>
      <Action page="book">Plan your clean</Action>
    </section>
  );
}

export function PaintingGallery() {
  const [category, setCategory] = useState('All');
  return (
    <section className="section painting-gallery">
      <SectionTitle
        eyebrow="COLOR IN CONTEXT"
        title="A little inspiration for what’s next."
        text="Explore interior and exterior color ideas. These stock images are inspiration, not completed projects or exact paint-color matches."
      />
      <div
        className="menu-filters"
        role="group"
        aria-label="Gallery categories"
      >
        {['All', 'Interiors', 'Exteriors'].map((c) => (
          <button
            key={c}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="painting-gallery-grid">
        {gallery
          .filter((g) => category === 'All' || g.gallery_category === category)
          .map((g) => (
            <figure key={g.public_path}>
              <img
                src={g.public_path}
                alt={g.alt}
                width={g.width}
                height={g.height}
                loading="lazy"
              />
              <figcaption>
                <span>{g.gallery_category}</span>
                {g.caption}
              </figcaption>
            </figure>
          ))}
      </div>
    </section>
  );
}
