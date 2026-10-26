import { Hero } from "./Hero";
import { InfoStrip } from "./InfoStrip";
import { OurServices } from "./ServiceCard";
import { Stylist } from "./Stylist";
import { GallerySection } from "./GallerySection";
import { Reviews } from "./Reviews";
import { BookingSection } from "./BookingSection";
import './home.css';
export function Home() {

    return (
        <>
            <Hero />
            <InfoStrip />
            <OurServices />
            <Stylist />
            <GallerySection />
            <Reviews />
            <BookingSection />
        </>
    );

}