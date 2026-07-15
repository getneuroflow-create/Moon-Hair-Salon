export type DayStatus = "available" | "partial" | "full" | "closed";
export type SlotStatus = "available" | "booked";

export type TimeSlot = {
  time: string;
  status: SlotStatus;
  label?: string;
};

const DEMO_BOOKINGS = [
  "Rachel K. · Color",
  "Maria L. · Blowdry",
  "Ayesha P. · Balayage",
  "Sofia R. · Keratin",
  "Emma T. · Styling",
];

/** Deterministic hash so availability looks stable for a given date */
function daySeed(date: Date) {
  const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h;
}

/** Salon closed Sundays */
export function isSalonClosed(date: Date) {
  return date.getDay() === 0;
}

/** Opening hour for a weekday (0 Sun … 6 Sat) */
export function openingHour(date: Date) {
  const d = date.getDay();
  if (d === 0) return null;
  if (d === 2 || d === 3 || d === 4) return 10; // Tue–Thu
  return 9; // Mon, Fri, Sat
}

export function isPastDay(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cmp = new Date(date);
  cmp.setHours(0, 0, 0, 0);
  return cmp < today;
}

export function getDayStatus(date: Date): DayStatus {
  if (isSalonClosed(date) || isPastDay(date)) return "closed";
  const seed = daySeed(date);
  const roll = seed % 10;
  if (roll === 0) return "full";
  if (roll <= 3) return "partial";
  return "available";
}

function formatHour(hour: number) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${String(h12).padStart(2, "0")}:00 ${suffix}`;
}

/** Hourly slots from open until 6:00 PM (last bookable hour 5:00 PM) */
export function getTimeSlots(date: Date): TimeSlot[] {
  if (isSalonClosed(date) || isPastDay(date)) return [];
  const open = openingHour(date);
  if (open == null) return [];

  const dayStatus = getDayStatus(date);
  const seed = daySeed(date);
  const slots: TimeSlot[] = [];
  let bookedIndex = 0;

  for (let hour = open; hour <= 17; hour++) {
    const slotSeed = (seed + hour * 17) % 7;
    let status: SlotStatus = "available";

    if (dayStatus === "full") {
      status = "booked";
    } else if (dayStatus === "partial") {
      status = slotSeed <= 2 ? "booked" : "available";
    } else {
      status = slotSeed === 0 ? "booked" : "available";
    }

    // Today: disable past hours
    const now = new Date();
    const isToday =
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate();
    if (isToday && hour <= now.getHours()) {
      status = "booked";
    }

    slots.push({
      time: formatHour(hour),
      status,
      label:
        status === "booked"
          ? DEMO_BOOKINGS[bookedIndex++ % DEMO_BOOKINGS.length]
          : undefined,
    });
  }

  return slots;
}

export function formatDisplayDate(date: Date, locale: "en" | "es") {
  return date.toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function monthLabel(date: Date, locale: "en" | "es") {
  return date.toLocaleDateString(locale === "es" ? "es-US" : "en-US", {
    month: "long",
    year: "numeric",
  });
}

export function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function addMonths(date: Date, count: number) {
  return new Date(date.getFullYear(), date.getMonth() + count, 1);
}

export function buildCalendarDays(month: Date) {
  const first = startOfMonth(month);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
