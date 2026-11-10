'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import photos from '@/lib/photos.json';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  getIndustry,
  routeHref,
  type BrandPreview,
  type IndustryMeta,
} from '@/lib/showroom';
import type { Answers } from '@/lib/demo-pricing';
import type { IndustryContent } from '@/lib/industry-types';
export const SiteContext = createContext<{
  meta: IndustryMeta;
  brand: BrandPreview;
  page: string;
  navigate: (page: string) => void;
  plan: Answers;
  setPlan: (plan: Answers) => void;
  beginPlan: (plan: Answers) => void;
}>({
  meta: getIndustry('food-trucks'),
  brand: {},
  page: 'home',
  navigate: () => {},
  plan: {},
  setPlan: () => {},
  beginPlan: () => {},
});
export const useSite = () => useContext(SiteContext);
export function SiteLink({
  page = 'book',
  children,
  className = '',
  onNavigate,
  plan,
  ...rest
}: {
  page?: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  plan?: Answers;
  'aria-label'?: string;
}) {
  const { meta, navigate, beginPlan } = useSite();
  return (
    <a
      href={routeHref(meta.id, page)}
      className={className}
      {...rest}
      onClick={(e) => {
        if (!e.metaKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          if (plan) beginPlan(plan);
          else navigate(page);
          onNavigate?.();
        }
      }}
    >
      {children}
    </a>
  );
}
export function Action({
  page = 'book',
  children,
  secondary = false,
  plan,
}: {
  page?: string;
  children: ReactNode;
  secondary?: boolean;
  plan?: Answers;
}) {
  return (
    <SiteLink
      page={page}
      plan={plan}
      className={`site-button ${secondary ? 'secondary' : ''}`}
    >
      {children}
      <ArrowUpRight size={17} />
    </SiteLink>
  );
}
export function Photo({
  variant = 'hero',
  className = '',
  priority = false,
}: {
  variant?: 'hero' | 'secondary';
  className?: string;
  priority?: boolean;
}) {
  const { meta } = useSite();
  const p = (
    photos as Record<
      string,
      Record<
        string,
        { src: string; alt: string; width: number; height: number }
      >
    >
  )[meta.id]?.[variant];
  if (!p) return null;
  return (
    <img
      {...p}
      alt={p.alt}
      className={`site-photo ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
export function Brand({ compact = false }: { compact?: boolean }) {
  const { meta, brand } = useSite();
  const name = brand.name?.trim() || meta.name;
  const logo = compact
    ? brand.square || brand.wide
    : brand.wide || brand.square;
  return (
    <SiteLink
      page="home"
      className={`site-brand ${compact ? 'compact' : ''}`}
      aria-label={`${name} home`}
    >
      {logo ? (
        <img
          src={logo}
          className={`client-logo ${(compact ? !brand.square && brand.wide : brand.wide) ? 'wide' : 'square'}`}
          alt={name}
        />
      ) : (
        <>
          <span className="brand-symbol" aria-hidden="true">
            {brand.name?.trim()
              ? brand.name
                  .trim()
                  .split(/\s+/)
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase()
              : meta.monogram}
          </span>
          <span className="brand-wordmark">{name}</span>
        </>
      )}
    </SiteLink>
  );
}
export function SiteHeader() {
  const { meta, page, navigate } = useSite();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="site-utility">
        <span>
          {
            (
              {
                hvac: 'Heating. Cooling. A clearer kind of comfort.',
                'lawn-care': 'Your yard. Your kind of outside.',
                cleaning: 'A little breathing room starts here.',
                janitorial: 'Care for the spaces your business depends on.',
                'pressure-washing': 'Surface-aware exterior care.',
                handyman: 'Small jobs. Properly considered.',
                painting: 'Preparation. Color. Finish.',
                detailing: 'Interior clarity. Exterior care.',
                'pet-grooming': 'Comfort first. Good hair days follow.',
                'food-trucks': 'Street food, slow-crafted.',
                catering: 'Seasonal food. Generous hospitality.',
                barbershop: 'Your neighborhood. Your chair.',
              } as Record<string, string>
            )[meta.id]
          }
        </span>
        <span>Fictional business · Interactive example</span>
      </div>
      <header className="site-header">
        <Brand />
        <nav className="desktop-site-nav" aria-label="Example website">
          {meta.pages.slice(1, 3).map((p) => (
            <SiteLink
              key={p.id}
              page={p.id}
              className={page === p.id ? 'active' : ''}
            >
              {p.label}
            </SiteLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="explore-trigger">
              Explore <ChevronDown size={13} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="industry-explore-menu" align="end">
              {meta.pages
                .filter((p) => p.id !== 'book')
                .map((p) => (
                  <DropdownMenuItem key={p.id} onClick={() => navigate(p.id)}>
                    {p.label}
                    <ArrowUpRight size={14} />
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Action>{meta.action}</Action>
        </nav>
        <button
          className="site-menu-button"
          aria-label={menu ? 'Close website menu' : 'Open website menu'}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      {menu && (
        <nav
          className="mobile-site-nav"
          aria-label="Example website mobile menu"
        >
          {meta.pages.map((p) => (
            <div key={p.id}>
              <SiteLink page={p.id} onNavigate={() => setMenu(false)}>
                {p.label}
                <ArrowUpRight size={16} />
              </SiteLink>
            </div>
          ))}
        </nav>
      )}
    </>
  );
}
export function Footer() {
  const { meta } = useSite();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand compact />
        <div className="footer-links">
          {meta.pages.map((p) => (
            <SiteLink key={p.id} page={p.id}>
              {p.label}
            </SiteLink>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Fictional business. Illustrative stock photography, sample services &
          prices.
          <br />
          This example does not accept bookings or payments.
        </p>
        <span>
          A website by{' '}
          <a href="https://miguel.systems" target="_blank" rel="noreferrer">
            Miguel Systems <ArrowUpRight size={13} />
          </a>
        </span>
      </div>
    </footer>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Offers({
  content,
  compact = false,
}: {
  content: IndustryContent;
  compact?: boolean;
}) {
  const { meta, page } = useSite();
  return (
    <section className={`section offers-section ${compact ? 'compact' : ''}`}>
      {page !== meta.pages[1].id && (
        <SectionTitle
          eyebrow="THE SERVICES"
          title={content.serviceTitle}
          text={content.serviceIntro}
        />
      )}
      <div className="offers-grid">
        {content.offers.map((o, i) => (
          <article className="offer" key={o.title}>
            <div className="offer-top">
              <span className="offer-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              {o.tag && <span className="eyebrow">{o.tag}</span>}
            </div>
            <h3>{o.title}</h3>
            <p>{o.text}</p>
            {!compact && (
              <ul>
                {o.items.map((s) => (
                  <li key={s}>
                    <Check size={15} />
                    {s}
                  </li>
                ))}
              </ul>
            )}
            {o.price && (
              <p className="offer-price">
                {o.price}
                <small>Illustrative pricing</small>
              </p>
            )}
            <SiteLink page="book" className="text-link">
              {compact ? 'Explore this service' : 'Include in my plan'}
              <ArrowRight size={16} />
            </SiteLink>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Editorial({ content }: { content: IndustryContent }) {
  return (
    <section className="editorial-section">
      <div className="editorial-photo">
        <Photo variant="secondary" />
        <span className="photo-caption">
          A closer look at the craft · Stock photography
        </span>
      </div>
      <div className="editorial-copy">
        <p className="eyebrow">{content.story.eyebrow}</p>
        <h2>{content.story.title}</h2>
        <p>{content.story.text}</p>
        <ul className="check-list">
          {content.story.points.map((x) => (
            <li key={x}>
              <Check size={17} />
              {x}
            </li>
          ))}
        </ul>
        <Action page={useSite().meta.pages[2].id} secondary>
          Get to know the details
        </Action>
      </div>
    </section>
  );
}
export function Guide({ content }: { content: IndustryContent }) {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">{content.guide.eyebrow}</p>
        <h1>{content.guide.title}</h1>
        <p>{content.guide.intro}</p>
      </section>
      <section className="section guide-layout">
        <div className="guide-image">
          <Photo variant="secondary" />
          <span className="photo-caption">Illustrative stock photography</span>
        </div>
        <div className="guide-notes">
          {content.guide.notes.map((n, i) => (
            <article key={n.title}>
              <span className="step-number">0{i + 1}</span>
              <div>
                <h2>{n.title}</h2>
                <p>{n.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export function FAQ({ content }: { content: IndustryContent }) {
  return (
    <section className="section faq-section">
      <div>
        <p className="eyebrow">GOOD TO KNOW</p>
        <h2>
          A few questions,
          <br />
          thoughtfully answered.
        </h2>
      </div>
      <div>
        {content.faq.map(({ q, a }) => (
          <details key={q}>
            <summary>
              {q}
              <ChevronDown size={18} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Invitation({ content }: { content: IndustryContent }) {
  const { meta } = useSite();
  return (
    <section className="invitation">
      <div>
        <p className="eyebrow">YOUR NEXT STEP</p>
        <h2>{content.flow.title}</h2>
        <p>{content.flow.intro}</p>
      </div>
      <Action>{meta.action}</Action>
    </section>
  );
}
export function ServiceIntro({ content }: { content: IndustryContent }) {
  return (
    <section className="page-intro service-intro">
      <div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.serviceTitle}</h1>
        <p>{content.serviceIntro}</p>
      </div>
      <Photo variant="secondary" />
    </section>
  );
}
