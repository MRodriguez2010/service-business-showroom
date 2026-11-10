'use client';
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import { deepPages, type DeepPage } from '@/lib/deep-pages';
import { Action, Photo, SiteLink, useSite } from './SiteParts';
import { CareNotes } from './CareNotes';
import { ColorStudio } from './PremiumSections';
export function DeepArticle({ article }: { article: DeepPage }) {
  const { meta } = useSite();
  const editorial = ['painting', 'catering', 'cleaning', 'lawn-care'].includes(
    meta.id,
  );
  return (
    <>
      <section
        className={`deep-intro ${editorial ? 'deep-editorial' : 'deep-manual'}`}
      >
        <div className="deep-breadcrumb">
          <SiteLink page="home">Home</SiteLink>
          <span>/</span>
          <span>{article.label}</span>
        </div>
        <div className="deep-title">
          <p className="eyebrow">{article.eyebrow}</p>
          <h1>{article.title}</h1>
          <p>{article.intro}</p>
          <a className="text-link" href="#chapter-1">
            Explore the details <ArrowDown size={16} />
          </a>
        </div>
        <figure data-parallax="18">
          <Photo variant={editorial ? 'hero' : 'secondary'} priority />
          <figcaption>Illustrative stock photography</figcaption>
        </figure>
      </section>
      {article.id === 'color-studio' && <ColorStudio />}
      <section className={`deep-reading section reading-${meta.id}`}>
        <aside className="chapter-index">
          <p className="eyebrow">IN THIS GUIDE</p>
          <nav aria-label="On this page">
            {article.chapters.map((c, i) => (
              <a href={`#chapter-${i + 1}`} key={c.title}>
                <span>0{i + 1}</span>
                {c.title}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </nav>
          <blockquote>{article.quote}</blockquote>
          <Action>Build my sample plan</Action>
        </aside>
        <div className="chapter-prose">
          {article.chapters.map((c, i) => (
            <article id={`chapter-${i + 1}`} data-reveal key={c.title}>
              <span className="chapter-number">0{i + 1}</span>
              <h2>{c.title}</h2>
              <p>{c.text}</p>
            </article>
          ))}
          <div className="brief-checklist" data-reveal>
            <p className="eyebrow">BRING THIS TO THE CONVERSATION</p>
            <ul>
              {article.checklist.map((c) => (
                <li key={c}>
                  <Check size={17} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CareNotes />
      <MorePaths exclude={article.id} />
    </>
  );
}
export function MorePaths({ exclude }: { exclude?: string }) {
  const { meta } = useSite();
  return (
    <section className={`section deeper-paths paths-${meta.id}`}>
      <div className="paths-heading" data-reveal>
        <p className="eyebrow">A LITTLE FURTHER</p>
        <h2>
          {
            (
              {
                'food-trucks': 'There’s more at the window.',
                hvac: 'Get to know your comfort.',
                'lawn-care': 'A field guide to your outside.',
                cleaning: 'Find your kind of reset.',
                janitorial: 'A program for your space.',
                'pressure-washing': 'Know the surface. Plan the care.',
                handyman: 'Every project starts somewhere.',
                painting: 'Explore the possibilities.',
                detailing: 'Get into the details.',
                'pet-grooming': 'Good care, from nose to tail.',
                catering: 'Find your way to gather.',
                barbershop: 'A little more about the craft.',
              } as Record<string, string>
            )[meta.id]
          }
        </h2>
      </div>
      <div className="path-editorials">
        {deepPages[meta.id]
          .filter((p) => p.id !== exclude)
          .map((p, i) => (
            <SiteLink key={p.id} page={p.id} className="path-editorial">
              {i === 0 && (
                <div className="path-photograph">
                  <Photo
                    variant={meta.id === 'janitorial' ? 'hero' : 'secondary'}
                  />
                </div>
              )}
              <div className="path-copy">
                <span className="eyebrow">
                  0{i + 1} / {p.label}
                </span>
                <h3>{p.title}</h3>
                <p>{p.intro}</p>
                <span className="path-read">
                  Explore <ArrowUpRight size={20} />
                </span>
              </div>
            </SiteLink>
          ))}
      </div>
    </section>
  );
}
