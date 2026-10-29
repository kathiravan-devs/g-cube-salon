import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Clock3, Phone, Scissors } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { salon, whatsappLink } from "../../data/salon";
import {
    categories as serviceCategories,
    formatPrice,
    services,
    type AudienceTab,
    type Service,
} from "../../data/services";
import heroImage from "../../assets/hero.png";
import heroMobileImage from "../../assets/hero-mobile.png";
import "./services-page.css";

type ServiceFilter = {
    id: string;
    label: string;
    matches: (service: Service) => boolean;
};

const serviceFilters: ServiceFilter[] = [
    { id: "haircut-styling", label: "Haircut & Styling", matches: (service) => service.categoryId === "hair" && !/beard/i.test(service.name) },
    { id: "hair-colouring", label: "Hair Colouring", matches: (service) => service.categoryId === "colouring" },
    { id: "hair-treatments", label: "Hair Treatments", matches: (service) => service.categoryId === "hair-treatments" },
    { id: "styling-treatments", label: "Styling Treatments", matches: (service) => service.categoryId === "styling-treatments" },
    { id: "beard-grooming", label: "Beard Grooming", matches: (service) => /beard/i.test(service.name) },
    { id: "facial", label: "Facial & Skin Care", matches: (service) => ["facial", "bleach", "skin-treatments"].includes(service.categoryId) },
    { id: "bleach", label: "Bleach & De-tan", matches: (service) => service.categoryId === "bleach" },
    { id: "skin-treatments", label: "Skin Treatments", matches: (service) => service.categoryId === "skin-treatments" },
];

const isForAudience = (service: Service, audience: AudienceTab) =>
    service.audience === audience || service.audience === "all";

const getPrice = (service: Service) =>
    service.priceType === "from" ? `From ${formatPrice(service.price)}` : formatPrice(service.price);

const bookingLink = (service: Service, audience: AudienceTab) =>
    whatsappLink(`Hi, I would like to enquire about ${service.name} (${audience === "men" ? "Men's" : "Women's"} services) at G Cube Salon.`);

function ServicesHero({ audience }: { audience: AudienceTab }) {
    const isMen = audience === "men";

    return (
        <section className={`services-hero ${isMen ? "services-hero--men" : "services-hero--women"}`}>
            <picture className="services-hero-media" aria-hidden="true">
                {isMen ? (
                    <img src="/images/sample-barber.jpg" alt="" />
                ) : (
                    <>
                        <source media="(max-width: 600px)" srcSet={heroMobileImage} />
                        <img src={heroImage} alt="" />
                    </>
                )}
            </picture>
            <div className="services-hero-overlay" />
            <div className="services-hero-content">
                <p className="services-eyebrow">Our Services</p>
                <h1>{isMen ? <>Grooming<br />for a Sharper You</> : <>The Art of<br />Personal Style</>}</h1>
                <p className="services-hero-copy">
                    {isMen
                        ? "From classic cuts to modern styles, our men's services are designed to keep you looking fresh, polished and confident."
                        : "From a fresh cut to colour and care, explore services designed around your personal style."}
                </p>
            </div>
        </section>
    );
}

function GenderToggle({ audience, onChange }: { audience: AudienceTab; onChange: (audience: AudienceTab) => void }) {
    return (
        <div className="services-gender-toggle" role="group" aria-label="Choose services for">
            {(["men", "women"] as const).map((option) => (
                <button key={option} type="button" className={audience === option ? "is-active" : ""}
                    aria-pressed={audience === option} onClick={() => onChange(option)}>
                    {option === "men" ? "Men" : "Women"}
                </button>
            ))}
        </div>
    );
}

function ServiceRow({ service, audience }: { service: Service; audience: AudienceTab }) {
    const isBeard = /beard/i.test(service.name);
    const thumbnail = audience === "men" ? "/images/sample-barber.jpg" : heroMobileImage;
    const description = service.note ??
        (isBeard
            ? "A neat, well-shaped finish tailored to your preferred look."
            : service.categoryId === "colouring"
                ? "Colour options and final results can be discussed with your stylist."
                : service.categoryId === "hair-treatments"
                    ? "Choose a care option suited to your hair and scalp."
                    : ["facial", "bleach", "skin-treatments"].includes(service.categoryId)
                        ? "Ask us which option best suits your skin-care needs."
                        : "Discuss your preferred style and finish with your stylist.");

    return (
        <article className="service-row">
            <div className="service-row-image"><img src={thumbnail} alt="" loading="lazy" /></div>
            <div className="service-row-copy">
                <h3>{service.name}</h3>
                <p>{description}</p>
            </div>
            <div className="service-row-meta">
                <span className="service-meta-label">Duration</span>
                <span className="service-meta-value">Confirm</span>
                <span className="service-meta-note">with salon</span>
            </div>
            <div className="service-row-meta service-row-price">
                <span className="service-meta-label">Price</span>
                <span className="service-meta-value">{getPrice(service)}</span>
            </div>
            <a className="service-book-link" href={bookingLink(service, audience)} target="_blank" rel="noopener noreferrer"
                aria-label={`Enquire about ${service.name} on WhatsApp`}>
                <span>Book Now</span><ArrowRight size={16} aria-hidden="true" />
            </a>
        </article>
    );
}

