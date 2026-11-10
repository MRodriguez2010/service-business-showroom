import type { ComponentType } from 'react';
import type { Config, Data } from '@puckeditor/core';
import type { IndustryContent, IndustryModule } from '@/lib/industry-types';
import {
  Editorial,
  Guide,
  FAQ,
  Invitation,
  ServiceIntro,
} from '@/components/showroom/SiteParts';
import { CareNotes } from '@/components/showroom/CareNotes';
import DemoFlow from '@/components/showroom/DemoFlow';
import SampleReviews from '@/components/showroom/SampleReviews';
import { PaintingGallery } from '@/components/showroom/SpecialSections';
import {
  ServiceCollection,
  signatureScenes,
} from '@/components/showroom/PremiumSections';
import { DeepArticle, MorePaths } from '@/components/showroom/DeepPages';
import { deepPages } from '@/lib/deep-pages';
import { getIndustry } from '@/lib/showroom';
export function makeSite(
  id: string,
  content: IndustryContent,
  Hero: ComponentType,
  Signature: ComponentType,
  Menu?: ComponentType,
): IndustryModule {
  const Scene = signatureScenes[id];
  const components: Config['components'] = {
    Care: {
      label: 'Care beyond the visit',
      fields: {},
      render: () => <CareNotes teaser />,
    },
    Sources: {
      label: 'Guidance from primary sources',
      fields: {},
      render: () => <CareNotes />,
    },
    Hero: {
      label: 'Industry art direction',
      fields: {},
      render: () => <Hero />,
    },
    Experience: {
      label: 'Interactive industry experience',
      fields: {},
      render: () => <Scene />,
    },
    Signature: {
      label: 'Industry detail',
      fields: {},
      render: () => <Signature />,
    },
    Services: {
      label: 'Service collection',
      fields: {},
      render: () => <ServiceCollection content={content} />,
    },
    ServiceIntro: {
      label: 'Service introduction',
      fields: {},
      render: () => <ServiceIntro content={content} />,
    },
    Editorial: {
      label: 'Craft and approach',
      fields: {},
      render: () => <Editorial content={content} />,
    },
    Guide: {
      label: 'Industry guide',
      fields: {},
      render: () => <Guide content={content} />,
    },
    FAQ: {
      label: 'Questions and answers',
      fields: {},
      render: () => <FAQ content={content} />,
    },
    Invitation: {
      label: 'Next step',
      fields: {},
      render: () => <Invitation content={content} />,
    },
    Journey: {
      label: 'Quote and appointment builder',
      fields: {},
      render: () => <DemoFlow content={content} />,
    },
    Reviews: {
      label: 'Synthetic review examples',
      fields: {},
      render: () => <SampleReviews />,
    },
    Gallery: {
      label: 'Stock inspiration gallery',
      fields: {},
      render: () => <PaintingGallery />,
    },
    Paths: {
      label: 'Explore supporting pages',
      fields: {},
      render: () => <MorePaths />,
    },
    Menu: {
      label: 'Menu',
      fields: {},
      render: () => (Menu ? <Menu /> : <ServiceCollection content={content} />),
    },
  };
  const page = (types: string[]): Data => ({
    root: { props: {} },
    content: types.map((type, i) => ({
      type,
      props: { id: `${id}-${type}-${i}` },
    })),
  });
  const home: Record<string, string[]> = {
    'food-trucks': [
      'Hero',
      'Experience',
      'Signature',
      'Editorial',
      'Paths',
      'Reviews',
      'Invitation',
    ],
    hvac: [
      'Hero',
      'Experience',
      'Services',
      'Paths',
      'Reviews',
      'FAQ',
      'Invitation',
    ],
    'lawn-care': [
      'Hero',
      'Services',
      'Experience',
      'Editorial',
      'Reviews',
      'Paths',
      'Invitation',
    ],
    cleaning: [
      'Hero',
      'Experience',
      'Services',
      'Reviews',
      'Paths',
      'FAQ',
      'Invitation',
    ],
    janitorial: [
      'Hero',
      'Signature',
      'Experience',
      'Paths',
      'Services',
      'Reviews',
      'Invitation',
    ],
    'pressure-washing': [
      'Hero',
      'Experience',
      'Editorial',
      'Paths',
      'Reviews',
      'FAQ',
      'Invitation',
    ],
    handyman: [
      'Hero',
      'Experience',
      'Services',
      'Paths',
      'Reviews',
      'Invitation',
    ],
    painting: [
      'Hero',
      'Gallery',
      'Experience',
      'Paths',
      'Reviews',
      'Invitation',
    ],
    detailing: [
      'Hero',
      'Experience',
      'Editorial',
      'Paths',
      'Reviews',
      'Invitation',
    ],
    'pet-grooming': [
      'Hero',
      'Experience',
      'Signature',
      'Services',
      'Reviews',
      'Paths',
      'Invitation',
    ],
    catering: [
      'Hero',
      'Experience',
      'Services',
      'Paths',
      'Reviews',
      'Invitation',
    ],
    barbershop: [
      'Hero',
      'Experience',
      'Signature',
      'Paths',
      'Reviews',
      'Invitation',
    ],
  };
  const meta = getIndustry(id);
  const pages: Record<string, Data> = {
    home: page(
      home[id].flatMap((type) =>
        type === 'Reviews' ? ['Care', type] : [type],
      ),
    ),
    [meta.pages[1].id]: page(
      Menu
        ? ['Menu', 'Paths', 'FAQ', 'Invitation']
        : [
            'ServiceIntro',
            ...(id === 'painting' ? ['Gallery'] : []),
            'Services',
            'Experience',
            'Paths',
            'FAQ',
            'Invitation',
          ],
    ),
    [meta.pages[2].id]: page([
      'Guide',
      'Sources',
      ...(id === 'food-trucks' ? ['Signature'] : ['Experience']),
      'Paths',
      'FAQ',
      'Invitation',
    ]),
    book: page(['Journey', 'FAQ']),
  };
  for (const article of deepPages[id]) {
    const key = `Article-${article.id}`;
    components[key] = {
      label: article.label,
      fields: {},
      render: () => <DeepArticle article={article} />,
    };
    pages[article.id] = page([key, 'Invitation']);
  }
  return { config: { components }, pages };
}
