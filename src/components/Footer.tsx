import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { categories } from "../data/services";
import { salon, whatsappLink } from "../data/salon";
import logo from "/logo/logo.png";
import "./footer.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "Instagram", href: salon.social.instagram, Icon: FaInstagram },
  { label: "Facebook", href: salon.social.facebook, Icon: FaFacebook },
].filter((social) => social.href);

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="G Cube Salon" />
            <span className="brand-name">G CUBE SALON</span>
          </Link>
          <p className="footer-tagline">Hair, skin and grooming for men and women.</p>
          {socials.length > 0 && (
            <div className="footer-socials">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            {quickLinks.map(({ label, to }) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </nav>

        <div className="footer-column">
          <h2 className="footer-title">Our Services</h2>
          <ul className="footer-links">
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`/services?category=${encodeURIComponent(category.id)}`}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h2 className="footer-title">Get in Touch</h2>
          <address className="footer-contact-list">
            <a className="footer-contact-item" href={salon.phoneHref}><Phone aria-hidden="true" /><span>{salon.phone}</span></a>
            <a className="footer-contact-item" href={whatsappLink("Hi, I would like to book an appointment")} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="footer-whatsapp" aria-hidden="true" /><span>Message us on WhatsApp</span>
            </a>
            <a className="footer-contact-item" href={salon.mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden="true" /><span>{salon.address}</span>
            </a>
            <div className="footer-contact-item"><Clock aria-hidden="true" /><span>Hours: {salon.hours}</span></div>
          </address>
        </div>
      </div>
      <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} {salon.name}. All rights reserved.</p></div>
    </footer>
  );
}
