
import { Link } from 'react-router-dom';
import { Phone, CalendarDays, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

import { salon, whatsappLink } from '../data/salon';
import './booking-section.css';

export function BookingSection() {
    return (
        <div className="booking-container">
            <section
                className="booking-section"
                aria-labelledby="booking-heading"
            >
                <div className="booking-content">
                    <h2
                        id="booking-heading"
                        className="booking-heading"
                    >
                        Ready for a new look?
                    </h2>

                    <p className="booking-description">
                        Book your appointment and let us take care of your style.
                    </p>
                </div>

                <div className="booking-actions">
                    <a
                        href={salon.phoneHref}
                        className="booking-phone btn btn-primary-outline"
                        aria-label={`Call G Cube Salon at ${salon.phone}`}
                    >
                        <Phone size={18} aria-hidden="true" />
                        <span>Call Now</span>
                    </a>

                    <a
                        href={whatsappLink(
                            'Hi, I would like to book an appointment at G Cube Salon.'
                        )}
                        className="btn btn-whatsapp booking-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Book an appointment through WhatsApp (opens in a new tab)"
                    >
                        <FaWhatsapp size={19} aria-hidden="true" />
                        <span>WhatsApp</span>
                    </a>

                    <Link
                        to="/services"
                        className="btn btn-primary booking-appointment"
                    >
                        <CalendarDays size={18} aria-hidden="true" />
                        <span>Book Appointment</span>
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
