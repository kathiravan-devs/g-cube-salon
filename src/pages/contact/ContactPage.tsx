

import { Header } from '../../components/Header';
import { ContactHero } from './ContactHero';
import {ContactInfo} from './ContactInfo';
import { QuickBooking } from './QuickBooking';
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
            <QuickBooking />
            <GoodToKnow />
            <FollowUs />
            <Footer />
        </>
    );
}