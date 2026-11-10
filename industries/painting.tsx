'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Action, SiteLink } from '@/components/showroom/SiteParts';
import { PaintFinishes } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './painting.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
const rooms = [
  {
    src: 'https://images.pexels.com/photos/5203523/pexels-photo-5203523.jpeg?auto=compress&cs=tinysrgb&w=1400&q=80',
    alt: 'Light-filled furnished interior, shown as stock color and room inspiration.',
    label: 'The feeling of home',
    scope: 'Interior rooms',
  },
  {
    src: 'https://images.pexels.com/photos/20542611/pexels-photo-20542611.jpeg?auto=compress&cs=tinysrgb&w=1400&q=80',
    alt: 'A residential exterior, shown as stock architectural inspiration.',
    label: 'A fresh welcome home',
    scope: 'Exterior surfaces',
  },
];
function Hero() {
  const [room, setRoom] = useState(0);
  return (
    <section className="hero atelier-hero pigment-world">
      <div className="pigment-photograph" key={room}>
        <img
          src={rooms[room].src}
          alt={rooms[room].alt}
          width="1400"
          height="933"
          loading="eager"
        />
      </div>
      <div className="pigment-card">
        <p className="eyebrow">YOUR SPACE, SEEN IN A NEW LIGHT</p>
        <h1>
          A change
          <br />
          you can <em>feel.</em>
        </h1>
        <p>
          Color is the beginning. Thoughtful preparation, considered finishes,
          and the details that bring a room together.
        </p>
        <Action plan={{ scope: rooms[room].scope }}>
          Start imagining your space
        </Action>
        <SiteLink page="color-studio" className="text-link">
          Play with a little color ↗
        </SiteLink>
      </div>
      <div
        className="pigment-gallery"
        role="region"
        aria-label="Painting inspiration"
        aria-roledescription="carousel"
      >
        <button
          aria-label="Previous inspiration"
          onClick={() => setRoom(1 - room)}
        >
          <ArrowLeft size={20} />
        </button>
        <div aria-live="polite">
          <small>STOCK INSPIRATION / 0{room + 1}</small>
          <strong>{rooms[room].label}</strong>
        </div>
        <button aria-label="Next inspiration" onClick={() => setRoom(1 - room)}>
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="pigment-swatchstrip" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
export default makeSite('painting', c, Hero, PaintFinishes);
