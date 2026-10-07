import { MapPin, CalendarDays, Scissors } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { salon, whatsappLink } from "../../data/salon";
import "./hero.css";
import "../../styles/global.css";
import "../../styles/buttons.css";

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero-content">
                <p className="hero-eyebrow">Premium Unisex Salon</p>

                <h1 id="hero-title" className="hero-title">
                    G Cube Salon
                </h1>
                <p className="hero-tagline">Where Style Meets Craft.</p>

                <div className="hero-meta">
                    <span className="hero-location">
                        <MapPin aria-hidden="true" />
                        {salon.locality}
                    </span>
                    <span className="hero-services">
                        <Scissors aria-hidden="true" />
                        Hair &middot; Skin &middot; Grooming
                    </span>
                </div>

                <div className="hero-actions">
                    {/* /contact is a placeholder until booking is designed */}
                    <Link to="/contact" className="btn btn-gold">
                        <CalendarDays aria-hidden="true" />
                        Book Appointment
                    </Link>
                    <a
                        href={whatsappLink("Hi, I want to book an appointment")}
                        className="btn btn-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp aria-hidden="true" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}