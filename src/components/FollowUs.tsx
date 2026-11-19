import { ArrowRight } from "lucide-react";
import { salon } from "../data/salon";
import "./follow-us.css";

export function FollowUs() {
  const instagramUrl = salon.social.instagram;

  return (
    <section className="follow-us" aria-labelledby="follow-us-title">
      <div className="follow-us__container">
        <div className="follow-us__content">
          <span className="section-eyebrow">Follow Us</span>
          <h2 id="follow-us-title" className="follow-us__title">Stay Connected</h2>
          <p className="follow-us__description">
            Explore a few of the services and styles available at G Cube Salon.
          </p>
          {instagramUrl && (
            <a href={instagramUrl} className="follow-us__button" target="_blank" rel="noopener noreferrer"
              aria-label="Follow G Cube Salon on Instagram (opens in a new tab)">
              <img src="/instagram.png" width="26" height="26" alt="" aria-hidden="true" />
              <span>Follow on Instagram</span><ArrowRight aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="follow-us__gallery">
          <img src="/images/service/hair-cut-men.jpg" alt="Men's haircut at G Cube Salon" loading="lazy" decoding="async" />
          <img src="/images/service/colouring-women.jpg" alt="Hair colouring service at G Cube Salon" loading="lazy" decoding="async" />
          <img src="/images/service/hair-treatment-women.jpg" alt="Hair treatment at G Cube Salon" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
