import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { salon, whatsappLink } from "../../data/salon";
import "./contact-hero.css";

export function ContactHero() {
    return (
        <section className="contact-hero" aria-labelledby="contact-title">
            <div className="contact-hero-content">
                <h1 id="contact-title" className="contact-hero-title">
                    Book an appointment
                </h1>

                <p className="contact-hero-lead">
                    Call or message us on WhatsApp with the service and the time you’d like.
                </p>

                <div className="contact-hero-actions">
                    <a href={salon.phoneHref} className="btn btn-primary">
                        <Phone aria-hidden="true" />
                        Call Now
                    </a>

                    <a
                        href={whatsappLink("Hi, I would like to book an appointment")}
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