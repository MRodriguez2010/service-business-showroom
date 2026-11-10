'use client';

import { BriefcaseBusiness, Quote, Star, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { sampleReviews, type SampleReview } from '@/lib/sample-reviews';
import { useSite } from './SiteParts';

function Rating({ review }: { review: SampleReview }) {
  return review.platform === 'Facebook' ? (
    <span
      className="review-rating"
      role="img"
      aria-label="Sample recommendation"
    >
      <ThumbsUp size={16} aria-hidden="true" /> Recommends
    </span>
  ) : (
    <span
      className="review-rating"
      role="img"
      aria-label={`Sample rating: ${review.rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={15}
          fill={i < (review.rating ?? 0) ? 'currentColor' : 'none'}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function Attribution({ review }: { review: SampleReview }) {
  // Display a 230px square from the original atlas without duplicating image files.
  const portrait = review.portrait;
  const x = portrait !== undefined ? (portrait % 4) * 256 + 13 : 0;
  const y =
    portrait !== undefined
      ? [10, 253, 491, 731, 972, 1250][Math.floor(portrait / 4)]
      : 0;
  return (
    <figcaption className="review-attribution">
      <Avatar className="review-avatar" aria-hidden="true">
        {portrait !== undefined && (
          <AvatarImage
            src="/images/reviewer-portraits.png"
            alt=""
            width={1024}
            height={1536}
            loading="lazy"
            decoding="async"
            className="review-portrait"
            style={{
              width: `${(1024 / 230) * 100}%`,
              height: 'auto',
              maxWidth: 'none',
              aspectRatio: '1024 / 1536',
              left: `${(-x / 230) * 100}%`,
              top: `${(-y / 230) * 100}%`,
            }}
          />
        )}
        <AvatarFallback className="review-initials">
          {review.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <span className="review-person">
        <strong>{review.name}</strong>
        <span>{review.context}</span>
        {portrait !== undefined && (
          <span className="review-photo-note">AI-generated portrait</span>
        )}
      </span>
    </figcaption>
  );
}

export default function SampleReviews() {
  const { meta } = useSite();
  const reviews = sampleReviews[meta.id];
  if (!reviews) return null;
  return (
    <section
      className="section sample-reviews"
      aria-labelledby="sample-reviews-title"
    >
      <div className="reviews-heading">
        <div>
          <p className="eyebrow">SAMPLE REVIEWS</p>
          <h2 id="sample-reviews-title">{reviews.title}</h2>
        </div>
        <p className="reviews-disclosure">
          A preview of how feedback could look on your website. Names, reviews,
          ratings, and profile photos are fictional. Portraits are AI-generated;
          reviews are not sourced from these platforms.
        </p>
      </div>
      <div className="customer-reviews">
        {reviews.customers.map((review) => (
          <figure
            className="review-card"
            data-platform={review.platform}
            key={review.platform}
          >
            <div className="review-source">
              <strong>{review.platform}</strong>
              <span className="review-sample-label">Synthetic example</span>
            </div>
            <Rating review={review} />
            <blockquote>
              <Quote size={23} strokeWidth={1.25} aria-hidden="true" />
              <p>{review.quote}</p>
            </blockquote>
            <Attribution review={review} />
          </figure>
        ))}
      </div>
      <figure className="review-card team-review" data-platform="Glassdoor">
        <div className="team-review-heading">
          <span className="team-review-icon" aria-hidden="true">
            <BriefcaseBusiness size={23} />
          </span>
          <div>
            <div className="review-source">
              <strong>Glassdoor</strong>
              <span className="review-sample-label">Synthetic example</span>
            </div>
            <p className="team-review-perspective">
              From the team · Employee perspective
            </p>
            <Rating review={reviews.team} />
          </div>
        </div>
        <blockquote className="team-review-copy">
          <p>{reviews.team.quote}</p>
        </blockquote>
        <Attribution review={reviews.team} />
      </figure>
    </section>
  );
}
