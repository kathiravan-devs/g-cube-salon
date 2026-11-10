import type { ElementType } from "react";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { salon, whatsappLink } from "../../data/salon";
import "./contact-info.css";

// The shop-front photo is optional: the tile appears only while this file exists.
// Swap in a real photo with the same name (.png, .jpg or .webp) and nothing else changes.
const shopPhotos = import.meta.glob<string>("../../assets/g-cube-store.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
});
const shopPhoto: string | undefined = Object.values(shopPhotos)[0];

interface Fact {
    id: string;
    label: string;
    value: string;
    note?: string;
    href?: string;
    Icon: ElementType;
}

const facts: Fact[] = [
    { id: "phone", label: "Phone", value: salon.phone, note: "Tap to call", href: salon.phoneHref, Icon: Phone },
    {
        id: "whatsapp",
        label: "WhatsApp",
        value: salon.phone,
        note: "Chat with us",
        href: whatsappLink("Hi, I would like to book an appointment"),
        Icon: FaWhatsapp,
    },
    {
        id: "address",
        label: "Address",
        value: salon.address,
        note: salon.landmark ? `Near ${salon.landmark}` : undefined,
        href: salon.mapsUrl,
        Icon: MapPin,
    },
    { id: "hours", label: "Hours", value: salon.hours, note: salon.hoursNote || undefined, Icon: Clock },
];

export function ContactInfo() {
    return (
        <>
            <section className="contact-facts" aria-labelledby="contact-facts-title">
                <h2 id="contact-facts-title" className="section-eyebrow">
                    Contact details
                </h2>

                <ul className="contact-facts-list" role="list">
                    {facts.map(({ id, label, value, note, href, Icon }) => {
                        const content = (
                            <>
                                <span className={`contact-fact-icon contact-fact-icon--${id}`} aria-hidden="true">
                                    <Icon />
                                </span>
                                <span className="contact-fact-text">
                                    <span className="contact-fact-label">{label}</span>
                                    <span className="contact-fact-value">{value}</span>
                                    {note && <span className="contact-fact-note">{note}</span>}
                                </span>
                            </>
                        );

                        return (
                            <li key={id} className="contact-facts-item">
                                {href ? (
                                    <a
                                        className="contact-fact"
                                        href={href}
                                        {...(href.startsWith("http")
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div className="contact-fact">{content}</div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className="contact-place" aria-labelledby="contact-place-title">
                <h2 id="contact-place-title" className="contact-sr-only">
                    Location
                </h2>

                <div className={`contact-place-grid${shopPhoto ? " contact-place-grid--photo" : ""}`}>
                    <div className="contact-place-map">
                        <div className="contact-place-frame">
                            {salon.mapEmbedUrl ? (
                                <iframe
                                    src={salon.mapEmbedUrl}
                                    title={`Map showing ${salon.name}`}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="contact-place-empty">
                                    <MapPin aria-hidden="true" />
                                    <p>{salon.address}</p>
                                </div>
                            )}
                        </div>

                        {/* Under the map, not on top of it: the embed draws its own controls
                            and Google logo in the corners */}
                        <div className="contact-place-bar">
                            <p className="contact-place-caption">
                                {salon.name}, {salon.locality}
                            </p>
                            <a
                                className="btn btn-primary-outline"
                                href={salon.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open in Maps
                                <ExternalLink aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {shopPhoto && (
                        <figure className="contact-place-photo">
                            <img
                                src={shopPhoto}
                                alt={`Front of ${salon.name}`}
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                    )}
                </div>
            </section>
        </>
    );
}