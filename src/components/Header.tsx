import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, CalendarDays, Menu, X } from "lucide-react";
import './header.css'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="header-brand">
                <Link to="/" className="brand-link" onClick={closeMenu}>
                    <img
                        src="/logo/logo-gold.png"
                        alt="G Cube Salon logo"
                        className="brand-logo"
                    />
                    <span className="brand-name">G CUBE SALON</span>
                </Link>
            </div>

            <nav id="main-nav" className={`main-nav ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
                <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</NavLink>
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
                <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
            </nav>

            <div className="header-actions">
                <a href="tel:+918438328069" className="phone-button" aria-label="Call G Cube Salon">
                    <Phone />
                    <span>+91 84383 28069</span>
                </a>

                <button className="appointment-button" aria-label="Book Appointment">
                    <CalendarDays />
                    <span>Book Appointment</span>
                </button>

                <button
                    className="menu-toggle"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-nav"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}