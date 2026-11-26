import { MapPin, Phone, Scissors, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { salon } from "../../data/salon";
import "./hero.css";
import "../../styles/buttons.css";

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero-content">
                <p className="hero-eyebrow">Premium Unisex Salon</p>
                <h1 id="hero-title" className="hero-title">G Cube Salon</h1>
                <p className="hero-tagline">Where Style Meets Craft.</p>
                <div className="hero-meta">
                    <span className="hero-location"><MapPin aria-hidden="true" />{salon.locality}</span>
                    <span className="hero-services"><Scissors aria-hidden="true" />Hair · Skin · Grooming</span>
                </div>
                <div className="hero-actions">
                    <a href={salon.phoneHref} className="btn btn-primary" aria-label={`Call G Cube Salon at ${salon.phone}`}>
                        <Phone aria-hidden="true" />Call to Book
                    </a>
                    <Link to="/booking" className="btn btn-primary-outline">
                        <CalendarDays aria-hidden="true" />Book Appointment
                    </Link>
                </div>
            </div>
        </section>
    );
}
