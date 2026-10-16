import { Hero } from "./Hero";
import { InfoStrip } from "./InfoStrip";
import { OurServices } from "./ServiceCard";
import { Reviews } from "./Reviews";

export function Home() {

    return (
        <>
            <title>Home</title>
            <Hero />
            <InfoStrip />
            <OurServices />
            <Reviews />
        </>
    );

}