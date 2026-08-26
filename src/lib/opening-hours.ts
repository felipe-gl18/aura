/**
 * Structured schedule for a location, replacing the old fixed `isOpen: boolean`.
 * Add a `schedule?: Schedule` field to your ServiceLocation interface
 * (in @/types/service-location) to use this.
 */
export interface Schedule {
  /** True for 24h/every-day locations (hospitals, UPA, etc). Overrides everything else. */
  is24h?: boolean;
  /** True when no hours are informed at all ("não informado", ""). */
  closed?: boolean;
  /** Days of week the location operates. 0 = Sunday ... 6 = Saturday. Omit = every day. */
  days?: number[];
  /** "HH:mm" 24h format */
  openTime?: string;
  /** "HH:mm" 24h format */
  closeTime?: string;
  /** Optional lunch/interval break, e.g. CRAS: 12:00–13:00 */
  breakStart?: string;
  breakEnd?: string;
}

export interface OpenStatus {
  isOpen: boolean;
  /** Human-readable label ready to render, e.g. "Fecha às 19:00" */
  label: string;
}

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + (m || 0);
}

/**
 * Computes whether a location is currently open based on its schedule.
 * Pass `now` for testing; defaults to the current time.
 */
export function getOpenStatus(
  schedule: Schedule | undefined,
  now: Date = new Date(),
): OpenStatus {
  if (!schedule || schedule.closed) {
    return { isOpen: false, label: "Horário não informado" };
  }

  if (schedule.is24h) {
    return { isOpen: true, label: "Aberto 24h" };
  }

  const day = now.getDay();
  const days = schedule.days ?? [0, 1, 2, 3, 4, 5, 6];
  if (!days.includes(day)) {
    return { isOpen: false, label: "Fechado hoje" };
  }

  if (!schedule.openTime || !schedule.closeTime) {
    return { isOpen: false, label: "Horário não informado" };
  }

  const nowMin = now.getHours() * 60 + now.getMinutes();
  const openMin = toMinutes(schedule.openTime);
  const closeMin = toMinutes(schedule.closeTime);

  if (schedule.breakStart && schedule.breakEnd) {
    const breakStartMin = toMinutes(schedule.breakStart);
    const breakEndMin = toMinutes(schedule.breakEnd);
    if (nowMin >= breakStartMin && nowMin < breakEndMin) {
      return {
        isOpen: false,
        label: `Fechado para almoço · retorna às ${schedule.breakEnd}`,
      };
    }
  }

  if (nowMin >= openMin && nowMin < closeMin) {
    return { isOpen: true, label: `Fecha às ${schedule.closeTime}` };
  }

  if (nowMin < openMin) {
    return { isOpen: false, label: `Abre às ${schedule.openTime}` };
  }

  return { isOpen: false, label: `Abre às ${schedule.openTime}` };
}
