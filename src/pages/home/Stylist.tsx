
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { salon, whatsappLink } from '../../data/salon';
import './stylist.css';

export function Stylist() {
    return (
        <section
            className="stylist-section"
            aria-labelledby="stylist-heading"
        >
            <div className="stylist-header">
                <span className="section-eyebrow">OUR STYLIST</span>
                <h2 id="stylist-heading" className="stylist-heading">
                    Meet Your Stylist
                </h2>
            </div>

            <div className="stylist-content">
                <div className="stylist-image">
                    <img
                        src="/images/sample-barber.jpg"
                        alt="Tamil Selvan, stylist at G Cube Salon"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="stylist-info">
                    <h3 className="stylist-name">Tamil Selvan</h3>

                    <div className="stylist-description">
                        <p>
                            Meet Tamil Selvan, the stylist behind G Cube Salon.
                            Whether you're looking for a fresh haircut or a new
                            style, the focus is on helping you find a look that
                            suits your preferences.
                        </p>

                        <p>
                            From everyday haircuts to a style refresh, every
                            visit starts with understanding what you want.
                            Get in touch to discuss your preferred look and
                            book your appointment.
                        </p>
                    </div>

                    <p className="stylist-experience">
                        <span className="experience-number">6+</span>
                        <span>Years of experience</span>
                    </p>

                    <div className="stylist-actions">
                        <a
                            href={salon.phoneHref}
                            className="phone-button"
                            aria-label={`Call G Cube Salon at ${salon.phone}`}
                        >
                            <Phone size={18} aria-hidden="true" />
                            <span>{salon.phone}</span>
                        </a>

                        <a
                            href={whatsappLink(
                                'Hi, I want to book an appointment'
                            )}
                            className="whatsapp-button"
                            aria-label={`Book an appointment on WhatsApp at ${salon.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp aria-hidden="true" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
