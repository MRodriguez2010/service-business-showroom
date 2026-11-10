import { additionalPages } from './page-catalog';
export type Palette = { primary: string; surface: string; accent: string };
export type BrandPreview = {
  name?: string;
  colors?: Partial<Palette>;
  square?: string;
  wide?: string;
};
export type PageInfo = { id: string; label: string };
export type IndustryMeta = {
  id: string;
  label: string;
  name: string;
  category: string;
  monogram: string;
  palette: Palette;
  pages: PageInfo[];
  action: string;
};
export const catalog: IndustryMeta[] = [
  {
    id: 'food-trucks',
    label: 'Food trucks',
    name: 'Ember & Masa',
    category: 'Food & hospitality',
    monogram: 'E/M',
    palette: { primary: '#A43D26', surface: '#FFF3D6', accent: '#EDBD52' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'menu', label: 'The menu' },
      { id: 'stops', label: 'Find the truck' },
      { id: 'book', label: 'Private events' },
    ],
    action: 'Plan an event',
  },
  {
    id: 'hvac',
    label: 'HVAC',
    name: 'Northline Air',
    category: 'Home & property',
    monogram: 'N',
    palette: { primary: '#174F78', surface: '#F1F6F8', accent: '#DB6635' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Comfort services' },
      { id: 'care', label: 'Care & guidance' },
      { id: 'book', label: 'Service visit' },
    ],
    action: 'Find your service',
  },
  {
    id: 'lawn-care',
    label: 'Lawn care',
    name: 'Fieldwork Lawn Co.',
    category: 'Home & property',
    monogram: 'F',
    palette: { primary: '#294C32', surface: '#F5F4EB', accent: '#DBDA82' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Lawn & landscape' },
      { id: 'seasons', label: 'Through the seasons' },
      { id: 'book', label: 'Your care plan' },
    ],
    action: 'Build a care plan',
  },
  {
    id: 'cleaning',
    label: 'Residential cleaning',
    name: 'Sunday House',
    category: 'Home & property',
    monogram: 'sh',
    palette: { primary: '#375950', surface: '#FBF8F3', accent: '#E4C788' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Ways to reset' },
      { id: 'checklist', label: 'The details' },
      { id: 'book', label: 'Plan your clean' },
    ],
    action: 'Plan your clean',
  },
  {
    id: 'janitorial',
    label: 'Commercial janitorial',
    name: 'Forma Facility Care',
    category: 'Business services',
    monogram: 'F/',
    palette: { primary: '#243D46', surface: '#F2F5F4', accent: '#B5DDC9' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'facilities', label: 'Facilities' },
      { id: 'standards', label: 'Our approach' },
      { id: 'book', label: 'Walkthrough brief' },
    ],
    action: 'Plan a walkthrough',
  },
  {
    id: 'pressure-washing',
    label: 'Pressure washing',
    name: 'Clearwater Exterior',
    category: 'Home & property',
    monogram: 'C',
    palette: { primary: '#125666', surface: '#F3F8F8', accent: '#AFE4E6' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'surfaces', label: 'Surface care' },
      { id: 'process', label: 'Before we begin' },
      { id: 'book', label: 'Scope your project' },
    ],
    action: 'Scope your project',
  },
  {
    id: 'handyman',
    label: 'Handyman',
    name: 'Good Measure',
    category: 'Home & property',
    monogram: 'GM',
    palette: { primary: '#A4482D', surface: '#FAF6EC', accent: '#E7C461' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'projects', label: 'The project list' },
      { id: 'approach', label: 'How we work' },
      { id: 'book', label: 'Build a visit' },
    ],
    action: 'Build your project list',
  },
  {
    id: 'painting',
    label: 'Painting',
    name: 'Stillwell Painting',
    category: 'Home & property',
    monogram: 'S.',
    palette: { primary: '#575F4E', surface: '#F8F5EE', accent: '#D7BAA4' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'spaces', label: 'Spaces & finishes' },
      { id: 'process', label: 'Preparation matters' },
      { id: 'book', label: 'Your project' },
    ],
    action: 'Imagine your space',
  },
  {
    id: 'detailing',
    label: 'Mobile detailing',
    name: 'Forma Auto Studio',
    category: 'Automotive',
    monogram: 'FA',
    palette: { primary: '#BCE76B', surface: '#141716', accent: '#D9DAD4' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'packages', label: 'The treatments' },
      { id: 'care', label: 'Care notes' },
      { id: 'book', label: 'Your appointment' },
    ],
    action: 'Find your treatment',
  },
  {
    id: 'pet-grooming',
    label: 'Pet grooming',
    name: 'Goodkind Grooming',
    category: 'Pets & personal care',
    monogram: 'gk',
    palette: { primary: '#694B73', surface: '#FBF6EC', accent: '#E9BB64' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Grooming menu' },
      { id: 'first-visit', label: 'A gentler visit' },
      { id: 'book', label: 'Meet your groomer' },
    ],
    action: 'Plan a happy visit',
  },
  {
    id: 'catering',
    label: 'Catering',
    name: 'Gather & Grain',
    category: 'Food & hospitality',
    monogram: 'G&G',
    palette: { primary: '#55543C', surface: '#F9F5E9', accent: '#C7946E' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'menus', label: 'At the table' },
      { id: 'occasions', label: 'Your occasion' },
      { id: 'book', label: 'Plan a gathering' },
    ],
    action: 'Set your table',
  },
  {
    id: 'barbershop',
    label: 'Barbershops',
    name: 'Common Ground',
    category: 'Pets & personal care',
    monogram: 'CG',
    palette: { primary: '#A5442F', surface: '#F4EDE0', accent: '#D4B583' },
    pages: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'The chair' },
      { id: 'barbers', label: 'The people' },
      { id: 'book', label: 'Find your time' },
    ],
    action: 'Take a seat',
  },
];
for (const industry of catalog) {
  industry.pages.splice(
    industry.pages.length - 1,
    0,
    ...additionalPages[industry.id],
  );
}
export const getIndustry = (id?: string | null) =>
  catalog.find((x) => x.id === id) || catalog[0];
