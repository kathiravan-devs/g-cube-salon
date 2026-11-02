
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
    categories,
    services,
    formatPrice,
    type AudienceTab,
    type Category,
    type Service,
} from "../../data/services";
import { whatsappLink } from "../../data/salon";
import type { Gender } from "./Services";
import "./service-browser.css";

interface ServicesBrowserProps {
    audience: Gender;
    onAudienceChange: (audience: Gender) => void;
}

const IMAGE_BASE = "/images/service";

function getServiceImage(category: Category, audience: Gender) {
    return `${IMAGE_BASE}/${category.image}-${audience}.jpg`;
}

function getServicePrice(service: Service) {
    const price = formatPrice(service.price);
    return service.priceType === "from" ? `From ${price}` : price;
}

interface ServiceRowProps {
    service: Service;
    category: Category;
    featured?: boolean;
    audience: Gender;
}

function ServiceRow({
    service,
    category,
    featured = false,
    audience
}: ServiceRowProps) {
    const message = `Hi, I would like to enquire about ${service.name} at G Cube Salon.`;

    return (
        <article
            className={`service-row ${featured ? "service-row--featured" : ""}`}
        >
            <div className="service-row__image">
                <img
                    src={getServiceImage(category, audience)}
                    alt={`${category.title} at G Cube Salon`}
                    loading="lazy"
                />
            </div>

            <div className="service-row__content">
                {featured && (
                    <span className="service-row__featured-label">
                        Featured
                    </span>
                )}

                <h3>{service.name}</h3>
                <p>{category.title}</p>

                {service.note && (
                    <span className="service-row__note">
                        {service.note}
                    </span>
                )}
            </div>

            <div className="service-row__meta">
                <span className="service-row__meta-label">Duration</span>
                <span className="service-row__meta-value">
                    Confirm
                </span>
            </div>

            <div className="service-row__meta service-row__price">
                <span className="service-row__meta-label">Price</span>
                <span className="service-row__meta-value">
                    {getServicePrice(service)}
                </span>
            </div>

            <a
                href={whatsappLink(message)}
                className="service-row__book"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${service.name} on WhatsApp`}
            >
                <span>Book Now</span>
                <ArrowRight size={16} aria-hidden="true" />
            </a>
        </article>
    );
}

export function ServicesBrowser({ audience, onAudienceChange, }: ServicesBrowserProps) {

    const [activeCategory, setActiveCategory] = useState("all");

    const visibleCategories = useMemo(
        () =>
            categories.filter((category) =>
                services.some(
                    (service) =>
                        service.categoryId === category.id &&
                        (service.audience === audience ||
                            service.audience === "all"),
                ),
            ),
        [audience],
    );

    const filteredServices = useMemo(() =>
        services.filter(
            (service) =>
                (service.audience === audience ||
                    service.audience === "all") &&
                (activeCategory === "all" ||
                    service.categoryId === activeCategory),
        ),
        [audience, activeCategory],
    );

    const featuredService = filteredServices[0];

    const featuredCategory = categories.find(
        (category) => category.id === featuredService?.categoryId,
    );

    const remainingServices = filteredServices.slice(1);

    function changeAudience(nextAudience: AudienceTab) {
        onAudienceChange(nextAudience);
        setActiveCategory("all");
    }

    return (
        <section className="services-browser" aria-labelledby="services-browser-title">
            <div className="services-browser__inner">
                <div className="services-browser__header">
                    <div>
                        <span className="services-eyebrow">Browse by</span>
                        <h2 id="services-browser-title">Choose Your Style</h2>
                    </div>

                    <div
                        className="services-audience"
                        role="group"
                        aria-label="Choose services for"
                    >
                        <button
                            type="button"
                            className={audience === "men" ? "is-active" : ""}
                            aria-pressed={audience === "men"}
                            onClick={() => changeAudience("men")}
                        >
                            Men
                        </button>

                        <button
                            type="button"
                            className={audience === "women" ? "is-active" : ""}
                            aria-pressed={audience === "women"}
                            onClick={() => changeAudience("women")}
                        >
                            Women
                        </button>
                    </div>
                </div>

                <div
                    className="services-categories"
                    role="group"
                    aria-label="Filter services by category"
                >
                    <button
                        type="button"
                        className={activeCategory === "all" ? "is-active" : ""}
                        aria-pressed={activeCategory === "all"}
                        onClick={() => setActiveCategory("all")}
                    >
                        All
                    </button>

                    {visibleCategories.map((category) => (
                        <button
                            type="button"
                            key={category.id}
                            className={
                                activeCategory === category.id
                                    ? "is-active"
                                    : ""
                            }
                            aria-pressed={activeCategory === category.id}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                <div className="services-list" aria-live="polite">
                    {featuredService && featuredCategory ? (
                        <>
                            <ServiceRow
                                service={featuredService}
                                category={featuredCategory}
                                featured
                                audience={audience}
                            />

                            {remainingServices.map((service) => {
                                const category = categories.find(
                                    (item) => item.id === service.categoryId,
                                );

                                if (!category) return null;

                                return (
                                    <ServiceRow
                                        key={service.id}
                                        service={service}
                                        category={category}
                                        audience={audience}
                                    />
                                );
                            })}
                        </>
                    ) : (
                        <p className="services-empty">
                            No services are currently listed in this category.
                        </p>
                    )}
                </div>

                <p className="services-browser__note">
                    Prices are shown as listed. Please contact the salon to
                    confirm duration and final pricing where applicable.
                </p>
            </div>
        </section>
    );
}
