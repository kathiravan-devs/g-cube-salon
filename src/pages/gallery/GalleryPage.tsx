
import { Header } from '../../components/Header';
import { GalleryHero } from './GalleryHero';
import { Footer } from '../../components/Footer';
import { TransformationSection } from './Transformation';
import Lookbook from './LookBook';
import './gallery-page.css';

export function Gallery() {
    return(
        <>
            <Header />
            <GalleryHero />
            <TransformationSection />
            <Lookbook />
            <Footer />
        </>
    );
}