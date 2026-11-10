'use client';
import { useState } from 'react';
import { Check, Snowflake, Sun, Wind, ArrowUpRight } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { HvacPaths } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './hvac.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
const concerns = [
  { label: 'Not cooling', icon: Snowflake },
  { label: 'Not heating', icon: Sun },
  { label: 'Seasonal tune-up', icon: Wind },
];
function Hero() {
  const [issue, setIssue] = useState('Not cooling');
  return (
    <section className="hero climate-hero comfort-world">
      <div className="comfort-backdrop">
        <Photo priority />
      </div>
      <div className="comfort-front">
        <p className="world-eyebrow">
          <span />
          GOOD PEOPLE. COMFORTABLE HOMES.
        </p>
        <h1>
          Let’s get you
          <br />
          <em>comfortable.</em>
        </h1>
        <p>
          When home doesn’t feel quite right, the next step should be simple.
          Tell us what’s happening. We’ll start there.
        </p>
        <div className="comfort-assurance">
          <span>
            <Check size={15} /> Understand the concern
          </span>
          <span>
            <Check size={15} /> See the scope first
          </span>
        </div>
      </div>
      <div className="comfort-start">
        <div>
          <span className="eyebrow">WHAT CAN WE HELP WITH?</span>
          <h2>A little closer to relief.</h2>
        </div>
        <div
          className="comfort-picks"
          role="group"
          aria-label="Your comfort need"
        >
          {concerns.map((x) => (
            <button
              aria-pressed={issue === x.label}
              onClick={() => setIssue(x.label)}
              key={x.label}
            >
              <x.icon size={22} />
              {x.label}
            </button>
          ))}
        </div>
        <Action plan={{ issue }}>Start my service request</Action>
        <small>
          Sample diagnostic allowance from $95 · No booking is submitted
        </small>
        <SiteLink page="replacement" className="text-link">
          Thinking about a new system? <ArrowUpRight size={15} />
        </SiteLink>
      </div>
      <div className="comfort-bottom">
        <span>REPAIR / REPLACEMENT / EVERYDAY CARE</span>
        <SiteLink page="care">A little care goes a long way ↗</SiteLink>
      </div>
    </section>
  );
}
export default makeSite('hvac', c, Hero, HvacPaths);
