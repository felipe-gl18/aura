import type { Schedule } from "@/lib/opening-hours";

export type ServiceCategory =
  | "ddm"
  | "creas"
  | "cras"
  | "saude"
  | "justica"
  | "casa_da_mulher_cearense";

export type ServiceLocation = {
  id: string;
  name: string;
  subtitle: string;
  category: ServiceCategory;
  icon: string; // iconify icon name
  address: string;
  phone?: string;
  hours?: string; // texto legível, ex: "07h às 19h" — usado só para exibição
  schedule?: Schedule; // dados estruturados usados para calcular se está aberto agora
  distanceKm: number;
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
  casa_da_mulher_cearense: { color: "#DB2777", bg: "#FCE7F3" },
};

export const categoryLabels: Record<ServiceCategory, string> = {
  ddm: "DDM",
  creas: "CREAS",
  cras: "CRAS",
  saude: "Saúde",
  justica: "Justiça",
  casa_da_mulher_cearense: "Casa da Mulher Cearense",
};
