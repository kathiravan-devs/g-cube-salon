import { useState } from "react";
import {
  Scissors,
  Palette,
  ScanFace,
  Star,
  type LucideIcon,
  ArrowRight,
  Droplets,
  Flower2,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  categories,
  getPriceLabel,
  getServices,
  type AudienceTab,
} from "../../data/services";
import "../../styles/buttons.css"
import "./service-card.css";



const categoryIcons: Record<string, LucideIcon> = {
  hair: Scissors,
  colouring: Palette,
  "hair-treatments": Droplets,
  "styling-treatments": Wind,
  "facial&bleach": Flower2,
  "skin-treatments": ScanFace,
};

const tabs: { id: AudienceTab; label: string }[] = [
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
];
categories.forEach((c) =>
  console.log(c.id, "men:", getServices(c.id, "men").length, "women:", getServices(c.id, "women").length)
);
export function OurServices() {
  const [audience, setAudience] = useState<AudienceTab>("men");

  // Skip categories with nothing for the selected audience
  const cards = categories
    .map((category) => ({ category, items: getServices(category.id, audience) }))
    .filter(({ items }) => items.length > 0);

  return (
    <section
      className="service-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="service-header">
        <div className="service-heading">
          <span className="section-eyebrow">OUR SERVICES</span>
          <h2 id="services-title">Services &amp; Pricing</h2>
          <p>Haircuts, colouring, skin care and grooming for men and women.</p>
        </div>

        <div className="service-tabs" role="group" aria-label="Show services for">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={audience === id}
              onClick={() => setAudience(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* role="list" keeps list semantics in Safari when list-style is none */}
      <ul className="service-grid" role="list">
        {cards.map(({ category, items }) => {
          const Icon = categoryIcons[category.id] ?? Star;

          return (
            <li key={category.id} className="service-card">
              <div className="service-card-media">
                <img src={`images/service/${category.image}-${audience}.jpg`} alt={category.title} className="service-card-photo" />
                <Icon className="service-card-icon" aria-hidden="true" />
              </div>

              <div className="service-card-body">

                <h3 className="service-card-title">
                  <Link
                    to={`/services?audience=${audience}&category=${category.id}`}
                    className="service-card-link"
                  >
                    {category.title}
                  </Link>
                </h3>

                <p className="service-card-summary">{category.summary[audience]}</p>

                <p className="service-card-price">
                  {getPriceLabel(items)}
                  <ArrowRight aria-hidden="true" />
                </p>

              </div>

            </li>
          );
        })}
      </ul>


      <Link to={`/services?audience=${audience}`} className="service-footer">
        <button className="btn btn-primary-outline">
          View all services &amp; pricing
          <ArrowRight aria-hidden="true" />
        </button>
      </Link>
    </section>
  );
}