export function resolveRoute(search: string) {
  const q = new URLSearchParams(search);
  const industry = getIndustry(q.get('industry'));
  const page = industry.pages.some((p) => p.id === q.get('page'))
    ? q.get('page')!
    : 'home';
  return { industry: industry.id, page };
}
export function routeHref(industry: string, page = 'home') {
  return `/?industry=${encodeURIComponent(industry)}&page=${encodeURIComponent(page)}`;
}
export const isHex = (s: unknown): s is string =>
  typeof s === 'string' && /^#[0-9a-f]{6}$/i.test(s);
export function luminance(hex: string) {
  const rgb = hex
    .slice(1)
    .match(/../g)!
    .map((v) => parseInt(v, 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
export function ink(hex: string) {
  return luminance(hex) > 0.179 ? '#000000' : '#FFFFFF';
}
export function mix(first: string, second: string, weight: number) {
  const a = first.slice(1).match(/../g)!;
  const b = second.slice(1).match(/../g)!;
  return (
    '#' +
    a
      .map((v, i) =>
        Math.round(parseInt(v, 16) * weight + parseInt(b[i], 16) * (1 - weight))
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')
  );
}
export function validBrand(v: unknown): v is BrandPreview {
  if (!v || typeof v !== 'object') return false;
  const b = v as BrandPreview;
  return (
    (b.name === undefined ||
      (typeof b.name === 'string' && b.name.length <= 70)) &&
    (!b.colors ||
      Object.entries(b.colors).every(
        ([k, c]) => ['primary', 'surface', 'accent'].includes(k) && isHex(c),
      )) &&
    [b.square, b.wide].every(
      (x) =>
        x === undefined ||
        (typeof x === 'string' &&
          x.length < 7500000 &&
          /^data:image\/(png|jpeg|webp);base64,/.test(x)),
    )
  );
}
export const contactHref = (id: string) =>
  `mailto:studio@example.com?subject=${encodeURIComponent('Website inquiry — ' + getIndustry(id).label)}`;
