export type ServiceCategory = "ddm" | "creas" | "cras" | "saude" | "justica";

export type ServiceLocation = {
  id: string;
  name: string;
  subtitle: string;
  category: ServiceCategory;
  icon: string; // iconify icon name
  address: string;
  phone?: string;
  hours?: string;
  distanceKm: number;
  isOpen: boolean;
  closesAt?: string; // e.g. "17h" — só usado quando isOpen for false por horário
  services?: string[];
  lat: number;
  lng: number;
};

export const categoryStyles: Record<
  ServiceCategory,
  { color: string; bg: string }
> = {
  ddm: { color: "#6C3EB8", bg: "#EDE5FA" },
  creas: { color: "#0D9488", bg: "#CCFBF1" },
  cras: { color: "#EA580C", bg: "#FFEDD5" },
  saude: { color: "#2563EB", bg: "#DBEAFE" },
  justica: { color: "#7C3AED", bg: "#EDE5FA" },
};

export const categoryLabels: Record<ServiceCategory, string> = {
  ddm: "DDM",
  creas: "CREAS",
  cras: "CRAS",
  saude: "Saúde (SUS)",
  justica: "Justiça",
};
