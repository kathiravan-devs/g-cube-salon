import { Hero } from "./Hero";
import { InfoStrip } from "./InfoStrip";
import { OurServices } from "./ServiceCard";

export function Home() {

    return (
        <>
            <title>Home</title>
            <Hero />
            <InfoStrip />
            <OurServices />
        </>
    );

}