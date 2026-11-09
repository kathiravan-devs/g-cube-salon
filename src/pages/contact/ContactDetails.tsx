
import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock3,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import '../../styles/buttons.css'
import "./contact-details.css";

type ServiceOption = {
  id: string;
  name: string;
  category?: string;
};

type OpeningHour = {
  days: string;
  time: string;
};

type ContactInfoSectionProps = {
  phone: string;
  phoneHref: string;
  whatsappPhone: string;
  whatsappLink: (message: string) => string;
  address: string;
  landmark: string;
  hours: OpeningHour[];
  mapEmbedUrl: string;
  mapsUrl: string;
  storefrontImage?: string;
  services: ServiceOption[];
};

export default function ContactInfoSection({
  phone,
  phoneHref,
  whatsappPhone,
  whatsappLink,
  address,
  landmark,
  hours,
  mapEmbedUrl,
  mapsUrl,
  storefrontImage,
  services,
}: ContactInfoSectionProps) {
  const [audience, setAudience] = useState("Men");
  const [serviceId, setServiceId] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const selectedService = services.find(
    (service) => service.id === serviceId
  );

  const handleBooking = () => {
    if (!serviceId || !day || !time) {
      alert("Please select a service, day and time.");
      return;
    }

    const message = [
      "Hi, I'd like to book an appointment.",
      `Category: ${audience}`,
      `Service: ${selectedService?.name ?? ""}`,
      `Preferred day: ${day}`,
      `Preferred time: ${time}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-info-section">
      <div className="contact-container">

        {/* CONTACT DETAILS */}
        <div className="contact-details">
          <h2 className="contact-section-title">Contact Details</h2>

          <div className="contact-details-grid">
            <a className="contact-detail" href={phoneHref}>
              <span className="contact-icon">
                <Phone />
              </span>
              <span className="contact-detail-content">
                <span className="contact-label">Phone</span>
                <strong>{phone}</strong>
                <small>Tap to call</small>
              </span>
            </a>

            <a
              className="contact-detail"
              href={whatsappLink("Hi, I'd like to enquire about an appointment.")}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <FaWhatsapp />
              </span>
              <span className="contact-detail-content">
                <span className="contact-label">WhatsApp</span>
                <strong>{whatsappPhone}</strong>
                <small>Chat with us</small>
              </span>
            </a>

            <a
              className="contact-detail"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <MapPin />
              </span>
              <span className="contact-detail-content">
                <span className="contact-label">Address</span>
                <strong>{address}</strong>
                <small>Near {landmark}</small>
              </span>
            </a>

            <div className="contact-detail">
              <span className="contact-icon">
                <Clock3 />
              </span>
              <span className="contact-detail-content">
                <span className="contact-label">Hours</span>
                {hours.map((item) => (
                  <span className="contact-hours" key={item.days}>
                    <strong>{item.time}</strong>
                    <small>{item.days}</small>
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* MAP AND STOREFRONT */}
        <div className={`contact-location-grid ${!storefrontImage ? "map-only" : ""}`}>
          <div className="contact-map">
            <iframe
              src={mapEmbedUrl}
              title="G Cube Salon location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="map-directions"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} />
              Open in Maps
              <ExternalLink size={14} />
            </a>
          </div>

          {storefrontImage && (
            <div className="contact-storefront">
              <img
                src={storefrontImage}
                alt="Exterior and signboard of G Cube Salon"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* QUICK WHATSAPP BOOKING */}
        <div className="quick-booking">
          <div className="quick-booking-intro">
            <span className="quick-booking-icon">
              <CalendarDays />
            </span>
            <div>
              <h2>Quick WhatsApp Booking</h2>
              <p>Choose your preferred details and send us a message.</p>
            </div>
          </div>

          <div className="booking-controls">
            <label>
              <span>Men / Women</span>
              <select
                value={audience}
                onChange={(event) => setAudience(event.target.value)}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </label>

            <label>
              <span>Service</span>
              <select
                value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Day</span>
              <select
                value={day}
                onChange={(event) => setDay(event.target.value)}
              >
                <option value="">Select Day</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </label>

            <label>
              <span>Time</span>
              <select
                value={time}
                onChange={(event) => setTime(event.target.value)}
              >
                <option value="">Select Time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </label>

            <button
              className="booking-submit btn-whatsapp"
              type="button"
              onClick={handleBooking}
            >
              <FaWhatsapp size={17} />
              Send on WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
