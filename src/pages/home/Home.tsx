
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "./Hero";
import { InfoStrip } from "./InfoStrip";
import { OurServices } from "./ServiceCard";
import { Stylist } from "./Stylist";
import { GallerySection } from "./GallerySection";
import { Reviews } from "./Reviews";
import { BookingSection } from "../../components/BookingSection";
import './home.css';


export function Home() {

    return (
        <>
            <Header />
            <Hero />
            <InfoStrip />
            <OurServices />
            <Stylist />
            <GallerySection />
            <Reviews />
            <BookingSection />
            <Footer />
        </>
    );

}