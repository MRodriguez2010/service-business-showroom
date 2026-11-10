'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { SurfaceGuide } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './pressure-washing.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
const surfaces = ['Concrete driveway', 'Paver patio', 'Siding'];
function Hero() {
  const [surface, setSurface] = useState(surfaces[0]);
  return (
    <section className="hero water-hero wash-world">
      <div className="wash-photo" data-parallax="20">
        <Photo variant="secondary" priority />
      </div>
      <div className="wash-copy">
        <p className="eyebrow">A FRESH LOOK AT YOUR OUTSIDE</p>
        <h1>
          First impressions.
          <br />
          <em>Fresh again.</em>
        </h1>
        <p>
          From the driveway to the front door. Thoughtful exterior cleaning
          starts with your surface—not a one-pressure-fits-all approach.
        </p>
        <div className="wash-start">
          <span>What are we looking at?</span>
          <div role="group" aria-label="Your exterior surface">
            {surfaces.map((x) => (
              <button
                key={x}
                aria-pressed={surface === x}
                onClick={() => setSurface(x)}
              >
                {x}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <Action plan={{ surface }}>See my project options</Action>
        </div>
        <SiteLink page="process" className="text-link">
          How we plan the clean <ArrowUpRight size={17} />
        </SiteLink>
      </div>
      <div className="wash-inset">
        <Photo />
        <span>THE SURFACE. THE SETTING. THE RIGHT APPROACH.</span>
      </div>
      <div className="wash-foot">
        <span>SURFACE-AWARE CARE</span>
        <span>PLANTING / FINISHES / DRAINAGE</span>
      </div>
    </section>
  );
}
export default makeSite('pressure-washing', c, Hero, SurfaceGuide);
