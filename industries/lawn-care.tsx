'use client';
import { useState } from 'react';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { Seasons } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './lawn-care.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
function Hero() {
  const [rhythm, setRhythm] = useState('Weekly');
  return (
    <section className="hero field-hero garden-world">
      <div className="garden-landscape" data-parallax="24">
        <Photo priority />
      </div>
      <div className="garden-shade" />
      <div className="garden-copy">
        <p className="eyebrow">MORE TIME FOR YOUR KIND OF OUTSIDE</p>
        <h1>
          The grass is greener
          <br />
          <em>when it’s off your list.</em>
        </h1>
        <p>
          Mowing, edging, seasonal care. A yard you enjoy, with a routine that
          makes sense for your home.
        </p>
        <Action plan={{ frequency: rhythm }}>Build my lawn plan</Action>
        <SiteLink page="seasons" className="garden-notes">
          Know what your yard needs this season <ArrowUpRight size={17} />
        </SiteLink>
      </div>
      <div className="garden-plan">
        <Leaf size={25} />
        <span>
          MAKE ROOM FOR THE WEEKEND<strong>Choose your care rhythm</strong>
        </span>
        <div role="group" aria-label="Lawn care rhythm">
          {['Weekly', 'Every two weeks', 'One-time visit'].map((x) => (
            <button
              key={x}
              aria-pressed={rhythm === x}
              onClick={() => setRhythm(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <span className="garden-caption">
        THE EVERYDAY, WELL TENDED. / ILLUSTRATIVE LANDSCAPE
      </span>
    </section>
  );
}
export default makeSite('lawn-care', c, Hero, Seasons);
