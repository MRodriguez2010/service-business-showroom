'use client';
import { useState } from 'react';
import { Minus, Plus, Sparkles } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { CleaningRhythm } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './cleaning.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
function Hero() {
  const [beds, setBeds] = useState(2);
  const [baths, setBaths] = useState(1);
  return (
    <section className="hero sunday-hero home-world">
      <div className="home-copy">
        <p className="eyebrow">LET A LITTLE LIGHTNESS IN.</p>
        <h1>
          Life gets busy.
          <br />
          <em>Home can be easy.</em>
        </h1>
        <p>
          A clean kitchen. Fresh-feeling rooms. A little more time for whatever
          makes you, you.
        </p>
        <div className="home-scope">
          <span>LET’S START WITH YOUR HOME</span>
          {[
            { name: 'Bedrooms', value: beds, set: setBeds },
            { name: 'Bathrooms', value: baths, set: setBaths },
          ].map((x) => (
            <div className="home-counter" key={x.name}>
              <span>{x.name}</span>
              <button
                aria-label={`Fewer ${x.name.toLowerCase()}`}
                disabled={x.value === 1}
                onClick={() => x.set(x.value - 1)}
              >
                <Minus size={15} />
              </button>
              <output aria-label={x.name} aria-live="polite">
                {x.value}
              </output>
              <button
                aria-label={`More ${x.name.toLowerCase()}`}
                disabled={x.value === 8}
                onClick={() => x.set(x.value + 1)}
              >
                <Plus size={15} />
              </button>
            </div>
          ))}
          <Action plan={{ bedrooms: String(beds), bathrooms: String(baths) }}>
            Find my kind of clean
          </Action>
          <small>Personalize the rooms, visit type, and frequency next.</small>
        </div>
        <SiteLink page="recurring" className="home-recurring">
          Make the good feeling a regular thing ↗
        </SiteLink>
      </div>
      <div className="home-pictures">
        <div className="home-main" data-parallax="15">
          <Photo variant="secondary" priority />
        </div>
        <div className="home-detail">
          <Photo />
        </div>
        <div className="home-sticker">
          <Sparkles size={23} />
          <span>
            A LITTLE LESS
            <br />
            ON YOUR LIST.<em>A little more you.</em>
          </span>
        </div>
      </div>
    </section>
  );
}
export default makeSite('cleaning', c, Hero, CleaningRhythm);
