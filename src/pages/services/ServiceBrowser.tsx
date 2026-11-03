import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
    categories,
    services,
    formatPrice,
    type AudienceTab,
    type Service,
} from "../../data/services";
import { whatsappLink } from "../../data/salon";
import type { Gender } from "./Services";
import "./service-browser.css";

interface ServicesBrowserProps {
    audience: Gender;
    onAudienceChange: (audience: Gender) => void;
}

function ServiceRow({ service }: { service: Service }) {
    const message = `Hi, I would like to enquire about ${service.name} at G Cube Salon.`;

    return (
        <li className="service-row">
            <div className="service-row__info">
                <p className="service-row__name">{service.name}</p>

                {service.note && (
                    <p className="service-row__note">{service.note}</p>
                )}
            </div>

            <p className="service-row__price">
                {service.priceType === "from" && (
                    <>
                        <span className="service-row__from">From</span>{" "}
                    </>
                )}
                <span className="service-row__amount">
                    {formatPrice(service.price)}
                </span>
            </p>

            <a
                href={whatsappLink(message)}
                className="service-row__book"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book Now: ${service.name} (opens WhatsApp)`}
            >
                <span>Book Now</span>
                <ArrowRight size={16} aria-hidden="true" />
            </a>
        </li>
    );
}

export function ServicesBrowser({
    audience,
    onAudienceChange,
}: ServicesBrowserProps) {
    const [activeCategory, setActiveCategory] = useState("all");

    // Everything this audience can see ("all" = same price on both sheets)
    const audienceServices = useMemo(
        () =>
            services.filter(
                (service) =>
                    service.audience === audience ||
                    service.audience === "all",
            ),
        [audience],
    );

    // Categories that have at least one service for this audience (the tabs)
    const visibleCategories = useMemo(
        () =>
            categories.filter((category) =>
                audienceServices.some(
                    (service) => service.categoryId === category.id,
                ),
            ),
        [audienceServices],
    );

    // One group per category; just one group when a tab is selected
    const groups = useMemo(
        () =>
            visibleCategories
                .filter(
                    (category) =>
                        activeCategory === "all" ||
                        category.id === activeCategory,
                )
                .map((category) => ({
                    category,
                    items: audienceServices.filter(
                        (service) => service.categoryId === category.id,
                    ),
                })),
        [visibleCategories, audienceServices, activeCategory],
    );

    function changeAudience(nextAudience: AudienceTab) {
        onAudienceChange(nextAudience);
        setActiveCategory("all");
    }

    return (
        <section
            className="services-browser"
            aria-labelledby="services-browser-title"
        >
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
                    {groups.length > 0 ? (
                        groups.map(({ category, items }) => (
                            <div className="services-group" key={category.id}>
                                {activeCategory === "all" && (
                                    <h3 className="services-group__title">
                                        {category.title}
                                    </h3>
                                )}

                                <ul
                                    className="services-group__list"
                                    role="list"
                                >
                                    {items.map((service) => (
                                        <ServiceRow
                                            key={service.id}
                                            service={service}
                                        />
                                    ))}
                                </ul>
                            </div>
                        ))
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