'use client';
import { useEffect } from 'react';

/** Adapted from our Dino's and Templo sites; scoped to the preview document. */
export default function SiteMotion({ routeKey }: { routeKey: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.industry-site');
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || !('IntersectionObserver' in window)) return;
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (media.matches) return;
      const nodes = Array.from(
        root.querySelectorAll<HTMLElement>(
          'main section > .section-heading, main [data-reveal], main .editorial-copy, main .editorial-photo, main .guide-notes > article, main .offer, main .review-card',
        ),
      );
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.07, rootMargin: '0px 0px -28px 0px' },
      );
      nodes.forEach((node, index) => {
        node.style.setProperty('--stagger', `${(index % 3) * 65}ms`);
        if (node.getBoundingClientRect().top > window.innerHeight * 0.94) {
          node.classList.add('reveal-pending');
          observer.observe(node);
        }
      });
      const images = window.matchMedia('(min-width: 800px) and (pointer: fine)')
        .matches
        ? Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'))
        : [];
      let frame = 0;
      const update = () => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty(
          '--read-progress',
          `${max > 0 ? window.scrollY / max : 0}`,
        );
        images.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom > 0 && r.top < innerHeight)
            el.style.setProperty(
              '--drift',
              `${Math.max(-24, Math.min(24, ((innerHeight / 2 - (r.top + r.height / 2)) / (innerHeight + r.height)) * Number(el.dataset.parallax || 20) * 2))}px`,
            );
        });
      };
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);
      update();
      cleanup = () => {
        observer.disconnect();
        cancelAnimationFrame(frame);
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        nodes.forEach((n) => n.classList.remove('reveal-pending', 'in-view'));
        images.forEach((el) => el.style.removeProperty('--drift'));
      };
    };
    setup();
    media.addEventListener('change', setup);
    return () => {
      cleanup();
      media.removeEventListener('change', setup);
    };
  }, [routeKey]);
  return null;
}
