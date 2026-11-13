
import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import './gallery-nav.css';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

interface GalleryNavProps {
    phoneHref: string;
}

export function GalleryNav({ phoneHref }: GalleryNavProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="gallery-nav">

            {/* Logo */}
            <a href="/" className="gallery-logo">
                <span className="logo-name">G CUBE</span>
                <span className="logo-subtitle">SALON</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="gallery-nav-links">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={
                            link.name === 'Gallery'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Call to Book */}
            <a href={phoneHref} className="nav-book-btn">
                <Phone size={16} fill="currentColor" />
                <span>Call to Book</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

            {/* Mobile Navigation */}
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={
                            link.name === 'Gallery'
                                ? 'mobile-nav-link active'
                                : 'mobile-nav-link'
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}

                <a
                    href={phoneHref}
                    className="mobile-book-btn"
                >
                    <Phone size={16} />
                    Call to Book
                </a>
            </nav>

        </header>
    );
}
