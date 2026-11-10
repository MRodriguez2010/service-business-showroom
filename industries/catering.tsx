'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { GatheringCards } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './catering.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
function Hero() {
  const [occasion, setOccasion] = useState('Private dinner');
  return (
    <section className="hero gathering-hero table-world">
      <div className="table-photo" data-parallax="18">
        <Photo variant="secondary" priority />
      </div>
      <div className="table-copy">
        <p className="eyebrow">SEASONAL FOOD. GENEROUS HOSPITALITY.</p>
        <h1>
          Some moments
          <br />
          deserve <em>a table.</em>
        </h1>
        <p>
          The food is just the beginning. Let’s make room for the people,
          stories, and little details that make it yours.
        </p>
        <Action plan={{ occasion }}>Let’s plan your gathering</Action>
        <SiteLink page="menus" className="table-menu">
          A taste of what’s possible <ArrowUpRight size={17} />
        </SiteLink>
      </div>
      <div className="table-occasion">
        <span>WHAT ARE WE CELEBRATING?</span>
        <div role="group" aria-label="Your gathering">
          {['Private dinner', 'Wedding celebration', 'Workplace event'].map(
            (x) => (
              <button
                aria-pressed={occasion === x}
                key={x}
                onClick={() => setOccasion(x)}
              >
                {x}
                <ArrowUpRight size={14} />
              </button>
            ),
          )}
        </div>
      </div>
      <div className="table-note">
        <Photo />
        <span>
          Pass the plate.
          <br />
          <em>Stay a little longer.</em>
        </span>
      </div>
    </section>
  );
}
export default makeSite('catering', c, Hero, GatheringCards);
