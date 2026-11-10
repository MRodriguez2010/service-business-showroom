'use client';
import { useState } from 'react';
import { ArrowUpRight, Scissors } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { BarberBoard } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './barbershop.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
const services = [
  { name: 'The cut', time: '45 min', price: '$38', value: 'The cut · 45 min' },
  {
    name: 'Cut & beard',
    time: '60 min',
    price: '$52',
    value: 'Cut & beard · 60 min',
  },
  {
    name: 'The restyle',
    time: '60 min',
    price: '$48',
    value: 'The restyle · 60 min',
  },
];
function Hero() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="hero chair-hero corner-world">
      <div className="corner-photograph" data-parallax="18">
        <Photo variant="secondary" priority />
      </div>
      <div className="corner-copy">
        <p className="eyebrow">A GOOD CUT. A LITTLE TIME FOR YOURSELF.</p>
        <h1>
          YOUR CHAIR
          <br />
          <em>IS WAITING.</em>
        </h1>
        <p>
          Come as you are. Leave feeling like yourself.
          <br />
          Cuts, beard work, and proper attention to the details.
        </p>
        <div
          className="corner-service-list"
          role="group"
          aria-label="Choose your barber service"
        >
          {services.map((s, i) => (
            <button
              key={s.value}
              aria-pressed={i === selected}
              onClick={() => setSelected(i)}
            >
              <span>
                {s.name}
                <small>{s.time}</small>
              </span>
              <strong>{s.price}</strong>
              <ArrowUpRight size={18} />
            </button>
          ))}
        </div>
        <small className="corner-prices">Illustrative USD service prices</small>
        <Action plan={{ service: services[selected].value }}>
          Find a chair & time
        </Action>
        <SiteLink page="barbers" className="corner-barbers">
          Meet the people behind the chair ↗
        </SiteLink>
      </div>
      <div className="corner-seal">
        <Scissors size={27} />
        <span>
          CUTS / BEARDS
          <br />
          GOOD COMPANY
        </span>
      </div>
      <div className="corner-base">
        <span>WALK IN WITH AN IDEA.</span>
        <SiteLink page="cuts">WALK OUT WITH A PLAN. ↗</SiteLink>
      </div>
    </section>
  );
}
export default makeSite('barbershop', c, Hero, BarberBoard);
