import { Header } from '../../components/Header';
import { ContactHero } from './ContactHero';
import { ContactInfo } from './ContactInfo';
import { GoodToKnow } from './GoodToKnow';
import { FollowUs } from '../../components/FollowUs';
import { Footer } from "../../components/Footer";
import './contact-page.css';

export function ContactPage() {
    return (
        <>
            <Header />
            <ContactHero />
            <ContactInfo />
            <GoodToKnow />
            <FollowUs />
            <Footer />
        </>
    );
}
