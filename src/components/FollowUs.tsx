
import { ArrowRight } from "lucide-react";
import "./follow-us.css";

export function FollowUs() {
  const instagramUrl = "https://www.instagram.com/your-account/";

  return (
    <section
      className="follow-us"
      aria-labelledby="follow-us-title"
    >
      <div className="follow-us__container">

        <div className="follow-us__content">
          <span className="section-eyebrow">Follow Us</span>

          <h2 id="follow-us-title" className="follow-us__title">
            Stay Connected
          </h2>

          <p className="follow-us__description">
            Follow us on Instagram for hairstyle inspiration,
            salon updates and more!
          </p>

          <a
            href={instagramUrl}
            className="follow-us__button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow G Cube Salon on Instagram (opens in a new tab)"
          >
            <img src="./instagram.png" width="26px" alt="insta-logo" aria-hidden="true" />
            <span>Follow on Instagram</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="follow-us__gallery">
          <img
            src="/images/service/hair-cut-men.jpg"
            alt="Men's haircut at G Cube Salon"
            loading="lazy"
          />

          <img
            src="/images/service/hair-cut-men.jpg"
            alt="Hair styling at G Cube Salon"
            loading="lazy"
          />

          <img
            src="/images/service/hair-cut-men.jpg"
            alt="Salon haircut detail"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
