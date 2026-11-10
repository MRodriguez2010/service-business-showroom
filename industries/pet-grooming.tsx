'use client';
import { useState } from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { PetSteps } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './pet-grooming.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
function Hero() {
  const [service, setService] = useState('Bath & brush');
  return (
    <section className="hero goodkind-hero companion-world">
      <div className="companion-photo" data-parallax="15">
        <Photo priority />
      </div>
      <div className="companion-copy">
        <p className="eyebrow">GOOD CARE FOR YOUR VERY GOOD DOG.</p>
        <h1>
          All the fluff.
          <br />
          <em>All the love.</em>
        </h1>
        <p>
          Fresh coats. Gentle introductions. A visit planned around the dog at
          the end of your leash.
        </p>
        <div
          className="companion-services"
          role="group"
          aria-label="Your dog’s visit"
        >
          {['Bath & brush', 'Full groom', 'First-visit introduction'].map(
            (x) => (
              <button
                key={x}
                aria-pressed={service === x}
                onClick={() => setService(x)}
              >
                {x}
                <ArrowUpRight size={17} />
              </button>
            ),
          )}
        </div>
        <Action plan={{ service }}>Plan a happy visit</Action>
        <SiteLink page="first-visit" className="text-link">
          A little nervous? Start here ↗
        </SiteLink>
      </div>
      <div className="companion-badge">
        <Heart size={23} />
        <span>
          COMFORT
          <br />
          COMES FIRST.
        </span>
      </div>
      <div className="companion-inset">
        <Photo variant="secondary" />
        <span>
          The little details.
          <br />
          <em>The big difference.</em>
        </span>
      </div>
      <div className="companion-foot">
        <span>FROM NOSE TO TAIL.</span>
        <SiteLink page="between-visits">
          Good care goes home with you ↗
        </SiteLink>
      </div>
    </section>
  );
}
export default makeSite('pet-grooming', c, Hero, PetSteps);
