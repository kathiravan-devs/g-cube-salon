import { Phone, MapPin, Clock } from "lucide-react";
import { salon } from "../../data/salon";

import "./info-strip.css";

export function InfoStrip() {
    return (
        <section className="info-strip" aria-label="Salon information">
            <div className="info-strip-inner">
                <a href={salon.phoneHref} className="info-item">
                    <Phone aria-hidden="true" />
                    <div className="info-text">
                        <span className="info-title">{salon.phone}</span>
                        <span className="info-subtitle">Tap to call</span>
                    </div>
                </a>

                <a className="info-item" href={salon.mapsUrl} target="_blank">
                    <MapPin aria-hidden="true" />
                    <div className="info-text">
                        <span className="info-title">{salon.address}</span>
                        <span className="info-subtitle">Tap to open</span>
                    </div>
                </a>

                <div className="info-item">
                    <Clock aria-hidden="true" />
                    <div className="info-text">
                        <span className="info-title">Opening Hours</span>
                        <span className="info-subtitle">{salon.hours}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}