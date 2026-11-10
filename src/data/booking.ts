import type { AudienceTab } from '../data/services';

const INDIA = "Asia/Kolkata";

export interface DayOption {
    value: string; // "2026-11-10"
    label: string; // "Today, 10 Nov", "Tomorrow, 11 Nov", then "Thu, 12 Nov"
}

export const TIME_SLOTS = [
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
] as const;

const AUDIENCE_LABEL: Record<AudienceTab, string> = { men: "Men", women: "Women" };

/**
 * The next bookable days, starting with today in India (whatever time zone the
 * visitor's device is set to) and skipping closed weekdays (0 = Sunday ... 6 = Saturday).
 */
export function getUpcomingDays(
    now: Date,
    count = 7,
    closedWeekdays: readonly number[] = [],
): DayOption[] {
    const todayParts = new Intl.DateTimeFormat("en-US", {
        timeZone: INDIA,
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }).formatToParts(now);
    const part = (type: string) => Number(todayParts.find((p) => p.type === type)?.value);
    const [year, month, day] = [part("year"), part("month"), part("day")];

    // These dates are built at midnight UTC and read back in UTC, so the device's
    // own time zone can never shift them by a day.
    const dayMonth = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", timeZone: "UTC" });
    const weekdayDayMonth = new Intl.DateTimeFormat("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        timeZone: "UTC",
    });

    const days: DayOption[] = [];
    for (let offset = 0; offset < 14 && days.length < count; offset++) {
        const date = new Date(Date.UTC(year, month - 1, day + offset));
        if (closedWeekdays.includes(date.getUTCDay())) continue;

        days.push({
            value: date.toISOString().slice(0, 10),
            label:
                offset === 0
                    ? `Today, ${dayMonth.format(date)}`
                    : offset === 1
                      ? `Tomorrow, ${dayMonth.format(date)}`
                      : weekdayDayMonth.format(date),
        });
    }
    return days;
}

export interface BookingRequest {
    audience: AudienceTab;
    service: string;
    day: string;
    time: string;
}

export function buildBookingMessage({ audience, service, day, time }: BookingRequest): string {
    return [
        "Hi, I'd like to book an appointment.",
        `For: ${AUDIENCE_LABEL[audience]}`,
        `Service: ${service}`,
        `Day: ${day}`,
        `Time: ${time}`,
    ].join("\n");
}