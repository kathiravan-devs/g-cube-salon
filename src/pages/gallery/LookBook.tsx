
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type {
  CSSProperties,
  MouseEvent,
  TouchEvent,
} from "react";

import { salon } from "../../data/salon";

import "./look-book.css";

// Configuration
const WHATSAPP_NUMBER = salon.whatsapp;
const PAGE_SIZE = 8;

// Types
type Category = "all" | "men" | "women" | "bridal" | "beard";

type LookCategory = Exclude<Category, "all">;

type HairType = "fade" | "long" | "updo" | "beard";

interface Look {
  t: string;
  s: string;
  c: LookCategory;
  k: HairType;
  src?: string;
}

interface LookWithImage extends Look {
  src: string;
}

interface GalleryItemStyle extends CSSProperties {
  "--d": number;
}

// Categories
const CATEGORIES: Record<Category, string> = {
  all: "All",
  men: "Men's Cuts",
  women: "Women's Styles",
  bridal: "Bridal & Party",
  beard: "Beard & Grooming",
};

// Gallery data
const LOOKS: Look[] = [
  {
    t: "Skin Fade + Textured Top",
    s: "Modern. Clean. Timeless.",
    c: "men",
    k: "fade",
    src: "./service-hero-men.png"
  },
  {
    t: "Layered Cut + Soft Waves",
    s: "Movement that frames your face.",
    c: "women",
    k: "long",
  },
  {
    t: "Bridal Curl Updo",
    s: "Made for the biggest day.",
    c: "bridal",
    k: "updo",
  },
  {
    t: "Sharp Fade + Beard Sculpt",
    s: "Defined lines, zero guesswork.",
    c: "beard",
    k: "beard",
  },
  {
    t: "Caramel Balayage Layers",
    s: "Sun-kissed colour, low upkeep.",
    c: "women",
    k: "long",
  },
  {
    t: "Curly Taper Fade",
    s: "Keep the curls, lose the bulk.",
    c: "men",
    k: "fade",
  },
  {
    t: "Classic Beard Trim",
    s: "Tidy edges, natural shape.",
    c: "beard",
    k: "beard",
  },
  {
    t: "Fade with Hair Design",
    s: "A cut that carries a signature.",
    c: "men",
    k: "fade",
  },
  {
    t: "Low Bun Party Style",
    s: "Elegant, secure, camera-ready.",
    c: "bridal",
    k: "updo",
  },
  {
    t: "Long Layers Blow-Dry",
    s: "Glossy volume that lasts.",
    c: "women",
    k: "long",
  },
  {
    t: "Textured Crop",
    s: "Easy to style every morning.",
    c: "men",
    k: "fade",
  },
  {
    t: "Groom Beard Shaping",
    s: "Wedding-day sharp.",
    c: "beard",
    k: "beard",
  },
  {
    t: "Braided Bridal Bun",
    s: "Traditional detail, modern finish.",
    c: "bridal",
    k: "updo",
  },
  {
    t: "Shoulder-Length Bob",
    s: "Clean, bold and effortless.",
    c: "women",
    k: "long",
  },
  {
    t: "Pompadour Fade",
    s: "Volume on top, precision on the sides.",
    c: "men",
    k: "fade",
  },
  {
    t: "Stubble + Line-Up",
    s: "Short, sharp, sorted.",
    c: "beard",
    k: "beard",
  },
];

