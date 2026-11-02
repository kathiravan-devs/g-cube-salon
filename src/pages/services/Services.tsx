
import { useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { ServiceHero } from "./ServiceHero";

import "../../styles/buttons.css";
import "./services.css";

type Gender = "men" | "women";

export function Services() {
  const [gender, setGender] = useState<Gender>("women");

  return (
    <>
      <Header />

      <main>
        <ServiceHero gender={gender} />

        {/* Temporary gender selector */}
        <section className="service-gender-selector">
          <button
            type="button"
            className={gender === "men" ? "active" : ""}
            aria-pressed={gender === "men"}
            onClick={() => setGender("men")}
          >
            Men
          </button>

          <button
            type="button"
            className={gender === "women" ? "active" : ""}
            aria-pressed={gender === "women"}
            onClick={() => setGender("women")}
          >
            Women
          </button>
        </section>

        {/* Service list will go here */}
      </main>

      <Footer />
    </>
  );
}
