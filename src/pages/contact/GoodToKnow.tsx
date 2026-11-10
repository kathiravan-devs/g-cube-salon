
import { Baby, CalendarDays, CreditCard, Phone } from "lucide-react";
import "./good-to-know.css";

export function GoodToKnow() {
  return (
    <section
      className="good-to-know"
      aria-labelledby="good-to-know-title"
    >
      <div className="good-to-know__container">

        {/* Section Header */}
        <header className="good-to-know__header">
          <span className="section-eyebrow">
            Good to Know
          </span>

          <h2
            className="good-to-know__title"
            id="good-to-know-title"
          >
            Quick Details Before You Visit
          </h2>
        </header>

        {/* Information Cards */}
        <div className="good-to-know__grid">

          <article className="good-to-know__card">
            <div className="good-to-know__icon">
              <CalendarDays aria-hidden="true" />
            </div>

            <h3 className="good-to-know__card-title">
              Appointment Only
            </h3>

            <p className="good-to-know__description">
              Appointments are required. Walk-ins are not accepted.
            </p>
          </article>

                    <article className="good-to-know__card">
            <div className="good-to-know__icon">
              <Phone aria-hidden="true" />
            </div>

            <h3 className="good-to-know__card-title">
              Call to Book
            </h3>

            <p className="good-to-know__description">
              Call us directly to schedule your salon appointment.
            </p>
          </article>

                    <article className="good-to-know__card">
            <div className="good-to-know__icon">
              <Baby aria-hidden="true" />
            </div>

            <h3 className="good-to-know__card-title">
              Kids' Haircuts
            </h3>

            <p className="good-to-know__description">
              Kids' haircuts are available with gentle care.
            </p>
          </article>

          <article className="good-to-know__card">
            <div className="good-to-know__icon">
              <CreditCard aria-hidden="true" />
            </div>

            <h3 className="good-to-know__card-title">
              Payment Options
            </h3>

            <p className="good-to-know__description">
              We accept cash and UPI payments.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}
