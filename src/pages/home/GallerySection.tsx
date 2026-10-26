
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { images } from '../../data/gallery';
import './gallery-section.css';

export function GallerySection() {
    return (
        <section
            className="gallery-section"
            aria-labelledby="gallery-heading"
        >
            <div className="gallery-header">
                <div>
                    <span className="section-eyebrow">Gallery</span>

                    <h2
                        id="gallery-heading"
                        className="gallery-heading"
                    >
                        Real People. Real Results
                    </h2>
                </div>

                <Link
                    to="/gallery"
                    className="gallery-view-link"
                    aria-label="View the complete G Cube Salon gallery"
                >
                    <span>View Gallery</span>
                    <ArrowRight size={18} aria-hidden="true" />
                </Link>
            </div>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <Link
                        key={image.id}
                        to="/gallery"
                        className="gallery-item"
                        aria-label={`View salon gallery, image ${index + 1}`}
                    >
                        <img
                            src={image.imageURL}
                            alt={`G Cube Salon hairstyle and styling work ${index + 1}`}
                            loading={index < 3 ? 'eager' : 'lazy'}
                            decoding="async"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
