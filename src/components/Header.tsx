import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { salon } from "../data/salon";
import { Phone, CalendarDays, Menu, X } from "lucide-react";
import "./header.css";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="header-brand">
                <Link to="/" className="brand-link" onClick={closeMenu}>
                    <img src="/logo/logo.png" alt="G Cube Salon logo" className="brand-logo" />
                    <span className="brand-name">G CUBE SALON</span>
                </Link>
            </div>

            <nav id="main-nav" className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
                <NavLink to="/" end className="nav-link" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
                <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</NavLink>
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
                <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
            </nav>

            <div className="header-actions">
                <a href={salon.phoneHref} className="phone-button" aria-label="Call G Cube Salon">
                    <Phone aria-hidden="true" />
                    <span>Call Now</span>
                </a>

                {/* Booking interaction intentionally remains unchanged pending the booking discussion. */}
                <button className="appointment-button" aria-label="Book Appointment">
                    <CalendarDays aria-hidden="true" />
                    <span>Book Appointment</span>
                </button>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-nav"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </div>
        </header>
    );
}
