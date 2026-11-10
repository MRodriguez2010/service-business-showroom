'use client';
import { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Check,
  Clock3,
  Store,
  Users,
} from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';

import type { IndustryContent } from '@/lib/industry-types';
import data from './janitorial.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
const places = [
  {
    label: 'Offices',
    value: 'Office',
    icon: Building2,
    timing: 'After the last meeting.',
    copy: 'Desks, breakrooms, restrooms. A clear plan for the spaces your team shares.',
    tasks: [
      'Shared desks & meeting rooms',
      'Restrooms & breakrooms',
      'Floors, glass & the little things',
    ],
  },
  {
    label: 'Retail & studios',
    value: 'Retail space',
    icon: Store,
    timing: 'Before the doors open.',
    copy: 'Fresh floors and welcoming touchpoints, arranged around your opening hours.',
    tasks: [
      'Entry glass & front of house',
      'Display areas & fitting rooms',
      'Floor care around opening hours',
    ],
  },
  {
    label: 'Shared buildings',
    value: 'Shared building',
    icon: Users,
    timing: 'Between the comings and goings.',
    copy: 'From the lobby to the lift, thoughtful care for the places everyone passes through.',
    tasks: [
      'Lobbies, lifts & corridors',
      'Shared kitchens & amenities',
      'Access & supplies coordinated',
    ],
  },
];
function Hero() {
  const [place, setPlace] = useState(0);
  const selected = places[place];
  return (
    <section className="hero architecture-hero facility-world">
      <div className="facility-atmosphere" aria-hidden="true" />
      <div className="facility-heading">
        <p className="world-eyebrow">
          <span />
          COMMERCIAL CLEANING, PERSONALLY CONSIDERED
        </p>
        <h1>
          Your people.
          <br />
          Your place.
          <br />
          <em>Our kind of care.</em>
        </h1>
        <p>
          Behind every good working day is a space that’s ready for it. Let’s
          make yours one of them.
        </p>
        <Action plan={{ facility: selected.value }}>
          Let’s walk your space
        </Action>
        <SiteLink page="standards" className="facility-story-link">
          Meet the work behind the work <ArrowUpRight size={16} />
        </SiteLink>
      </div>
      <div className="facility-portrait" data-parallax="18">
        <Photo variant="secondary" priority />
        <span className="facility-photo-note">
          <small>Illustrative stock photography</small>
        </span>
      </div>
      <div className="facility-program" key={selected.value}>
        <div className="program-heading">
          <span>
            <Clock3 size={17} /> A ROUTINE THAT FITS
          </span>
          <span className="program-live">SAMPLE PLAN</span>
        </div>
        <h2>{selected.timing}</h2>
        <p>{selected.copy}</p>
        <ul>
          {selected.tasks.map((task) => (
            <li key={task}>
              <span>
                <Check size={12} />
              </span>
              {task}
            </li>
          ))}
        </ul>
      </div>
      <div className="facility-choice">
        <span>
          What kind of space
          <br />
          <strong>do you look after?</strong>
        </span>
        <div role="group" aria-label="Choose your facility">
          {places.map((p, i) => (
            <button
              key={p.value}
              aria-pressed={i === place}
              onClick={() => setPlace(i)}
            >
              <p.icon size={19} />
              <span>{p.label}</span>
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
function FacilityDay() {
  const [step, setStep] = useState(0);
  const beats = [
    {
      time: 'Before the first hello',
      title: 'A welcome, already waiting.',
      text: 'Entry glass, reception, and shared touchpoints. Start with what your visitors notice and what your team needs.',
      window: 'Before opening',
    },
    {
      time: 'Between busy days',
      title: 'A little more room for the details.',
      text: 'Use a quieter weekend window for agreed periodic work and supply checks. Confirm access and the areas included before the visit.',
      window: 'Weekend',
    },
    {
      time: 'After the last goodbye',
      title: 'Close today. Prepare for tomorrow.',
      text: 'Restrooms, breakrooms, floors, and agreed finishing details. An after-hours routine should leave a clear record of the work.',
      window: 'After closing',
    },
  ];
  return (
    <section className="facility-day section">
      <div className="facility-day-image" data-reveal>
        <Photo />
        <span>YOUR SPACE HAS A RHYTHM.</span>
      </div>
      <div className="facility-day-story" data-reveal>
        <p className="eyebrow">WE FIT INTO YOUR DAY.</p>
        <h2>
          A little less
          <br />
          <em>to manage.</em>
        </h2>
        <div role="group" aria-label="A day in your facility">
          {beats.map((b, i) => (
            <button
              key={b.time}
              aria-pressed={step === i}
              onClick={() => setStep(i)}
            >
              <span>0{i + 1}</span>
              {b.time}
            </button>
          ))}
        </div>
        <div className="facility-beat" key={step} aria-live="polite">
          <h3>{beats[step].title}</h3>
          <p>{beats[step].text}</p>
        </div>
        <Action plan={{ window: beats[step].window }}>
          Build around my hours
        </Action>
      </div>
    </section>
  );
}
export default makeSite('janitorial', c, Hero, FacilityDay);
