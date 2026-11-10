'use client';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { careGuidance } from '@/lib/care-guidance';
import { Photo, SiteLink, useSite } from './SiteParts';
export function CareNotes({ teaser = false }: { teaser?: boolean }) {
  const { meta } = useSite();
  const note = careGuidance[meta.id];
  return (
    <section
      className={`section care-notes ${teaser ? 'care-teaser' : 'care-full'}`}
    >
      {teaser && (
        <div className="care-photograph" data-reveal>
          <Photo variant="secondary" />
          <span>
            THOUGHTFUL CARE.
            <br />
            BEFORE & AFTER THE VISIT.
          </span>
        </div>
      )}
      <div className="care-content" data-reveal>
        <p className="eyebrow">{note.eyebrow}</p>
        <h2>{note.title}</h2>
        <p>{note.text}</p>
        {teaser ? (
          <SiteLink page={note.page} className="text-link">
            Read the care notes <ArrowUpRight size={18} />
          </SiteLink>
        ) : (
          <div className="care-question">
            <BookOpen size={20} />
            <div>
              <strong>A useful question for your next visit</strong>
              <p>{note.ask}</p>
            </div>
          </div>
        )}
        <a
          href={note.source}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-reference"
        >
          <span>
            <small>READ THE ORIGINAL GUIDANCE</small>
            <strong>{note.publisher}</strong>
            <span>{note.sourceTitle}</span>
          </span>
          <ArrowUpRight size={20} />
        </a>
        {note.context && <p className="care-context">{note.context}</p>}
        <small className="source-independence">
          Independent educational reference · No affiliation or endorsement
        </small>
      </div>
    </section>
  );
}
