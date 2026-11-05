
import { useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { ServiceHero } from "./ServiceHero";
import { ServicesBrowser } from "./ServiceBrowser";

import { BookingSection } from "../../components/BookingSection";

import "../../styles/buttons.css";
import "./services.css";

export type Gender = "men" | "women";

export function Services() {
  const [gender, setGender] = useState<Gender>("men");

  return (
    <>
      <Header />

      <main>

        <ServiceHero gender={gender} />

        <ServicesBrowser
          audience={gender}
          onAudienceChange={setGender}
        />
        
      </main>

      <BookingSection />

      <Footer />
    </>
  );
}
