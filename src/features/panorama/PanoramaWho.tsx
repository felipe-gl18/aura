// PanoramaWho.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, UserRound, Shield } from "lucide-react";

const profile = [
  {
    icon: Heart,
    value: "57,7%",
    title: "Mulheres cisgênero",
    description: "perfil predominante das vítimas",
  },
  {
    icon: Users,
    value: "53,6%",
    title: "Vítimas pardas",
    description: "maior parte das notificações por etnia",
  },
  {
    icon: UserRound,
    value: "54,5%",
    title: "Vítimas adultas",
    description: "faixa etária mais atingida",
  },
  {
    icon: Shield,
    value: "58,3%",
    title: "Média complexidade",
    description: "nível de proteção social mais acionado",
  },
];

export default function PanoramaWho() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {profile.map(({ icon: Icon, value, title, description }) => (
        <Card
          key={title}
          className="border-primary-light shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
              <Icon className="h-6 w-6 text-primary" />
            </div>

            <h3 className="text-4xl font-bold text-primary">{value}</h3>

            <div>
              <p className="font-semibold text-text">{title}</p>
              <p className="mt-1 text-sm text-text-secondary">{description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
