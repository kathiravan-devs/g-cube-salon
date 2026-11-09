

import { Header } from '../../components/Header';
import { ContactHero } from './ContactHero';
import ContactInfoSection from './ContactDetails';
import { salon, whatsappLink } from '../../data/salon';
import { services } from '../../data/services';
import  storefrontImage  from '../../assets/g-cube-store.png'
import './contact-page.css';

export function ContactPage() {


    return (
        <>
            <Header />
            <ContactHero />
            <ContactInfoSection
                phone={salon.phone}
                phoneHref={salon.phoneHref}
                whatsappPhone={salon.phone}
                whatsappLink={whatsappLink}
                address={salon.address}
                landmark={salon.landmark}
                hours={
                    [
                        {
                        days: "Mon - Sun",
                        time: salon.hours
                        }
                    ]
                }
                mapEmbedUrl={salon.mapEmbedUrl}
                mapsUrl={salon.mapsUrl}
                storefrontImage={storefrontImage}
                services={services}
            />
        </>
    );
}