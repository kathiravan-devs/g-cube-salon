import { FaGoogle, FaQuoteLeft, FaStar } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { reviews } from './../../data/reviews'
import './reviews.css'

// Fill these in from the Google Maps listing before deploying.
// While they are empty, the rating summary and both buttons stay hidden,
// so the page never shows made-up numbers or dead links.
// Don't calculate the rating from `reviews`: a few hand-picked 5-star
// reviews would always show a fake 5.0.
const googleListing = {
    rating: 0,
    reviewCount: 0,
    readUrl: 'https://share.google/SHL21U5zJlxwlyIHo', // the salon's Google Maps listing
    writeUrl: '', // the "ask for reviews" link from Google Business Profile
}

function getInitials(name: string) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part.charAt(0).toUpperCase())
        .join('')
}

function StarRating({ rating }: { rating: number }) {
    const filled = Math.round(rating)

    return (
        <div className="reviews-stars" role="img" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                    key={i}
                    className={i < filled ? 'reviews-star reviews-star--filled' : 'reviews-star'}
                    aria-hidden="true"
                />
            ))}
        </div>
    )
}



export function Reviews() {
    const { rating, reviewCount, readUrl } = googleListing

    return (
        <section className="reviews" aria-labelledby="reviews-heading">
            <div className="reviews__inner">
                <div className="reviews__header">
                    <div className="reviews__heading">
                        <span className='section-eyebrow'>REVIEWS</span>
                        <h2 id="reviews-heading" className="reviews__title">
                            What our customers say
                        </h2>
                        <p className="reviews__subtitle">
                            Selected reviews from our Google listing.
                        </p>
                    </div>

                    {readUrl && (
                        <a
                            className="reviews__all-link"
                            href={readUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            See all reviews on Google
                            <ArrowRight aria-hidden="true"/>
                        </a>
                    )}
                </div>

                {reviewCount > 0 && (
                    <div className="reviews__summary">
                        <span className="reviews__score">
                            {rating.toFixed(1)}
                        </span>
                        <div className="reviews__summary-detail">
                            <StarRating rating={rating} />
                            <span className="reviews__count">
                                Based on {reviewCount} Google reviews
                            </span>
                        </div>
                    </div>
                )}

                <ul className="reviews__grid">
                    {reviews.map((review) => (
                        <li className="reviews__item" key={review.id}>
                            <figure className="review-card">
                                <div className="review-card__top">
                                    <StarRating rating={review.rating} />
                                    <FaQuoteLeft
                                        className="review-card__mark"
                                        aria-hidden="true"
                                    />
                                </div>

                                <blockquote className="review-card__quote">
                                    <p>{review.comment}</p>
                                </blockquote>

                                <figcaption className="review-card__author">
                                    <span
                                        className={`review-card__avatar profile-${review.id}`}
                                        aria-hidden="true"
                                    >
                                        {getInitials(review.name)}
                                    </span>

                                    <span className="review-card__author-info">
                                        <span className="review-card__name">
                                            {review.name}
                                        </span>
                                        <span className="review-card__source">
                                            <FaGoogle aria-hidden="true" className='google-icon'/>
                                            Posted on {review.source}
                                        </span>
                                    </span>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
