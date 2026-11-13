
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { AboutHero } from './AboutHero';
import './about.css'

export function AboutPage() {
    return(
        <>
            <Header />
            <AboutHero />
            <Footer />
        </>
    );
}