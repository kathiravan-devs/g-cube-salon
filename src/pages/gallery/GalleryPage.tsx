
import { Header } from '../../components/Header';
import { GalleryHero } from './GalleryHero';
import { Footer } from '../../components/Footer';
import './gallery-page.css';
import { TransformationSection } from './Transformation';

export function Gallery() {
    return(
        <>
            <Header />
            <GalleryHero />
            <TransformationSection />
            <Footer />
        </>
    );
}