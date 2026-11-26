import { CalendarDays, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { salon } from "../../data/salon";
import "./booking-unavailable.css";

export function BookingUnavailable() {
    return (
        <>
            <Header />
            <main className="booking-unavailable">
                <div className="booking-unavailable__content">
                    <span className="booking-unavailable__icon"><CalendarDays aria-hidden="true" /></span>
                    <p className="booking-unavailable__eyebrow">G Cube Salon</p>
                    <h1>Online appointments are currently unavailable</h1>
                    <p>Our salon is currently managed directly by the owner. Please call to discuss your preferred service and arrange your visit personally.</p>
                    <a className="btn btn-primary" href={salon.phoneHref}>
                        <Phone aria-hidden="true" /> Call to Book
                    </a>
                    <p className="booking-unavailable__phone">{salon.phone}</p>
                    <Link className="booking-unavailable__back" to="/">Back to Home</Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
