import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, UserRound, Shield } from "lucide-react";

const profile = [
  {
    icon: Heart,
    value: "44,3%",
    title: "Mulheres negras",
    description: "das denúncias registradas",
  },
  {
    icon: Users,
    value: "57,7%",
    title: "Mulheres heterossexuais",
    description: "perfil predominante das vítimas",
  },
  {
    icon: UserRound,
    value: "47,6%",
    title: "Parceiro ou ex-parceiro",
    description: "principal autor da violência",
  },
  {
    icon: Shield,
    value: "41,4%",
    title: "Suspeitos negros",
    description: "entre os identificados",
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
