
import { useId } from 'react';
import './service-hero.css';

type Gender = 'men' | 'women';

interface ServiceHeroProps {
  gender?: Gender;
}

const HERO_CONTENT: Record<
  Gender,
  {
    title: string[];
    text: string;
    alt: string;
  }
> = {
  women: {
    title: ['The Art of', 'Personal Style'],
    text: 'From a fresh cut to complete transformation, our services are designed to bring out the best version of you.',
    alt: 'Black and white portrait of a woman with long, styled hair',
  },

  men: {
    title: ['Grooming', 'for a Sharper You'],
    text: 'From classic cuts to modern styles, our men’s services are designed to keep you looking fresh, polished and confident — every day.',
    alt: 'Black and white portrait of a well-groomed man with a beard',
  },
};

export function ServiceHero({ gender = 'men'}: ServiceHeroProps) {
  const { title, text, alt } = HERO_CONTENT[gender];
  const headingId = useId();

  return (
    <section
      className="service-hero"
      data-gender={gender}
      aria-labelledby={headingId}
    >
      <div className="service-hero__media">
        <img
          key={gender}
          className="service-hero__img"
          src={`/service-hero-${gender}.png`}
          alt={alt}
        />
      </div>

      <div className="service-hero__inner">
        <div className="service-hero__content" key={gender}>
          <p className="service-hero__eyebrow">
            Our Services
          </p>

          <h1
            id={headingId}
            className="service-hero__title"
          >
            {title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <p className="service-hero__text">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
