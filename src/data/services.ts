export type Audience = "men" | "women" | "all"; // "all" = same price on both sheets
export type PriceType = "fixed" | "from";

export interface Category {
    id: string;
    title: string;
    summary: string; // may only name services that exist on BOTH sheets
}

export interface Service {
    id: string;
    name: string;
    categoryId: string;
    audience: Audience;
    price: number; // whole rupees
    priceType: PriceType;
    note?: string;
}

export const categories: Category[] = [
    { id: "hair", title: "Hair Services", summary: "Haircuts for men, women and kids." },
    { id: "colouring", title: "Colouring", summary: "Hair colour, streaks and fashion colour." },
    { id: "hair-treatments", title: "Hair Treatments", summary: "Hair spa and anti-dandruff treatment." },
    { id: "styling-treatments", title: "Styling Treatments", summary: "Straightening and smoothening." },
    { id: "facial", title: "Facial", summary: "From a quick clean up to a bridal facial." },
    { id: "bleach", title: "Bleach & De-tan", summary: "Face, face & neck and full hand." },
    { id: "skin-treatments", title: "Skin Treatments", summary: "Acne, anti-aging and anti-pigmentation." },
];

export const services: Service[] = [
    // ---------- Hair ----------
    { id: "hair-cut-men", name: "Hair cut", categoryId: "hair", audience: "men", price: 250, priceType: "fixed" },
    { id: "kid-cut-men", name: "Kid cut", categoryId: "hair", audience: "men", price: 150, priceType: "fixed" },
    { id: "beard-trim-men", name: "Beard trim", categoryId: "hair", audience: "men", price: 150, priceType: "from" },
    { id: "makeover-cut-men", name: "Makeover hair cut", categoryId: "hair", audience: "men", price: 200, priceType: "from" }, // TODO: cheaper than a plain haircut?
    { id: "kid-cut-women", name: "Kid cut", categoryId: "hair", audience: "women", price: 200, priceType: "fixed" },
    { id: "hair-cut-women", name: "Hair cut", categoryId: "hair", audience: "women", price: 300, priceType: "fixed" },
    { id: "advanced-cut-women", name: "Advanced hair cut", categoryId: "hair", audience: "women", price: 500, priceType: "fixed" },
    { id: "fashion-cut-women", name: "Fashion hair cut", categoryId: "hair", audience: "women", price: 800, priceType: "fixed" },

    // ---------- Colouring ----------
    { id: "basic-colour-men", name: "Basic colour", categoryId: "colouring", audience: "men", price: 400, priceType: "fixed" },
    { id: "fashion-colour-men", name: "Fashion colour", categoryId: "colouring", audience: "men", price: 500, priceType: "from" },
    { id: "streaks-men", name: "Streaks", categoryId: "colouring", audience: "men", price: 500, priceType: "from" },
    { id: "crazy-colour-men", name: "Crazy colour", categoryId: "colouring", audience: "men", price: 1000, priceType: "fixed" },
    { id: "root-touch-up-women", name: "Root touch-up", categoryId: "colouring", audience: "women", price: 800, priceType: "fixed" },
    { id: "global-colour-women", name: "Global colour", categoryId: "colouring", audience: "women", price: 1200, priceType: "from" },
    { id: "streaks-women", name: "Streaks", categoryId: "colouring", audience: "women", price: 800, priceType: "fixed", note: "6 streaks" }, // TODO: confirm "6 Nos"
    { id: "global-streaks-women", name: "Global streaks", categoryId: "colouring", audience: "women", price: 1200, priceType: "from" },
    { id: "fashion-colour-women", name: "Fashion colour", categoryId: "colouring", audience: "women", price: 1500, priceType: "from", note: "Balayage, ombre, streaks, global fashion colour" }, // TODO: confirm what the bracket line means

    // ---------- Hair treatments ----------
    { id: "anti-dandruff-men", name: "Anti-dandruff treatment", categoryId: "hair-treatments", audience: "men", price: 600, priceType: "fixed" },
    { id: "hair-spa-short-men", name: "Hair spa (short hair)", categoryId: "hair-treatments", audience: "men", price: 600, priceType: "from" }, // TODO: trailing dots
    { id: "hair-spa-long-men", name: "Hair spa (long hair)", categoryId: "hair-treatments", audience: "men", price: 600, priceType: "from", note: "Depends on length" },
    { id: "hair-spa-women", name: "Hair spa", categoryId: "hair-treatments", audience: "women", price: 800, priceType: "from" }, // TODO: trailing dots
    { id: "anti-dandruff-women", name: "Anti-dandruff treatment", categoryId: "hair-treatments", audience: "women", price: 800, priceType: "from" },

    // ---------- Styling treatments ----------
    { id: "straightening-men", name: "Straightening", categoryId: "styling-treatments", audience: "men", price: 2000, priceType: "fixed", note: "Up to 5 inches" }, // TODO: beyond 5 inches?
    { id: "smoothening-men", name: "Smoothening", categoryId: "styling-treatments", audience: "men", price: 2000, priceType: "fixed", note: "Up to 5 inches" },
    { id: "keratin-men", name: "Keratin", categoryId: "styling-treatments", audience: "men", price: 3000, priceType: "from" }, // TODO: trailing dots
    { id: "botox-men", name: "Botox", categoryId: "styling-treatments", audience: "men", price: 3000, priceType: "from" }, // TODO: trailing dots
    { id: "straightening-women", name: "Straightening", categoryId: "styling-treatments", audience: "women", price: 4000, priceType: "from" },
    { id: "smoothening-women", name: "Smoothening", categoryId: "styling-treatments", audience: "women", price: 4000, priceType: "from" },

    // ---------- Facial ----------
    { id: "clean-up-men", name: "Clean up", categoryId: "facial", audience: "men", price: 450, priceType: "fixed" },
    { id: "fruit-facial-men", name: "Fruit facial", categoryId: "facial", audience: "men", price: 700, priceType: "fixed" },
    { id: "white-n-glow-men", name: "White N Glow", categoryId: "facial", audience: "men", price: 1000, priceType: "fixed" },
    { id: "fair-secret-men", name: "Fair secret", categoryId: "facial", audience: "men", price: 1200, priceType: "fixed" },
    { id: "skin-lightening-men", name: "Skin lightening", categoryId: "facial", audience: "men", price: 1400, priceType: "fixed" },
    { id: "pearl-facial-men", name: "Pearl facial", categoryId: "facial", audience: "men", price: 1500, priceType: "fixed" },
    { id: "gold-facial-men", name: "Gold facial", categoryId: "facial", audience: "men", price: 1700, priceType: "fixed" },
    { id: "platinum-men", name: "Platinum", categoryId: "facial", audience: "men", price: 1800, priceType: "fixed" },
    { id: "tan-clear-facial-men", name: "Tan clear facial", categoryId: "facial", audience: "men", price: 2000, priceType: "fixed" },
    { id: "advanced-facial-men", name: "Advanced facial", categoryId: "facial", audience: "men", price: 2200, priceType: "fixed" },
    { id: "at-care-facial-men", name: "@care facial", categoryId: "facial", audience: "men", price: 2500, priceType: "fixed" }, // TODO: real name
    { id: "bridal-facial-men", name: "Bridal facial", categoryId: "facial", audience: "men", price: 3400, priceType: "fixed" },

    { id: "clean-up-women", name: "Clean up", categoryId: "facial", audience: "women", price: 1000, priceType: "fixed" }, // TODO: vs ₹450 for men?
    { id: "fruit-facial-women", name: "Fruit facial", categoryId: "facial", audience: "women", price: 1200, priceType: "fixed" },
    { id: "white-n-glow-women", name: "White N Glow", categoryId: "facial", audience: "women", price: 1500, priceType: "fixed" },
    { id: "fair-secret-women", name: "Fair secret", categoryId: "facial", audience: "women", price: 1700, priceType: "fixed" },
    { id: "skin-lightening-women", name: "Skin lightening", categoryId: "facial", audience: "women", price: 1900, priceType: "fixed" },
    { id: "pearl-facial-women", name: "Pearl facial", categoryId: "facial", audience: "women", price: 2200, priceType: "fixed" },
    { id: "gold-facial-women", name: "Gold facial", categoryId: "facial", audience: "women", price: 2500, priceType: "fixed" },
    { id: "platinum-women", name: "Platinum", categoryId: "facial", audience: "women", price: 3000, priceType: "fixed" }, // TODO: same as Advanced?
    { id: "advanced-facial-women", name: "Advanced facial", categoryId: "facial", audience: "women", price: 3000, priceType: "fixed" },
    { id: "at-care-facial-women", name: "@care facial", categoryId: "facial", audience: "women", price: 3500, priceType: "fixed" }, // TODO: real name
    { id: "bridal-facial-women", name: "Bridal facial", categoryId: "facial", audience: "women", price: 4200, priceType: "fixed" },

    // ---------- Bleach & de-tan (same on both sheets) ----------
    { id: "face-oxy", name: "Face oxy", categoryId: "bleach", audience: "all", price: 400, priceType: "fixed" },
    { id: "face-detan", name: "Face de-tan", categoryId: "bleach", audience: "all", price: 400, priceType: "fixed" },
    { id: "oxy-face-neck", name: "Oxy face & neck", categoryId: "bleach", audience: "all", price: 550, priceType: "fixed" },
    { id: "detan-face-neck", name: "De-tan face & neck", categoryId: "bleach", audience: "all", price: 550, priceType: "fixed" },
    { id: "detan-full-hand", name: "De-tan full hand", categoryId: "bleach", audience: "all", price: 1000, priceType: "from" },

    // ---------- Skin treatments (same on both sheets) ----------
    { id: "acne", name: "Acne treatment", categoryId: "skin-treatments", audience: "all", price: 3800, priceType: "fixed" },
    { id: "anti-aging", name: "Anti-aging treatment", categoryId: "skin-treatments", audience: "all", price: 3800, priceType: "fixed" },
    { id: "anti-pigmentation", name: "Anti-pigmentation treatment", categoryId: "skin-treatments", audience: "all", price: 3800, priceType: "fixed" },
];



/** The two toggle options. "all" rows (same price on both sheets) show under both. */
export type AudienceTab = Exclude<Audience, "all">;

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export function getServices(categoryId: string, audience: AudienceTab): Service[] {
    return services.filter(
        (s) =>
            s.categoryId === categoryId &&
            (s.audience === audience || s.audience === "all"),
    );
}

export function getPriceLabel(items: Service[]): string {
    if (items.length === 0) return ""; // Math.min() of nothing is Infinity

    const prices = items.map((s) => s.price);
    const lowest = Math.min(...prices);
    const isFrom =
        items.some((s) => s.priceType === "from") || new Set(prices).size > 1;

    return isFrom ? `From ${formatPrice(lowest)}` : formatPrice(lowest);
}