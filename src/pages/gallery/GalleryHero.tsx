
import './gallery-hero.css'

export function GalleryHero() {
    return (
        <section className="gallery-hero" aria-labelledby="gallery-title">
            <div className="gallery-hero-content">
                <span className="section-eyebrow">
                    <span className="eyebrow-line"></span>
                    Our Work
                </span>

                <h1 className="hero-title" id="gallery-title">
                    Gallery
                </h1>

                <p className="hero-text">
                    A look at our salon work — haircuts, styling
                    and transformations.
                </p>
            </div>
        </section>
    );
}
