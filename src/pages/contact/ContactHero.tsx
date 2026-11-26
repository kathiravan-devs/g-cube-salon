import { Phone, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { salon } from "../../data/salon";
import "./contact-hero.css";

export function ContactHero() {
    return (
        <section className="contact-hero" aria-labelledby="contact-title">
            <div className="contact-hero-content">
                <h1 id="contact-title" className="contact-hero-title">Call to book your visit</h1>
                <p className="contact-hero-lead">Speak directly with the salon owner to discuss your service and choose a suitable time.</p>
                <div className="contact-hero-actions">
                    <a href={salon.phoneHref} className="btn btn-primary"><Phone aria-hidden="true" />Call to Book</a>
                    <Link to="/booking" className="btn btn-primary-outline"><CalendarDays aria-hidden="true" />Book Appointment</Link>
                </div>
            </div>
        </section>
    );
}
