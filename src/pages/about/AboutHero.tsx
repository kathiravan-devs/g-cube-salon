import './about-hero.css';

export function AboutHero() {

  return (
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="section-eyebrow">
            ABOUT US
          </span>

          <h1>
            More Than
            <br />
            a Salon
          </h1>

          <p>
            At G Cube Salon, we believe grooming
            is self-care. It's about feeling confident,
            fresh and truly you.
          </p>
        </div>
      </section>
  );
}