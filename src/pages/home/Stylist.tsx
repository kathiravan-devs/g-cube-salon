
import { Phone } from 'lucide-react';
import { salon } from '../../data/salon';
import './stylist.css';

export function Stylist() {
    return (
        <section className="stylist-section" aria-labelledby="stylist-heading">
            <div className="stylist-header">
                <span className="section-eyebrow">OUR STYLIST</span>
                <h2 className="stylist-heading">Meet Your Stylist</h2>
            </div>

            <div className="stylist-content">
                <div className="stylist-image">
                    <img
                        src='images/sample-barber.jpg'
                        alt="Tamil Selvan, stylist at G Cube Salon"
                        loading="lazy"
                    />
                </div>

                <div className="stylist-info">
                    <h3 className="stylist-name">Tamil Selvan</h3>

                    <p className="stylist-description">
                        Meet the stylist behind G Cube Salon. Book your appointment
                        to discuss your preferred haircut or style.
                    </p>

                    <a
                        href={salon.phoneHref}
                        className="phone-button"
                        aria-label={`Call G Cube Salon at ${salon.phone}`}
                    >
                        <Phone aria-hidden="true" />
                        <span>{salon.phone}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
