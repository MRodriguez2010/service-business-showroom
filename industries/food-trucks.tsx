'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { Action, SiteLink, Photo } from '@/components/showroom/SiteParts';
import { TruckSchedule, FoodMenu } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './food-trucks.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
function Hero() {
  const [slide, setSlide] = useState(0);
  return (
    <section className="hero food-poster street-world">
      <div className="street-copy">
        <span className="eyebrow">PULL UP HUNGRY. LEAVE HAPPY.</span>
        <h1>
          BIG FLAVOR.
          <br />
          <em>SMALL TRUCK.</em>
        </h1>
        <p>
          A hot tortilla. A little fire. A whole lot of good company. Your lunch
          break just got interesting.
        </p>
        <Action page="menu">Find your new favorite</Action>
        <SiteLink page="stops" className="street-find">
          <MapPin size={18} /> Find the truck this week <ArrowRight size={18} />
        </SiteLink>
        <div className="street-signature">Made slow. Served street side.</div>
      </div>
      <div
        className="street-stage"
        role="region"
        aria-label="A taste of the kitchen"
        aria-roledescription="carousel"
      >
        <div className="street-paper" aria-hidden="true" />
        <figure className="street-shot" key={slide}>
          <Photo variant={slide === 0 ? 'hero' : 'secondary'} priority />
          <figcaption>
            {slide === 0
              ? '01 / THE LUNCH YOU LOOK FORWARD TO'
              : '02 / A LITTLE FIRE, A LOT OF HEART'}
          </figcaption>
        </figure>
        <span className="street-seal">
          FRESH
          <br />
          OFF THE
          <br />
          <strong>GRIDDLE.</strong>
        </span>
        <div className="street-controls">
          <button
            onClick={() => setSlide(1 - slide)}
            aria-label="Previous kitchen photo"
          >
            <ArrowLeft size={20} />
          </button>
          <span aria-live="polite">{slide + 1} / 2</span>
          <button
            onClick={() => setSlide(1 - slide)}
            aria-label="Next kitchen photo"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="street-ticket">
        <div>
          <MapPin size={24} />
          <span>
            THIS WEEK’S SAMPLE STOP
            <strong>Riverbend Market · Friday, 5–8:30</strong>
          </span>
        </div>
        <SiteLink page="stops">See the full route ↗</SiteLink>
        <SiteLink page="book">Your party. Our window. ↗</SiteLink>
      </div>
    </section>
  );
}
export default makeSite('food-trucks', c, Hero, TruckSchedule, FoodMenu);
