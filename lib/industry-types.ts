import type { Config, Data } from '@puckeditor/core';
export type Offer = {
  title: string;
  tag?: string;
  text: string;
  items: string[];
  price?: string;
};
export type Field = {
  id: string;
  label: string;
  type: 'choice' | 'multi' | 'number' | 'date' | 'text';
  options?: string[];
  hint?: string;
  min?: number;
  max?: number;
  optional?: boolean;
};
export type Step = { title: string; intro: string; fields: Field[] };
export type IndustryContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  promise: string[];
  serviceTitle: string;
  serviceIntro: string;
  offers: Offer[];
  story: { eyebrow: string; title: string; text: string; points: string[] };
  guide: {
    eyebrow: string;
    title: string;
    intro: string;
    notes: { title: string; text: string }[];
  };
  faq: { q: string; a: string }[];
  flow: { title: string; intro: string; steps: Step[]; next: string };
};
export type IndustryModule = { config: Config; pages: Record<string, Data> };