function FeaturedService({ audience }: { audience: AudienceTab }) {
    const featured = services.find((service) =>
        audience === "men" ? service.id === "hair-cut-men" : service.id === "fashion-colour-women"
    );
    if (!featured) return null;

    const isMen = audience === "men";
    return (
        <section className="featured-service" id="featured-service" aria-labelledby="featured-service-title">
            <div className="featured-service-image">
                <img src={isMen ? "/images/sample-barber.jpg" : heroMobileImage} alt="" loading="lazy" />
            </div>
            <div className="featured-service-content">
                <p className="services-eyebrow">Featured Service</p>
                <h2 id="featured-service-title">{featured.name}</h2>
                <p>{isMen
                    ? "Tell us how you like your hair styled. Your preferred cut and finish can be discussed before the service begins."
                    : "Explore colour options with your stylist and discuss the look, maintenance and final price before starting."}</p>
                <div className="featured-service-details">
                    <span><Clock3 size={16} aria-hidden="true" /> Duration to be confirmed</span>
                    <span>{getPrice(featured)}</span>
                </div>
                <a className="service-book-link featured-service-book" href={bookingLink(featured, audience)}
                    target="_blank" rel="noopener noreferrer">
                    <span>Enquire Now</span><ArrowRight size={16} aria-hidden="true" />
                </a>
            </div>
            <div className="featured-service-note">
                <Scissors size={22} aria-hidden="true" />
                <p>Personalised consultation</p>
                <span>Confirm details directly with the salon.</span>
            </div>
        </section>
    );
}

function BookingCallout() {
    return (
        <section className="services-booking-callout" aria-labelledby="services-booking-title">
            <div className="services-booking-photo" aria-hidden="true">
                <img src="/images/sample-barber.jpg" alt="" loading="lazy" />
            </div>
            <div className="services-booking-copy">
                <p className="services-eyebrow">Ready for a new look?</p>
                <h2 id="services-booking-title">Book Your Appointment</h2>
                <p>Contact us to confirm availability, service duration and final pricing.</p>
                <div className="services-booking-actions">
                    <a className="services-cta-button services-cta-button--dark" href={salon.phoneHref}>
                        <Phone size={17} aria-hidden="true" /><span>Call Now</span>
                    </a>
                    <a className="services-cta-button services-cta-button--outline"
                        href={whatsappLink("Hi, I would like to enquire about an appointment at G Cube Salon.")}
                        target="_blank" rel="noopener noreferrer">
                        <CalendarDays size={17} aria-hidden="true" /><span>Book Appointment</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export function ServicesPage() {
    const [searchParams] = useSearchParams();
    const [audience, setAudience] = useState<AudienceTab>(() =>
        searchParams.get("audience") === "men" ? "men" : "women"
    );
    const [activeFilter, setActiveFilter] = useState<string>(() => {
        const category = searchParams.get("category");
        if (category === "hair") return "haircut-styling";
        if (category === "colouring") return "hair-colouring";
        if (category && serviceCategories.some((item) => item.id === category)) return category;
        return "all";
    });

    const visibleFilters = useMemo(
        () => serviceFilters.filter((filter) =>
            services.some((service) => isForAudience(service, audience) && filter.matches(service))
        ),
        [audience]
    );

    const filteredServices = useMemo(
        () => services.filter((service) => {
            if (!isForAudience(service, audience)) return false;
            if (activeFilter === "all") return true;
            const filter = serviceFilters.find((item) => item.id === activeFilter);
            if (filter) return filter.matches(service);
            return service.categoryId === activeFilter;
        }),
        [activeFilter, audience]
    );

    const handleAudienceChange = (nextAudience: AudienceTab) => {
        setAudience(nextAudience);
        setActiveFilter("all");
    };

    return (
        <>
            <title>Services &amp; Pricing | G Cube Salon</title>
            <main className="services-page">
                <ServicesHero audience={audience} />
                <section className="services-browser" id="service-list" aria-labelledby="services-browser-title">
                    <div className="services-browser-heading">
                        <div>
                            <p className="services-eyebrow">Browse By</p>
                            <h2 id="services-browser-title">Choose Your Style</h2>
                        </div>
                        <GenderToggle audience={audience} onChange={handleAudienceChange} />
                    </div>
                    <div className="services-category-tabs" role="group" aria-label="Filter by service category">
                        <button type="button" className={activeFilter === "all" ? "is-active" : ""}
                            aria-pressed={activeFilter === "all"} onClick={() => setActiveFilter("all")}>All</button>
                        {visibleFilters.map((filter) => (
                            <button key={filter.id} type="button"
                                className={activeFilter === filter.id ? "is-active" : ""}
                                aria-pressed={activeFilter === filter.id}
                                onClick={() => setActiveFilter(filter.id)}>{filter.label}</button>
                        ))}
                    </div>
                    <div className="services-list" aria-live="polite">
                        {filteredServices.length > 0
                            ? filteredServices.map((service) => <ServiceRow key={service.id} service={service} audience={audience} />)
                            : <p className="services-empty">No services are listed in this category yet.</p>}
                    </div>
                    <p className="services-pricing-note">
                        Prices shown are from the current salon service list. Services marked “From” may vary.
                        Durations have not been provided yet; please confirm them with the salon.
                    </p>
                </section>
                <FeaturedService audience={audience} />
                <BookingCallout />
            </main>
        </>
    );
}
