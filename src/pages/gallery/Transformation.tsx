
import { useState } from 'react';
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';import './transformation.css';

export function TransformationSection() {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <section className="transformation-section">

            {/* Left Content */}
            <div className="transformation-content">

                <span className="section-eyebrow">
                    Transformation
                </span>

                <h2>
                    Before / After
                </h2>

                <p>
                    See the difference. Real transformations
                    from our salon.
                </p>

                <a href="#gallery-grid" className="explore-btn">
                    Explore More
                    <ArrowRight size={17} />
                </a>

            </div>

            {/* Before / After Comparison */}
            <div className="comparison-container">

                {/* After Image */}
                <img
                    src="/images/gallery/transformation-after.jpg"
                    alt="Finished salon hairstyle"
                    className="comparison-image after-image"
                />

                {/* Before Image */}
                <div
                    className="before-image-wrapper"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                >
                    <img
                        src="/images/gallery/transformation-before.jpg"
                        alt="Original hairstyle before transformation"
                        className="comparison-image"
                    />
                </div>

                {/* Labels */}
                <span className="comparison-label before-label">
                    Before
                </span>

                <span className="comparison-label after-label">
                    After
                </span>

                {/* Slider */}
                <div
                    className="comparison-divider"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <span className="comparison-handle">
                        <ChevronLeft size={15} />
                        <ChevronRight size={15} />
                    </span>
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) =>
                        setSliderPosition(Number(e.target.value))
                    }
                    className="comparison-range"
                    aria-label="Compare before and after transformation"
                />

            </div>

        </section>
    );
}
