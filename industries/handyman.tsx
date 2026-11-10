'use client';
import { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { ProjectNote } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './handyman.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
function Hero() {
  const [tasks, setTasks] = useState<string[]>(['Adjust a door']);
  return (
    <section className="hero workshop-hero fix-world">
      <div className="fix-heading">
        <p className="eyebrow">THE LITTLE JOBS YOU KEEP WALKING PAST.</p>
        <h1>
          Let’s get to
          <br />
          <em>“all done.”</em>
        </h1>
        <p>
          The sticking door. The shelf in its box. The finishing touch that
          never quite happened. Make a list. We’ll help make a plan.
        </p>
        <div className="fix-start">
          <Action plan={{ tasks }}>Start my project</Action>
        </div>
        <SiteLink page="approach" className="text-link">
          Small jobs. Properly considered. <ArrowUpRight size={17} />
        </SiteLink>
      </div>
      <div className="fix-photo" data-parallax="18">
        <Photo priority />
        <span>MEASURE TWICE. MAKE LIFE EASIER.</span>
      </div>
      <div className="fix-list">
        <span className="fix-tape" aria-hidden="true" />
        <span className="eyebrow">YOUR SATURDAY, GIVEN BACK.</span>
        <h2>Start with the little list.</h2>
        <div role="group" aria-label="Your first projects">
          {['Adjust a door', 'Hang shelves', 'Assemble furniture'].map((x) => (
            <label key={x}>
              <input
                type="checkbox"
                checked={tasks.includes(x)}
                onChange={() =>
                  setTasks(
                    tasks.includes(x)
                      ? tasks.filter((t) => t !== x)
                      : [...tasks, x],
                  )
                }
              />
              <span aria-hidden="true">
                {tasks.includes(x) && <Check size={16} />}
              </span>
              {x}
            </label>
          ))}
        </div>
        <Action plan={{ tasks }}>
          Let’s tackle{' '}
          {tasks.length
            ? `these ${tasks.length === 1 ? 'first steps' : 'projects'}`
            : 'the list'}
        </Action>
        <small>
          Preview a visit brief. Materials and scope confirmed separately.
        </small>
      </div>
      <div className="fix-footer">
        REPAIR <span>+</span> ASSEMBLE <span>+</span> FINISH
      </div>
    </section>
  );
}
export default makeSite('handyman', c, Hero, ProjectNote);
