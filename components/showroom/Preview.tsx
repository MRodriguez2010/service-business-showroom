'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Render } from '@puckeditor/core';
import {
  getIndustry,
  resolveRoute,
  ink,
  luminance,
  mix,
  validBrand,
  type BrandPreview,
} from '@/lib/showroom';
import { SiteContext, SiteHeader, Footer } from './SiteParts';
import type { IndustryModule } from '@/lib/industry-types';
import SiteMotion from './SiteMotion';
import type { Answers } from '@/lib/demo-pricing';
const loaders: Record<string, () => Promise<{ default: IndustryModule }>> = {
  'food-trucks': () => import('@/industries/food-trucks'),
  hvac: () => import('@/industries/hvac'),
  'lawn-care': () => import('@/industries/lawn-care'),
  cleaning: () => import('@/industries/cleaning'),
  janitorial: () => import('@/industries/janitorial'),
  'pressure-washing': () => import('@/industries/pressure-washing'),
  handyman: () => import('@/industries/handyman'),
  painting: () => import('@/industries/painting'),
  detailing: () => import('@/industries/detailing'),
  'pet-grooming': () => import('@/industries/pet-grooming'),
  catering: () => import('@/industries/catering'),
  barbershop: () => import('@/industries/barbershop'),
};
export default function Preview() {
  const [route, setRoute] = useState({ industry: 'food-trucks', page: 'home' });
  const [brand, setBrand] = useState<BrandPreview>({});
  const [epoch, setEpoch] = useState(0);
  const [draft, setDraft] = useState<{ key: string; answers: Answers }>({
    key: '',
    answers: {},
  });
  const [module, setModule] = useState<{
    id: string;
    site: IndustryModule;
  } | null>(null);
  const [error, setError] = useState(false);
  const heading = useRef<HTMLElement>(null);
  const lastRoute = useRef('');
  const meta = getIndustry(route.industry);
  useEffect(() => {
    setRoute(resolveRoute(window.location.search));
    const announce = () =>
      window.parent.postMessage(
        { type: 'preview:ready' },
        window.location.origin,
      );
    const embedded = window.parent !== window;
    const handshake = embedded ? setInterval(announce, 300) : undefined;
    const escape = (event: KeyboardEvent) => {
      if (embedded && event.key === 'Escape')
        window.parent.postMessage(
          { type: 'preview:escape' },
          window.location.origin,
        );
    };
    const receive = (e: MessageEvent) => {
      if (
        e.origin !== window.location.origin ||
        e.source !== window.parent ||
        e.data?.type !== 'showroom:state' ||
        !validBrand(e.data.brand)
      )
        return;
      const m = getIndustry(e.data.route?.industry);
      if (
        m.id !== e.data.route?.industry ||
        !m.pages.some((p) => p.id === e.data.route?.page)
      )
        return;
      clearInterval(handshake);
      window.parent.postMessage(
        { type: 'preview:ack' },
        window.location.origin,
      );
      setBrand(e.data.brand);
      setRoute({ industry: m.id, page: e.data.route.page });
      if (typeof e.data.epoch === 'number') setEpoch(e.data.epoch);
    };
    window.addEventListener('message', receive);
    window.addEventListener('keydown', escape);
    if (embedded) announce();
    return () => {
      clearInterval(handshake);
      window.removeEventListener('message', receive);
      window.removeEventListener('keydown', escape);
    };
  }, []);
  const industryId = route.industry;
  useEffect(() => {
    let live = true;
    setError(false);
    loaders[industryId]()
      .then((m) => {
        if (live) setModule({ id: industryId, site: m.default });
      })
      .catch(() => {
        if (live) setError(true);
      });
    return () => {
      live = false;
    };
  }, [industryId]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lastRoute.current) heading.current?.focus({ preventScroll: true });
    lastRoute.current = route.industry + route.page;
  }, [route.industry, route.page]);
  useEffect(() => {
    document.title = `${brand.name?.trim() || meta.name} · ${meta.pages.find((p) => p.id === route.page)?.label}`;
  }, [brand.name, meta, route.page]);
  const navigate = (page: string) => {
    if (!meta.pages.some((p) => p.id === page)) return;
    if (window.parent === window) {
      window.history.pushState(
        {},
        '',
        `/preview/?industry=${meta.id}&page=${page}`,
      );
      setRoute({ industry: meta.id, page });
    } else
      window.parent.postMessage(
        { type: 'preview:navigate', page },
        window.location.origin,
      );
  };
  useEffect(() => {
    const pop = () => setRoute(resolveRoute(window.location.search));
    window.addEventListener('popstate', pop);
    return () => window.removeEventListener('popstate', pop);
  }, []);
  const palette = { ...meta.palette, ...brand.colors };
  const style = {
    '--p': palette.primary,
    '--s': palette.surface,
    '--a': palette.accent,
    '--line': `color-mix(in srgb, ${ink(palette.surface)} 20%, transparent)`,
    '--read-p':
      Math.max(
        luminance(palette.primary) + 0.05,
        luminance(palette.surface) + 0.05,
      ) /
        Math.min(
          luminance(palette.primary) + 0.05,
          luminance(palette.surface) + 0.05,
        ) >=
      4.5
        ? palette.primary
        : ink(palette.surface),
    '--on-p': ink(palette.primary),
    '--ink': ink(palette.surface),
    '--on-a': ink(palette.accent),
  } as CSSProperties;
  for (const [key, color, weight] of [
    ['a36', palette.accent, 0.36],
    ['a25', palette.accent, 0.25],
    ['a28', palette.accent, 0.28],
    ['p05', palette.primary, 0.05],
    ['p06', palette.primary, 0.06],
    ['i04', ink(palette.surface), 0.04],
    ['i06', ink(palette.surface), 0.06],
    ['i08', ink(palette.surface), 0.08],
  ] as const) {
    const background = mix(color, palette.surface, weight);
    Object.assign(style, {
      [`--${key}`]: background,
      [`--on-${key}`]: ink(background),
    });
  }
  return (
    <SiteContext.Provider
      value={{
        meta,
        brand,
        page: route.page,
        navigate,
        plan: draft.key === `${meta.id}-${epoch}` ? draft.answers : {},
        setPlan: (answers) => setDraft({ key: `${meta.id}-${epoch}`, answers }),
        beginPlan: (answers) => {
          setDraft({ key: `${meta.id}-${epoch}`, answers });
          navigate('book');
        },
      }}
    >
      <div
        className={`industry-site theme-${meta.id}`}
        data-page={route.page}
        style={style}
      >
        <a className="skip-link" href="#site-main">
          Skip to content
        </a>
        <SiteHeader key={meta.id} />
        <main
          id="site-main"
          ref={heading}
          tabIndex={-1}
          key={`${meta.id}-${route.page}-${epoch}`}
        >
          {error ? (
            <div className="section">
              <h1>This example couldn’t open.</h1>
              <p>Check your connection and refresh to try again.</p>
            </div>
          ) : module?.id === meta.id ? (
            <Render
              config={module.site.config}
              data={module.site.pages[route.page] || module.site.pages.home}
            />
          ) : (
            <div className="section site-loading" role="status">
              Opening the example…
            </div>
          )}
        </main>
        <Footer />
        {module?.id === meta.id && (
          <SiteMotion routeKey={`${meta.id}-${route.page}-${epoch}`} />
        )}
      </div>
    </SiteContext.Provider>
  );
}
