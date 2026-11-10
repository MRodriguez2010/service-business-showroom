export type Answers = Record<string, string | string[]>;
export type PlanEstimate = {
  lines: { label: string; amount: number }[];
  total: number;
  low: number;
  high: number;
  unit: string;
  minutes: number;
  ready: boolean;
  note: string;
};
export function estimatePlan(id: string, a: Answers): PlanEstimate {
  const text = (k: string) =>
    typeof a[k] === 'string' ? (a[k] as string) : '';
  const count = (k: string) => {
    const n = Number(text(k));
    return Number.isSafeInteger(n) && n > 0 && n <= 100000 ? n : 0;
  };
  const picks = (k: string) => (Array.isArray(a[k]) ? (a[k] as string[]) : []);
  const lines: { label: string; amount: number }[] = [];
  const add = (label: string, amount: number) => {
    lines.push({ label, amount: Math.round(amount) });
  };
  let unit = 'sample visit',
    minutes = 90,
    ready = false,
    note =
      'Illustrative USD estimate. Final scope, taxes, materials, and availability require confirmation by a real business.';
  switch (id) {
    case 'lawn-care': {
      const area = text('size').startsWith('Small')
        ? 2000
        : text('size').startsWith('Medium')
          ? 4000
          : text('size').startsWith('Large')
            ? 8000
            : 0;
      ready = area > 0;
      if (!ready) break;
      // Adapted from our Ultimate Lawncare app/pricing.ts: base + area, frequency, condition, then extras.
      const base = 35 + area * 0.008;
      add('Mow, edge & trim', base);
      if (text('frequency') === 'Every two weeks')
        add('Every-two-week adjustment', base * 0.15);
      if (text('frequency') === 'One-time visit')
        add('One-time visit adjustment', base * 0.25);
      if (text('condition') === 'Overgrown in places')
        add('Overgrowth allowance', base * 0.35);
      if (text('condition') === 'Needs a seasonal reset')
        add('Initial seasonal reset', 35);
      for (const x of picks('extras'))
        add(
          x,
          (
            {
              'Garden bed weeding': 25,
              'Leaf cleanup': 45,
              'Mulch refresh': 70,
            } as Record<string, number>
          )[x] || 0,
        );
      minutes = Math.round(35 + area * 0.008 + picks('extras').length * 20);
      break;
    }
    case 'hvac': {
      ready = !!text('issue');
      if (!ready) break;
      if (text('issue') === 'Planning replacement') {
        note =
          'Replacement starts with a walkthrough. No equipment price is estimated before a real assessment.';
        unit = 'walkthrough brief';
        minutes = 60;
        break;
      }
      add(
        text('issue') === 'Seasonal tune-up'
          ? 'Seasonal maintenance allowance'
          : 'Diagnostic visit allowance',
        text('issue') === 'Seasonal tune-up' ? 129 : 95,
      );
      note =
        'Sample visit allowance only. Repair labor beyond diagnosis, parts, equipment, taxes, and emergency dispatch are excluded.';
      break;
    }
    case 'cleaning': {
      ready =
        count('bedrooms') > 0 && count('bathrooms') > 0 && !!text('clean');
      if (!ready) break;
      const base = 90 + count('bedrooms') * 20 + count('bathrooms') * 25;
      add('Home reset allowance', base);
      const extra =
        text('clean') === 'Deep clean'
          ? 0.55
          : text('clean') === 'Move-in / move-out'
            ? 0.8
            : 0;
      if (extra) add(text('clean') + ' detail allowance', base * extra);
      const discount =
        (
          { Weekly: 0.2, 'Every two weeks': 0.15, Monthly: 0.05 } as Record<
            string,
            number
          >
        )[text('frequency')] || 0;
      if (discount) add('Recurring service adjustment', -base * discount);
      minutes = Math.round(
        (60 + count('bedrooms') * 20 + count('bathrooms') * 30) * (1 + extra),
      );
      break;
    }
    case 'janitorial': {
      ready = count('area') > 0 && !!text('facility');
      if (!ready) break;
      const hours = Math.max(1.5, count('area') / 3500),
        visits =
          text('frequency') === 'Daily weekdays'
            ? 22
            : text('frequency') === 'Three times a week'
              ? 13
              : 4;
      add(
        `${visits} sample visits × ${hours.toFixed(1)} labor hours`,
        visits * hours * 45,
      );
      unit = 'sample month';
      minutes = Math.round(hours * 60);
      note =
        'Illustrative monthly labor budget at $45 per hour. Supplies, specialist tasks, and taxes are excluded; a walkthrough determines the actual program.';
      break;
    }
    case 'pressure-washing': {
      ready = count('area') > 0 && !!text('surface');
      if (!ready) break;
      const rate = text('surface') === 'Siding' ? 0.35 : 0.22;
      add('Surface area allowance', Math.max(150, count('area') * rate));
      if (text('condition') === 'Staining')
        add('Stain assessment allowance', 45);
      minutes = Math.round(60 + count('area') * 0.035);
      unit = 'sample project';
      note =
        'Illustrative scope allowance. Stain removal and material suitability require assessment; taxes and specialist work are excluded.';
      break;
    }
    case 'handyman': {
      ready = picks('tasks').length > 0;
      if (!ready) break;
      minutes = picks('tasks').reduce(
        (n, t) =>
          n +
          (t === 'Assemble furniture' ? 90 : t === 'Hang shelves' ? 60 : 40),
        0,
      );
      add('Visit labor allowance', Math.max(110, (minutes / 60) * 75));
      if (text('condition') === 'Repair or damage to review')
        add('Assessment time allowance', 35);
      note =
        'Sample labor allowance at $75 per hour with a $110 minimum. Parts, procurement, taxes, and specialist work are excluded.';
      break;
    }
    case 'painting': {
      ready = count('rooms') > 0 && !!text('scope');
      if (!ready) break;
      const base =
        count('rooms') *
        (text('scope') === 'Exterior surfaces'
          ? 475
          : text('scope') === 'Doors & trim'
            ? 180
            : 325);
      add('Selected space allowance', base);
      if (text('condition') === 'Minor repairs needed')
        add('Preparation allowance', count('rooms') * 65);
      unit = 'sample project';
      minutes = count('rooms') * 180;
      note =
        'Illustrative starting allowance per room or section, not a measured painting quote. Materials, access, extensive repairs, and taxes require a real proposal.';
      break;
    }
    case 'detailing': {
      ready = !!text('package') && !!text('vehicle');
      if (!ready) break;
      add(
        text('package'),
        (
          {
            'The refresh': 95,
            'The interior reset': 165,
            'The complete detail': 245,
          } as Record<string, number>
        )[text('package')] || 95,
      );
      const size =
        text('vehicle') === 'SUV / crossover'
          ? 35
          : text('vehicle') === 'Truck / large SUV'
            ? 65
            : 0;
      if (size) add('Vehicle size adjustment', size);
      if (text('condition') === 'Daily-life buildup')
        add('Condition allowance', 40);
      if (text('condition') === 'Heavy use / needs assessment')
        add('Heavy-use assessment allowance', 95);
      for (const x of picks('extras'))
        add(
          x,
          (
            {
              'Pet hair': 35,
              'Upholstery stains': 45,
              'Finish protection': 60,
            } as Record<string, number>
          )[x] || 0,
        );
      minutes =
        text('package') === 'The refresh'
          ? 90
          : text('package') === 'The interior reset'
            ? 150
            : 210;
      minutes += size > 0 ? 30 : 0;
      note =
        'Sample estimate for the chosen vehicle and condition. Assessment may change the scope; taxes and specialist correction are excluded.';
      break;
    }
    case 'pet-grooming': {
      ready = !!text('size') && !!text('service');
      if (!ready) break;
      add(
        text('service'),
        text('service') === 'Full groom'
          ? 75
          : text('service') === 'Bath & brush'
            ? 45
            : 30,
      );
      const size = text('size').startsWith('Medium')
        ? 15
        : text('size').startsWith('Large')
          ? 30
          : 0;
      if (size) add('Size allowance', size);
      if (text('coat') === 'Long or double coat')
        add('Coat-care allowance', 20);
      if (text('coat') === 'Curly or wavy') add('Coat-care allowance', 25);
      minutes =
        text('service') === 'Full groom'
          ? 90
          : text('service') === 'Bath & brush'
            ? 60
            : 30;
      note =
        'Sample grooming allowance. A real groomer confirms coat condition, comfort, service suitability, time, and taxes.';
      break;
    }
    case 'food-trucks': {
      ready = count('guests') > 0 && !!text('menu');
      if (!ready) break;
      const rate = text('menu') === 'Plant-based menu' ? 11 : 12;
      add(
        `${count('guests')} guests × $${rate} taco trio`,
        count('guests') * rate,
      );
      for (const x of picks('extras'))
        add(
          x + ' for the group',
          count('guests') *
            ((
              {
                'Street corn': 3,
                'Agua fresca': 4,
                'Chips & salsa': 2,
              } as Record<string, number>
            )[x] || 0),
        );
      const subtotal = lines.reduce((n, l) => n + l.amount, 0);
      if (subtotal < 350)
        add('Sample event minimum adjustment', 350 - subtotal);
      unit = 'sample event';
      minutes = 120;
      note =
        'Illustrative food budget with a $350 event minimum. Travel, venue fees, staffing changes, taxes, and gratuity are excluded.';
      break;
    }
    case 'catering': {
      ready = count('guests') > 0 && !!text('menu');
      if (!ready) break;
      const rate =
        (
          {
            'The shared table': 48,
            'The easy gathering': 34,
            'The working lunch': 26,
          } as Record<string, number>
        )[text('menu')] || 34;
      add(`${count('guests')} guests × $${rate}`, count('guests') * rate);
      if (text('service') === 'Delivery & setup')
        add('Delivery & setup allowance', 150);
      if (text('service') === 'Staffed buffet')
        add('Staffed service allowance', count('guests') * 10);
      if (text('service') === 'Family-style service')
        add('Table service allowance', count('guests') * 16);
      unit = 'sample event';
      minutes = 180;
      note =
        'Illustrative menu and service budget. Venue rental, equipment hire, extended staffing, taxes, and gratuity are excluded.';
      break;
    }
    case 'barbershop': {
      ready = !!text('service');
      if (!ready) break;
      add(
        text('service'),
        text('service').startsWith('Cut & beard')
          ? 52
          : text('service').startsWith('The restyle')
            ? 48
            : 38,
      );
      minutes = text('service').startsWith('The cut') ? 45 : 60;
      note =
        'Sample service price and duration. No appointment is reserved. Actual policies, taxes, and optional gratuity belong to a real shop.';
      break;
    }
  }
  const total = lines.reduce((n, l) => n + l.amount, 0);
  return {
    lines,
    total,
    low: Math.round(total * 0.9),
    high: Math.round(total * 1.2),
    unit,
    minutes,
    ready,
    note,
  };
}
