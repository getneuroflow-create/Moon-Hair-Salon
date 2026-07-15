import { clsx, type ClassValue } from "clsx";

/** Lightweight className merger without extra deps if clsx missing */
export function cn(...inputs: ClassValue[]) {
  try {
    return clsx(inputs);
  } catch {
    return inputs.filter(Boolean).join(" ");
  }
}

export function telDisplay(phone: string) {
  return phone;
}
