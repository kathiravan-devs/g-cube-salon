import { useId, useState, type FormEvent } from "react";
import { CalendarDays } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { categories, getServices, type AudienceTab } from "../../data/services";
import { salon, whatsappLink } from "../../data/salon";
import { buildBookingMessage, getUpcomingDays, TIME_SLOTS } from "../../data/booking";
import "./quick-booking.css";

const NOT_SURE = "not-sure";

const AUDIENCES: { id: AudienceTab; label: string }[] = [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
];

export function QuickBooking() {
    const uid = useId();

    const [audience, setAudience] = useState<AudienceTab>("men");
    const [serviceId, setServiceId] = useState("");
    const [dayValue, setDayValue] = useState("");
    const [timeValue, setTimeValue] = useState("");

    // Worked out once per visit, in India time
    const [days] = useState(() => getUpcomingDays(new Date(), 7, salon.closedWeekdays));

    // Only the services this audience can book, grouped by category
    const groups = categories
        .map((category) => ({ category, items: getServices(category.id, audience) }))
        .filter(({ items }) => items.length > 0);

    function chooseAudience(next: AudienceTab) {
        setAudience(next);
        setServiceId(""); // the old choice may not exist for the other audience
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // the browser has already checked the required fields

        const service =
            serviceId === NOT_SURE
                ? "Not sure yet, need advice"
                : groups.flatMap((group) => group.items).find((item) => item.id === serviceId)?.name;
        const day = days.find((option) => option.value === dayValue)?.label;
        const time = TIME_SLOTS.find((slot) => slot.value === timeValue)?.label;
        if (!service || !day || !time) return;

        const message = buildBookingMessage({ audience, service, day, time });
        window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    }

    return (
        <section className="booking" aria-labelledby={`${uid}-title`}>
            <div className="booking-panel">
                <div className="booking-intro">
                    <span className="booking-icon" aria-hidden="true">
                        <CalendarDays />
                    </span>
                    <div>
                        <h2 id={`${uid}-title`} className="booking-title">
                            Quick WhatsApp booking
                        </h2>
                        <p className="booking-lead">Choose your details and send us a message.</p>
                    </div>
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="booking-fields">
                        <div className="booking-field">
                            <span className="booking-label" id={`${uid}-for`}>
                                For
                            </span>
                            <div className="booking-segment" role="radiogroup" aria-labelledby={`${uid}-for`}>
                                {AUDIENCES.map(({ id, label }) => (
                                    <label key={id}>
                                        <input
                                            type="radio"
                                            name={`${uid}-audience`}
                                            value={id}
                                            checked={audience === id}
                                            onChange={() => chooseAudience(id)}
                                        />
                                        <span>{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="booking-field">
                            <label className="booking-label" htmlFor={`${uid}-service`}>
                                Service
                            </label>
                            <select
                                id={`${uid}-service`}
                                className="booking-select"
                                required
                                value={serviceId}
                                onChange={(event) => setServiceId(event.target.value)}
                            >
                                <option value="">Select service</option>
                                <option value={NOT_SURE}>Not sure, need advice</option>
                                {groups.map(({ category, items }) => (
                                    <optgroup key={category.id} label={category.title}>
                                        {items.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>

                        <div className="booking-field">
                            <label className="booking-label" htmlFor={`${uid}-day`}>
                                Day
                            </label>
                            <select
                                id={`${uid}-day`}
                                className="booking-select"
                                required
                                value={dayValue}
                                onChange={(event) => setDayValue(event.target.value)}
                            >
                                <option value="">Select day</option>
                                {days.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="booking-field">
                            <label className="booking-label" htmlFor={`${uid}-time`}>
                                Time
                            </label>
                            <select
                                id={`${uid}-time`}
                                className="booking-select"
                                required
                                value={timeValue}
                                onChange={(event) => setTimeValue(event.target.value)}
                            >
                                <option value="">Select time</option>
                                {TIME_SLOTS.map((slot) => (
                                    <option key={slot.value} value={slot.value}>
                                        {slot.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="booking-footer">
                        <p className="booking-note">
                            Opens WhatsApp with your message ready. Nothing is stored on this site.
                        </p>
                        <button type="submit" className="btn btn-whatsapp booking-send">
                            <FaWhatsapp aria-hidden="true" />
                            Send on WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}