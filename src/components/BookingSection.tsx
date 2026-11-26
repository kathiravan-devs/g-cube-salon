import { Link } from 'react-router-dom';
import { Phone, CalendarDays, ArrowRight } from 'lucide-react';
import { salon } from '../data/salon';
import './booking-section.css';

export function BookingSection() {
    return (
        <div className="booking-container">
            <section className="booking-section" aria-labelledby="booking-heading">
                <div className="booking-content">
                    <h2 id="booking-heading" className="booking-heading">Ready for a new look?</h2>
                    <p className="booking-description">Call us to discuss your service and find a suitable time.</p>
                </div>
                <div className="booking-actions">
                    <a href={salon.phoneHref} className="booking-phone btn btn-primary-outline" aria-label={`Call G Cube Salon at ${salon.phone}`}>
                        <Phone size={18} aria-hidden="true" />
                        <span>Call to Book</span>
                    </a>
                    <Link to="/booking" className="btn btn-primary booking-appointment">
                        <CalendarDays size={18} aria-hidden="true" />
                        <span>Book Appointment</span>
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
