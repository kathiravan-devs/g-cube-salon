import { Hero } from "./Hero";
import { InfoStrip } from "./InfoStrip";
import { OurServices } from "./ServiceCard";
import { Stylist } from "./Stylist";
import { Reviews } from "./Reviews";
import './home.css';
export function Home() {

    return (
        <>
            <title>G Cube | Home</title>
            <Hero />
            <InfoStrip />
            <OurServices />
            <Stylist />
            <Reviews />
        </>
    );

}