// Temporary SVG artwork
function createArtwork(type: HairType, index: number): string {
  const skin = ["#b98466", "#c8946f", "#a8705a", "#d3a183"][index % 4];

  const hair =
    type === "long"
      ? ["#4a2a1c", "#6b3b22", "#2d1b13"][index % 3]
      : ["#1a1210", "#2a1a12", "#120d0c"][index % 3];

  const cape = type === "updo" ? "#e8e0d2" : "#17130f";

  const back =
    type === "long"
      ? `<path d="M112 240C100 120 150 80 200 80s100 40 88 160c-4 50 14 96 30 130H82c16-34 34-80 30-130z" fill="${hair}"/>`
      : type === "updo"
        ? `<circle cx="200" cy="108" r="44" fill="${hair}"/>`
        : "";

  const ears =
    type === "long"
      ? ""
      : `<ellipse cx="129" cy="246" rx="9" ry="16" fill="${skin}"/>
         <ellipse cx="271" cy="246" rx="9" ry="16" fill="${skin}"/>`;

  const beard =
    type === "beard"
      ? `<path d="M128 252c4 58 34 94 72 94s68-36 72-94c-14 20-34 30-72 30s-58-10-72-30z" fill="${hair}"/>`
      : "";

  const top =
    type === "long"
      ? `<path d="M126 218c8-54 46-84 76-84 34 0 64 30 72 84-26-32-50-46-74-46s-50 14-74 46z" fill="${hair}"/>`
      : type === "updo"
        ? `<path d="M128 222c-2-62 30-94 72-94s74 32 72 94c-18-28-44-40-72-40s-54 12-72 40z" fill="${hair}"/>
           <rect x="232" y="100" width="38" height="8" rx="4" fill="#e8c98f" transform="rotate(-24 250 104)"/>`
        : `<path d="M124 226c-10-70 22-124 80-124s90 52 72 124c-6-32-22-54-76-54s-66 22-76 54z" fill="${hair}"/>`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 440">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#3b2e27"/>
          <stop offset="1" stop-color="#0d0b0a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="440" fill="url(#g)"/>
      <circle cx="330" cy="70" r="46" fill="#ffd9a0" opacity=".15"/>
      <circle cx="64" cy="120" r="28" fill="#ffd9a0" opacity=".1"/>
      <path d="M30 440c10-70 70-96 170-96s160 26 170 96z" fill="${cape}"/>
      ${back}
      <path d="M168 296h64v62c-20 14-44 14-64 0z" fill="${skin}"/>
      <ellipse cx="200" cy="242" rx="72" ry="88" fill="${skin}"/>
      ${ears}${beard}${top}
    </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Add images to gallery data
const LOOKBOOK: LookWithImage[] = LOOKS.map((look, index) => ({
  ...look,
  src: look.src || createArtwork(look.k, index),
}));

// Component
export default function Lookbook() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Filter gallery
  const filteredLooks = useMemo(() => {
    return LOOKBOOK.filter(
      (look) =>
        activeCategory === "all" ||
        look.c === activeCategory
    );
  }, [activeCategory]);

  const currentLook = filteredLooks[activeIndex];

  const visibleLooks = filteredLooks.slice(0, visibleCount);

  // Category filter
  function handleFilter(category: Category): void {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
    setActiveIndex(0);
  }

  // Load more
  function handleLoadMore(): void {
    setVisibleCount((previous) => previous + PAGE_SIZE);
  }

  // Open lightbox
  function openLightbox(
    index: number,
    event: MouseEvent<HTMLButtonElement>
  ): void {
    openerRef.current = event.currentTarget;
    setActiveIndex(index);
    setIsOpen(true);
  }

  // Close lightbox
  function closeLightbox(): void {
    setIsOpen(false);
  }

  // Next image
  function showNext(): void {
    setActiveIndex((previous) =>
      (previous + 1) % filteredLooks.length
    );
  }

  // Previous image
  function showPrevious(): void {
    setActiveIndex((previous) =>
      (previous - 1 + filteredLooks.length) %
      filteredLooks.length
    );
  }

  // Dialog integration
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, filteredLooks.length]);

  // Restore focus after closing
  function handleDialogClose(): void {
    setIsOpen(false);
    openerRef.current?.focus();
  }

  // Mobile swipe
  function handleTouchStart(event: TouchEvent<HTMLDivElement>): void {
    if ((event.target as HTMLElement).closest(".thumbs")) return;

    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>): void {
    if (touchStartX.current === null) return;

    const difference =
      event.changedTouches[0].clientX - touchStartX.current;

    touchStartX.current = null;

    if (Math.abs(difference) > 50) {
        return difference < 0 ? showNext() : showPrevious();
    }
  }

  // WhatsApp booking URL
  const bookingLink = currentLook
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi G Cube Salon, I'd like to book this look: ${currentLook.t}`
      )}`
    : "#";

  return (
    <section className="gal" id="gallery-grid" aria-labelledby="gal-t">

      {/* Header */}
      <header className="head">
        <p className="section-eyebrow">The Lookbook</p>

        <h2 id="gal-t">
          Crafted cuts, <em>confident looks.</em>
        </h2>

        <p className="lede">
          A few of the looks we create every day at G Cube Salon.
          Tap any look to see it up close, then book it on WhatsApp.
        </p>
      </header>

      {/* Filters */}
      <div className="filters" role="group" aria-label="Filter looks">
        {(Object.entries(CATEGORIES) as [Category, string][]).map(
          ([key, label]) => (
            <button
              key={key}
              type="button"
              className="chip"
              aria-pressed={activeCategory === key}
              onClick={() => handleFilter(key)}
            >
              {label}
            </button>
          )
        )}
      </div>

      {/* Gallery */}
      <ul className="grid">
        {visibleLooks.map((look, index) => (
          <li
            key={look.t}
            style={{ "--d": index % PAGE_SIZE } as GalleryItemStyle}
          >
            <button
              type="button"
              className="tile"
              aria-label={`View ${look.t}`}
              onClick={(event) => openLightbox(index, event)}
            >
              <img
                src={look.src}
                alt={look.t}
                loading="lazy"
              />

              <span className="cap">
                <b>{look.t}</b>
                <small>{CATEGORIES[look.c]}</small>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Load More */}
      <div className="more">
        <p className="count" aria-live="polite">
          Showing {visibleLooks.length} of {filteredLooks.length} looks
        </p>

        {visibleCount < filteredLooks.length && (
          <button
            type="button"
            className="btn-more"
            onClick={handleLoadMore}
          >
            Load More

            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        className="lookbook-dialog"
        aria-labelledby="lb-t"
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeLightbox();
          }
        }}
      >
        {currentLook && (
          <>
            {/* Image */}
            <div
              className="lb-media"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={currentLook.src}
                alt={currentLook.t}
              />

              {/* Previous */}
              <button
                className="nav prev"
                type="button"
                aria-label="Previous look"
                onClick={showPrevious}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m15 6-6 6 6 6" />
                </svg>
              </button>

              {/* Next */}
              <button
                className="nav next"
                type="button"
                aria-label="Next look"
                onClick={showNext}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>

              {/* Thumbnails */}
              <div className="thumbs">
                {filteredLooks.map((look, index) => (
                  <button
                    key={look.t}
                    type="button"
                    aria-label={`Show ${look.t}`}
                    aria-current={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={look.src} alt="" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lb-info">
              <h3 id="lb-t">{currentLook.t}</h3>

              <p>{currentLook.s}</p>

              <hr />

              <a
                className="cta"
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z" />
                  <path d="M9 8.5c.3 2.7 2.8 5.2 5.5 5.5l1.3-1.3-2-1-.9.7c-.9-.4-1.9-1.4-2.3-2.3l.7-.9-1-2z" />
                </svg>

                Book this Look
              </a>
            </div>

            {/* Close and counter */}
            <div className="lb-top">
              <span aria-live="polite">
                {activeIndex + 1} / {filteredLooks.length}
              </span>

              <button
                className="x"
                type="button"
                aria-label="Close"
                onClick={closeLightbox}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
