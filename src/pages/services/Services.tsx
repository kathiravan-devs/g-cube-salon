import { useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ServiceHero } from "./ServiceHero";
import { ServicesBrowser } from "./ServiceBrowser";
import { BookingSection } from "../../components/BookingSection";
import "./services.css";

export type Gender = "men" | "women";

export function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const gender: Gender = searchParams.get("audience") === "women" ? "women" : "men";

  const handleAudienceChange = (nextAudience: Gender) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      next.set("audience", nextAudience);
      next.delete("category");
      return next;
    });
  };

  return (
    <>
      <Header />
      <main>
        <ServiceHero gender={gender} />
        <ServicesBrowser audience={gender} onAudienceChange={handleAudienceChange} />
      </main>
      <BookingSection />
      <Footer />
    </>
  );
}
