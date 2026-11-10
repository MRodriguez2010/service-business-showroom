'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Action, Photo, SiteLink } from '@/components/showroom/SiteParts';
import { DetailStrip } from '@/components/showroom/SpecialSections';
import type { IndustryContent } from '@/lib/industry-types';
import data from './detailing.json';
import { makeSite } from './make-site';
const c = data as IndustryContent;
function Hero() {
  const [vehicle, setVehicle] = useState('Sedan / coupe');
  return (
    <section className="hero auto-hero finish-world">
      <div className="finish-photo" data-parallax="20">
        <Photo priority />
      </div>
      <div className="finish-copy">
        <p className="eyebrow">YOUR VEHICLE. OUR ATTENTION.</p>
        <h1>
          LOOK AGAIN.
          <br />
          <em>THAT’S YOUR CAR.</em>
        </h1>
        <p>
          A reset for the daily drive. A little pride in every reflection.
          Mobile detailing shaped around your vehicle and its condition.
        </p>
        <div className="finish-config">
          <label htmlFor="hero-vehicle">WHAT DO YOU DRIVE?</label>
          <div>
            <select
              id="hero-vehicle"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              {['Sedan / coupe', 'SUV / crossover', 'Truck / large SUV'].map(
                (x) => (
                  <option key={x}>{x}</option>
                ),
              )}
            </select>
            <Action plan={{ vehicle }}>Find my treatment</Action>
          </div>
        </div>
        <SiteLink page="packages" className="finish-link">
          Compare the treatments <ArrowUpRight size={18} />
        </SiteLink>
      </div>
      <div className="finish-index">
        <span>01 / INTERIOR RESET</span>
        <span>02 / EXTERIOR CARE</span>
        <span>03 / FINISH PROTECTION</span>
      </div>
      <div className="finish-detail">
        <Photo variant="secondary" />
        <span>
          THE DIFFERENCE IS
          <br />
          <em>in the details.</em>
        </span>
      </div>
    </section>
  );
}
export default makeSite('detailing', c, Hero, DetailStrip);
