import data from "./data/data.json";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Mail, Phone, MapPin, Clock3 } from "lucide-react";

const items = [
  {
    title: "Email",
    value: data.email,
    icon: Mail,
  },
  {
    title: "Telefone",
    value: data.phone,
    icon: Phone,
  },
  {
    title: "Endereço",
    value: data.address,
    icon: MapPin,
  },
  {
    title: "Horário",
    value: data.hours,
    icon: Clock3,
  },
];

export default function ContactInfo() {
  return (
    <Card className="border-primary-light shadow-sm">
      <CardHeader>
        <CardTitle>Informações</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {items.map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-xl border border-primary-light p-4"
          >
            <div className="rounded-xl bg-primary-light p-3">
              <Icon className="text-primary" />
            </div>

            <div>
              <h3 className="font-semibold text-text">{title}</h3>

              <p className="text-sm text-text-secondary">{value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
